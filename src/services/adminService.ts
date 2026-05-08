import { 
  collection, 
  query, 
  where, 
  getDocs, 
  orderBy, 
  limit, 
  Timestamp,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  writeBatch
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { MockTest, MockTestResult, WeakWord } from '../types/study';
import { Lesson } from '../types/lesson';
import { Vocab } from '../data/vocabulary';

export interface StudentStats {
  id: string;
  name: string;
  email: string;
  role: string;
  currentLevel?: string;
  lastLoginAt?: any;
  totalPoints?: number;
}

export const adminService = {
  async getStudentById(userId: string) {
    try {
      const docRef = doc(db, 'users', userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as StudentStats;
      }
      return null;
    } catch (error) {
      console.error('Error getting student by id:', error);
      return null;
    }
  },

  async getAllStudents() {
    try {
      const q = query(collection(db, 'users'), where('role', '==', 'student'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as StudentStats));
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, 'users');
      return [];
    }
  },

  async getInactiveStudents(days = 3) {
    try {
      const threshold = new Date();
      threshold.setDate(threshold.getDate() - days);
      
      const q = query(
        collection(db, 'users'), 
        where('role', '==', 'student'),
        where('lastLoginAt', '<', Timestamp.fromDate(threshold))
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as StudentStats));
    } catch (error) {
      console.error('Error getting inactive students:', error);
      return [];
    }
  },

  async getStudentMockResults(userId: string) {
    try {
      const q = query(
        collection(db, 'users', userId, 'mockTestResults'),
        orderBy('completedAt', 'desc')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => doc.data() as MockTestResult);
    } catch (error) {
      console.error('Error getting student mock results:', error);
      return [];
    }
  },

  async getStudentWeakWords(userId: string) {
    try {
      const q = query(collection(db, 'users', userId, 'weakWords'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => doc.data() as WeakWord);
    } catch (error) {
      console.error('Error getting student weak words:', error);
      return [];
    }
  },

  async getOverallStats() {
    try {
      const studentsQuery = query(collection(db, 'users'), where('role', '==', 'student'));
      const studentsSnap = await getDocs(studentsQuery);
      
      const lessonsQuery = collection(db, 'lessons');
      const lessonsSnap = await getDocs(lessonsQuery);
      
      const vocabQuery = collection(db, 'vocabulary');
      const vocabSnap = await getDocs(vocabQuery);

      return {
        totalStudents: studentsSnap.size,
        totalLessons: lessonsSnap.size,
        totalVocab: vocabSnap.size,
      };
    } catch (error) {
      console.error('Error getting overall stats:', error);
      return { totalStudents: 0, totalLessons: 0, totalVocab: 0 };
    }
  },

  async importVocabularyBatch(vocabularies: Partial<Vocab>[]) {
    try {
      const batch = writeBatch(db);
      vocabularies.forEach(vocab => {
        const docRef = doc(collection(db, 'vocabulary'));
        batch.set(docRef, {
          ...vocab,
          id: docRef.id,
          createdAt: Timestamp.now(),
          status: vocab.status || 'new'
        });
      });
      await batch.commit();
      return { success: true, count: vocabularies.length };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'vocabulary');
      return { success: false, error };
    }
  },

  async importLessonsBatch(lessons: Partial<Lesson>[]) {
    try {
      const batch = writeBatch(db);
      lessons.forEach(lesson => {
        const docRef = doc(collection(db, 'lessons'));
        batch.set(docRef, {
          ...lesson,
          id: docRef.id,
          createdAt: Timestamp.now()
        });
      });
      await batch.commit();
      return { success: true, count: lessons.length };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'lessons');
      return { success: false, error };
    }
  },

  async importMockTestsBatch(tests: Partial<MockTest>[]) {
    try {
      const batch = writeBatch(db);
      tests.forEach(test => {
        const docRef = doc(collection(db, 'mockTests'));
        batch.set(docRef, {
          ...test,
          id: docRef.id,
          createdAt: Timestamp.now()
        });
      });
      await batch.commit();
      return { success: true, count: tests.length };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'mockTests');
      return { success: false, error };
    }
  },

  async importDialoguesBatch(dialogues: any[]) {
    try {
      const batch = writeBatch(db);
      dialogues.forEach(dialogue => {
        const docRef = doc(collection(db, 'dialogues'));
        batch.set(docRef, {
          ...dialogue,
          id: docRef.id,
          createdAt: Timestamp.now()
        });
      });
      await batch.commit();
      return { success: true, count: dialogues.length };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'dialogues');
      return { success: false, error };
    }
  }
};
