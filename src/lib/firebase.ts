/// <reference types="vite/client" />
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "gen-lang-client-0136452922",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:183619724391:web:511bfeaf09b8e7de49e0c2",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDXWb0kB9jeNqFqZAk7HFHCeBVZLZUDEos",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "gen-lang-client-0136452922.firebaseapp.com",
  firestoreDatabaseId: import.meta.env.VITE_FIREBASE_DATABASE_ID || "ai-studio-64f08644-139c-4c05-94d3-6bec1fa37960",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "gen-lang-client-0136452922.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "183619724391",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  
  const errInfo: FirestoreErrorInfo = {
    error: errorMessage,
    authInfo: { userId: auth?.currentUser?.uid },
    operationType,
    path
  };
  
  if (errorMessage.toLowerCase().includes('permission')) {
    console.error('Firestore Permission Error: ', JSON.stringify(errInfo));
    throw new Error(JSON.stringify(errInfo));
  } else {
    console.warn(`Firestore Warning (${operationType} on ${path}): ${errorMessage}`);
    // Don't throw for offline/missing db errors so fallbacks can work!
  }
}
