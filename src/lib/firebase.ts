/// <reference types="vite/client" />
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBxMMsTJc_xoo2oqmxd3wpg3wo7BQbzVqU",
  authDomain: "hdhanzi.firebaseapp.com",
  projectId: "hdhanzi",
  storageBucket: "hdhanzi.firebasestorage.app",
  messagingSenderId: "839454180167",
  appId: "1:839454180167:web:324a9b624249b8eafbc262",
  measurementId: "G-EQG9EDBLW7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = initializeFirestore(app, { experimentalForceLongPolling: true });
export const storage = getStorage(app);

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
    const safeInfo = {
      error: String(errInfo.error),
      operationType: String(errInfo.operationType),
      path: String(errInfo.path || 'unknown'),
      userId: String(errInfo.authInfo?.userId || 'none')
    };
    console.error('Firestore Permission Error: ', JSON.stringify(safeInfo));
    throw new Error(JSON.stringify(safeInfo));
  } else {
    console.warn(`Firestore Warning (${operationType} on ${path}): ${errorMessage}`);
    // Don't throw for offline/missing db errors so fallbacks can work!
  }
}
