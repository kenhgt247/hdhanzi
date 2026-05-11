import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Volume2, CheckCircle, ChevronRight, Headphones, BookOpen, PenTool, XCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { useAuth } from '../../../contexts/AuthContext';
import { useStudyProgress } from '../../../contexts/StudyProgressContext';
import { weakWordsService } from '../../../services/weakWordsService';
import { getLessonById, fetchLessonById, getLessons } from '../../../services/lessonService';
import { HanziWriterPractice } from '../../../components/HanziWriterPractice';
import { PinyinTypingPractice } from '../../../components/PinyinTypingPractice';
import { SpeakingPractice } from '../../../components/SpeakingPractice';
import { Lesson, VocabularyItem, QuizQuestion } from '../../../types/lesson';

export function LessonDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { setLastLessonId, addCompletedLesson, completedLessonIds } = useStudyProgress();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const loadingIdRef = useRef<string | null>(null);
  const [activeTab, setActiveTab] = useState<'vocab' | 'writing' | 'patterns' | 'speaking' | 'grammar' | 'reading' | 'listening' | 'quiz'>('vocab');

  // Scoring states
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [scoreInfo, setScoreInfo] = useState<{ score: number; total: number; passed: boolean } | null>(null);

  // Writing state
  const [activeWritingVocab, setActiveWritingVocab] = useState<VocabularyItem | null>(null);

  const [prevLessonId, setPrevLessonId] = useState<string | null>(null);
  const [nextLessonId, setNextLessonId] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      // 1. Clear state for new lesson
      setShowResults(false);
      setAnswers({});
      setScoreInfo(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // 2. Identify previous and next lessons
      const allLessons = getLessons();
      const idx = allLessons.findIndex(l => l.id === id);
      if (idx !== -1) {
        setPrevLessonId(idx > 0 ? allLessons[idx - 1].id : null);
        setNextLessonId(idx < allLessons.length - 1 ? allLessons[idx + 1].id : null);
      }

      // 3. Sync Load: Initial UI state
      const localData = getLessonById(id);
      if (localData) {
        setLesson(localData);
        setLastLessonId(id);
        
        const params = new URLSearchParams(location.search);
        const tabParam = params.get('tab');
        if (tabParam && ['vocab', 'writing', 'patterns', 'speaking', 'grammar', 'reading', 'listening', 'quiz'].includes(tabParam)) {
          setActiveTab(tabParam as any);
        }

        if (localData.vocabulary && localData.vocabulary.length > 0) {
          setActiveWritingVocab(localData.vocabulary[0]);
        }
      }

      // 4. Async Load: Fetch latest from database (deduplicated)
      if (loadingIdRef.current === id) return;
      loadingIdRef.current = id;

      fetchLessonById(id, true).then(asyncData => {
        if (asyncData && id === loadingIdRef.current) {
          setLesson(prev => {
            // Only update if there are actual changes to prevent unnecessary re-renders
            // A simple way is to check if grammar or specific fields changed if needed
            // For now, we trust fetchLessonById returns the latest truth
            return asyncData;
          });
        }
      }).catch(err => {
        console.error("fetchLessonById failed:", err);
      }).finally(() => {
        // We keep loadingIdRef.current as id to mark it's done for THIS id
        // In a real app, you might clear it, but here it acts as "already fetched for this mount"
      });
    }
    
    return () => {
      // Cleanup cleanup
    };
  }, [id, setLastLessonId]);

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW';
    window.speechSynthesis.speak(utterance);
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    if (showResults) {
      console.log(`[Quiz] handleAnswerChange blocked: showResults is true`);
      return;
    }
    console.log(`[Quiz] Question ${questionId} selecting: ${value}`);
    setAnswers(prev => {
      const newAnswers = { ...prev, [questionId]: value };
      console.log('[Quiz] Current answers state:', newAnswers);
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    console.log('[Quiz] Submit clicked. Current answers:', answers);
    if (!lesson) return;
    
    const allQuestions = [
      ...(lesson.listening?.questions || []),
      ...(lesson.reading?.questions || []),
      ...(lesson.quiz || [])
    ];
    
    const answeredCount = Object.keys(answers).length;
    console.log(`[Quiz] Answered ${answeredCount} out of ${allQuestions.length}`);
    if (answeredCount < allQuestions.length) {
      const confirmSubmit = window.confirm(`Bạn mới trả lời ${answeredCount}/${allQuestions.length} câu hỏi. Bạn có chắc chắn muốn nộp bài không?`);
      if (!confirmSubmit) return;
    }

    let correctCount = 0;
    allQuestions.forEach(q => {
      const isCorrect = answers[q.id]?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
      if (isCorrect) {
        correctCount++;
      } else if (user?.id && user.id !== 'guest') {
        const matchingVocab = lesson.vocabulary.find(v => 
          v.traditional === q.correctAnswer || 
          v.vietnamese === q.correctAnswer ||
          q.question.includes(v.traditional)
        );

        if (matchingVocab) {
          const isListeningQuestion = lesson.listening?.questions.some(lq => lq.id === q.id);
          
          weakWordsService.recordMistake(user.id, {
            id: matchingVocab.id || matchingVocab.traditional,
            chinese: matchingVocab.traditional,
            pinyin: matchingVocab.pinyin,
            meaning: matchingVocab.vietnamese,
            level: lesson.stage
          }, isListeningQuestion ? 'listening' : 'meaning');
        }
      }
    });

    const passed = (correctCount / allQuestions.length) >= 0.8;
    console.log(`[Quiz] Result: ${correctCount}/${allQuestions.length} - ${passed ? 'PASSED' : 'FAILED'}`);
    setScoreInfo({ score: correctCount, total: allQuestions.length, passed });
    setShowResults(true);
    
    if (passed && lesson?.id) {
       addCompletedLesson(lesson.id);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!lesson) {
    return <div className="p-8 text-center text-gray-500">Đang tải bài học...</div>;
  }

  const renderQuestions = (questions: QuizQuestion[], startIndex: number = 0) => {
    if (!questions || questions.length === 0) return null;
    return (
      <div className="space-y-6 mt-8 pt-8 border-t border-dashed">
        <h3 className="font-bold text-lg text-gray-900 border-b pb-2 inline-block">Câu hỏi trắc nghiệm</h3>
        {questions.map((q, idx) => {
          const isCorrect = answers[q.id]?.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
          
          return (
            <div key={q.id} className={cn("rounded-xl border p-6 shadow-sm", showResults && isCorrect ? "border-green-500 bg-green-50" : showResults && !isCorrect ? "border-red-500 bg-red-50" : "bg-white")}>
              <h3 className="font-semibold text-gray-900 text-lg mb-4">{startIndex + idx + 1}. {q.question}</h3>
              
              {q.type === 'multiple_choice' && q.options && (
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                     let optClass = "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ";
                     if (showResults) {
                       if (opt === q.correctAnswer) optClass += "border-green-500 bg-green-100 font-bold ";
                       else if (answers[q.id] === opt) optClass += "border-red-500 bg-red-100 text-red-700 ";
                       else optClass += "bg-white opacity-60 ";
                     } else {
                       optClass += answers[q.id] === opt ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50 bg-white";
                     }
                     return (
                      <button 
                        key={optIdx} 
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleAnswerChange(q.id, opt);
                        }}
                        disabled={showResults}
                        className={cn(
                          optClass,
                          "w-full text-left relative z-10"
                        )}
                      >
                        <div className={cn(
                          "w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors pointer-events-none",
                          answers[q.id] === opt ? "border-blue-600 bg-blue-600 shadow-sm" : "border-gray-300 bg-white"
                        )}>
                          {answers[q.id] === opt && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="text-gray-800 font-medium pointer-events-none">{opt}</span>
                      </button>
                    )
                  })}
                </div>
              )}
              {q.type === 'true_false' && q.options && (
                <div className="flex gap-4">
                  {q.options.map((opt, optIdx) => {
                     let optClass = "flex-1 flex items-center justify-center gap-3 p-3 rounded-lg border cursor-pointer transition ";
                     if (showResults) {
                       if (opt === q.correctAnswer) optClass += "border-green-500 bg-green-100 font-bold ";
                       else if (answers[q.id] === opt) optClass += "border-red-500 bg-red-100 text-red-700 ";
                       else optClass += "bg-white opacity-60 ";
                     } else {
                       optClass += answers[q.id] === opt ? "border-blue-600 bg-blue-50" : "hover:bg-gray-50 bg-white";
                     }
                     return (
                      <button 
                        key={optIdx} 
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleAnswerChange(q.id, opt);
                        }}
                        disabled={showResults}
                        className={cn(
                          optClass,
                          "relative z-10"
                        )}
                      >
                        <div className={cn(
                          "w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors pointer-events-none",
                          answers[q.id] === opt ? "border-blue-600 bg-blue-600 shadow-sm" : "border-gray-300 bg-white"
                        )}>
                          {answers[q.id] === opt && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="text-gray-800 font-medium pointer-events-none">{opt}</span>
                      </button>
                    )
                  })}
                </div>
              )}
              {q.type === 'fill_blank' && (
                <div className="pt-2">
                  <input 
                    type="text" 
                    placeholder="Nhập câu trả lời..." 
                    value={answers[q.id] || ''}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    disabled={showResults}
                    className={cn("w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none", showResults && isCorrect ? "border-green-500 bg-green-50 text-green-700 font-bold" : showResults && !isCorrect ? "border-red-500 bg-red-50 text-red-700 font-bold" : "")} 
                  />
                  {showResults && !isCorrect && (
                    <p className="mt-2 text-sm text-green-700 bg-green-100 p-2 rounded border border-green-200"><strong>Đáp án đúng:</strong> {q.correctAnswer}</p>
                  )}
                </div>
              )}

              {showResults && (
                <div className="mt-4 p-4 rounded-lg bg-white bg-opacity-70 border border-gray-200 shadow-inner">
                  <p className="text-sm text-gray-700"><span className="font-semibold text-blue-800">Giải thích:</span> {q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const tabs = [
    { id: 'vocab', name: 'Từ vựng', icon: BookOpen },
    { id: 'writing', name: 'Luyện viết', icon: PenTool },
    { id: 'patterns', name: 'Mẫu câu', icon: PenTool },
    { id: 'speaking', name: 'Luyện nói', icon: Volume2 },
    { id: 'grammar', name: 'Ngữ pháp', icon: BookOpen },
    { id: 'listening', name: 'Luyện nghe', icon: Headphones },
    { id: 'reading', name: 'Luyện đọc', icon: BookOpen },
    { id: 'quiz', name: 'Kiểm tra', icon: CheckCircle },
  ];

  const listeningQuestionsCount = lesson.listening?.questions?.length || 0;
  const readingQuestionsCount = lesson.reading?.questions?.length || 0;

  return (
    <div className="mx-auto max-w-5xl space-y-8 pb-12">
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative z-10 flex items-center gap-4">
          <div 
            onClick={() => navigate('/student/lessons')}
            className="p-2 border border-gray-200 bg-white rounded-full flex-shrink-0 cursor-pointer hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">{lesson.stage}</div>
              {completedLessonIds.includes(lesson.id) && (
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-lg text-[10px] font-black border border-emerald-200 shadow-sm shadow-emerald-50">
                  <CheckCircle2 className="w-3 h-3" />
                  ĐÃ HOÀN THÀNH
                </div>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">{lesson.title}</h1>
            <p className="text-gray-500 mt-1 font-medium">{lesson.topic}</p>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 self-end md:self-auto w-full md:w-auto justify-end">
          {prevLessonId && (
            <button 
              onClick={() => navigate(`/student/lessons/${prevLessonId}`)}
              className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Bài trước
            </button>
          )}
          {nextLessonId && (
            <button 
              onClick={() => navigate(`/student/lessons/${nextLessonId}`)}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-sm hover:shadow-md text-sm font-medium"
            >
              Bài tiếp theo
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </header>

      {/* Tabs */}
      <div className="sticky top-0 z-20 bg-white sm:static flex overflow-x-auto border-b scrollbar-hide relative px-4 rounded-t-2xl shadow-sm sm:shadow-none">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={cn(
              "flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors outline-none",
              activeTab === tab.id
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.name}
          </button>
        ))}
      </div>

      <div className="pt-4 pb-20 relative z-30">
        
        {/* TAB TỪ VỰNG */}
        {activeTab === 'vocab' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3">Từ vựng bài học</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {lesson.vocabulary.map((v: VocabularyItem) => (
                <div key={v.id} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-4xl font-black text-gray-900">{v.traditional}</h3>
                      <p className="text-gray-500 mt-2 font-mono bg-gray-50 px-2 py-1 rounded inline-block text-sm">{v.pinyin} <span className="text-xs text-gray-400 ml-2">{v.zhuyin}</span></p>
                    </div>
                    <button 
                      onClick={() => playAudio(v.traditional)}
                      className="rounded-xl p-3 text-blue-600 bg-blue-50 hover:bg-blue-100 transition shadow-sm"
                    >
                      <Volume2 className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="mt-2 text-lg font-semibold text-blue-700">{v.vietnamese} <span className="text-sm font-normal text-gray-500 ml-2 px-2 py-0.5 bg-gray-100 rounded-md">({v.partOfSpeech})</span></div>
                  
                  {(v.exampleTraditional || v.exampleVietnamese) && (
                    <div className="mt-5 bg-slate-50 p-4 rounded-xl border border-gray-100">
                      <p className="font-medium text-gray-900 leading-relaxed text-lg">{v.exampleTraditional}</p>
                      {v.examplePinyin && <p className="text-sm text-gray-400 mt-1 font-mono">{v.examplePinyin}</p>}
                      <p className="text-sm text-gray-600 mt-2">{v.exampleVietnamese}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3 mt-10">
              <button 
                onClick={() => setActiveTab('writing')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:scale-95"
              >
                Tiếp theo: Luyện viết <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* TAB LUYỆN VIẾT */}
        {activeTab === 'writing' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Luyện viết chữ Hán */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <PenTool className="h-6 w-6 text-blue-600" /> Luyện viết chữ Hán
              </h2>
              
              <div className="bg-white rounded-2xl border shadow-sm p-4 sm:p-6 mb-6">
                <div className="flex flex-wrap gap-2 mb-8 items-center justify-center">
                  {lesson.vocabulary.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setActiveWritingVocab(v)}
                      className={cn(
                        "px-4 py-2 rounded-xl font-medium transition-all",
                        activeWritingVocab?.id === v.id
                          ? "bg-blue-600 text-white shadow-md scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      {v.traditional}
                    </button>
                  ))}
                </div>

                {activeWritingVocab && (
                  <div className="flex flex-col items-center">
                    <div className="text-center mb-8">
                      <p className="text-xl font-medium text-gray-600">{activeWritingVocab.pinyin}</p>
                      <p className="text-gray-500">{activeWritingVocab.vietnamese}</p>
                    </div>
                    
                    <div className="flex gap-4 sm:gap-8 flex-wrap justify-center">
                      {Array.from(activeWritingVocab.traditional)
                        .filter(char => /[\u4e00-\u9fa5]/.test(char))
                        .map((char, idx) => (
                        <div key={`${activeWritingVocab.id}-${idx}`} className="flex flex-col items-center">
                          <HanziWriterPractice character={char} size={180} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Luyện gõ Pinyin */}
            <div className="border-t pt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Volume2 className="h-6 w-6 text-green-600" /> Luyện gõ Pinyin (Đánh máy)
              </h2>
              
              <PinyinTypingPractice sentences={lesson.sentencePatterns} />
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-12">
              <button 
                onClick={() => setActiveTab('vocab')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-500 bg-gray-50 hover:bg-gray-100 px-6 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold transition-all active:scale-95"
              >
                <ArrowLeft className="h-4 w-4" /> Quay lại
              </button>
              <button 
                onClick={() => setActiveTab('patterns')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
              >
                Tiếp theo: Mẫu câu <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* TAB MẪU CÂU */}
        {activeTab === 'patterns' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3">Mẫu câu trọng tâm</h2>
            <div className="space-y-4">
              {lesson.sentencePatterns.map((p, idx) => (
                <div key={idx} className="rounded-xl border bg-white p-6 shadow-sm flex items-start gap-4">
                  <button 
                      onClick={() => playAudio(p.traditional)}
                      className="mt-1 flex-shrink-0 rounded-full p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 transition"
                  >
                      <Volume2 className="h-5 w-5" />
                  </button>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{p.traditional}</h3>
                    <p className="text-gray-600 mt-1">{p.pinyin} <span className="text-xs text-gray-400 ml-2">{p.zhuyin}</span></p>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-lg font-medium text-blue-700">{p.vietnamese}</p>
                      <p className="text-sm text-gray-500 mt-2"><span className="font-semibold text-gray-700">Cách dùng:</span> {p.usage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-12">
              <button 
                onClick={() => setActiveTab('writing')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-500 bg-gray-50 hover:bg-gray-100 px-6 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold transition-all active:scale-95"
              >
                <ArrowLeft className="h-4 w-4" /> Quay lại
              </button>
              <button 
                onClick={() => setActiveTab('speaking')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
              >
                Tiếp theo: Luyện nói <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* TAB LUYỆN NÓI */}
        {activeTab === 'speaking' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3">Luyện phát âm & Luyện nói</h2>
            
            <SpeakingPractice 
              sentences={[...lesson.sentencePatterns, ...lesson.vocabulary.map(v => ({ traditional: v.traditional, pinyin: v.pinyin, vietnamese: v.vietnamese }))]} 
              level={lesson.stage} 
            />

            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-12">
              <button 
                onClick={() => setActiveTab('patterns')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-500 bg-gray-50 hover:bg-gray-100 px-6 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold transition-all active:scale-95"
              >
                <ArrowLeft className="h-4 w-4" /> Quay lại
              </button>
              <button 
                onClick={() => setActiveTab('grammar')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
              >
                Tiếp theo: Ngữ pháp <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* TAB NGỮ PHÁP */}
        {activeTab === 'grammar' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3">Ngữ pháp</h2>
            {(!lesson.grammar || (Array.isArray(lesson.grammar) ? lesson.grammar.length === 0 : Object.keys(lesson.grammar).length === 0)) ? (
              <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <p className="text-gray-500 font-medium">Chưa có nội dung ngữ pháp cho bài này.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {(Array.isArray(lesson.grammar) ? lesson.grammar : []).map((g: any, idx: number) => (
                  <div key={idx} className="rounded-2xl border bg-white p-6 shadow-sm">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">{g.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Cấu trúc</h4>
                      <div className="bg-blue-50 text-blue-700 font-medium px-4 py-3 rounded-lg border border-blue-100">
                        {g.structure}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Giải thích</h4>
                      <p className="text-gray-800 leading-relaxed font-medium">{g.explanation}</p>
                    </div>

                    {g.examples && g.examples.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Ví dụ</h4>
                        <div className="space-y-3">
                          {g.examples.map((ex: any, i: number) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-start gap-3">
                              <button 
                                onClick={() => playAudio(ex.traditional)}
                                className="mt-0.5 flex-shrink-0 text-blue-500 hover:text-blue-700"
                              >
                                <Volume2 className="h-5 w-5" />
                              </button>
                              <div>
                                <p className="text-lg font-bold text-gray-900 mb-1">{ex.traditional}</p>
                                <p className="text-sm text-gray-500 font-mono mb-2">{ex.pinyin}</p>
                                <p className="text-gray-700">{ex.vietnamese}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-12">
              <button 
                onClick={() => setActiveTab('speaking')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-500 bg-gray-50 hover:bg-gray-100 px-6 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold transition-all active:scale-95"
              >
                <ArrowLeft className="h-4 w-4" /> Quay lại
              </button>
              <button 
                onClick={() => setActiveTab('listening')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
              >
                Tiếp theo: Luyện nghe <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* TAB LUYỆN NGHE */}
        {activeTab === 'listening' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3">Luyện nghe: {lesson.listening.title}</h2>
            <div className="rounded-xl border bg-white p-6 shadow-sm space-y-6">
              <div className="flex justify-center p-8 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                <button 
                  onClick={() => playAudio(lesson.listening.transcriptTraditional)}
                  className="flex flex-col items-center gap-3 text-blue-600 hover:text-blue-800 transition group"
                >
                  <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition">
                    <Headphones className="h-10 w-10" />
                  </div>
                  <span className="font-semibold">Nhấn để nghe bài hội thoại</span>
                </button>
              </div>

              <div className="space-y-4">
                <details className="group cursor-pointer">
                  <summary className="font-semibold text-gray-900 outline-none list-none bg-gray-50 p-4 rounded-lg flex items-center justify-between border">
                    <span>Xem Transcript</span>
                    <span className="text-blue-600 text-sm font-normal group-open:hidden">Hiện</span>
                    <span className="text-blue-600 text-sm font-normal hidden group-open:inline">Ẩn</span>
                  </summary>
                  <div className="p-4 border border-t-0 space-y-6 rounded-b-lg bg-white -mt-2 pt-6">
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Tiếng Trung</h4>
                      <p className="whitespace-pre-line text-lg font-medium text-gray-900 leading-relaxed">{lesson.listening.transcriptTraditional}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Pinyin</h4>
                      <p className="whitespace-pre-line text-gray-600">{lesson.listening.transcriptPinyin}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-2">Tiếng Việt</h4>
                      <p className="whitespace-pre-line text-gray-800">{lesson.listening.transcriptVietnamese}</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Listening Questions */}
            {lesson.listening.questions && lesson.listening.questions.length > 0 && (
                renderQuestions(lesson.listening.questions, 0)
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-12">
              <button 
                onClick={() => setActiveTab('grammar')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-500 bg-gray-50 hover:bg-gray-100 px-6 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold transition-all active:scale-95"
              >
                <ArrowLeft className="h-4 w-4" /> Quay lại
              </button>
              <button 
                onClick={() => setActiveTab('reading')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
              >
                Tiếp theo: Luyện đọc <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* TAB LUYỆN ĐỌC */}
        {activeTab === 'reading' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-blue-500 pl-3">Luyện đọc: {lesson.reading.title}</h2>
            <div className="rounded-xl border bg-white p-8 shadow-sm space-y-8">
              
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Bài đọc</h4>
                <p className="text-xl text-gray-900 leading-loose font-medium">
                  {lesson.reading.passageTraditional}
                </p>
                <button 
                  onClick={() => playAudio(lesson.reading.passageTraditional)}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                >
                  <Volume2 className="h-4 w-4" /> Nghe đọc mẫu
                </button>
              </div>

               <details className="group cursor-pointer pt-6 border-t">
                  <summary className="font-semibold text-gray-900 outline-none list-none flex items-center justify-between">
                    <span>Xem dịch nghĩa & Pinyin</span>
                    <span className="text-blue-600 text-sm font-normal group-open:hidden">+ Mở rộng</span>
                    <span className="text-blue-600 text-sm font-normal hidden group-open:inline">- Thu gọn</span>
                  </summary>
                  <div className="mt-4 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Pinyin</h4>
                      <p className="text-gray-600 leading-relaxed">{lesson.reading.passagePinyin}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">Tiếng Việt</h4>
                      <p className="text-gray-800 leading-relaxed font-medium">{lesson.reading.passageVietnamese}</p>
                    </div>
                  </div>
                </details>
            </div>

            {/* Reading Questions */}
            {lesson.reading.questions && lesson.reading.questions.length > 0 && (
                renderQuestions(lesson.reading.questions, listeningQuestionsCount)
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-12">
              <button 
                onClick={() => setActiveTab('listening')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-500 bg-gray-50 hover:bg-gray-100 px-6 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold transition-all active:scale-95"
              >
                <ArrowLeft className="h-4 w-4" /> Quay lại
              </button>
              <button 
                onClick={() => setActiveTab('quiz')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
              >
                Tiếp theo: Kiểm tra <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* TAB KIỂM TRA (QUIZ) */}
        {activeTab === 'quiz' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {showResults && scoreInfo && (
              <div className={cn("p-8 rounded-xl border-2 mb-8 text-center", scoreInfo.passed ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50")}>
                <div className="flex justify-center mb-6">
                  {scoreInfo.passed ? <CheckCircle className="h-16 w-16 text-green-500" /> : <XCircle className="h-16 w-16 text-red-500" />}
                </div>
                <h2 className="text-3xl font-bold mb-3">
                  {scoreInfo.passed ? "Hoàn thành xuất sắc!" : "Cần cố gắng thêm!"}
                </h2>
                <p className="text-xl text-gray-800 mb-6 font-medium">
                  Bạn đã trả lời đúng <strong className={cn("text-2xl mx-1", scoreInfo.passed ? "text-green-700" : "text-red-700")}>{scoreInfo.score}/{scoreInfo.total}</strong> câu hỏi.
                </p>
                {!scoreInfo.passed && (
                  <p className="text-red-700 font-medium bg-white inline-block px-5 py-3 rounded-lg border border-red-200">
                    Bạn chưa đạt yêu cầu để hoàn thành bài học (Ít nhất 80%). Hãy xem lại các câu sai bên dưới và làm lại nhé!
                  </p>
                )}
                {scoreInfo.passed && (
                  <p className="text-green-700 font-medium bg-white inline-block px-5 py-3 rounded-lg border border-green-200 shadow-sm">
                    Chúc mừng bạn đã hoàn thành xuất sắc bài học này! Kiến thức của bạn rất vững.
                  </p>
                )}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    {scoreInfo.passed ? (
                        <>
                            <button
                                onClick={() => navigate('/student/lessons')}
                                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-50 transition font-bold"
                            >
                                Quay về danh sách
                            </button>
                            {(() => {
                                const lessonsList = getLessons();
                                const currentIndex = lessonsList.findIndex(l => l.id === lesson.id);
                                const nextLesson = currentIndex !== -1 && currentIndex + 1 < lessonsList.length ? lessonsList[currentIndex + 1] : null;
                                if (nextLesson) {
                                    return (
                                        <button
                                        onClick={() => {
                                            navigate(`/student/lessons/${nextLesson.id}`);
                                            setShowResults(false);
                                            setScoreInfo(null);
                                            setAnswers({});
                                            setActiveTab('vocab');
                                        }}
                                        className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-bold shadow-sm flex items-center justify-center gap-2"
                                        >
                                           Bài học tiếp theo <ChevronRight className="w-5 h-5" />
                                        </button>
                                    );
                                }
                                return null;
                            })()}
                        </>
                    ) : (
                        <button
                            onClick={() => {
                                setShowResults(false);
                                setScoreInfo(null);
                                setAnswers({});
                                setActiveTab('vocab');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="bg-white border-2 border-red-500 text-red-600 px-8 py-3 rounded-xl hover:bg-red-50 transition font-bold"
                        >
                            Học lại từ đầu
                        </button>
                    )}
                </div>
              </div>
            )}

            {!showResults && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-blue-900 relative">
                    <h2 className="text-xl font-bold mb-2">Trắc nghiệm tổng hợp</h2>
                    <p className="text-blue-700">Hãy hoàn thành tất cả các câu hỏi trong bài (kể cả phần đọc, nghe ở tab trước) trước khi nộp bài. Yêu cầu đúng 80% để qua bài.</p>
                </div>
            )}

            {lesson.quiz && lesson.quiz.length > 0 && (
                renderQuestions(lesson.quiz, listeningQuestionsCount + readingQuestionsCount)
            )}
            
            {!showResults && (
              <div className="flex flex-col sm:flex-row justify-between gap-3 mt-12 pt-8 border-t">
                <button 
                  onClick={() => setActiveTab('reading')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-gray-500 bg-gray-50 hover:bg-gray-100 px-6 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold transition-all active:scale-95"
                >
                  <ArrowLeft className="h-4 w-4" /> Quay lại
                </button>
                <button 
                  onClick={handleSubmit}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 sm:py-3 rounded-2xl sm:rounded-xl font-bold shadow-lg shadow-green-100 hover:bg-green-700 transition-all active:scale-95"
                >
                  Nộp bài & Hoàn thành
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
