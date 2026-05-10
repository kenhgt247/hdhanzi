import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    firestoreDatabaseId: process.env.VITE_FIREBASE_FIRESTORE_DATABASE_ID || '(default)'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

async function check() {
  const snapshot = await getDocs(collection(db, 'lessons'));
  let mapped = snapshot.docs.map(d => ({id: d.id, grammar: d.data().grammar}));
  console.log("Total lessons in DB:", mapped.length);
  const withGrammar = mapped.filter(x => x.grammar && x.grammar.length > 0);
  console.log("Lessons with grammar length > 0:", withGrammar.length);
  if (withGrammar.length > 0) {
     console.log("Sample grammar from DB:", JSON.stringify(withGrammar[0].grammar, null, 2));
  }
}
check().catch(console.error);
