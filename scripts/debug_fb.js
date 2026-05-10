import dotenv from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

dotenv.config();

// using process.env here as it runs in node
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
  console.log("DB count:", mapped.length);
  for (const m of mapped) {
     if (m.grammar) {
        console.log(`\nLesson ${m.id} grammar:`);
        console.log(JSON.stringify(m.grammar, null, 2));
     }
  }
}
check().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
