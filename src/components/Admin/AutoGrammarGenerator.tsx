import React, { useState } from 'react';
import { Sparkles, Loader2, Play } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { allLessons } from '../../data/seedLessons';

export function AutoGrammarGenerator({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {    
    setLoading(true);
    setStatus('Đang tải danh sách bài học...');
    
    try {
      if (!db) {
        throw new Error("Firebase database chưa được cấu hình! Chức năng này yêu cầu cơ sở dữ liệu Firebase.");
      }
      
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const lessonsRef = collection(db, 'lessons');
      const snapshot = await getDocs(lessonsRef);
      const existingLessonsMap = new Map(snapshot.docs.map(d => [d.id, d.data()]));
      
      const lessonsToProcess = allLessons.filter(lesson => {
        const existing = existingLessonsMap.get(lesson.id) as any;
        let hasValidGrammar = false;
        
        if (existing && existing.grammar) {
          if (Array.isArray(existing.grammar) && existing.grammar.length > 0) {
            hasValidGrammar = true;
          } else if (existing.grammar.grammar && Array.isArray(existing.grammar.grammar)) {
            console.log("Found wrapped grammar for", lesson.id, "- AUTO FIXING");
            // Auto fix the wrapped array immediately!
            setDoc(doc(db, 'lessons', lesson.id), {
              ...existing,
              grammar: existing.grammar.grammar
            }).catch(console.error);
            hasValidGrammar = true; // It's fixed now, no need to process
          } else if (typeof existing.grammar === 'object' && !Array.isArray(existing.grammar)) {
             // Sometimes Gemini returns { "notes": [...] } or similar
             const keys = Object.keys(existing.grammar);
             for(const key of keys) {
                if (Array.isArray(existing.grammar[key]) && existing.grammar[key].length > 0) {
                   console.log("Found wrapped grammar under key", key, "for", lesson.id, "- AUTO FIXING");
                   setDoc(doc(db, 'lessons', lesson.id), {
                     ...existing,
                     grammar: existing.grammar[key]
                   }).catch(console.error);
                   hasValidGrammar = true;
                   break;
                }
             }
          }
        }
        
        return !hasValidGrammar;
      });

      setTotal(lessonsToProcess.length);
      
      if (lessonsToProcess.length === 0) {
        setStatus('Tất cả bài học đã có ngữ pháp!');
        setLoading(false);
        return;
      }

      let count = 0;
      for (const lesson of lessonsToProcess) {
        setStatus(`Đang xử lý: ${lesson.title}...`);
        
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
]`;

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
          if (text) {
            const cleanText = text.replace(/```json/gi, '').replace(/```/g, '').trim();
            const grammarResult = JSON.parse(cleanText);
            const existing = existingLessonsMap.get(lesson.id) || {};
            await setDoc(doc(db, 'lessons', lesson.id), {
              ...lesson,
              ...existing,
              grammar: grammarResult
            });
          }
        } catch (err: any) {
          console.error(`Failed for lesson ${lesson.title}`, err);
          const errorMsg = err?.message || '';
          setStatus(`Lỗi xử lý ${lesson.title}: ${errorMsg}. Đang dừng quá trình.`);
          setLoading(false);
          return;
        }

        count++;
        setProgress(count);
        // Nhỏ nhẹ delay để tránh rate limit
        await new Promise(r => setTimeout(r, 2000));
      }

      setStatus('Hoàn tất!');
      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.error(err);
      setStatus(`Lỗi: ${err.message}`);
    }
    
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-3xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="font-bold text-blue-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-600" />
          Auto Grammar AI
        </h3>
        <p className="text-sm text-blue-600/80 font-medium mt-1">
          Tự động sử dụng AI để tạo ngữ pháp cho các bài học còn thiếu.
        </p>
        
        {loading && total > 0 && (
          <div className="mt-3">
             <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
               <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${(progress / total) * 100}%` }} />
             </div>
             <p className="text-xs font-bold text-blue-700 mt-1">{progress} / {total} bài học</p>
          </div>
        )}
        {status && <p className="text-sm font-bold text-blue-800 mt-2">{status}</p>}
      </div>
      
      <button 
        onClick={handleGenerate}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 flex items-center gap-2 hover:bg-blue-700 disabled:opacity-50 transition-colors shrink-0"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
        {loading ? 'Đang xử lý...' : 'Chạy AI Grammar'}
      </button>
    </div>
  );
}
