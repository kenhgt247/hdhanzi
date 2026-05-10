import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Play, Check, X, ArrowRight, Loader2, RefreshCw } from 'lucide-react';
import { Vocab } from '../../../data/vocabulary';
import { cn } from '../../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface ListeningConversationModeProps {
  vocab: Vocab;
  onNext: () => void;
  playAudio: (text: string) => void;
}

interface ConversationQuestion {
  question: string;
  options: string[];
  answerIndex: number;
}

interface ConversationData {
  dialogue: { speaker: string; text: string; pinyin: string; translation: string }[];
  translation: string;
  questions: ConversationQuestion[];
  missingWordSentence: string;
  missingWord: string;
}

export function ConversationListeningMode({ vocab, onNext, playAudio }: ListeningConversationModeProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ConversationData | null>(null);
  const [step, setStep] = useState<'listen' | 'question' | 'fill'>('listen');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [fillInput, setFillInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  
  const generateConversation = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    setStep('listen');
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setFillInput('');
    setShowResult(false);
    
    try {
      // @ts-ignore
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `Bạn là một giáo viên dạy tiếng Trung Phồn thể (TOCFL Đài Loan).
Tạo một bài luyện nghe hội thoại cho từ vựng:
Chữ Phồn thể: ${vocab.traditional}
Pinyin: ${vocab.pinyin}
Nghĩa: ${vocab.vietnamese}

Yêu cầu xuất dưới định dạng JSON với cấu trúc:
{
  "dialogue": [
    {"speaker": "A", "text": "Câu tiếng trung phồn thể của A", "pinyin": "pinyin của câu", "translation": "Nghĩa tiếng Việt"},
    {"speaker": "B", "text": "Câu tiếng trung phồn thể của B", "pinyin": "pinyin của câu", "translation": "Nghĩa tiếng Việt"}
  ],
  "translation": "Dịch toàn bộ đoạn hội thoại sang tiếng Việt",
  "questions": [
    {
      "question": "Câu hỏi trắc nghiệm tiếng Việt 1 kiểm tra nội dung hội thoại",
      "options": ["A. Lựa chọn 1", "B. Lựa chọn 2", "C. Lựa chọn 3", "D. Lựa chọn 4"],
      "answerIndex": 0
    },
    {
      "question": "Câu hỏi trắc nghiệm tiếng Việt 2 kiểm tra nội dung hội thoại",
      "options": ["A. Lựa chọn 1", "B. Lựa chọn 2", "C. Lựa chọn 3", "D. Lựa chọn 4"],
      "answerIndex": 1
    },
    {
      "question": "Câu hỏi trắc nghiệm tiếng Việt 3 kiểm tra nội dung hội thoại",
      "options": ["A. Lựa chọn 1", "B. Lựa chọn 2", "C. Lựa chọn 3", "D. Lựa chọn 4"],
      "answerIndex": 2
    }
  ],
  "missingWordSentence": "Câu tiếng Trung Phồn thể chứa từ vựng trên nhưng ẩn từ đó đi bằng ____",
  "missingWord": "Từ vựng chính xác để điền vào chỗ trống (chữ Phồn thể)"
}

Lưu ý:
- Phải đảm bảo trả về định dạng JSON hợp lệ (không bao gồm markdown \`\`\`json ở đầu và cuối nếu bạn dùng hàm, nhưng nếu có thì tôi sẽ parse).
- Nội dung hội thoại ngắn gọn (2-3 câu).
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      });
      
      let text = response.text;
      if (!text) throw new Error("Empty response");
      
      // Lọc bỏ markdown codeblock nếu có
      text = text.replace(/^```json/m, '').replace(/^```/m, '').trim();
      const parsedData = JSON.parse(text) as ConversationData;
      setData(parsedData);
      setLoading(false);
    } catch (err: any) {
      console.error("Gemini Error:", err);
      if (err?.message?.includes('API key not valid') || err?.message?.includes('API_KEY_INVALID') || err?.message?.includes('API Key must be set')) {
        setError("Lỗi cấu hình API Key. Vui lòng kiểm tra lại biến môi trường VITE_GEMINI_API_KEY trên Vercel.");
      } else {
        setError(`Lỗi: ${err?.message || "Không thể tạo bài tập lúc này. Vui lòng thử lại."}`);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    generateConversation();
  }, [vocab]);

  const playFullDialogue = () => {
    if (!data) return;
    const fullText = data.dialogue.map(d => d.text).join('。 ');
    playAudio(fullText);
  };

  const handleSelectAnswer = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
  };

  const handleCheckFill = () => {
    if (!data) return;
    setShowResult(true);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-gray-500 h-[450px]">
        <Loader2 className="w-10 h-10 animate-spin mb-4 text-blue-500" />
        <p className="font-medium animate-pulse">Đang AI tạo bài hội thoại luyện nghe...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-gray-500 h-[450px]">
        <p className="text-rose-500 font-medium mb-4">{error}</p>
        <button 
          onClick={generateConversation}
          className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
        >
          <RefreshCw className="w-4 h-4" /> Thử lại
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 text-center flex flex-col h-full max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex justify-center gap-2 mb-8">
        <div className={cn("h-2 w-16 rounded-full transition-colors", step === 'listen' ? "bg-blue-600" : "bg-gray-200")} />
        <div className={cn("h-2 w-16 rounded-full transition-colors", step === 'question' ? "bg-blue-600" : "bg-gray-200")} />
        <div className={cn("h-2 w-16 rounded-full transition-colors", step === 'fill' ? "bg-blue-600" : "bg-gray-200")} />
      </div>

      {step === 'listen' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 flex flex-col">
          <div className="mb-6 flex justify-center">
             <button 
                onClick={playFullDialogue}
                className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-amber-200 hover:-translate-y-1 hover:bg-amber-400 active:translate-y-0 transition-all border-4 border-amber-300"
             >
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
             </button>
          </div>
          
          <div className="flex flex-col gap-4 text-left flex-1 bg-gray-50 p-6 rounded-2xl border border-gray-100 overflow-y-auto">
             {data.dialogue.map((d, i) => (
                <div key={i} className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold flex-shrink-0 mt-1 shadow-sm">
                     {d.speaker}
                   </div>
                   <div>
                     <div className="flex items-center gap-2 group">
                       <p className="text-xl font-medium text-gray-900 cursor-pointer" onClick={() => playAudio(d.text)}>{d.text}</p>
                       <button onClick={() => playAudio(d.text)} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
                          <Play className="w-4 h-4" />
                       </button>
                     </div>
                     <p className="text-sm text-gray-500 font-mono mt-1">{d.pinyin}</p>
                     <p className="text-sm text-gray-700 mt-1">{d.translation}</p>
                   </div>
                </div>
             ))}
          </div>
          
          <button 
            onClick={() => setStep('question')}
            className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Bài tập vận dụng <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}

      {step === 'question' && data && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Câu hỏi {currentQuestionIndex + 1}/{data.questions.length}</h3>
            <button 
                onClick={playFullDialogue}
                className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white hover:-translate-y-1 hover:bg-amber-400 active:translate-y-0 transition-all border-2 border-amber-300"
             >
                <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
             </button>
          </div>
          
          <h4 className="text-lg text-gray-800 font-medium mb-6">{data.questions[currentQuestionIndex].question}</h4>
          
          <div className="flex flex-col gap-3 flex-1">
            {data.questions[currentQuestionIndex].options.map((opt, i) => {
              const isSelected = selectedAnswer === i;
              const isCorrect = i === data.questions[currentQuestionIndex].answerIndex;
              let btnClass = "border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50";
              if (selectedAnswer !== null) {
                if (isCorrect) btnClass = "bg-green-100 border-green-500 text-green-800";
                else if (isSelected) btnClass = "bg-red-50 border-red-300 text-red-600";
                else btnClass = "opacity-50 border-gray-200";
              }
              
              return (
                <button 
                  key={i}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleSelectAnswer(i)}
                  className={cn("p-4 border-2 rounded-xl text-left font-medium transition-all duration-300", btnClass)}
                >
                  <div className="flex items-center justify-between">
                    <span>{opt}</span>
                    {selectedAnswer !== null && isCorrect && <Check className="w-5 h-5 text-green-600" />}
                    {selectedAnswer === i && !isCorrect && <X className="w-5 h-5 text-red-500" />}
                  </div>
                </button>
              )
            })}
          </div>
          
          <AnimatePresence mode="popLayout">
            {selectedAnswer !== null && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 flex gap-3">
                 <button 
                    onClick={() => {
                        if (currentQuestionIndex < data.questions.length - 1) {
                            setCurrentQuestionIndex(currentQuestionIndex + 1);
                            setSelectedAnswer(null);
                        } else {
                            setStep('fill');
                        }
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
                  >
                    {currentQuestionIndex < data.questions.length - 1 ? 'Câu tiếp theo' : 'Tiếp theo'} <ArrowRight className="w-5 h-5" />
                  </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {step === 'fill' && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex-1 flex flex-col items-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Nghe và điền từ</h3>
          <p className="text-gray-500 mb-8">Từ vựng mục tiêu: {vocab.pinyin} / {vocab.vietnamese}</p>

          <div className="flex justify-center mb-6">
             <button 
                onClick={() => playAudio(data.missingWordSentence.replace('____', data.missingWord))}
                className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition"
             >
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
             </button>
          </div>

          <div className="text-2xl font-medium text-gray-800 mb-8 max-w-lg leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-4">
             {data.missingWordSentence.split('____').map((part, i, arr) => (
               <React.Fragment key={i}>
                 <span>{part}</span>
                 {i < arr.length - 1 && (
                   <input 
                     type="text"
                     value={fillInput}
                     onChange={(e) => setFillInput(e.target.value)}
                     disabled={showResult}
                     className={cn(
                       "w-24 border-b-2 bg-gray-50 text-center outline-none transition-colors",
                       showResult 
                          ? (fillInput.trim() === data.missingWord ? "border-green-500 text-green-600" : "border-red-500 text-red-500")
                          : "border-gray-300 focus:border-blue-500 text-blue-600"
                     )}
                   />
                 )}
               </React.Fragment>
             ))}
          </div>

          {!showResult ? (
            <button 
              onClick={handleCheckFill}
              disabled={!fillInput.trim()}
              className="mt-auto w-full py-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Kiểm tra
            </button>
          ) : (
            <div className="w-full mt-auto flex flex-col gap-4">
               {fillInput.trim() !== data.missingWord && (
                 <div className="p-3 bg-red-50 rounded-lg border border-red-100 text-red-600 font-medium">
                   Từ đúng: {data.missingWord}
                 </div>
               )}
               <button 
                 onClick={onNext}
                 className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
               >
                 Từ tiếp theo
               </button>
            </div>
          )}

        </motion.div>
      )}

    </div>
  );
}
