/// <reference types="vite/client" />
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

declare const __FIREBASE_CONFIG__: any;

let firebaseConfig: any = {};

if (typeof __FIREBASE_CONFIG__ !== 'undefined' && Object.keys(__FIREBASE_CONFIG__).length > 0) {
  firebaseConfig = __FIREBASE_CONFIG__;
} else {
  firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    firestoreDatabaseId: import.meta.env.VITE_FIREBASE_FIRESTORE_DATABASE_ID || '(default)'
  };
}

const app = firebaseConfig.apiKey ? initializeApp(firebaseConfig) : null;
export const auth = app ? getAuth(app) : null as any;
export const db = app ? getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)') : null as any;

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
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: { userId: auth.currentUser?.uid },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}
