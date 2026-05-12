import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Volume2, Check, X, Mic, BookOpen, Send, PenTool, ArrowLeft, Brain, FileAudio, Keyboard, NotebookPen, Headphones, Square, CheckCircle2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { vocabularyService } from '../../../services/vocabularyService';
import { tocflVocabularies as seedVocabularies, Vocab } from '../../../data/vocabulary';
import { HanziWriterPractice } from '../../../components/HanziWriterPractice';
import { useStudyProgress } from '../../../contexts/StudyProgressContext';
import { useAuth } from '../../../contexts/AuthContext';
import { weakWordsService } from '../../../services/weakWordsService';
import { ConversationListeningMode } from './ConversationListeningMode';
import { GoogleGenAI, Type } from '@google/genai';

type PracticeMode = 'flashcard' | 'quiz' | 'listening' | 'listening_writing' | 'speaking' | 'drawing' | 'dictation' | 'conversation';

export function Vocabulary() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addLearnedWord, learnedWordIds } = useStudyProgress();
  const [selectedLevel, setSelectedLevel] = useState<string>('B2');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;
  const [isPracticing, setIsPracticing] = useState(false);
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('flashcard');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tocflVocabularies, setTocflVocabularies] = useState<Vocab[]>(seedVocabularies);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await vocabularyService.getVocabularies();
      setTocflVocabularies(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const filteredVocabs = useMemo(() => {
    if (selectedLevel === 'All') return tocflVocabularies;
    return tocflVocabularies.filter(v => v.level === selectedLevel);
  }, [selectedLevel, tocflVocabularies]);

  const totalPages = Math.ceil(filteredVocabs.length / itemsPerPage);

  const paginatedVocabs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredVocabs.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredVocabs, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedLevel]);

  const handleStartPractice = (mode: PracticeMode) => {
    setPracticeMode(mode);
    setIsPracticing(true);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (paginatedVocabs.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % paginatedVocabs.length);
    }
  };

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-TW';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const activeVocab = useMemo(() => paginatedVocabs[currentIndex], [paginatedVocabs, currentIndex]);

  const handleRemembered = () => {
    if (activeVocab) {
      addLearnedWord(activeVocab.id);
    }
    handleNext();
  };

  const handleMistake = (vocab: Vocab, type: any) => {
    if (user?.id) {
      weakWordsService.recordMistake(user.id, {
        id: vocab.id || vocab.traditional,
        chinese: vocab.traditional,
        pinyin: vocab.pinyin,
        meaning: vocab.vietnamese,
        level: vocab.level
      }, type);
    }
  };

  if (isPracticing) {
    const currentVocab = paginatedVocabs[currentIndex] || paginatedVocabs[0];
    
    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <header className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100 gap-4">
           <button onClick={() => setIsPracticing(false)} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium self-start sm:self-center flex-shrink-0">
              <ArrowLeft className="w-5 h-5" /> Trở về
           </button>
           
           <div className="flex w-full sm:w-auto flex-1 items-center bg-gray-100 p-1.5 rounded-xl overflow-x-auto sm:overflow-visible sm:flex-wrap scrollbar-hide gap-1 flex-nowrap sm:justify-center">
              <button 
                onClick={() => setPracticeMode('flashcard')} 
                className={cn("whitespace-nowrap flex-shrink-0 px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5", practiceMode === 'flashcard' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
              >
                <BookOpen className="w-4 h-4"/> Đọc nhớ
              </button>
              <button 
                onClick={() => setPracticeMode('quiz')} 
                className={cn("whitespace-nowrap flex-shrink-0 px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5", practiceMode === 'quiz' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
              >
                <Check className="w-4 h-4"/> Trắc nghiệm
              </button>
              <button 
                onClick={() => setPracticeMode('speaking')} 
                className={cn("whitespace-nowrap flex-shrink-0 px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5", practiceMode === 'speaking' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
              >
                <Mic className="w-4 h-4"/> Nói
              </button>
              <button 
                onClick={() => setPracticeMode('listening')} 
                className={cn("whitespace-nowrap flex-shrink-0 px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5", practiceMode === 'listening' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
              >
                <Volume2 className="w-4 h-4"/> Luyện nghe
              </button>
              <button 
                onClick={() => setPracticeMode('listening_writing')} 
                className={cn("whitespace-nowrap flex-shrink-0 px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5", practiceMode === 'listening_writing' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
              >
                <Keyboard className="w-4 h-4"/> Nghe viết
              </button>
              <button 
                onClick={() => setPracticeMode('conversation')} 
                className={cn("whitespace-nowrap flex-shrink-0 px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5", practiceMode === 'conversation' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
              >
                <Headphones className="w-4 h-4"/> Hội thoại
              </button>
              <button 
                onClick={() => setPracticeMode('drawing')} 
                className={cn("whitespace-nowrap flex-shrink-0 px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5", practiceMode === 'drawing' ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700")}
              >
                <PenTool className="w-4 h-4"/> Viết chữ
              </button>
           </div>
           
           <div className="font-semibold text-gray-600 bg-gray-50 px-3 py-2 rounded-lg text-sm whitespace-nowrap hidden sm:block flex-shrink-0">
             {currentIndex + 1} / {paginatedVocabs.length}
           </div>
        </header>

        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            {practiceMode === 'flashcard' && <FlashcardMode key="flashcard" vocab={currentVocab} onNext={handleNext} onRemembered={handleRemembered} onMistake={() => handleMistake(currentVocab, 'meaning')} playAudio={playAudio} />}
            {practiceMode === 'quiz' && <QuizMode key="quiz" vocab={currentVocab} onNext={handleNext} allVocabs={filteredVocabs} onMistake={() => handleMistake(currentVocab, 'meaning')} />}
            {practiceMode === 'listening' && <ListeningMode key="listening" vocab={currentVocab} onNext={handleNext} allVocabs={filteredVocabs} playAudio={playAudio} onMistake={() => handleMistake(currentVocab, 'listening')} />}
            {practiceMode === 'listening_writing' && <WritingMode key="writing" vocab={currentVocab} onNext={handleNext} playAudio={playAudio} onMistake={() => handleMistake(currentVocab, 'hanzi')} />}
            {practiceMode === 'conversation' && <ConversationListeningMode key="conversation" vocab={currentVocab} onNext={handleNext} playAudio={playAudio} />}
            {practiceMode === 'speaking' && <SpeakingMode key="speaking" vocab={currentVocab} onNext={handleNext} playAudio={playAudio} onMistake={() => handleMistake(currentVocab, 'speaking')} />}
            {practiceMode === 'drawing' && <DrawingMode key="drawing" vocab={currentVocab} onNext={handleNext} />}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 pb-12">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div 
            onClick={() => navigate(-1)}
            className="p-2 border border-gray-200 bg-white rounded-full flex-shrink-0 cursor-pointer hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Cấp độ {selectedLevel}</div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Từ vựng TOCFL {selectedLevel}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
             <select 
               value={selectedLevel}
               onChange={(e) => setSelectedLevel(e.target.value)}
               className="text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm hover:bg-gray-50"
             >
               {['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'All'].map(level => (
                 <option key={level} value={level}>{level === 'All' ? 'Tất cả' : `TOCFL ${level}`}</option>
               ))}
             </select>

             <button 
                onClick={() => handleStartPractice('flashcard')}
                disabled={loading || filteredVocabs.length === 0}
                className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
             >
               <BookOpen className="w-5 h-5" fill="currentColor" />
               Học trang này
             </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center p-20 flex-col gap-4">
          <div className="w-8 h-8 rounded-full border-4 border-blue-500/30 border-t-blue-600 animate-spin" />
          <p className="text-gray-500 font-medium">Đang tải từ vựng...</p>
        </div>
      ) : filteredVocabs.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm text-center">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Chưa có từ vựng</h3>
          <p className="text-gray-500">Chưa có từ vựng nào cho cấp độ này. Vui lòng quay lại sau.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mục tiêu bài học */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
               <div className="relative z-10">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-8">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Mục tiêu bài học
                  </h2>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 flex-shrink-0 text-emerald-500">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">Nắm vững <strong className="text-gray-900">{filteredVocabs.length} từ vựng</strong> theo chuẩn TOCFL</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 flex-shrink-0 text-emerald-500">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">Cải thiện <strong className="text-gray-900">phát âm và thanh điệu</strong> chuẩn Đài Loan qua các bài luyện nói</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 flex-shrink-0 text-emerald-500">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">Biết nhận diện <strong className="text-gray-900">mặt chữ Phồn thể</strong> và cách viết chữ Hán cơ bản.</span>
                    </li>
                  </ul>
               </div>
            </div>

            {/* Bảng Học Luyện */}
            <div className="bg-slate-50/80 rounded-[2rem] p-6 sm:p-8 border border-gray-100 flex flex-col items-center justify-center shadow-sm">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 mb-4 text-blue-500">
                 <Brain className="w-7 h-7" />
               </div>
               <h3 className="text-2xl tracking-tight font-extrabold text-gray-900 mb-2">{paginatedVocabs.length} từ vựng trang {currentPage}</h3>
               <p className="text-sm text-gray-500 mb-8 max-w-[280px] text-center leading-relaxed">Học và ôn tập hiệu quả với phương pháp lặp lại ngắt quãng (SRS)</p>
               
               <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                  <button 
                    onClick={() => handleStartPractice('flashcard')} 
                    className="flex items-center justify-center gap-2 p-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-sm hover:bg-blue-700 active:scale-95 transition-all"
                  >
                    Học trang này
                  </button>
                  <button 
                    onClick={() => handleStartPractice('quiz')} 
                    className="flex items-center justify-center gap-2 p-3.5 bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold rounded-xl transition-all shadow-sm active:scale-95"
                  >
                    Làm Quiz
                  </button>
                  <button 
                     onClick={() => handleStartPractice('speaking')} 
                     className="flex items-center justify-center gap-2 p-3.5 bg-emerald-500 text-white font-bold rounded-xl shadow-sm hover:bg-emerald-600 active:scale-95 transition-all"
                  >
                    <Mic className="w-4 h-4" /> Luyện nói
                  </button>
                  <button 
                     onClick={() => handleStartPractice('listening')}
                     className="flex items-center justify-center gap-2 p-3.5 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-all shadow-sm active:scale-95"
                  >
                    <FileAudio className="w-4 h-4" /> Luyện nghe
                  </button>
                  <button 
                     onClick={() => handleStartPractice('listening_writing')} 
                     className="flex items-center justify-center gap-2 p-3.5 bg-purple-500 text-white font-bold rounded-xl shadow-sm hover:bg-purple-600 active:scale-95 transition-all"
                  >
                    <Keyboard className="w-4 h-4" /> Nghe & Viết
                  </button>
                  <button 
                     onClick={() => handleStartPractice('drawing')} 
                     className="flex items-center justify-center gap-2 p-3.5 bg-rose-500 text-white font-bold rounded-xl shadow-sm hover:bg-rose-600 active:scale-95 transition-all"
                  >
                    <NotebookPen className="w-4 h-4" /> Viết Phồn thể
                  </button>
               </div>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
               <h3 className="text-xl font-bold text-gray-900">Danh sách từ vựng</h3>
               <div className="flex items-center gap-3">
                 <span className="text-sm text-gray-500 font-medium">Cấp độ:</span>
                 <select 
                   value={selectedLevel}
                   onChange={(e) => setSelectedLevel(e.target.value)}
                   className="text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl py-2 px-3 outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm hover:bg-gray-50"
                 >
                   {['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'All'].map(level => (
                     <option key={level} value={level}>{level === 'All' ? 'Tất cả' : `TOCFL ${level}`}</option>
                   ))}
                 </select>
               </div>
            </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedVocabs.map((vocab, i) => {
             const isLearned = learnedWordIds.includes(vocab.id);
             
             return (
              <div 
                key={vocab.id || i} 
                className={cn(
                  "bg-white border rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col group cursor-pointer h-full relative overflow-hidden",
                  isLearned ? "border-emerald-100 bg-emerald-50/30 shadow-inner" : "border-gray-100 shadow-sm"
                )}
                onClick={() => { setCurrentIndex(i); handleStartPractice('flashcard'); }}
              >
                 {isLearned && (
                   <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500 text-white rounded-bl-xl shadow-sm z-10">
                     <CheckCircle2 className="w-3.5 h-3.5" />
                   </div>
                 )}
                 <div className="flex items-start justify-between mb-3">
                   <div className={cn(
                     "text-2xl font-black",
                     isLearned ? "text-emerald-800" : "text-gray-900"
                   )}>{vocab.traditional}</div>
                   <div className={cn(
                     "px-2 py-0.5 text-xs font-bold rounded-md uppercase tracking-wider",
                     isLearned ? "bg-emerald-100 text-emerald-600" : "bg-blue-50 text-blue-600"
                   )}>
                     {vocab.type || 'N'}
                   </div>
                 </div>
                 <div className="text-sm text-gray-400 font-mono mb-4 bg-gray-50 rounded-lg px-2 py-1 self-start">{vocab.pinyin}</div>
                 <div className={cn(
                   "text-base font-medium leading-snug mb-5 flex-grow",
                   isLearned ? "text-emerald-700/80" : "text-gray-700"
                 )}>
                   {vocab.vietnamese}
                 </div>
                 <div className="flex flex-wrap items-center gap-2 mt-auto border-t border-gray-50 pt-4">
                    <span className={cn(
                      "px-2.5 py-1 text-xs font-semibold rounded-lg border",
                      isLearned ? "bg-emerald-50 text-emerald-500 border-emerald-100" : "bg-gray-50 text-gray-500 border-gray-100"
                    )}>#tocfl{vocab.level?.toLowerCase() || 'level'}</span>
                    <span className={cn(
                      "px-2.5 py-1 text-xs font-semibold rounded-lg border",
                      isLearned ? "bg-emerald-50 text-emerald-500 border-emerald-100" : "bg-gray-50 text-gray-500 border-gray-100"
                    )}>#bài{Math.floor(((currentPage - 1) * itemsPerPage + i)/15)+1}</span>
                 </div>
              </div>
             );
          })}
        </div>
        
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-1 sm:gap-2 mt-12 bg-white rounded-2xl py-2 px-2 sm:py-3 sm:px-4 shadow-sm border border-gray-100 sm:inline-flex w-full sm:w-auto overflow-x-auto">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-2 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
            >
              Trước
            </button>
            <div className="flex items-center gap-1 sm:gap-1.5 px-1 sm:px-3">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum = currentPage;
                if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                // Keep it in bounds just in case totalPages is small
                if (pageNum < 1 || pageNum > totalPages) return null;

                return (
                  <button 
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={cn(
                      "w-8 h-8 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-colors flex-shrink-0",
                      currentPage === pageNum 
                        ? "bg-blue-600 text-white shadow-md" 
                        : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-2 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
            >
              Sau
            </button>
          </div>
        )}
      </div>
      </>
      )}
    </div>
  );
}

// --- FLASHCARD MODE (Đọc Nhớ) ---
function FlashcardMode({ vocab, onNext, onRemembered, onMistake, playAudio }: { vocab: Vocab, onNext: () => void, onRemembered: () => void, onMistake: () => void, playAudio: (text: string) => void }) {
  const [showMeaning, setShowMeaning] = useState(false);

  useEffect(() => {
    setShowMeaning(false);
  }, [vocab]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex h-full min-h-[450px] flex-col items-center justify-center rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-5 left-5 right-5 flex justify-between items-center text-xs font-bold">
        <span className={cn(
          "px-3 py-1 rounded-full uppercase tracking-wider",
          vocab.status === 'new' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
          vocab.status === 'review' ? 'bg-orange-50 text-orange-600 border border-orange-100' :
          'bg-emerald-50 text-emerald-600 border border-emerald-100'
        )}>
          {vocab.status === 'new' ? 'Từ mới' : vocab.status === 'review' ? 'Cần ôn' : 'Đã học'}
        </span>
      </div>

      <div className="group relative text-center mt-8">
        <h2 className="text-7xl sm:text-8xl font-black text-gray-900 tracking-wide select-none">
          {vocab.traditional}
        </h2>
        <button 
          onClick={() => playAudio(vocab.traditional)}
          className="absolute -right-16 top-1/2 -translate-y-1/2 rounded-full p-3 text-blue-500 hover:bg-blue-50 transition-colors shadow-sm border border-transparent hover:border-blue-100"
        >
          <Volume2 className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-8 text-center bg-gray-50 px-6 py-2 rounded-2xl border border-gray-100 shadow-sm">
        <p className="text-xl sm:text-2xl text-gray-700 font-semibold font-mono">{vocab.pinyin}</p>
        {vocab.zhuyin && <p className="text-sm text-gray-400 mt-1">{vocab.zhuyin}</p>}
      </div>

      {showMeaning ? (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-8 text-center w-full max-w-lg flex flex-col items-center"
        >
          <div className="w-12 h-1.5 bg-blue-100 rounded-full mb-6" />
          <p className="text-2xl font-bold text-blue-600">{vocab.vietnamese}</p>
          
          {(vocab.exampleTraditional || vocab.exampleVietnamese) && (
             <div className="rounded-2xl bg-blue-50/50 p-5 mt-6 text-left w-full border border-blue-100/50">
               {vocab.exampleTraditional && (
                 <p className="font-medium text-gray-900 flex items-start gap-2 text-lg">
                   <span className="text-blue-300 text-2xl leading-none pt-0.5">"</span>
                   {vocab.exampleTraditional}
                 </p>
               )}
               {vocab.exampleVietnamese && (
                 <p className="text-sm text-gray-600 mt-2 ml-4 font-medium">{vocab.exampleVietnamese}</p>
               )}
             </div>
          )}

          <div className="mt-8 grid grid-cols-2 gap-4 w-full">
            <button 
              onClick={() => { onMistake(); onNext(); }}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 border-b-4 border-slate-200 p-4 font-bold text-slate-600 hover:bg-slate-200 active:border-b-0 active:translate-y-1 transition-all"
            >
              <X className="h-5 w-5" strokeWidth={3} />
              Quên
            </button>
            <button 
              onClick={onRemembered}
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 border-b-4 border-emerald-600 p-4 font-bold text-white hover:bg-emerald-400 active:border-b-0 active:translate-y-1 transition-all"
            >
              <Check className="h-5 w-5" strokeWidth={3} />
              Đã nhớ
            </button>
          </div>
        </motion.div>
      ) : (
        <button
          onClick={() => setShowMeaning(true)}
          className="mt-12 rounded-xl bg-blue-600 border-b-4 border-blue-700 px-8 py-4 font-bold text-white hover:bg-blue-500 active:border-b-0 active:translate-y-1 w-full max-w-sm transition-all shadow-sm"
        >
          Hiển thị nghĩa
        </button>
      )}
    </motion.div>
  );
}

// --- LISTENING & WRITING MODE (Nghe Viết) ---
function WritingMode({ vocab, onNext, onMistake, playAudio }: { vocab: Vocab, onNext: () => void, onMistake: () => void, playAudio: (text: string) => void }) {
  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInput('');
    setChecked(false);
    setIsCorrect(false);
    setTimeout(() => { playAudio(vocab.traditional); }, 200);
    setTimeout(() => { inputRef.current?.focus(); }, 300);
  }, [vocab]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Normalize string to ignore spaces and case
    const answer = input.toLowerCase().replace(/\s+/g, '');
    const validPinYin = vocab.pinyin.toLowerCase().replace(/\s+/g, '');
    
    // Bỏ dấu pinyin để người dùng nhập chữ ko dấu vẫn được tính là đúng (ví dụ: hao = hǎo)
    const normalizedAnswer = answer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const normalizedValid = validPinYin.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const correct = input.trim() === vocab.traditional || answer === validPinYin || normalizedAnswer === normalizedValid;
    setIsCorrect(correct);
    setChecked(true);
    
    if (correct) {
      playAudio('對');
    } else {
      playAudio('不對');
      onMistake();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex h-full min-h-[450px] flex-col items-center justify-center rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="text-center w-full max-w-md flex flex-col items-center relative z-10">
        <button 
          onClick={() => playAudio(vocab.traditional)}
          className="rounded-[2rem] bg-purple-100 p-8 text-purple-600 hover:bg-purple-200 transition-colors shadow-sm mb-8 relative group"
        >
          <div className="absolute inset-0 bg-purple-200 rounded-[2rem] animate-ping opacity-20" />
          <Volume2 className="h-10 w-10 group-hover:scale-110 transition-transform" />
        </button>
        
        <p className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Nghe và viết lại từ (Pinyin/Hán)</p>
        <p className="text-base text-gray-900 font-medium mb-8 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">Ý nghĩa: {vocab.vietnamese}</p>

        <form onSubmit={handleSubmit} className="w-full relative group">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={checked}
            placeholder="Nhập pinyin hoặc chữ Hán..."
            className={cn(
              "w-full rounded-2xl border-2 border-gray-200 bg-white px-5 py-4 pr-14 text-center text-xl font-bold text-gray-900 outline-none transition-all shadow-sm",
              checked && isCorrect && "border-emerald-500 bg-emerald-50 text-emerald-700",
              checked && !isCorrect && "border-rose-500 bg-rose-50 text-rose-700",
              !checked && "focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
            )}
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
          />
          {!checked && (
             <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 text-white bg-purple-600 rounded-xl hover:bg-purple-700 disabled:opacity-50 disabled:bg-gray-300 transition-colors shadow-sm" disabled={!input.trim()}>
                <Send className="w-5 h-5 -ml-0.5" />
             </button>
          )}
        </form>

        {checked && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 w-full"
          >
             {!isCorrect && (
               <div className="mb-8 rounded-2xl bg-rose-50 p-6 border border-rose-100 text-left">
                 <p className="text-sm text-rose-600 font-bold uppercase tracking-wide mb-3">Đáp án đúng</p>
                 <div className="flex items-end gap-4">
                    <p className="text-4xl font-black text-gray-900">{vocab.traditional}</p>
                    <p className="text-lg font-mono text-gray-600 mb-1">{vocab.pinyin}</p>
                 </div>
               </div>
             )}
             
            <button
               onClick={onNext}
               className={cn(
                 "w-full rounded-xl border-b-4 px-8 py-4 font-bold text-white shadow-sm active:border-b-0 active:translate-y-1 transition-all text-lg",
                 isCorrect 
                   ? "bg-emerald-500 border-emerald-600 hover:bg-emerald-400" 
                   : "bg-blue-600 border-blue-700 hover:bg-blue-500"
               )}
            >
               {isCorrect ? 'Tuyệt vời! Tiếp tục' : 'Tiếp tục nha'}
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// --- SPEAKING MODE (Luyện nói) ---
function SpeakingMode({ vocab, onNext, onMistake, playAudio }: { vocab: Vocab, onNext: () => void, onMistake: () => void, playAudio: (text: string) => void }) {
  const { user } = useAuth();
  const [isRecording, setIsRecording] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    setIsRecording(false);
    setIsEvaluating(false);
    setAudioUrl(null);
    setResult(null);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        try { mediaRecorderRef.current.stop(); } catch (e) {}
    }
    return () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            try { mediaRecorderRef.current.stop(); } catch (e) {}
        }
    };
  }, [vocab]);

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
      setResult(null);
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
Evaluate the user's pronunciation for the following Chinese sentence or word:
Traditional: "${vocab.traditional}"
Pinyin: "${vocab.pinyin}"

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
      const resultData = JSON.parse(jsonStr);
      
      setResult(resultData);

      if (!resultData.isCorrect) {
          onMistake();
      }

      // Save mispronounced words to weak words
      if (user?.id && user.id !== 'guest' && resultData.mispronouncedWords.length > 0) {
        for (const word of resultData.mispronouncedWords) {
            await weakWordsService.recordMistake(user.id, {
                id: word,
                chinese: word,
                pinyin: "", 
                meaning: "Từ phát âm chưa chuẩn",
                level: vocab.level
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

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex h-full min-h-[450px] flex-col items-center justify-center rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-40 h-40 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />

      <div className="absolute right-5 top-5 z-10">
        <button 
          onClick={() => playAudio(vocab.traditional)}
          className="rounded-xl border border-gray-200 bg-white p-3 text-blue-500 hover:bg-blue-50 transition-colors shadow-sm"
        >
          <Volume2 className="h-6 w-6" />
        </button>
      </div>

      <div className="text-center mb-10 z-10 w-full">
        <h2 className="text-7xl sm:text-8xl font-black text-gray-900 mb-6">{vocab.traditional}</h2>
        <div className="inline-flex flex-col items-center gap-1 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-3">
           <p className="text-2xl text-gray-700 font-bold font-mono">{vocab.pinyin}</p>
           <p className="text-sm text-gray-500 font-medium">{vocab.vietnamese}</p>
        </div>
      </div>

      <div className="flex flex-col items-center z-10 w-full pt-2">
        <div className="w-full flex flex-col items-center box-border">
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
                  "w-20 h-20 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-200 border-4 border-white transition-transform hover:scale-105 active:scale-95",
                  isEvaluating ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-500 hover:bg-emerald-600 border-emerald-600"
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

      {result && !isEvaluating && (
        <div className={cn(
          "w-full max-w-lg mt-8 p-6 rounded-xl border-2 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 shadow-sm z-10",
          result.isCorrect ? "border-green-200 bg-green-50" : "border-amber-200 bg-amber-50"
        )}>
          <div className="flex gap-4 sm:items-start flex-col sm:flex-row">
            <div className="flex-shrink-0">
               {result.isCorrect ? (
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
               ) : (
                  <AlertCircle className="w-10 h-10 text-amber-500" />
               )}
            </div>
            <div className="flex-1 space-y-3 relative">
               <div className="absolute right-0 top-0 hidden sm:block">
                  <div className="flex-col items-center justify-center flex">
                    <span className={cn("text-3xl font-black block text-center", result.isCorrect ? "text-green-600" : "text-amber-600")}>{result.score}</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Điểm</span>
                  </div>
               </div>
               
               <h4 className={cn("text-lg font-bold pr-16", result.isCorrect ? "text-green-800" : "text-amber-800")}>
                 {result.isCorrect ? "Phát âm rất tốt!" : "Cần lưu ý một số lỗi"}
                 <span className="sm:hidden ml-2 text-sm">Điểm: {result.score}</span>
               </h4>
               <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">{result.feedback}</p>
               
               {!result.isCorrect && result.mispronouncedWords?.length > 0 && (
                 <div className="mt-4 pt-4 border-t border-amber-200/50">
                    <p className="text-sm font-semibold text-amber-800 mb-2">Các từ cần chú ý:</p>
                    <div className="flex flex-wrap gap-2">
                       {result.mispronouncedWords.map((word: string, idx: number) => (
                           <span key={idx} className="bg-white border border-amber-200 text-amber-700 px-3 py-1 rounded-lg font-medium shadow-sm">
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

      {result && result.isCorrect && !isEvaluating && (
         <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y:0 }}
            onClick={onNext}
            className="mt-6 w-full max-w-sm rounded-xl bg-blue-600 border-b-4 border-blue-700 px-8 py-4 font-bold text-white shadow-sm hover:bg-blue-500 active:border-b-0 active:translate-y-1 transition-all text-lg z-10"
         >
            Tiếp tục
         </motion.button>
      )}
    </motion.div>
  );
}

// --- DRAWING MODE (Luyện Viết Phồn Thể) ---
function DrawingMode({ vocab, onNext }: { vocab: Vocab, onNext: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex h-full min-h-[450px] flex-col items-center justify-center rounded-[2rem] bg-white p-6 sm:p-8 shadow-sm border border-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-rose-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="absolute top-5 right-5 z-10">
         <span className="px-3.5 py-1.5 bg-rose-50 border border-rose-100 text-rose-600 text-sm font-bold rounded-lg font-mono">
            {vocab.pinyin}
         </span>
      </div>

      <div className="text-center mb-8 w-full z-10 mt-4">
        <h3 className="text-2xl font-black text-gray-900 mb-2">Viết chữ Hán</h3>
        <p className="text-base font-medium text-gray-600 max-w-full truncate bg-gray-50 px-4 py-1.5 rounded-lg inline-block border border-gray-100">{vocab.vietnamese}</p>
      </div>
      
      <div className="w-full flex justify-center mb-10 z-10">
        <div className="bg-white rounded-3xl p-4 shadow-sm border-2 border-gray-100">
           <HanziWriterPractice 
             character={vocab.traditional} 
             pinyin={vocab.pinyin}
             vietnamese={vocab.vietnamese}
             size={240}
           />
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full max-w-sm rounded-xl bg-blue-600 border-b-4 border-blue-700 px-8 py-4 font-bold text-white hover:bg-blue-500 active:border-b-0 active:translate-y-1 transition-all shadow-sm text-lg z-10"
      >
        Từ tiếp theo
      </button>
    </motion.div>
  );
}

// --- QUIZ MODE (Trắc nghiệm) ---
function QuizMode({ vocab, onNext, allVocabs, onMistake }: { vocab: Vocab, onNext: () => void, allVocabs: Vocab[], onMistake: () => void }) {
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
  useEffect(() => {
    setSelectedAnswer(null);
    // Generate 3 wrong options + 1 correct
    const wrongOptions = allVocabs
      .filter(v => v.id !== vocab.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(v => v.vietnamese);
      
    const allOptions = [...wrongOptions, vocab.vietnamese].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
  }, [vocab, allVocabs]);

  const handleSelect = (option: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(option);
    
    if (option === vocab.vietnamese) {
      setTimeout(() => {
        onNext();
      }, 1000);
    } else {
      onMistake();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex h-full min-h-[450px] flex-col items-center justify-center rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="text-center w-full max-w-md flex flex-col items-center relative z-10">
        <p className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Chọn nghĩa đúng nhất</p>
        <h2 className="text-6xl font-black text-gray-900 mb-4">{vocab.traditional}</h2>
        <p className="text-xl font-mono text-gray-600 mb-8 px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-xl">{vocab.pinyin}</p>

        <div className="w-full space-y-3">
          {options.map((opt, i) => {
            let btnClass = "w-full text-left p-4 rounded-xl border-2 font-semibold transition-all ";
            
            if (selectedAnswer !== null) {
               if (opt === vocab.vietnamese) {
                  btnClass += "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold";
               } else if (opt === selectedAnswer) {
                  btnClass += "border-rose-500 bg-rose-50 text-rose-700 font-bold";
               } else {
                  btnClass += "border-gray-200 bg-white text-gray-400 opacity-50";
               }
            } else {
               btnClass += "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50 active:scale-95";
            }

            return (
              <button 
                key={i}
                onClick={() => handleSelect(opt)}
                disabled={selectedAnswer !== null}
                className={btnClass}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {selectedAnswer !== null && selectedAnswer !== vocab.vietnamese && (
          <motion.div initial={{ opacity:0, y: 10 }} animate={{ opacity:1, y:0 }} className="mt-8 w-full">
            <button
               onClick={onNext}
               className="w-full rounded-xl border-b-4 px-8 py-4 font-bold text-white shadow-sm active:border-b-0 active:translate-y-1 transition-all text-lg bg-blue-600 border-blue-700 hover:bg-blue-500"
            >
               Tiếp tục nha
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// --- LISTENING MODE (Nghe chọn đáp án) ---
function ListeningMode({ vocab, onNext, allVocabs, onMistake, playAudio }: { vocab: Vocab, onNext: () => void, allVocabs: Vocab[], onMistake: () => void, playAudio: (text: string) => void }) {
  const [options, setOptions] = useState<Vocab[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
  useEffect(() => {
    setSelectedAnswer(null);
    playAudio(vocab.traditional);
    
    // Generate 3 wrong options + 1 correct
    const wrongOptions = allVocabs
      .filter(v => v.id !== vocab.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
      
    const allOptions = [...wrongOptions, vocab].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
  }, [vocab, allVocabs]);

  const handleSelect = (optionId: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionId);
    
    if (optionId === vocab.id) {
      setTimeout(() => {
        onNext();
      }, 1000);
    } else {
      onMistake();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex h-full min-h-[450px] flex-col items-center justify-center rounded-[2rem] bg-white p-8 shadow-sm border border-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="text-center w-full max-w-md flex flex-col items-center relative z-10">
        <p className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-wide">Nghe và chọn đáp án đúng</p>
        
        <button 
          onClick={() => playAudio(vocab.traditional)}
          className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-all mb-8 mx-auto shadow-xl shadow-blue-100 border-4 border-white active:scale-95"
        >
          <Volume2 className="w-10 h-10" />
        </button>

        <div className="w-full space-y-3">
          {options.map((opt, i) => {
            let btnClass = "w-full text-left p-4 rounded-xl border-2 font-semibold transition-all ";
            
            if (selectedAnswer !== null) {
               if (opt.id === vocab.id) {
                  btnClass += "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold";
               } else if (opt.id === selectedAnswer) {
                  btnClass += "border-rose-500 bg-rose-50 text-rose-700 font-bold";
               } else {
                  btnClass += "border-gray-200 opacity-50 text-gray-400";
               }
            } else {
               btnClass += "border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 active:scale-95";
            }

            return (
              <button 
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={selectedAnswer !== null}
                className={btnClass}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg mr-2 font-bold">{opt.traditional}</span>
                    <span className="text-gray-500 font-normal text-sm">({opt.pinyin}) - {opt.vietnamese}</span>
                  </div>
                  {selectedAnswer !== null && opt.id === vocab.id && <Check className="w-5 h-5 text-green-600 flex-shrink-0" />}
                  {selectedAnswer === opt.id && opt.id !== vocab.id && <X className="w-5 h-5 text-red-500 flex-shrink-0" />}
                </div>
              </button>
            )
          })}
        </div>

        {selectedAnswer !== null && selectedAnswer !== vocab.id && (
          <motion.div initial={{ opacity:0, y: 10 }} animate={{ opacity:1, y:0 }} className="mt-8 w-full">
            <button 
              onClick={onNext}
              className="w-full rounded-xl border-b-4 px-8 py-4 font-bold text-white shadow-sm active:border-b-0 active:translate-y-1 transition-all text-lg bg-blue-600 border-blue-700 hover:bg-blue-500"
            >
              Tiếp tục nha
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
