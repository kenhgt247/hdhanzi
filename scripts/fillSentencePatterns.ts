import * as fs from 'fs';
import * as path from 'path';

// We have 23 parts
const parts = [
  'seedLessonsPart18.ts',
  'seedLessonsPart19.ts',
  'seedLessonsPart20.ts',
  'seedLessonsPart21.ts',
  'seedLessonsPart22.ts',
  'seedLessonsPart23.ts'
];

function fillSentencePatterns(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // We need to parse the JSON array. Since the file is a TS module,
  // we do the same hack as before.
  let startIdx = content.indexOf('[\n  {');
  if (startIdx === -1) startIdx = content.indexOf('[\n    {');
  const match = content.match(/Lesson.*?(\[)/);
  if (!match && startIdx === -1) {
    console.error(`Could not parse array from ${filePath}`);
    return;
  }
  if (startIdx === -1 && match) {
    startIdx = match.index! + match[0].length - 1;
  }
  
  const endIdx = content.lastIndexOf(']');
  if (startIdx === -1 || endIdx === -1) {
    console.error(`Could not find bounds in ${filePath}`);
    return;
  }

  const jsonStr = content.substring(startIdx, endIdx + 1);
  let lessons;
  try {
    // To parse it safely, we might need to use eval since it's a TS object,
    // not strict JSON (e.g., missing quotes on keys, single quotes, etc.)
    lessons = eval(`(${jsonStr})`);
  } catch (err) {
    console.error(`Failed to eval json in ${filePath}`, err);
    return;
  }

  // Update sentencePatterns
  for (const lesson of lessons) {
    if (lesson.sentencePatterns && lesson.sentencePatterns[0] && lesson.sentencePatterns[0].traditional === '...') {
      // Create new patterns from vocabulary examples
      const newPatterns = [];
      for (let i = 0; i < Math.min(3, lesson.vocabulary.length); i++) {
        const v = lesson.vocabulary[i];
        if (v.exampleTraditional) {
          newPatterns.push({
            traditional: v.exampleTraditional,
            pinyin: v.examplePinyin,
            zhuyin: v.exampleZhuyin || "",
            vietnamese: v.exampleVietnamese,
            usage: `Câu ví dụ với từ ${v.traditional}`
          });
        }
      }
      
      if (newPatterns.length > 0) {
        lesson.sentencePatterns = newPatterns;
      }
    }
  }

  // Serialize back to TS 
  // Because it was a JS object, JSON.stringify is safest, but we want it nicely formatted
  const newJsonStr = JSON.stringify(lessons, null, 2);
  const newContent = content.substring(0, startIdx) + newJsonStr + content.substring(endIdx + 1);
  
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Successfully updated ${filePath}`);
}

async function main() {
  for (const part of parts) {
    const filePath = path.join(process.cwd(), 'src', 'data', part);
    fillSentencePatterns(filePath);
  }
}

main();
