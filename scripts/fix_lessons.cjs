const fs = require('fs');

const files = [
  './src/data/seedLessonsPart18.ts',
  './src/data/seedLessonsPart19.ts',
  './src/data/seedLessonsPart20.ts',
  './src/data/seedLessonsPart21.ts',
  './src/data/seedLessonsPart22.ts',
  './src/data/seedLessonsPart23.ts'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Replace description with topic and add level & objectives
  content = content.replace(/description: "(.*?)",/g, 'level: "B1",\n    topic: "$1",\n    objectives: ["Hoàn thành tốt bài học"],');

  // We need to add sentencePatterns, speaking, and writing if they are missing
  
  // A regex won't be perfect to insert before 'listening' if we have nested objects. 
  // Wait, I can inject `sentencePatterns: [],`  right before `listening:`
  content = content.replace(/listening:/g, 'sentencePatterns: [{ traditional: "...", pinyin: "...", zhuyin: "...", vietnamese: "...", usage: "..." }],\n    listening:');

  // And `speaking` and `writing` before `quiz:`
  content = content.replace(/    quiz:/g, '    speaking: {\n      promptTraditional: "請說...",\n      promptPinyin: "Qǐng shuō...",\n      promptVietnamese: "Hãy nói...",\n      sampleAnswerTraditional: "...",\n      sampleAnswerPinyin: "...",\n      sampleAnswerVietnamese: "..."\n    },\n    writing: {\n      promptVietnamese: "Dịch: ...",\n      suggestedAnswerTraditional: "...",\n      suggestedAnswerPinyin: "...",\n      suggestedAnswerVietnamese: "..."\n    },\n    quiz:');

  fs.writeFileSync(file, content);
  console.log('Fixed', file);
});
