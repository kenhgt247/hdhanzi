import { doc, getDoc, setDoc, collection, query, where, getDocs, updateDoc, serverTimestamp, increment } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { WeakWord } from '../types/study';

export type MistakeType = 'meaning' | 'listening' | 'pinyin' | 'hanzi' | 'speaking';

export const weakWordsService = {
  async recordMistake(
    userId: string, 
    word: { id: string; chinese: string; pinyin: string; meaning: string; level?: string }, 
    type: MistakeType
  ) {
    if (userId === 'guest') return; // Skip Firebase for guests
    const path = `users/${userId}/weakWords/${word.id}`;
    try {
      const wordRef = doc(db, 'users', userId, 'weakWords', word.id);
      const wordSnap = await getDoc(wordRef);

      if (wordSnap.exists()) {
        await updateDoc(wordRef, {
          mistakeCount: increment(1),
          [`mistakeTypes.${type}`]: increment(1),
          correctReviewCount: 0,
          lastMistakeAt: serverTimestamp(),
          strengthLevel: 'weak',
          updatedAt: serverTimestamp()
        });
      } else {
        const newWeakWord: any = {
          wordId: word.id,
          chinese: word.chinese,
          pinyin: word.pinyin,
          meaning: word.meaning,
          level: word.level || 'Unknown',
          mistakeCount: 1,
          correctReviewCount: 0,
          lastMistakeAt: serverTimestamp(),
          lastReviewedAt: null,
          mistakeTypes: {
            meaning: 0,
            listening: 0,
            pinyin: 0,
            hanzi: 0,
            speaking: 0
          },
          strengthLevel: 'weak',
          nextReviewAt: null,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        };
        newWeakWord.mistakeTypes[type] = 1;
        await setDoc(wordRef, newWeakWord);
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  },

  async recordCorrectReview(userId: string, wordId: string) {
    if (userId === 'guest') return; // Skip Firebase for guests
    const path = `users/${userId}/weakWords/${wordId}`;
    try {
      const wordRef = doc(db, 'users', userId, 'weakWords', wordId);
      const wordSnap = await getDoc(wordRef);

      if (wordSnap.exists()) {
        const data = wordSnap.data();
        const newCorrectCount = (data.correctReviewCount || 0) + 1;
        
        let strengthLevel = 'weak';
        if (newCorrectCount >= 5) strengthLevel = 'improving';
        else if (newCorrectCount >= 3) strengthLevel = 'medium';

        await updateDoc(wordRef, {
          correctReviewCount: increment(1),
          lastReviewedAt: serverTimestamp(),
          strengthLevel,
          updatedAt: serverTimestamp()
        });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  },

  async getWeakWords(userId: string) {
    if (userId === 'guest') return []; // Guests don't have weak words in Firebase
    const path = `users/${userId}/weakWords`;
    try {
      const q = query(
        collection(db, 'users', userId, 'weakWords')
        // removed the where clause to fetch all words, including 'improving', so stats can be accurate
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as WeakWord));
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, path);
      return [];
    }
  }
};
