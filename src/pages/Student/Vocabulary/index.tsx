import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Volume2, Check, X, Mic, BookOpen, Send, PenTool, ArrowLeft, Brain, FileAudio, Keyboard, NotebookPen, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { tocflVocabularies, Vocab } from '../../../data/vocabulary';
import { HanziWriterPractice } from '../../../components/HanziWriterPractice';
import { useStudyProgress } from '../../../contexts/StudyProgressContext';
import { useAuth } from '../../../contexts/AuthContext';
import { weakWordsService } from '../../../services/weakWordsService';
import { ConversationListeningMode } from './ConversationListeningMode';

type PracticeMode = 'flashcard' | 'quiz' | 'listening' | 'listening_writing' | 'speaking' | 'drawing' | 'dictation' | 'conversation';

export function Vocabulary() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addLearnedWords } = useStudyProgress();
  const [selectedLevel, setSelectedLevel] = useState<string>('B2');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;
  const [isPracticing, setIsPracticing] = useState(false);
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('flashcard');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredVocabs = useMemo(() => {
    if (selectedLevel === 'All') return tocflVocabularies;
    return tocflVocabularies.filter(v => v.level === selectedLevel);
  }, [selectedLevel]);

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

  const handleRemembered = () => {
    addLearnedWords(1);
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
           
           <div className="flex w-full items-center bg-gray-100 p-1.5 rounded-xl overflow-x-auto scrollbar-hide gap-1 flex-nowrap">
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
        <button 
           onClick={() => handleStartPractice('flashcard')}
           className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
        >
          <BookOpen className="w-5 h-5" fill="currentColor" />
          Học trang này
        </button>
      </div>

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
          {paginatedVocabs.map((vocab, i) => (
             <div 
               key={vocab.id || i} 
               className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 hover:border-blue-100 transition-all flex flex-col group cursor-pointer h-full"
               onClick={() => { setCurrentIndex(i); handleStartPractice('flashcard'); }}
             >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl font-black text-gray-900">{vocab.traditional}</div>
                  <div className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-md uppercase tracking-wider">
                    {vocab.type || 'N'}
                  </div>
                </div>
                <div className="text-sm text-gray-400 font-mono mb-4 bg-gray-50 rounded-lg px-2 py-1 self-start">{vocab.pinyin}</div>
                <div className="text-base text-gray-700 font-medium leading-snug mb-5 flex-grow">
                  {vocab.vietnamese}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-auto border-t border-gray-50 pt-4">
                   <span className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-semibold rounded-lg border border-gray-100">#tocfl{vocab.level?.toLowerCase() || 'level'}</span>
                   <span className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-semibold rounded-lg border border-gray-100">#bài{Math.floor(((currentPage - 1) * itemsPerPage + i)/15)+1}</span>
                </div>
             </div>
          ))}
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
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState<'none' | 'success' | 'fail'>('none');
  const [spokenText, setSpokenText] = useState('');
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    setIsRecording(false);
    setResult('none');
    setSpokenText('');
    if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch (e) {}
    }
    return () => {
        if (recognitionRef.current) {
            try { recognitionRef.current.abort(); } catch (e) {}
        }
    };
  }, [vocab]);

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      if (recognitionRef.current) {
         try { recognitionRef.current.stop(); } catch (e) {}
      }
    } else {
      setIsRecording(true);
      setResult('none');
      setSpokenText('');
      
      const SpeechRecognitionConstructor = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognitionConstructor) {
         const recognition = new SpeechRecognitionConstructor();
         recognition.lang = 'zh-TW';
         recognition.interimResults = false;
         recognition.maxAlternatives = 1;
         
         recognition.onresult = (event: any) => {
             const transcript = event.results[0][0].transcript as string;
             if (!transcript || !transcript.trim()) return;
             
             setSpokenText(transcript);
             
             // Check if correct (ignoring punctuation and spaces)
             const normalizedTranscript = transcript.toLowerCase().replace(/[\s.,!?。，！？]/g, '');
             const normalizedTarget = vocab.traditional.toLowerCase().replace(/[\s.,!?。，！？]/g, '');
             
             if (normalizedTranscript === normalizedTarget || transcript.includes(vocab.traditional)) {
                 setResult('success');
                 playAudio('非常好');
             } else {
                 setResult('fail');
                 playAudio('再試一次');
                 onMistake();
             }
         };
         
         recognition.onerror = (event: any) => {
             if (event.error !== 'aborted') {
                 console.error('Speech recognition error:', event.error);
             }
             setIsRecording(false);
             if (event.error !== 'aborted') {
                 setResult('fail');
                 setSpokenText('Chưa nghe rõ');
             }
         };
         
         recognition.onend = () => {
             setIsRecording(false);
         };
         
         recognitionRef.current = recognition;
         try {
           recognition.start();
         } catch (e) {
           console.error('Could not start recognition', e);
           setIsRecording(false);
         }
      } else {
         setIsRecording(false);
         alert('Trình duyệt của bạn không hỗ trợ nhận diện giọng nói. Vui lòng sử dụng trình duyệt như Google Chrome.');
      }
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

      <div className="text-center mb-10 z-10">
        <h2 className="text-7xl sm:text-8xl font-black text-gray-900 mb-6">{vocab.traditional}</h2>
        <div className="inline-flex flex-col items-center gap-1 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-3">
           <p className="text-2xl text-gray-700 font-bold font-mono">{vocab.pinyin}</p>
           <p className="text-sm text-gray-500 font-medium">{vocab.vietnamese}</p>
        </div>
      </div>

      <div className="flex flex-col items-center z-10">
         <div className="relative mb-6">
            {isRecording && (
               <motion.div 
                 animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                 transition={{ repeat: Infinity, duration: 1.5 }}
                 className="absolute inset-0 rounded-full bg-emerald-400"
               />
            )}
            <button
               onClick={toggleRecording}
               className={cn(
                 "relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl text-white shadow-xl transition-all border-b-4 active:border-b-0 active:translate-y-1 cursor-pointer",
                 isRecording 
                   ? "bg-rose-500 border-rose-600 scale-95" 
                   : result === 'success' 
                     ? "bg-emerald-500 border-emerald-600" 
                     : "bg-emerald-500 border-emerald-600 hover:bg-emerald-400"
               )}
            >
               <Mic className={cn("h-10 w-10", isRecording && "animate-pulse")} />
            </button>
         </div>

         <div className="h-24 text-center flex flex-col items-center justify-center">
            {isRecording ? (
               <p className="text-rose-500 font-bold animate-pulse text-lg tracking-wide uppercase">Đang ghi âm...</p>
            ) : result === 'none' ? (
               <p className="text-gray-400 font-medium text-sm border px-3 py-1 rounded-full border-gray-200">Nhấn giữ Micro để phát âm</p>
            ) : (
               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity:1, y: 0 }} className="flex flex-col items-center bg-gray-50 px-6 py-3 rounded-2xl border border-gray-100">
                  <p className="text-sm text-gray-500">Hệ thống nghe được:</p>
                  <p className="font-extrabold text-2xl text-gray-900 mt-1">{spokenText}</p>
                  <p className={cn(
                     "font-bold text-sm mt-2 uppercase tracking-wider",
                     result === 'success' ? "text-emerald-600" : "text-rose-500"
                  )}>
                     {result === 'success' ? "Phát âm chuẩn xác!" : "Chưa chính xác... thử lại nhé"}
                  </p>
               </motion.div>
            )}
         </div>
      </div>

      {result === 'success' && (
         <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y:0 }}
            onClick={onNext}
            className="mt-4 w-full max-w-sm rounded-xl bg-blue-600 border-b-4 border-blue-700 px-8 py-4 font-bold text-white shadow-sm hover:bg-blue-500 active:border-b-0 active:translate-y-1 transition-all text-lg z-10"
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
