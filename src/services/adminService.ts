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
  writeBatch,
  setDoc
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { MockTest, MockTestResult, WeakWord } from '../types/study';
import { Lesson } from '../types/lesson';
import { Vocab } from '../data/vocabulary';

const withTimeout = <T>(promise: Promise<T>, ms = 60000): Promise<T> => {
  return promise;
};

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
      const thresholdDate = new Date();
      thresholdDate.setDate(thresholdDate.getDate() - days);
      const thresholdTimestamp = Timestamp.fromDate(thresholdDate).toMillis();
      
      const q = query(
        collection(db, 'users'), 
        where('role', '==', 'student')
      );
      const snapshot = await getDocs(q);
      const allStudents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as StudentStats));
      
      return allStudents.filter(student => {
        if (!student.lastLoginAt) return true; // if never logged in, consider inactive
        // lastLoginAt might be a Firestore Timestamp or Date string
        const loginTime = (student.lastLoginAt as any).toMillis 
          ? (student.lastLoginAt as any).toMillis() 
          : new Date(student.lastLoginAt as any).getTime();
        return loginTime < thresholdTimestamp;
      });
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

  async getVocabularies() {
    try {
      const snapshot = await getDocs(collection(db, 'vocabulary'));
      const firestoreVocab = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Vocab));
      
      const { tocflVocabularies } = await import('../data/vocabulary');
      const seedVocabMap = new Map(tocflVocabularies.map(v => [v.id, v]));
      firestoreVocab.forEach(v => seedVocabMap.set(v.id, v));
      
      return Array.from(seedVocabMap.values());
    } catch (error) {
      try {
        handleFirestoreError(error, OperationType.LIST, 'vocabulary');
      } catch (e) {
         console.warn("Firestore error fallback to seed data:", e);
      }
      const { tocflVocabularies } = await import('../data/vocabulary');
      return tocflVocabularies;
    }
  },

  async addVocabulary(vocab: Partial<Vocab>) {
    try {
      const docRef = doc(collection(db, 'vocabulary'));
      await setDoc(docRef, { ...vocab, id: docRef.id, createdAt: Timestamp.now(), status: vocab.status || 'new' });
      return docRef.id;
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'vocabulary');
      return null;
    }
  },

  async updateVocabulary(vocabId: string, updates: Partial<Vocab>) {
    try {
      const docRef = doc(db, 'vocabulary', vocabId);
      await updateDoc(docRef, { ...updates, updatedAt: Timestamp.now() });
      return true;
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `vocabulary/${vocabId}`);
      return false;
    }
  },

  async deleteVocabulary(vocabId: string) {
    try {
      const docRef = doc(db, 'vocabulary', vocabId);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `vocabulary/${vocabId}`);
      return false;
    }
  },

  async importVocabularyBatch(vocabularies: Partial<Vocab>[]) {
    try {
      const sanitized = JSON.parse(JSON.stringify(vocabularies));
      const chunkSize = 400;
      for (let i = 0; i < sanitized.length; i += chunkSize) {
         const chunk = sanitized.slice(i, i + chunkSize);
         const batch = writeBatch(db);
         chunk.forEach((vocab: any) => {
           const docRef = doc(collection(db, 'vocabulary'));
           batch.set(docRef, {
             ...vocab,
             id: docRef.id,
             createdAt: Timestamp.now(),
             status: vocab.status || 'new'
           });
         });
         await withTimeout(batch.commit());
      }
      return { success: true, count: vocabularies.length };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'vocabulary');
      return { success: false, error };
    }
  },

  async getLessons() {
    try {
      const snapshot = await getDocs(collection(db, 'lessons'));
      const firestoreLessons = snapshot.docs.map(doc => {
        const data = doc.data() as any;
        if (data.grammar && typeof data.grammar === 'string') {
          try { data.grammar = JSON.parse(data.grammar); } catch(e) {}
        }
      if (data.grammar && typeof data.grammar === 'object' && !Array.isArray(data.grammar)) {
         const keys = Object.keys(data.grammar);
         for (const key of keys) {
            if (typeof data.grammar[key] === 'string') {
               try { 
                 const parsed = JSON.parse(data.grammar[key]);
                 if (Array.isArray(parsed)) {
                    data.grammar[key] = parsed;
                 }
               } catch(e) {}
            }
         }
         
         if (Array.isArray(data.grammar.grammar)) {
           data.grammar = data.grammar.grammar;
         } else {
           let found = false;
           for (const key of keys) {
             if (Array.isArray(data.grammar[key])) {
               data.grammar = data.grammar[key];
               found = true;
               break;
             }
           }
           if (!found && !Array.isArray(data.grammar)) {
             // Wrap the lone object in an array as fallback
             data.grammar = Object.keys(data.grammar).length > 0 ? [data.grammar] : [];
           }
         }
      }
        return { id: doc.id, ...data } as Lesson;
      });
      
      // Merge with seed lessons. Firestore versions override seed versions.
      const { allLessons } = await import('../data/seedLessons');
      const seedLessonsMap = new Map(allLessons.map(l => [l.id, l]));
      firestoreLessons.forEach(l => {
        const parent = seedLessonsMap.get(l.id);
        if (parent) {
          // Deep merge or fallback for missing fields like grammar
          const mergedLesson = { ...parent, ...l };
          if (!l.grammar || (Array.isArray(l.grammar) && l.grammar.length === 0) || (typeof l.grammar === 'object' && Object.keys(l.grammar).length === 0)) {
             if (parent.grammar && parent.grammar.length > 0) {
                mergedLesson.grammar = parent.grammar;
             }
          }
          seedLessonsMap.set(l.id, mergedLesson);
        } else {
          seedLessonsMap.set(l.id, l);
        }
      });
      
      const merged = Array.from(seedLessonsMap.values());
      return merged.sort((a, b) => a.day - b.day);
    } catch (error) {
      try {
        handleFirestoreError(error, OperationType.LIST, 'lessons');
      } catch (e) {
        console.warn("Firestore error fallback to seed data:", e);
      }
      const { allLessons } = await import('../data/seedLessons');
      return allLessons;
    }
  },

  async addLesson(lesson: Omit<Lesson, 'id'>) {
    try {
      const docRef = doc(collection(db, 'lessons'));
      await setDoc(docRef, { ...lesson, id: docRef.id, createdAt: Timestamp.now() });
      return docRef.id;
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'lessons');
      return null;
    }
  },

  async updateLesson(lessonId: string, updates: Partial<Lesson>) {
    try {
      const docRef = doc(db, 'lessons', lessonId);
      await updateDoc(docRef, { ...updates, updatedAt: Timestamp.now() });
      return true;
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `lessons/${lessonId}`);
      return false;
    }
  },

  async deleteLesson(lessonId: string) {
    try {
      const docRef = doc(db, 'lessons', lessonId);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `lessons/${lessonId}`);
      return false;
    }
  },

  async importLessonsBatch(lessons: Partial<Lesson>[]) {
    try {
      const sanitized = JSON.parse(JSON.stringify(lessons));
      const chunkSize = 400;
      for (let i = 0; i < sanitized.length; i += chunkSize) {
         const chunk = sanitized.slice(i, i + chunkSize);
         const batch = writeBatch(db);
         chunk.forEach((lesson: any) => {
           const docRef = doc(collection(db, 'lessons'));
           batch.set(docRef, {
             ...lesson,
             id: docRef.id,
             createdAt: Timestamp.now()
           });
         });
         await withTimeout(batch.commit());
      }
      return { success: true, count: lessons.length };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'lessons');
      return { success: false, error };
    }
  },

  async getDialogues() {
    try {
      const snapshot = await getDocs(collection(db, 'dialogues'));
      const firestoreDialogues = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any));
      
      const { MOCK_DIALOGUES } = await import('../data/mockDialogues');
      const seedDialoguesMap = new Map(MOCK_DIALOGUES.map(d => [d.id, d]));
      firestoreDialogues.forEach(d => seedDialoguesMap.set(d.id, d));
      
      return Array.from(seedDialoguesMap.values());
    } catch (error) {
      try {
        handleFirestoreError(error, OperationType.LIST, 'dialogues');
      } catch (e) {
         console.warn("Firestore error fallback to seed data:", e);
      }
      const { MOCK_DIALOGUES } = await import('../data/mockDialogues');
      return MOCK_DIALOGUES;
    }
  },

  async addDialogue(dialogue: any) {
    try {
      const docRef = doc(collection(db, 'dialogues'));
      await setDoc(docRef, { ...dialogue, id: docRef.id, createdAt: Timestamp.now() });
      return docRef.id;
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'dialogues');
      return null;
    }
  },

  async updateDialogue(dialogueId: string, updates: any) {
    try {
      const docRef = doc(db, 'dialogues', dialogueId);
      await updateDoc(docRef, { ...updates, updatedAt: Timestamp.now() });
      return true;
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `dialogues/${dialogueId}`);
      return false;
    }
  },

  async deleteDialogue(dialogueId: string) {
    try {
      const docRef = doc(db, 'dialogues', dialogueId);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `dialogues/${dialogueId}`);
      return false;
    }
  },

  async getMockTests() {
    try {
      const snapshot = await getDocs(collection(db, 'mockTests'));
      const firestoreTests = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as MockTest));
      
      const { MOCK_TESTS } = await import('../data/mockTests');
      const seedTestsMap = new Map(MOCK_TESTS.map(t => [t.id, t]));
      firestoreTests.forEach(t => seedTestsMap.set(t.id, t));
      
      return Array.from(seedTestsMap.values());
    } catch (error) {
      try {
        handleFirestoreError(error, OperationType.LIST, 'mockTests');
      } catch (e) {
         console.warn("Firestore error fallback to seed data:", e);
      }
      const { MOCK_TESTS } = await import('../data/mockTests');
      return MOCK_TESTS;
    }
  },

  async addMockTest(test: any) {
    try {
      const docRef = doc(collection(db, 'mockTests'));
      await setDoc(docRef, { ...test, id: docRef.id, createdAt: Timestamp.now() });
      return docRef.id;
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'mockTests');
      return null;
    }
  },

  async updateMockTest(testId: string, updates: any) {
    try {
      const docRef = doc(db, 'mockTests', testId);
      await updateDoc(docRef, { ...updates, updatedAt: Timestamp.now() });
      return true;
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `mockTests/${testId}`);
      return false;
    }
  },

  async deleteMockTest(testId: string) {
    try {
      const docRef = doc(db, 'mockTests', testId);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `mockTests/${testId}`);
      return false;
    }
  },

  async importMockTestsBatch(tests: Partial<MockTest>[]) {
    try {
      // Remove undefined values to prevent Firestore errors
      const sanitizedTests = JSON.parse(JSON.stringify(tests));
      
      const chunkSize = 400;
      for (let i = 0; i < sanitizedTests.length; i += chunkSize) {
         const chunk = sanitizedTests.slice(i, i + chunkSize);
         const batch = writeBatch(db);
         chunk.forEach((test: any) => {
           const docRef = doc(collection(db, 'mockTests'));
           batch.set(docRef, {
             ...test,
             id: docRef.id,
             status: test.status || 'draft',
             createdAt: Timestamp.now()
           });
         });
         await withTimeout(batch.commit());
      }
      
      return { success: true, count: tests.length };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'mockTests');
      return { success: false, error };
    }
  },

  async importDialoguesBatch(dialogues: any[]) {
    try {
      const sanitized = JSON.parse(JSON.stringify(dialogues));
      const chunkSize = 400;
      for (let i = 0; i < sanitized.length; i += chunkSize) {
         const chunk = sanitized.slice(i, i + chunkSize);
         const batch = writeBatch(db);
         chunk.forEach((dialogue: any) => {
           const docRef = doc(collection(db, 'dialogues'));
           batch.set(docRef, {
             ...dialogue,
             id: docRef.id,
             createdAt: Timestamp.now()
           });
         });
         await withTimeout(batch.commit());
      }
      return { success: true, count: dialogues.length };
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'dialogues');
      return { success: false, error };
    }
  }
};
