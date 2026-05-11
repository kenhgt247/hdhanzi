/// <reference types="vite/client" />
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDXWb0kB9jeNqFqZAk7HFHCeBVZLZUDEos",
  authDomain: "gen-lang-client-0136452922.firebaseapp.com",
  projectId: "gen-lang-client-0136452922",
  storageBucket: "gen-lang-client-0136452922.firebasestorage.app",
  messagingSenderId: "183619724391",
  appId: "1:183619724391:web:511bfeaf09b8e7de49e0c2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

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
