import React, { useState } from 'react';
import { Sparkles, Loader2, Play } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';
import { adminService } from '../../services/adminService';

export function AutoVocabularyGenerator({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [level, setLevel] = useState('A1');

  const handleGenerate = async () => {    
    setLoading(true);
    setStatus(`Đang xử lý tạo từ vựng Level ${level}...`);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompt = `You are a professional Traditional Chinese language teacher for Vietnamese students.
Generate 20 high-frequency modern Chinese vocabulary words for TOCFL Level ${level}.
Try to pick words that are very common but slightly challenging.
The output MUST be a JSON array of objects.`;

      const response = await ai.models.generateContent({
          model: 'gemini-3.1-pro-preview',
          contents: prompt,
          config: {
              temperature: 0.9,
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    traditional: { type: Type.STRING },
                    pinyin: { type: Type.STRING },
                    zhuyin: { type: Type.STRING },
                    vietnamese: { type: Type.STRING },
                    level: { type: Type.STRING },
                    exampleTraditional: { type: Type.STRING },
                    examplePinyin: { type: Type.STRING },
                    exampleVietnamese: { type: Type.STRING },
                    type: { type: Type.STRING }
                  },
                  required: ["traditional", "pinyin", "vietnamese", "level", "exampleTraditional", "exampleVietnamese"]
                }
              }
          }
      });

      const text = response.text;
      if (text) {
        const cleanText = text.replace(/```json/gi, '').replace(/```/g, '').trim();
        const vocabResult = JSON.parse(cleanText);
        
        let arr = Array.isArray(vocabResult) ? vocabResult : [vocabResult];
        arr = arr.map(v => ({...v, status: 'published', level }));
        
        const res = await adminService.importVocabularyBatch(arr);
        if (res.success) {
           setStatus(`Hoàn tất! Đã thêm ${arr.length} từ vựng.`);
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
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-3xl border border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="font-bold text-orange-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-orange-600" />
          Auto Vocabulary AI
        </h3>
        <p className="text-sm text-orange-600/80 font-medium mt-1">
          Tự động xuất bản các từ vựng TOCFL còn thiếu lên trang chủ (Từ điển).
        </p>
        <div className="flex gap-2 mt-2">
           {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(lvl => (
              <button 
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`px-3 py-1 rounded-xl text-xs font-bold border transition-colors ${level === lvl ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-orange-600 border-orange-200'}`}
              >
                {lvl}
              </button>
           ))}
        </div>
        {status && <p className="text-sm font-bold text-orange-800 mt-2">{status}</p>}
      </div>
      
      <button 
        onClick={handleGenerate}
        disabled={loading}
        className="px-6 py-3 bg-orange-600 text-white rounded-2xl font-bold shadow-lg shadow-orange-200 flex items-center gap-2 hover:bg-orange-700 disabled:opacity-50 transition-colors shrink-0"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
        {loading ? 'Đang tạo...' : `Tạo thêm từ ${level}`}
      </button>
    </div>
  );
}
