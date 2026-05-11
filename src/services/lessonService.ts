import { Lesson } from '../types/lesson';
import { allLessons } from '../data/seedLessons';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

let cachedLessons: Lesson[] | null = null;
let fetchPromise: Promise<Lesson[]> | null = null;

export const fetchLessons = async (forceRefresh = false): Promise<Lesson[]> => {
  if (cachedLessons && !forceRefresh) return cachedLessons;
  
  // If a fetch is already in progress and we are not forcing a NEW refresh, return the existing promise
  if (fetchPromise && !forceRefresh) return fetchPromise;
  
  const performFetch = async (): Promise<Lesson[]> => {
    if (!db) {
      console.warn("Firebase not properly initialized or db is unavailable. Falling back to local lessons.");
      return allLessons.sort((a, b) => a.day - b.day);
    }
    
    try {
      const snapshot = await getDocs(collection(db, 'lessons'));
      const firestoreLessons = snapshot.docs.map(doc => {
        const data = doc.data() as any;
        // Auto-unwrap grammar if it's an object instead of an array
        if (data.grammar && typeof data.grammar === 'string') {
            try {
               data.grammar = JSON.parse(data.grammar);
            } catch(e) {}
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
      
      // Merge with seed lessons
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
      
      const merged = Array.from(seedLessonsMap.values()).sort((a, b) => a.day - b.day);
      cachedLessons = merged;
      return merged;
    } catch (error) {
      console.warn("Failed to fetch lessons from Firestore:", error);
      return allLessons.sort((a, b) => a.day - b.day);
    } finally {
      fetchPromise = null;
    }
  };

  fetchPromise = performFetch();
  return fetchPromise;
};

export const fetchLessonById = async (id: string, forceRefresh = false): Promise<Lesson | undefined> => {
  const lessons = await fetchLessons(forceRefresh);
  return lessons.find(lesson => lesson.id === id);
};

// Fallbacks for synchronous access (might not be updated immediately until fetch completes)
export const getLessons = (): Lesson[] => {
  return cachedLessons || allLessons.sort((a, b) => a.day - b.day);
};

export const getLessonById = (id: string): Lesson | undefined => {
  return (cachedLessons || allLessons).find(lesson => lesson.id === id);
};

export const getLessonsByStage = (stage: string): Lesson[] => {
  return (cachedLessons || allLessons).filter(lesson => lesson.stage === stage).sort((a, b) => a.day - b.day);
};

export const getStages = (): string[] => {
  const stages = new Set<string>();
  (cachedLessons || allLessons).forEach(lesson => stages.add(lesson.stage));
  return Array.from(stages);
};
