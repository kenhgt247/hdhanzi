import React, { useState, useEffect, useRef } from 'react';
import { Mic, PlayCircle, Save, Square, Sparkles, ArrowRight, ArrowLeft, Loader2, CheckCircle2, BookOpen, Trash2 } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';
import { cn } from '../../../lib/utils';
import { interviewQuestions_System1_4, interviewQuestions_Language } from '../../../data/interviewQuestions';

export function InterviewPrep() {
  const [selectedSystem, setSelectedSystem] = useState<'1+4' | 'language'>('1+4');
  const interviewQuestions = selectedSystem === '1+4' ? interviewQuestions_System1_4 : interviewQuestions_Language;

  const [activeQuestion, setActiveQuestion] = useState(interviewQuestions[0]);
  const [isRecording, setIsRecording] = useState(false);
  const [userDrafts, setUserDrafts] = useState<Record<string, { vi: string, zh: string }>>(() => {
    const saved = localStorage.getItem('interviewDrafts');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const normalized: Record<string, { vi: string, zh: string }> = {};
        Object.keys(parsed).forEach(k => {
          if (typeof parsed[k] === 'string') {
            normalized[k] = { vi: '', zh: parsed[k] };
          } else {
            normalized[k] = parsed[k] || { vi: '', zh: '' };
          }
        });
        return normalized;
      } catch(e) {}
    }
    return {};
  });
  
  const [draftInput, setDraftInput] = useState(() => userDrafts[interviewQuestions[0].id]?.zh || '');
  const [viDraftInput, setViDraftInput] = useState(() => userDrafts[interviewQuestions[0].id]?.vi || '');
  const [isTranslating, setIsTranslating] = useState(false);
  
  // AI Evaluation
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<{score: number, feedback: string} | null>(null);

  // Real voice recording states
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [audioUrls, setAudioUrls] = useState<Record<string, string>>(() => {
    const savedAudios = localStorage.getItem('interviewAudios');
    if (savedAudios) return JSON.parse(savedAudios);
    return {};
  });
  const [isListExpanded, setIsListExpanded] = useState(false);
  const practiceAreaRef = useRef<HTMLDivElement>(null);

  // Watch for system change to update active question
  useEffect(() => {
    setActiveQuestion(interviewQuestions[0]);
    setIsListExpanded(false);
  }, [selectedSystem]);

  useEffect(() => {
    const draft = userDrafts[activeQuestion.id];
    if (draft) {
      setDraftInput(draft.zh || '');
      setViDraftInput(draft.vi || '');
    } else {
      setDraftInput('');
      setViDraftInput('');
    }
    setEvaluationResult(null);
  }, [activeQuestion.id]);

  const handleSaveDraft = () => {
    const updatedDrafts = { ...userDrafts, [activeQuestion.id]: { vi: viDraftInput, zh: draftInput } };
    setUserDrafts(updatedDrafts);
    try {
      localStorage.setItem('interviewDrafts', JSON.stringify(updatedDrafts));
    } catch (e) {
      console.error("Failed to save drafts:", e);
    }
    // Optional: show a small toast instead of alert
    alert('Đã lưu kịch bản trả lời!');
  };

  const handleTranslate = async () => {
    if (!viDraftInput.trim()) {
      alert("Vui lòng nhập kịch bản bằng tiếng Việt trước.");
      return;
    }
    setIsTranslating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `Dịch đoạn văn bản sau sang tiếng Trung Phồn Thể (Đài Loan), văn phong phù hợp để trả lời phỏng vấn xin visa / trường học Đài Loan.\n\nĐoạn văn: "${viDraftInput}"\n\nChỉ trả về kết quả dịch tiếng Trung, không kèm giải thích.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
      });
      
      const translatedText = response.text?.trim() || "";
      if (translatedText) {
         setDraftInput(translatedText);
      } else {
         alert("Không thể dịch, vui lòng thử lại.");
      }
    } catch (e) {
      console.error(e);
      alert("Lỗi khi kết nối AI dịch thuật. Vui lòng thử lại sau.");
    } finally {
      setIsTranslating(false);
    }
  };

  const handleEvaluate = async () => {
    if (!draftInput.trim()) {
      alert("Vui lòng nhập kịch bản trước khi nhờ AI đánh giá.");
      return;
    }
    setIsEvaluating(true);
    setEvaluationResult(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `Bạn là một chuyên gia đánh giá kỹ năng phỏng vấn du học Đài Loan (hệ 1+4 Vừa học vừa làm). 
Đánh giá câu trả lời của học sinh cho câu hỏi:
- Câu hỏi (Tiếng Việt): "${activeQuestion.vietnamese}"
- Câu hỏi (Tiếng Trung): "${activeQuestion.question}"
- Câu trả lời của học sinh: "${draftInput}"

Hãy chấm điểm (trên thang điểm 10) và nhận xét (ưu điểm, nhược điểm, lỗi ngữ pháp nếu có bằng tiếng Trung, mở rộng ý).
Luôn phải trả về định dạng chuẩn xác.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: { type: Type.NUMBER, description: "Điểm từ 1 đến 10" },
              feedback: { type: Type.STRING, description: "Nhận xét chi tiết" }
            },
            required: ["score", "feedback"]
          }
        }
      });
      
      const jsonStr = response.text?.trim();
      if (jsonStr) {
        const result = JSON.parse(jsonStr);
        setEvaluationResult(result);
      }
    } catch (e) {
      console.error(e);
      alert("Lỗi khi kết nối AI đánh giá. Vui lòng thử lại sau.");
    } finally {
      setIsEvaluating(false);
    }
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

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = () => {
          const base64Audio = reader.result as string;
          const updatedAudios = { ...audioUrls, [activeQuestion.id]: base64Audio };
          setAudioUrls(updatedAudios);
          try {
            localStorage.setItem('interviewAudios', JSON.stringify(updatedAudios));
          } catch (e) {
            console.error("Failed to save audio:", e);
          }
        };
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Lỗi khi truy cập microphone:', err);
      alert('Không thể truy cập microphone. Vui lòng cấp quyền.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleRecord = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW';
    window.speechSynthesis.speak(utterance);
  };

  const handlePlaySavedRecording = () => {
    const base64Audio = audioUrls[activeQuestion.id];
    if (base64Audio) {
      const audio = new Audio(base64Audio);
      audio.play();
    }
  };

  const deleteAudio = (questionId: string) => {
    const updatedAudios = { ...audioUrls };
    delete updatedAudios[questionId];
    setAudioUrls(updatedAudios);
    try {
      localStorage.setItem('interviewAudios', JSON.stringify(updatedAudios));
    } catch (e) {
      console.error("Failed to update audios after delete:", e);
    }
  };

  const currentIndex = interviewQuestions.findIndex(q => q.id === activeQuestion.id);
  
  const scrollToPractice = () => {
    // Small delay to ensure state update renders before scrolling
    setTimeout(() => {
      if (window.innerWidth < 1024) {
        practiceAreaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (practiceAreaRef.current) {
        practiceAreaRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNav = (direction: 'next' | 'prev') => {
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < interviewQuestions.length) {
      setActiveQuestion(interviewQuestions[newIndex]);
      scrollToPractice();
    }
  };

  const displayedQuestions = isListExpanded ? interviewQuestions : interviewQuestions.slice(0, 3);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <header>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Luyện phỏng vấn (AI)</h1>
            <p className="text-gray-500 mt-2">Tính năng tự động đánh giá và thu âm</p>
          </div>
          
          <div className="bg-gray-100 p-1 rounded-xl flex items-center">
            <button
              onClick={() => setSelectedSystem('1+4')}
              className={cn(
                "px-4 py-2 font-bold text-sm rounded-lg transition",
                selectedSystem === '1+4' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
              )}
            >
              Hệ 1+4 / VHVL
            </button>
            <button
              onClick={() => setSelectedSystem('language')}
              className={cn(
                "px-4 py-2 font-bold text-sm rounded-lg transition",
                selectedSystem === 'language' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
              )}
            >
              Hệ Ngôn Ngữ
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Danh sách câu hỏi */}
        <div className="lg:col-span-5 xl:col-span-4 border rounded-xl bg-white shadow-sm overflow-hidden flex flex-col h-auto max-h-[500px] lg:max-h-[calc(100vh-140px)] lg:sticky lg:top-6">
          <div className="p-4 border-b bg-gray-50 flex flex-col gap-3 shrink-0">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-gray-900">Danh sách câu hỏi</h3>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full">{interviewQuestions.length} câu</span>
            </div>
            <button 
              onClick={() => {
                setActiveQuestion(interviewQuestions[0]);
                scrollToPractice();
              }}
              className="w-full py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-sm flex items-center justify-center gap-2"
            >
              Bắt đầu phỏng vấn <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="overflow-y-auto hide-scrollbar flex-1 pb-4">
            {displayedQuestions.map((q, index) => {
              const prevQ = index > 0 ? interviewQuestions[index - 1] : null;
              const showCategory = !prevQ || prevQ.category !== q.category;
              
              const hasDraft = !!userDrafts[q.id];
              const hasAudio = !!audioUrls[q.id];
              return (
                <React.Fragment key={q.id}>
                  {showCategory && (
                    <div className="sticky top-0 bg-gray-100/95 backdrop-blur px-4 py-2 border-y border-gray-200 z-10 first:border-t-0 text-[11px] font-bold text-gray-600 uppercase tracking-wider">
                      {q.category}
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setActiveQuestion(q);
                      scrollToPractice();
                    }}
                    className={cn(
                      "w-full text-left p-3 lg:p-4 transition-colors flex gap-3 items-start border-b border-gray-100 last:border-b-0",
                      activeQuestion.id === q.id ? "bg-blue-50/80" : "hover:bg-gray-50 bg-white"
                    )}
                  >
                    <div className={cn("mt-0.5 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0", activeQuestion.id === q.id ? "bg-blue-600 text-white shadow-sm" : "bg-gray-100 text-gray-500")}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className={cn("text-sm font-medium line-clamp-2", activeQuestion.id === q.id ? "text-blue-900" : "text-gray-700")}>{q.vietnamese}</div>
                      {(hasDraft || hasAudio) && (
                        <div className="flex flex-wrap gap-2 mt-2">
                           {hasDraft && <span className="text-[10px] uppercase font-bold text-green-600 bg-green-50/80 border border-green-100 px-1.5 py-0.5 rounded">Có kịch bản</span>}
                           {hasAudio && <span className="text-[10px] uppercase font-bold text-purple-600 bg-purple-50/80 border border-purple-100 px-1.5 py-0.5 rounded">Có thu âm</span>}
                        </div>
                      )}
                    </div>
                  </button>
                </React.Fragment>
              );
            })}
            
            {!isListExpanded && interviewQuestions.length > 3 && (
              <div className="p-4 pt-2">
                <button 
                  onClick={() => setIsListExpanded(true)}
                  className="w-full py-2.5 text-sm font-bold text-blue-600 bg-blue-50 border border-blue-100 hover:bg-blue-100 rounded-lg transition"
                >
                  Xem thêm {interviewQuestions.length - 3} câu hỏi
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Nội dung câu hỏi và luyện tập */}
        <div ref={practiceAreaRef} className="scroll-mt-6 lg:col-span-7 xl:col-span-8 border rounded-xl bg-white shadow-sm overflow-hidden lg:sticky lg:top-6 lg:max-h-[calc(100vh-48px)] flex flex-col">
          <div className="p-6 md:p-8 space-y-8 overflow-y-auto hide-scrollbar">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-black text-gray-900 leading-tight">{activeQuestion.question}</h2>
                <button 
                  onClick={() => playAudio(activeQuestion.question)}
                  className="p-3 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-full transition shrink-0"
                  title="Nghe câu hỏi"
                >
                  <PlayCircle className="h-6 w-6" />
                </button>
              </div>
              <p className="text-xl text-gray-500 font-medium">{activeQuestion.pinyin}</p>
              <div className="bg-gray-50 p-4 rounded-lg border">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Tiếng Việt</span>
                <p className="text-gray-800 font-medium text-lg">{activeQuestion.vietnamese}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-yellow-400 rounded-full inline-block"></span>
                  Gợi ý triển khai ý
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                  {activeQuestion.suggestions.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-green-400 rounded-full inline-block"></span>
                  Trả lời mẫu
                </h3>
                <div className="p-4 bg-green-50/50 rounded-lg border border-green-100 h-full">
                  <p className="text-gray-800">{activeQuestion.sampleResponse}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-8 space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">1. Soạn kịch bản của riêng bạn & Chấm điểm AI</h3>
                <p className="text-sm text-gray-500 mb-4">Bạn có thể viết ý tưởng bằng Tiếng Việt, sau đó nhờ AI dịch sang Tiếng Trung Phồn Thể. Cuối cùng hãy nhờ AI chấm điểm kết quả Tiếng Trung của bạn.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Tiếng Việt */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">1. Kịch bản Tiếng Việt</label>
                    <textarea 
                      className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none resize-y min-h-[160px] bg-white border-blue-100"
                      placeholder="Gõ câu trả lời bằng tiếng Việt vào đây..."
                      value={viDraftInput}
                      onChange={(e) => setViDraftInput(e.target.value)}
                    />
                    <button
                      onClick={handleTranslate}
                      disabled={isTranslating}
                      className={cn(
                        "w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition",
                        isTranslating 
                          ? "bg-blue-50 text-blue-300 cursor-not-allowed" 
                          : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                      )}
                    >
                      {isTranslating ? <><Loader2 className="h-4 w-4 animate-spin" /> Đang dịch...</> : <><Sparkles className="h-4 w-4" /> Dịch sang Tiếng Trung</>}
                    </button>
                  </div>

                  {/* Tiếng Trung */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">2. Kết quả Tiếng Trung</label>
                    <textarea 
                      className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-purple-500 outline-none resize-y min-h-[160px] bg-purple-50/30 border-purple-100"
                      placeholder="Kết quả dịch tiếng Trung sẽ hiển thị ở đây (bạn có thể tự sửa lại)..."
                      value={draftInput}
                      onChange={(e) => setDraftInput(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <button 
                        onClick={handleSaveDraft}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium text-sm transition"
                      >
                        <Save className="h-4 w-4" /> Lưu
                      </button>
                      <button 
                        onClick={handleEvaluate}
                        disabled={isEvaluating || !draftInput.trim()}
                        className={cn(
                          "flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg font-medium text-sm transition",
                          (isEvaluating || !draftInput.trim())
                            ? "bg-purple-100 text-purple-400 cursor-not-allowed" 
                            : "bg-purple-100 text-purple-700 hover:bg-purple-200 shadow-sm"
                        )}
                      >
                        {isEvaluating ? (
                          <><Loader2 className="h-4 w-4 animate-spin" /> Đang chấm...</>
                        ) : (
                          <><Sparkles className="h-4 w-4" /> AI Chấm điểm</>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {evaluationResult && (
                  <div className="mt-4 p-5 rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-fuchsia-50 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center bg-white rounded-full h-14 w-14 shadow-sm border border-purple-100 shrink-0">
                        <span className="text-2xl font-black text-purple-600">{evaluationResult.score}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          Đánh giá từ AI
                        </h4>
                        <p className="text-sm text-purple-600 font-medium">Hệ thống đã phân tích kịch bản của bạn</p>
                      </div>
                    </div>
                    <div className="bg-white/60 p-4 rounded-lg border border-purple-100/50">
                      <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                        {evaluationResult.feedback}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">2. Luyện nói thực tế</h3>
                <p className="text-sm text-gray-500 mb-4">Nhấn nút bên dưới và bắt đầu đọc kịch bản của bạn.</p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button 
                    onClick={handleRecord}
                    className={cn(
                      "w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl transition font-bold shadow-sm",
                      isRecording ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 animate-pulse" : "bg-blue-600 text-white hover:bg-blue-700"
                    )}
                  >
                    {isRecording ? (
                      <>
                        <Square className="h-5 w-5" /> Dừng thu âm
                      </>
                    ) : (
                      <>
                        <Mic className="h-5 w-5" /> Bắt đầu thu âm
                      </>
                    )}
                  </button>

                  {audioUrls[activeQuestion.id] && !isRecording && (
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button 
                        onClick={handlePlaySavedRecording}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-xl transition font-medium text-blue-600 bg-blue-50 hover:bg-blue-100"
                      >
                        <PlayCircle className="h-5 w-5" /> Nghe lại
                      </button>
                      <button 
                        onClick={() => deleteAudio(activeQuestion.id)}
                        className="p-4 rounded-xl text-red-500 bg-red-50 hover:bg-red-100 transition"
                        title="Xoá bản thu"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>
                
                {isRecording && (
                  <div className="mt-4 flex items-center gap-3 justify-center sm:justify-start">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <p className="text-sm text-red-500 font-medium">Đang ghi âm giọng nói của bạn...</p>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Buttons bottom */}
            <div className="pt-6 mt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
              <button 
                onClick={() => handleNav('prev')}
                disabled={currentIndex === 0}
                className={cn(
                  "w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium transition order-2 sm:order-1",
                  currentIndex === 0 ? "text-gray-400 cursor-not-allowed bg-gray-50" : "text-gray-700 hover:bg-gray-100 border border-gray-200"
                )}
              >
                <ArrowLeft className="h-4 w-4" /> Câu trước
              </button>
              
              <div className="text-sm font-medium text-gray-500 order-1 sm:order-2 shrink-0">
                Câu <span className="text-gray-900 font-bold">{currentIndex + 1}</span> / {interviewQuestions.length}
              </div>

              <button 
                onClick={() => handleNav('next')}
                disabled={currentIndex === interviewQuestions.length - 1}
                className={cn(
                  "w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium transition shadow-sm order-3",
                  currentIndex === interviewQuestions.length - 1 
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-transparent" 
                    : "bg-gray-900 text-white hover:bg-black border border-transparent"
                )}
              >
                 Câu tiếp theo <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

