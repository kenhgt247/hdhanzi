import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Brain, 
  Search, 
  Filter, 
  Trash2, 
  ChevronRight, 
  RotateCcw, 
  Volume2, 
  AlertCircle,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { useDailyPlan } from '../../../contexts/DailyPlanContext';
import { weakWordsService, MistakeType } from '../../../services/weakWordsService';
import { WeakWord } from '../../../types/study';
import { cn } from '../../../lib/utils';

export function WeakWords() {
  const { user } = useAuth();
  const { plan, updateTaskProgress } = useDailyPlan();
  const [weakWords, setWeakWords] = useState<WeakWord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'weak' | 'medium' | 'improving'>('all');
  const [isReviewing, setIsReviewing] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviewResults, setReviewResults] = useState<{ id: string; correct: boolean }[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetchWeakWords();
  }, [user?.id]);

  const fetchWeakWords = async () => {
    if (!user?.id) return;
    try {
      setLoading(true);
      const words = await weakWordsService.getWeakWords(user.id);
      setWeakWords(words);
    } catch (error) {
      console.error('Failed to fetch weak words:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredWords = weakWords.filter(word => {
    const matchesSearch = 
      word.chinese.includes(searchTerm) || 
      word.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.meaning.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterType === 'all') return matchesSearch;
    return matchesSearch && word.strengthLevel === filterType;
  });

  const startReview = () => {
    if (filteredWords.length === 0) return;
    setIsReviewing(true);
    setCurrentReviewIndex(0);
    setReviewResults([]);
    setShowAnswer(false);
  };

  const handleReviewAction = async (correct: boolean) => {
    if (!user?.id) return;
    const currentWord = filteredWords[currentReviewIndex];
    
    if (correct) {
      await weakWordsService.recordCorrectReview(user.id, currentWord.wordId);
      
      // Update daily plan progress if weak_words task exists
      const weakWordsTask = plan?.tasks.find(t => t.type === 'weak_words');
      if (weakWordsTask) {
        updateTaskProgress(weakWordsTask.id, weakWordsTask.completedCount + 1);
      }
    } else {
      // Record as pinyin mistake for simple review simulation
      await weakWordsService.recordMistake(user.id, currentWord, 'pinyin');
    }

    setReviewResults([...reviewResults, { id: currentWord.id, correct }]);
    
    if (currentReviewIndex < filteredWords.length - 1) {
      setShowAnswer(false);
      setCurrentReviewIndex(prev => prev + 1);
    } else {
      // Review session ended
      setTimeout(() => {
        setIsReviewing(false);
        fetchWeakWords();
      }, 1000);
    }
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    window.speechSynthesis.speak(utterance);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isReviewing) {
    const word = filteredWords[currentReviewIndex];
    return (
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => setIsReviewing(false)}
            className="text-gray-500 hover:text-gray-900 flex items-center gap-1"
          >
            <RotateCcw className="w-4 h-4" />
            Thoát
          </button>
          <div className="text-sm font-medium text-gray-500">
            {currentReviewIndex + 1} / {filteredWords.length}
          </div>
          <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all" 
              style={{ width: `${((currentReviewIndex + 1) / filteredWords.length) * 100}%` }}
            />
          </div>
        </div>

        <motion.div
          key={word.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center"
        >
          <div className="mb-8">
            <h2 className="text-6xl font-black text-gray-900 mb-4">{word.chinese}</h2>
            <button 
              onClick={() => speak(word.chinese)}
              className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Volume2 className="w-6 h-6" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {!showAnswer ? (
              <motion.button
                key="show-btn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowAnswer(true)}
                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold shadow-lg shadow-gray-200"
              >
                Hiện đáp án
              </motion.button>
            ) : (
              <motion.div
                key="answer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="py-6 border-y border-gray-100">
                  <p className="text-2xl font-bold text-blue-600 mb-1">{word.pinyin}</p>
                  <p className="text-xl text-gray-600">{word.meaning}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleReviewAction(false)}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl border-2 border-red-100 text-red-600 font-bold hover:bg-red-50 transition-colors"
                  >
                    <XCircle className="w-5 h-5" />
                    Chưa nhớ
                  </button>
                  <button 
                    onClick={() => handleReviewAction(true)}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Đã nhớ
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Header */}
      <header className="px-4 pt-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sổ từ yếu</h1>
            <p className="text-sm text-gray-500 mt-1">Ôn tập lại những từ bạn hay làm sai.</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-2xl">
            <Brain className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text"
              placeholder="Tìm kiếm từ vựng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 sm:pb-0">
            {(['all', 'weak', 'medium', 'improving'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type as any)}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-bold transition-all border whitespace-nowrap",
                  filterType === type 
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100" 
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-200 hover:bg-blue-50"
                )}
              >
                {type === 'all' ? 'Tất cả' : type === 'weak' ? 'Rất yếu' : type === 'medium' ? 'Đang cải thiện' : 'Đã thuộc'}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Summary Stats */}
      <div className="px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Tổng số từ', value: weakWords.length, icon: BookOpen, color: 'text-blue-600' },
            { label: 'Rất yếu', value: weakWords.filter(w => w.strengthLevel === 'weak').length, icon: AlertCircle, color: 'text-red-600' },
            { label: 'Đang cải thiện', value: weakWords.filter(w => w.strengthLevel === 'medium').length, icon: TrendingUp, color: 'text-orange-600' },
            { label: 'Đã thuộc', value: weakWords.filter(w => w.strengthLevel === 'improving').length, icon: CheckCircle2, color: 'text-emerald-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className={cn("w-4 h-4", stat.color)} />
                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">{stat.label}</span>
              </div>
              <p className="text-2xl font-black text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      {filteredWords.length > 0 && (
        <div className="px-4 mb-8">
          <button 
            onClick={startReview}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
          >
            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Ôn tập ngay ({filteredWords.length} từ)
          </button>
        </div>
      )}

      {/* Words List */}
      <div className="px-4 space-y-3">
        {filteredWords.length > 0 ? (
          filteredWords.map((word, index) => (
            <motion.div
              key={word.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-center justify-between group hover:border-blue-200 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-colors",
                  word.strengthLevel === 'weak' ? "bg-red-50 text-red-600" : 
                  word.strengthLevel === 'medium' ? "bg-orange-50 text-orange-600" : "bg-emerald-50 text-emerald-600"
                )}>
                  {word.chinese}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900">{word.pinyin}</h3>
                    <span className={cn(
                      "text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter whitespace-nowrap",
                      word.strengthLevel === 'weak' ? "bg-red-100 text-red-600" : 
                      word.strengthLevel === 'medium' ? "bg-orange-100 text-orange-600" : "bg-emerald-100 text-emerald-600"
                    )}>
                      {word.strengthLevel === 'weak' ? 'Rất yếu' : 
                       word.strengthLevel === 'medium' ? 'Đang cải thiện' : 'Đã thuộc'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{word.meaning}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="hidden sm:flex flex-col items-end">
                  <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold mb-1">
                    <TrendingDown className="w-3 h-3 text-red-500" />
                    <span>{word.mistakeCount} LỖI</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold">
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                    <span>{word.correctReviewCount} ĐÚNG</span>
                  </div>
                </div>
                <button 
                  onClick={() => speak(word.chinese)}
                  className="p-2 bg-gray-50 text-gray-400 rounded-lg hover:text-blue-600 hover:bg-blue-50 transition-all"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 border-dashed">
            <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-500 font-medium">Không tìm thấy từ nào phù hợp.</p>
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="text-blue-600 text-sm font-bold mt-2 hover:underline">
                Xóa tìm kiếm
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
