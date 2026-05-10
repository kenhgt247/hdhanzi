import React, { useState, useRef } from 'react';
import { Mic, Square, Play, RotateCcw, Volume2, CheckCircle2, AlertCircle } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';
import { cn } from '../lib/utils';
import { weakWordsService } from '../services/weakWordsService';
import { useAuth } from '../contexts/AuthContext';

interface Sentence {
  traditional: string;
  pinyin: string;
  vietnamese: string;
}

interface SpeakingPracticeProps {
  sentences: Sentence[];
  level: string;
}

interface EvaluationResult {
  score: number;
  feedback: string;
  isCorrect: boolean;
  mispronouncedWords: string[];
}

export function SpeakingPractice({ sentences, level }: SpeakingPracticeProps) {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [results, setResults] = useState<Record<number, EvaluationResult>>({});
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const currentSentence = sentences[currentIndex];

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const mimeType = mediaRecorder.mimeType || 'audio/webm';
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        await evaluateAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop()); // Stop mic
      };

      mediaRecorder.start();
      setIsRecording(true);
      setAudioUrl(null);
    } catch (error) {
      console.error("Lỗi khi truy cập microphone:", error);
      alert("Không thể truy cập microphone. Vui lòng kiểm tra quyền truy cập.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const evaluateAudio = async (audioBlob: Blob) => {
    setIsEvaluating(true);
    try {
      const base64Audio = await blobToBase64(audioBlob);
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompt = `You are an expert Taiwanese Mandarin language teacher.
Evaluate the user's pronunciation for the following Chinese sentence:
Traditional: "${currentSentence.traditional}"
Pinyin: "${currentSentence.pinyin}"

Respond in JSON format with the following exact structure:
{
  "score": <a number from 0 to 100 representing pronunciation accuracy>,
  "feedback": "<general feedback in Vietnamese explaining what was good or bad>",
  "isCorrect": <boolean, true if the overall pronunciation is understandable and mostly correct (e.g. score >= 80)>,
  "mispronouncedWords": ["<word1>", "<word2>"] // list the specific Chinese words (traditional characters) that were mispronounced, if any. Leave empty if none.
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: [
            prompt,
            { inlineData: { data: base64Audio, mimeType: audioBlob.type } }
        ],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: { type: Type.NUMBER },
              feedback: { type: Type.STRING },
              isCorrect: { type: Type.BOOLEAN },
              mispronouncedWords: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["score", "feedback", "isCorrect", "mispronouncedWords"]
          }
        }
      });

      const jsonStr = response.text?.trim() || "{}";
      const resultData = JSON.parse(jsonStr) as EvaluationResult;
      
      setResults(prev => ({ ...prev, [currentIndex]: resultData }));

      // Save mispronounced words to weak words
      if (user?.id && user.id !== 'guest' && resultData.mispronouncedWords.length > 0) {
        for (const word of resultData.mispronouncedWords) {
            await weakWordsService.recordMistake(user.id, {
                id: word,
                chinese: word,
                pinyin: "", // We might not know exact pinyin here without dict check, but this is fine
                meaning: "Từ phát âm sai ở mẫu câu", // Generic default
                level: level
            }, 'speaking');
        }
      }

    } catch (error) {
      console.error("Lỗi khi đánh giá phát âm:", error);
      alert("Đã xảy ra lỗi khi chấm điểm. Vui lòng thử lại.");
    } finally {
      setIsEvaluating(false);
    }
  };

  const playTTS = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW';
    window.speechSynthesis.speak(utterance);
  };

  const nextSentence = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setAudioUrl(null);
    }
  };

  const prevSentence = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setAudioUrl(null);
    }
  };

  const currentResult = results[currentIndex];

  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm space-y-8 min-h-[400px] flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center bg-gray-50 -my-6 -mx-6 px-6 py-4 border-b mb-6">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Mic className="w-5 h-5 text-blue-600" />
          Luyện phát âm ({currentIndex + 1}/{sentences.length})
        </h3>
        <div className="flex gap-2">
          <button 
            disabled={currentIndex === 0 || isRecording || isEvaluating}
            onClick={prevSentence}
            className="px-3 py-1 bg-white border rounded text-sm disabled:opacity-50 font-medium text-gray-700 hover:bg-gray-50"
          >
            Trước
          </button>
          <button 
            disabled={currentIndex === sentences.length - 1 || isRecording || isEvaluating}
            onClick={nextSentence}
            className="px-3 py-1 bg-white border rounded text-sm disabled:opacity-50 font-medium text-gray-700 hover:bg-gray-50"
          >
            Sau
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 text-center space-y-6">
        <div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">{currentSentence.traditional}</h2>
          <p className="text-xl text-gray-600 font-mono bg-gray-100 inline-block px-3 py-1 rounded-md mb-2">{currentSentence.pinyin}</p>
          <p className="text-lg text-gray-700 font-medium">{currentSentence.vietnamese}</p>
        </div>

        <button 
          onClick={() => playTTS(currentSentence.traditional)}
          className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full transition"
        >
          <Volume2 className="w-5 h-5" /> Nghe đọc mẫu
        </button>

        <div className="pt-6 w-full flex flex-col items-center box-border">
          {isRecording ? (
            <button 
              onClick={stopRecording}
              className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center shadow-md animate-pulse border-4 border-red-200"
            >
              <Square className="w-8 h-8 fill-current" />
            </button>
          ) : (
            <button 
              onClick={startRecording}
              disabled={isEvaluating}
              className={cn(
                  "w-20 h-20 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-200 border-4 border-white transition-transform hover:scale-105 active:scale-95",
                  isEvaluating ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              )}
            >
              <Mic className="w-8 h-8" />
            </button>
          )}
          <p className="mt-4 text-sm font-medium text-gray-500">
            {isRecording ? "Đang ghi âm... Nhấn để dừng" : (isEvaluating ? "Đang AI đang chấm điểm..." : "Nhấn để bắt đầu đọc")}
          </p>
        </div>

        {audioUrl && (
          <div className="w-full max-w-sm mt-4 bg-gray-50 p-3 rounded-xl border flex items-center gap-3">
             <audio controls src={audioUrl} className="w-full h-10 outline-none" />
          </div>
        )}

      </div>

      {currentResult && !isEvaluating && (
        <div className={cn(
          "p-6 rounded-xl border-2 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 shadow-sm",
          currentResult.isCorrect ? "border-green-200 bg-green-50" : "border-amber-200 bg-amber-50"
        )}>
          <div className="flex gap-4 sm:items-start flex-col sm:flex-row">
            <div className="flex-shrink-0">
               {currentResult.isCorrect ? (
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
               ) : (
                  <AlertCircle className="w-10 h-10 text-amber-500" />
               )}
            </div>
            <div className="flex-1 space-y-3 relative">
               <div className="absolute right-0 top-0 hidden sm:block">
                  <div className="flexflex-col items-center justify-center">
                    <span className={cn("text-3xl font-black block text-center", currentResult.isCorrect ? "text-green-600" : "text-amber-600")}>{currentResult.score}</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Điểm</span>
                  </div>
               </div>
               
               <h4 className={cn("text-lg font-bold pr-16", currentResult.isCorrect ? "text-green-800" : "text-amber-800")}>
                 {currentResult.isCorrect ? "Phát âm rất tốt!" : "Cần lưu ý một số lỗi"}
                 <span className="sm:hidden ml-2 text-sm">Điểm: {currentResult.score}</span>
               </h4>
               <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">{currentResult.feedback}</p>
               
               {!currentResult.isCorrect && currentResult.mispronouncedWords.length > 0 && (
                 <div className="mt-4 pt-4 border-t border-amber-200/50">
                    <p className="text-sm font-semibold text-amber-800 mb-2">Các từ cần chú ý:</p>
                    <div className="flex flex-wrap gap-2">
                       {currentResult.mispronouncedWords.map((word, idx) => (
                           <span key={idx} className="bg-white border border-amber-200 text-amber-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                             {word}
                           </span>
                       ))}
                    </div>
                    <p className="text-xs text-amber-600/80 mt-2 italic">* Các từ này đã được tự động thêm vào danh sách Từ Yếu của bạn.</p>
                 </div>
               )}

               {currentResult.isCorrect && currentResult.mispronouncedWords.length > 0 && (
                 <div className="mt-4">
                    <p className="text-sm font-semibold text-green-800 mb-2">Từ chưa hoàn hảo (nhưng có thể chấp nhận):</p>
                    <div className="flex flex-wrap gap-2">
                       {currentResult.mispronouncedWords.map((word, idx) => (
                           <span key={idx} className="bg-white border text-green-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                             {word}
                           </span>
                       ))}
                    </div>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
