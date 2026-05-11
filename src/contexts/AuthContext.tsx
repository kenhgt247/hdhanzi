import React, { createContext, useContext, useEffect, useState } from 'react';
import { User as FirebaseUser, onAuthStateChanged, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut as firebaseSignOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType } from '../lib/firebase';
import { studyPlanService } from '../services/studyPlanService';

export type Role = 'student' | 'teacher' | 'admin';

export interface AppUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  classId?: string;
  targetLevel?: string;
  currentLevel?: string;
}

interface AuthContextType {
  user: AppUser | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, pass: string) => Promise<void>;
  signUpWithEmail: (email: string, pass: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const GUEST_USER: AppUser = {
  id: 'guest',
  name: 'Khách',
  email: '',
  role: 'student',
  currentLevel: 'Chưa xác định',
  targetLevel: 'TOCFL Band A1'
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      console.warn("Firebase Auth is not initialized. Running in guest mode without a backend.");
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (user) {
        try {
          const userRef = doc(db, 'users', user.uid);
          const userSnap = await getDoc(userRef);
          
          let userData: AppUser;
          if (userSnap.exists()) {
            userData = { ...(userSnap.data() as AppUser), id: userSnap.id };
            if (user.email === 'buivanbac@gmail.com' && userData.role !== 'admin') {
              userData.role = 'admin';
              await setDoc(userRef, { role: 'admin' }, { merge: true });
            }
          } else {
            const role = user.email === 'buivanbac@gmail.com' ? 'admin' : 'student';
            const newUser: Omit<AppUser, 'id'> & { createdAt: any; lastLoginAt: any } = {
              name: user.displayName || 'Khách',
              email: user.email || '',
              role: role,
              createdAt: serverTimestamp(),
              lastLoginAt: serverTimestamp()
            };
            await setDoc(userRef, newUser);
            userData = { ...newUser, id: user.uid };
          }
          
          setUser(userData);
          // Sync study plan
          studyPlanService.syncLocalPlanWithFirebase(user.uid, userData.targetLevel || 'Beginner');
        } catch (error) {
          handleFirestoreError(error, OperationType.CREATE, `users/${user.uid}`);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    getRedirectResult(auth).catch((error) => {
       console.error("Redirect Auth Error:", error);
       setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    if (!auth) throw new Error("Firebase Auth is not initialized.");
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  };

  const signInWithEmail = async (email: string, pass: string) => {
    if (!auth) throw new Error("Firebase Auth is not initialized.");
    await signInWithEmailAndPassword(auth, email, pass);
  };

  const signUpWithEmail = async (email: string, pass: string, name: string) => {
    if (!auth) throw new Error("Firebase Auth is not initialized.");
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    // Setting display name in firebase is optional, we will save to firestore in the auth change listener.
    // However, onAuthStateChanged will trigger before we can set the name nicely if we rely on it.
    // So let's proactively save to firestore here to ensure the name is correct.
    try {
       const userRef = doc(db, 'users', cred.user.uid);
       const newUser: Omit<AppUser, 'id'> & { createdAt: any; lastLoginAt: any } = {
          name: name,
          email: email,
          role: email === 'buivanbac@gmail.com' ? 'admin' : 'student',
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp()
       };
       await setDoc(userRef, newUser);
    } catch (e) {
       console.error("Could not set user document", e);
    }
  };

  const signOut = async () => {
    if (!auth) return;
    await firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user: user || GUEST_USER, firebaseUser, loading, signInWithGoogle, signInWithEmail, signUpWithEmail, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

