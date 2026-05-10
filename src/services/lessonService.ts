import { Lesson } from '../types/lesson';
import { allLessons } from '../data/seedLessons';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

let cachedLessons: Lesson[] | null = null;

export const fetchLessons = async (): Promise<Lesson[]> => {
  if (cachedLessons) return cachedLessons;
  
  try {
    const snapshot = await getDocs(collection(db, 'lessons'));
    const firestoreLessons = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Lesson));
    
    // Merge with seed lessons
    const seedLessonsMap = new Map(allLessons.map(l => [l.id, l]));
    firestoreLessons.forEach(l => seedLessonsMap.set(l.id, l));
    
    const merged = Array.from(seedLessonsMap.values()).sort((a, b) => a.day - b.day);
    cachedLessons = merged;
    return merged;
  } catch (error) {
    console.warn("Failed to fetch lessons from Firestore:", error);
    return allLessons.sort((a, b) => a.day - b.day);
  }
};

export const fetchLessonById = async (id: string): Promise<Lesson | undefined> => {
  const lessons = await fetchLessons();
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
