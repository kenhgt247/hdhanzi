import { doc, getDoc, setDoc, collection, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { MockTestResult, TOCFLLevel, MockTest } from '../types/study';
import { MOCK_TESTS as fallbackMockTests } from '../data/mockTests';
import { weakWordsService } from './weakWordsService';

export const mockTestService = {
  async getMockTests() {
    try {
      const snapshot = await getDocs(collection(db, 'mockTests'));
      const firestoreTests = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as MockTest));
      
      const seedTestsMap = new Map(fallbackMockTests.map((t: MockTest) => [t.id, t]));
      firestoreTests.forEach(t => {
        // Seed tests or explicitly published tests
        if (t.status !== 'draft') {
          seedTestsMap.set(t.id, t);
        }
      });
      
      return Array.from(seedTestsMap.values());
    } catch (error) {
      try {
        handleFirestoreError(error, OperationType.LIST, 'mockTests');
      } catch (e) {
         console.warn("Firestore error fallback to seed data:", e);
      }
      return fallbackMockTests;
    }
  },

  async getMockTestById(testId: string) {
    try {
      const docRef = doc(db, 'mockTests', testId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as MockTest;
      }
    } catch (error) {
      console.warn("Firestore error getting test, trying seed data", error);
    }
    return fallbackMockTests.find(t => t.id === testId) || null;
  },

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
