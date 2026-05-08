import { InterviewQuestion } from '../types/interview';
import { interviewPart1 } from './interviewPart1';
import { interviewPart2 } from './interviewPart2';
import { interviewPart3 } from './interviewPart3';
import { interviewPart4 } from './interviewPart4';
import { interviewLanguage } from './interviewLanguage';

export const interviewQuestions_System1_4: InterviewQuestion[] = [
  ...interviewPart1,
  ...interviewPart2,
  ...interviewPart3,
  ...interviewPart4
];

export const interviewQuestions_Language: InterviewQuestion[] = [
  ...interviewLanguage
];
