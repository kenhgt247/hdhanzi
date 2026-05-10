import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import { allLessons } from '../src/data/seedLessons';

const configPath = path.resolve(process.cwd(), 'firebase-applet-config.json');
const firebaseConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function addGrammarToLessons() {
  console.log('Fetching existing lessons from Firestore to avoid duplicates...');
  const lessonsRef = collection(db, 'lessons');
  const snapshot = await getDocs(lessonsRef);
  const existingLessons = new Map(snapshot.docs.map(doc => [doc.id, doc.data()]));

  console.log(`Found ${allLessons.length} local seed lessons.`);
  
  let count = 0;

  for (const lesson of allLessons) {
    const existing = existingLessons.get(lesson.id) as any;
    
    // Check if the lesson already has grammar in Firestore
    if (!existing || !existing.grammar || existing.grammar.length === 0) {
      console.log(`\nGenerating grammar for lesson: ${lesson.title} - ${lesson.topic}`);
      
      const prompt = `You are a professional Traditional Chinese language teacher for Vietnamese students.
Generate 2 to 3 important grammar notes (ngữ pháp) suitable for this lesson.
Lesson Title: ${lesson.title}
Lesson Topic: ${lesson.topic}
Lesson Level (Stage): ${lesson.stage}

The output must be a standard JSON array of objects, with NO markdown formatting. It must be strictly an array like this:
[
  {
    "title": "Tên cấu trúc ngữ pháp",
    "explanation": "Giải thích cách sử dụng ngữ pháp bằng tiếng Việt",
    "structure": "Cấu trúc ví dụ: S + V + O",
    "examples": [
      {
        "traditional": "Ví dụ tiếng Trung phồn thể",
        "pinyin": "pinyin của ví dụ",
        "vietnamese": "Dịch nghĩa tiếng Việt"
      }
    ]
  }
]
`;

      try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.7,
                responseMimeType: "application/json"
            }
        });

        const text = response.text;
        if (!text) throw new Error("Empty response");

        const grammarResult = JSON.parse(text);
        
        console.log(`Generated ${grammarResult.length} grammar notes for ${lesson.title}. Saving to Firestore...`);
        
        await setDoc(doc(db, 'lessons', lesson.id), {
          ...lesson,
          ...(existing || {}),
          grammar: grammarResult
        });
        
        console.log(`Success!`);
        count++;
        
      } catch (err: any) {
        console.error(`Failed for lesson ${lesson.title}`, err.message);
      }
      
      // Delay to avoid hitting rate limits
      await delay(2000);
    } else {
        console.log(`Lesson ${lesson.id} already has grammar notes, skipping.`);
    }
  }

  console.log(`\nFinished! Added grammar to ${count} lessons.`);
  process.exit(0);
}

addGrammarToLessons().catch(console.error);
