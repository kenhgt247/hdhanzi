import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db, OperationType, handleFirestoreError } from '../lib/firebase';
import { Vocab } from '../data/vocabulary';
import { tocflVocabularies as seedVocab } from '../data/vocabulary';

export const vocabularyService = {
  async getVocabularies(): Promise<Vocab[]> {
    try {
      const snapshot = await getDocs(collection(db, 'vocabulary'));
      const firestoreVocab = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Vocab));
      
      const seedMap = new Map(seedVocab.map((v: Vocab) => [v.id, v]));
      firestoreVocab.forEach(v => {
        seedMap.set(v.id, v);
      });
      return Array.from(seedMap.values());
    } catch (error) {
      console.warn("Firestore error getting vocab, falling back to seed", error);
      return seedVocab;
    }
  }
};
