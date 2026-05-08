export interface Lesson {
  id: string;
  day: number;
  title: string;
  level: "beginner" | "A1" | "A2" | "B1";
  stage: string;
  topic: string;
  objectives: string[];
  vocabulary: VocabularyItem[];
  sentencePatterns: SentencePattern[];
  listening: ListeningExercise;
  reading: ReadingExercise;
  speaking: SpeakingExercise;
  writing: WritingExercise;
  quiz: QuizQuestion[];
}

export interface VocabularyItem {
  id: string;
  traditional: string;
  pinyin: string;
  zhuyin: string;
  vietnamese: string;
  partOfSpeech: string;
  exampleTraditional: string;
  examplePinyin: string;
  exampleVietnamese: string;
}

export interface SentencePattern {
  traditional: string;
  pinyin: string;
  zhuyin: string;
  vietnamese: string;
  usage: string;
}

export interface ListeningExercise {
  title: string;
  transcriptTraditional: string;
  transcriptPinyin: string;
  transcriptVietnamese: string;
  questions: QuizQuestion[];
}

export interface ReadingExercise {
  title: string;
  passageTraditional: string;
  passagePinyin: string;
  passageVietnamese: string;
  questions: QuizQuestion[];
}

export interface SpeakingExercise {
  promptTraditional: string;
  promptPinyin: string;
  promptVietnamese: string;
  sampleAnswerTraditional: string;
  sampleAnswerPinyin: string;
  sampleAnswerVietnamese: string;
}

export interface WritingExercise {
  promptVietnamese: string;
  suggestedAnswerTraditional: string;
  suggestedAnswerPinyin: string;
  suggestedAnswerVietnamese: string;
}

export interface QuizQuestion {
  id: string;
  type: "multiple_choice" | "fill_blank" | "true_false";
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}
