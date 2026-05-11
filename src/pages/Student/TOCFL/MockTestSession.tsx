import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  Volume2, 
  AlertCircle,
  CheckCircle,
  Timer,
  LayoutGrid,
  X
} from 'lucide-react';
import { mockTestService } from '../../../services/mockTestService';
import { weakWordsService } from '../../../services/weakWordsService';
import { useAuth } from '../../../contexts/AuthContext';
import { TOCFLLevel, MockQuestion, MockTest } from '../../../types/study';
import { cn } from '../../../lib/utils';

export function MockTestSession() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [test, setTest] = useState<MockTest | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<{ [id: string]: string }>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showQuestionSheet, setShowQuestionSheet] = useState(false);

  useEffect(() => {
    async function loadTest() {
      if (!testId) {
        navigate('/student/tocfl');
        return;
      }
      const t = await mockTestService.getMockTestById(testId);
      if (t) {
        setTest(t);
        setTimeLeft(t.durationMinutes * 60);
      } else {
        navigate('/student/tocfl');
      }
    }
    loadTest();
  }, [testId, navigate]);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (test) submitTest();
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const submitTest = async () => {
    if (!test || !user) return;
    setIsSubmitting(true);

    let score = 0;
    let listeningScore = 0;
    let readingScore = 0;

    test.questions.forEach(q => {
      const isCorrect = answers[q.id] === q.correctAnswer;
      if (isCorrect) {
        score++;
        if (q.type === 'listening') listeningScore++;
        else readingScore++;
      } else {
        // Record mistake if related word exists
        if (q.relatedWordId && user.id !== 'guest') {
          // Simple mock vocab for mistake recording
          weakWordsService.recordMistake(user.id, {
            id: q.relatedWordId,
            chinese: q.relatedWordId,
            pinyin: '',
            meaning: ''
          }, q.type === 'listening' ? 'listening' : 'meaning');
        }
      }
    });

    const resultData = {
      testId: test.id,
      testTitle: test.title,
      level: test.level,
      userId: user.id || 'guest',
      score,
      totalQuestions: test.questions.length,
      listeningScore,
      readingScore,
      answers,
      timeSpentMinutes: Math.round((test.durationMinutes * 60 - timeLeft) / 60)
    };

    try {
      const resultId = await mockTestService.saveResult(user.id, resultData);
      if (resultId) {
        navigate(`/student/tocfl-result/${resultId}`, { state: { localResult: { ...resultData, id: resultId } } });
      } else {
        // Fallback if saveResult returned null
        navigate(`/student/tocfl-result/local`, { state: { localResult: { ...resultData, id: 'local' } } });
      }
    } catch (error) {
      console.error('Error saving result:', error);
      // Fallback if saveResult throws
      navigate(`/student/tocfl-result/local`, { state: { localResult: { ...resultData, id: 'local' } } });
    }
  };

  if (!test) return null;

  const currentQuestion = test.questions[currentIdx];

  return (
    <div className="fixed inset-0 z-50 bg-gray-50 flex flex-col">
      {/* Test Header */}
      <header className="flex-none bg-white border-b px-4 py-2 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowExitConfirm(true)}
            className="p-1.5 hover:bg-gray-100 rounded-lg"
          >
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>
          <div className="hidden sm:block">
            <h1 className="text-xs font-bold text-gray-900 line-clamp-1 max-w-[120px]">{test.title}</h1>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-blue-600 font-black text-base">
            <Timer className="w-4 h-4" />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowQuestionSheet(true)}
            className="lg:hidden p-2 bg-gray-100 text-gray-600 rounded-lg"
            title="Danh sách câu hỏi"
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button 
            onClick={() => submitTest()}
            className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold shadow-md shadow-blue-100 whitespace-nowrap"
          >
            Nộp bài
          </button>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="flex-none w-full bg-gray-200 h-1">
        <div 
          className="bg-blue-600 h-full transition-all duration-300"
          style={{ width: `${((currentIdx + 1) / test.questions.length) * 100}%` }}
        />
      </div>

      <main className="flex-1 overflow-y-auto p-3 sm:p-4 flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto w-full pb-24 lg:pb-4">
        {/* Question Panel */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="bg-white rounded-[2rem] p-5 sm:p-6 shadow-sm border border-gray-100 flex-1 flex flex-col min-h-fit mb-4 sm:mb-0">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                {currentQuestion.type === 'listening' ? 'Phần Nghe' : 'Phần Đọc'}
              </span>
              <span className="text-xs font-bold text-gray-400">Câu {currentIdx + 1}/{test.questions.length}</span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center py-2">
              {currentQuestion.type === 'listening' && (
                <button className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-200">
                  <Volume2 className="w-8 h-8 sm:w-10 sm:h-10" />
                </button>
              )}

              {currentQuestion.imageUrl && (
                <img src={currentQuestion.imageUrl} alt="Question" className="max-h-40 sm:max-h-48 object-contain rounded-2xl mb-6 border bg-gray-50 p-2" />
              )}

              <h2 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-8 px-2 leading-tight">
                {currentQuestion.question}
              </h2>

              <div className="grid gap-2.5 w-full">
                {currentQuestion.options.map((option, i) => {
                  const isSelected = answers[currentQuestion.id] === option;
                  return (
                    <button
                      key={i}
                      onClick={() => handleAnswerSelect(currentQuestion.id, option)}
                      className={cn(
                        "w-full p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between group active:scale-[0.98]",
                        isSelected 
                          ? "border-blue-600 bg-blue-50 text-blue-700 shadow-lg shadow-blue-50"
                          : "border-gray-50 bg-gray-50/50 hover:border-blue-200"
                      )}
                    >
                      <span className="font-bold flex items-center gap-3 text-sm sm:text-base">
                        <span className={cn(
                          "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm transition-colors flex-shrink-0",
                          isSelected ? "bg-blue-600 text-white" : "bg-white text-gray-400 border"
                        )}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="line-clamp-2">{option}</span>
                      </span>
                      {isSelected && <CheckCircle className="w-5 h-5 flex-shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Question Grid (Desktop Sidebar) */}
        <div className="hidden lg:block w-72 h-fit bg-white rounded-3xl p-6 border shadow-sm sticky top-4">
          <h3 className="font-bold text-gray-900 mb-4">Danh sách câu hỏi</h3>
          <div className="grid grid-cols-5 gap-2">
            {test.questions.map((q, i) => (
              <button
                key={`${q.id || 'q'}-${i}`}
                onClick={() => setCurrentIdx(i)}
                className={cn(
                  "w-10 h-10 rounded-xl text-xs font-bold transition-all",
                  currentIdx === i ? "bg-blue-600 text-white ring-2 ring-blue-100" :
                  answers[q.id] ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                  "bg-gray-50 text-gray-400"
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <button
               onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
               disabled={currentIdx === 0}
               className="w-full py-4 border-2 border-gray-100 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2 transition-all disabled:opacity-30"
            >
               <ChevronLeft className="w-4 h-4" /> Quay lại
            </button>
            <button
               onClick={() => {
                 if (currentIdx < test.questions.length - 1) {
                   setCurrentIdx(prev => prev + 1);
                 } else {
                   submitTest();
                 }
               }}
               className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl active:scale-[0.98] transition-all"
            >
               {currentIdx < test.questions.length - 1 ? (
                 <>Tiếp tục <ChevronRight className="w-4 h-4" /></>
               ) : 'Nộp bài thi'}
            </button>
          </div>
        </div>
      </main>

      {/* Navigation Footer (Mobile) */}
      <footer className="lg:hidden flex-none bg-white shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] border-t z-20">
        <div className="flex justify-between items-center gap-2 p-3 pb-[calc(1rem+env(safe-area-inset-bottom))] max-w-2xl mx-auto">
          <button
            disabled={currentIdx === 0}
            onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
            className="flex flex-col items-center justify-center w-16 h-14 border border-gray-200 rounded-2xl text-gray-600 font-bold bg-white hover:bg-gray-50 disabled:opacity-40 transition-all shadow-sm active:scale-[0.98]"
            title="Câu trước"
          >
             <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
             onClick={() => setShowQuestionSheet(true)}
             className="flex-1 flex flex-col items-center justify-center h-14 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 active:bg-gray-200 transition-colors"
          >
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1 mb-0.5">
                <LayoutGrid className="w-3.5 h-3.5" /> Câu hỏi
             </span>
             <span className="text-base font-black text-gray-900 leading-none">
                {currentIdx + 1} <span className="text-gray-400 text-sm">/ {test.questions.length}</span>
             </span>
          </button>

          <button
            onClick={() => {
              if (currentIdx < test.questions.length - 1) {
                setCurrentIdx(prev => prev + 1);
              } else {
                submitTest();
              }
            }}
            className="flex flex-col items-center justify-center w-16 h-14 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-xl shadow-gray-200 active:scale-[0.98]"
            title="Câu tiếp theo"
          >
            {currentIdx < test.questions.length - 1 ? (
              <ChevronRight className="w-6 h-6" />
            ) : (
              <span className="text-xs">Nộp</span>
            )}
          </button>
        </div>
      </footer>

      {/* Question Sheet Modal (Mobile) */}
      <AnimatePresence>
        {showQuestionSheet && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
          >
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] p-6 sm:p-8 max-w-md w-full max-h-[85vh] flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-gray-900">Danh sách câu hỏi</h3>
                <button 
                  onClick={() => setShowQuestionSheet(false)}
                  className="p-2 bg-gray-100 rounded-xl"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <div className="grid grid-cols-5 gap-3 mb-6">
                  {test.questions.map((q, i) => (
                    <button
                      key={`${q.id || 'q'}-${i}`}
                      onClick={() => {
                        setCurrentIdx(i);
                        setShowQuestionSheet(false);
                      }}
                      className={cn(
                        "aspect-square rounded-2xl text-xs font-bold transition-all flex items-center justify-center",
                        currentIdx === i ? "bg-blue-600 text-white scale-110 shadow-lg shadow-blue-100" :
                        answers[q.id] ? "bg-emerald-50 text-emerald-600 border-2 border-emerald-100" :
                        "bg-gray-50 text-gray-400 border-2 border-transparent"
                      )}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setShowQuestionSheet(false)}
                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold mt-4"
              >
                Tiếp tục làm bài
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit Confirmation Modal */}
      <AnimatePresence>
        {showExitConfirm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full text-center"
            >
              <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thoát bài thi?</h3>
              <p className="text-gray-500 mb-8">Kết quả của bạn sẽ không được lưu nếu bạn thoát lúc này.</p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => navigate('/student/tocfl')}
                  className="w-full py-3 bg-red-50 text-red-600 rounded-xl font-bold"
                >
                  Xác nhận thoát
                </button>
                <button 
                  onClick={() => setShowExitConfirm(false)}
                  className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold"
                >
                  Tiếp tục thi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submitting Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-6">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
          <p className="text-xl font-bold text-gray-900">Đang chấm điểm bài thi của bạn...</p>
        </div>
      )}
    </div>
  );
}
