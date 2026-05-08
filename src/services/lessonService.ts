import { Lesson } from '../types/lesson';
import { allLessons } from '../data/seedLessons';

export const getLessons = (): Lesson[] => {
  return allLessons.sort((a, b) => a.day - b.day);
};

export const getLessonById = (id: string): Lesson | undefined => {
  return allLessons.find(lesson => lesson.id === id);
};

export const getLessonsByStage = (stage: string): Lesson[] => {
  return allLessons.filter(lesson => lesson.stage === stage).sort((a, b) => a.day - b.day);
};

export const getStages = (): string[] => {
  const stages = new Set<string>();
  allLessons.forEach(lesson => stages.add(lesson.stage));
  return Array.from(stages);
};
