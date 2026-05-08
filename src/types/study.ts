
export type TaskType = 'new_vocab' | 'review_vocab' | 'listening' | 'quiz' | 'speaking' | 'lesson' | 'weak_words';
export type TaskStatus = 'not_started' | 'in_progress' | 'completed';

export interface DailyTask {
  id: string;
  type: TaskType;
  title: string;
  targetCount: number;
  completedCount: number;
  status: TaskStatus;
  points: number;
}

export interface WeakWord {
  id: string;
  wordId: string;
  chinese: string;
  pinyin: string;
  meaning: string;
  level: string;
  mistakeCount: number;
  correctReviewCount: number;
  lastMistakeAt: any;
  lastReviewedAt: any;
  mistakeTypes: {
    meaning: number;
    listening: number;
    pinyin: number;
    hanzi: number;
    speaking: number;
  };
  strengthLevel: 'weak' | 'medium' | 'improving';
  nextReviewAt: any;
}

export interface DailyPlan {
  date: string; // YYYY-MM-DD
  level: string;
  tasks: DailyTask[];
  totalTasks: number;
  completedTasks: number;
  progressPercent: number;
  totalPoints: number;
  studyMinutes: number;
  createdAt: any; // Firebase Timestamp or ISO string
  updatedAt: any;
}

export type TOCFLLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface MockQuestion {
  id: string;
  type: 'listening' | 'reading';
  question: string;
  options: string[];
  correctAnswer: string;
  audioUrl?: string;
  imageUrl?: string;
  explanation?: string;
  relatedWordId?: string;
}

export interface MockTest {
  id: string;
  title: string;
  level: TOCFLLevel;
  durationMinutes: number;
  questions: MockQuestion[];
}

export interface MockTestResult {
  id: string;
  testId: string;
  testTitle: string;
  level: TOCFLLevel;
  userId: string;
  score: number;
  totalQuestions: number;
  listeningScore: number;
  readingScore: number;
  answers: { [questionId: string]: string };
  completedAt: any;
  timeSpentMinutes: number;
}
