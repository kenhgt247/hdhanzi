import { doc, getDoc, setDoc, collection, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { MockTestResult, TOCFLLevel } from '../types/study';
import { weakWordsService } from './weakWordsService';

export const mockTestService = {
  async saveResult(userId: string, result: Omit<MockTestResult, 'id' | 'completedAt'>) {
    if (userId === 'guest') return 'guest-result';
    
    const resultId = `result_${Date.now()}`;
    const path = `users/${userId}/mockTestResults/${resultId}`;
    
    try {
      const resultDoc: MockTestResult = {
        ...result,
        id: resultId,
        completedAt: serverTimestamp()
      };
      
      await setDoc(doc(db, 'users', userId, 'mockTestResults', resultId), resultDoc);
      return resultId;
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
      return null;
    }
  },

  async getResult(userId: string, resultId: string) {
    if (userId === 'guest') return null;
    try {
      const docSnap = await getDoc(doc(db, 'users', userId, 'mockTestResults', resultId));
      if (docSnap.exists()) {
        return docSnap.data() as MockTestResult;
      }
      return null;
    } catch (error) {
      console.error('Error getting result:', error);
      return null;
    }
  },

  async getUserResults(userId: string) {
    if (userId === 'guest') return [];
    try {
      const q = query(collection(db, 'users', userId, 'mockTestResults'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => doc.data() as MockTestResult);
    } catch (error) {
      console.error('Error getting user results:', error);
      return [];
    }
  }
};
