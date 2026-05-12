import React, { useState } from 'react';
import { Sparkles, Loader2, Play } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';
import { adminService } from '../../services/adminService';

export function AutoMockTestGenerator({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [level, setLevel] = useState('A1');

  const handleGenerate = async () => {    
    setLoading(true);
    setStatus(`Đang thiết kế đề thi thử Level ${level}... Quá trình này có thể mất 15-30 giây.`);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompt = `You are an expert examiner for the TOCFL (Test of Chinese as a Foreign Language).
Create a complete mock test for Level ${level}.
To make it aligned with official TOCFL format, include diverse question formats:
- Listening: "Listen to a sentence and choose the matching picture (options A/B/C)" (You can describe the picture in the explanation, but provide A, B, C as text options).
- Listening: "Listen to a sentence and choose the best response (A/B/C)".
- Reading: "Read the conversation or look at the scenario and answer the question".
- Reading: "Fill in the blank with the correct word from the list".

Please generate at least 5 Listening questions and 5 Reading questions.
Return a SINGLE JSON object representing the mock test.
Make sure the correct answer matches exactly one of the options.`;

      const response = await ai.models.generateContent({
          model: 'gemini-3.1-pro-preview',
          contents: prompt,
          config: {
              temperature: 0.8,
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  level: { type: Type.STRING },
                  durationMinutes: { type: Type.INTEGER },
                  questions: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        question: { type: Type.STRING },
                        type: { type: Type.STRING },
                        options: { type: Type.ARRAY, items: { type: Type.STRING } },
                        correctAnswer: { type: Type.STRING },
                        explanation: { type: Type.STRING }
                      },
                      required: ["question", "type", "options", "correctAnswer"]
                    }
                  }
                },
                required: ["title", "level", "durationMinutes", "questions"]
              }
          }
      });

      const text = response.text;
      if (text) {
        const cleanText = text.replace(/```json/gi, '').replace(/```/g, '').trim();
        const testResult = JSON.parse(cleanText);
        
        testResult.level = level;
        testResult.status = 'draft'; // User requirement: "còn thi thì sẽ tạo sau đó ad có thể kiểm tra và duyệt để xem đề thi đó có hợp lý không"
        
        // Ensure question IDs exist
        const questions = (testResult.questions || []).map((q: any, idx: number) => ({
          ...q,
          id: `q-${Date.now()}-${idx}`
        }));
        testResult.questions = questions;

        const res = await adminService.importMockTestsBatch([testResult]);
        if (res.success) {
           setStatus(`Hoàn tất! Đã lưu nháp đề thi. Vui lòng duyệt.`);
           if (onSuccess) onSuccess();
        } else {
           const errMsg = res.error && typeof res.error === 'object' && 'message' in res.error ? String(res.error.message) : String(res.error);
           setStatus(`Lỗi khi lưu vào CSDL: ${errMsg}`);
           console.error(res.error);
        }
      }
    } catch (err: any) {
      console.error(err);
      setStatus(`Lỗi: ${err.message}`);
    }
    
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-3xl border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="font-bold text-emerald-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          Auto Mock-Test AI
        </h3>
        <p className="text-sm text-emerald-600/80 font-medium mt-1">
          Tự động sinh bộ đề thi TOCFL mới. Cần Admin duyệt trước khi công khai.
        </p>
        <div className="flex gap-2 mt-2">
           {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(lvl => (
              <button 
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`px-3 py-1 rounded-xl text-xs font-bold border transition-colors ${level === lvl ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-emerald-600 border-emerald-200'}`}
              >
                {lvl}
              </button>
           ))}
        </div>
        {status && <p className="text-sm font-bold text-emerald-800 mt-2">{status}</p>}
      </div>
      
      <button 
        onClick={handleGenerate}
        disabled={loading}
        className="px-6 py-3 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg shadow-emerald-200 flex items-center gap-2 hover:bg-emerald-700 disabled:opacity-50 transition-colors shrink-0"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
        {loading ? 'Đang tạo...' : `Tạo bộ đề ${level}`}
      </button>
    </div>
  );
}
