import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  Trophy, 
  Zap, 
  BookOpen, 
  Headphones, 
  MessageSquare, 
  Edit3, 
  PlayCircle,
  GraduationCap,
  Timer,
  AlertCircle,
  X,
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { useDailyPlan } from '../../../contexts/DailyPlanContext';
import { useStudyProgress } from '../../../contexts/StudyProgressContext';
import { getLessonById } from '../../../services/lessonService';
import { cn } from '../../../lib/utils';
import { TaskType } from '../../../types/study';

export function TodayLearning() {
  const navigate = useNavigate();
  const { plan, loading, updateTaskProgress } = useDailyPlan();
  const { currentStreak, todayStats } = useStudyProgress();

  const { lastLessonId } = useStudyProgress();
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [resumeLessonId, setResumeLessonId] = useState<string | null>(null);

  const handleTaskClick = (taskType: TaskType) => {
    // Determine target lesson ID
    // If we have a lastLessonId, we use it for most lesson-related tasks
    // If not, we default to lesson_1
    const targetLessonId = lastLessonId || 'lesson_1';

    switch (taskType) {
      case 'new_vocab':
        navigate(`/student/lessons/${targetLessonId}?tab=vocab`);
        break;
      case 'review_vocab':
        navigate('/student/vocabulary');
        break;
      case 'weak_words':
        navigate('/student/weak-words');
        break;
      case 'listening':
        navigate(`/student/lessons/${targetLessonId}?tab=listening`);
        break;
      case 'quiz':
        navigate(`/student/lessons/${targetLessonId}?tab=quiz`);
        break;
      case 'speaking':
        // Patterns and grammar are usually together in grammar tab
        navigate(`/student/lessons/${targetLessonId}?tab=grammar`);
        break;
      case 'lesson':
        navigate(`/student/lessons/${targetLessonId}`);
        break;
      default:
        navigate(`/student/lessons/${targetLessonId}`);
        break;
    }
  };

  const handleResumeLearning = () => {
    if (lastLessonId) {
      setResumeLessonId(lastLessonId);
      setShowResumeModal(true);
    } else {
      navigate('/student/lessons/lesson_1');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-500">Không tìm thấy lộ trình học tập cho hôm nay.</p>
      </div>
    );
  }

  const getIcon = (type: TaskType) => {
    switch (type) {
      case 'new_vocab': return <Zap className="w-5 h-5" />;
      case 'review_vocab': return <BookOpen className="w-5 h-5" />;
      case 'weak_words': return <AlertCircle className="w-5 h-5" />;
      case 'listening': return <Headphones className="w-5 h-5" />;
      case 'quiz': return <Edit3 className="w-5 h-5" />;
      case 'speaking': return <MessageSquare className="w-5 h-5" />;
      case 'lesson': return <GraduationCap className="w-5 h-5" />;
      default: return <Circle className="w-5 h-5" />;
    }
  };

  const getColor = (type: TaskType) => {
    switch (type) {
      case 'new_vocab': return 'text-orange-500 bg-orange-50';
      case 'review_vocab': return 'text-blue-500 bg-blue-50';
      case 'weak_words': return 'text-red-500 bg-red-50';
      case 'listening': return 'text-purple-500 bg-purple-50';
      case 'quiz': return 'text-emerald-500 bg-emerald-50';
      case 'speaking': return 'text-pink-500 bg-pink-50';
      case 'lesson': return 'text-indigo-500 bg-indigo-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="max-w-2xl mx-auto pb-20">
      {/* Header Section */}
      <header className="mb-6 px-4 pt-2">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Học tập hôm nay</h1>
          <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full text-xs font-bold border border-orange-100 shadow-sm">
            <Zap className="w-4 h-4 fill-current" />
            <span>{currentStreak} Ngày</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm font-medium">Hoàn thành các mục tiêu để duy trì chuỗi học.</p>
      </header>

      {/* Progress Overview Card */}
      <div className="mx-4 mb-8">
        <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Tiến độ tổng quát</p>
                <h2 className="text-4xl font-black text-gray-900">{plan.progressPercent}%</h2>
              </div>
              <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                <Trophy className="w-8 h-8" />
              </div>
            </div>
            
            <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden mb-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${plan.progressPercent}%` }}
                className="h-full bg-blue-600 rounded-full shadow-lg shadow-blue-200"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase mb-1">
                  <Timer className="w-3 h-3" />
                  <span>Thời gian học</span>
                </div>
                <p className="text-lg font-black text-gray-900">{todayStats.minutesStudied || 0} Phút</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase mb-1">
                  <Zap className="w-3 h-3" />
                  <span>Điểm nhận</span>
                </div>
                <p className="text-lg font-black text-gray-900">{plan.totalPoints}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3 px-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4 ml-1">Danh sách nhiệm vụ</h3>
        {plan.tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group relative overflow-hidden bg-white rounded-2xl p-4 border border-gray-100 transition-all active:scale-[0.98] cursor-pointer",
              task.status === 'completed' ? "bg-gray-50/50" : "hover:border-blue-200 hover:shadow-md"
            )}
            onClick={() => handleTaskClick(task.type)}
          >
            <div className="flex items-center gap-4">
              <div className={cn("p-3 rounded-xl shrink-0 transition-colors", getColor(task.type))}>
                {getIcon(task.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className={cn(
                  "font-bold truncate",
                  task.status === 'completed' ? "text-gray-400 line-through" : "text-gray-900"
                )}>
                  {task.title}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full transition-all duration-500",
                        task.status === 'completed' ? "bg-emerald-500" : "bg-blue-500"
                      )}
                      style={{ width: `${(task.completedCount / task.targetCount) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap">
                    {task.completedCount}/{task.targetCount}
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                {task.status === 'completed' ? (
                  <div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-full">
                    <CheckCircle2 className="w-5 h-5 fill-current" />
                  </div>
                ) : (
                  <button 
                    onClick={() => updateTaskProgress(task.id, task.completedCount + 1)}
                    className="group-hover:bg-blue-50 p-2 rounded-xl transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                  </button>
                )}
              </div>
            </div>

            {/* Background Accent for active tasks */}
            {task.status === 'in_progress' && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
            )}
          </motion.div>
        ))}
      </div>

      {plan.progressPercent === 100 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-4 mt-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 text-white text-center shadow-lg shadow-emerald-200"
        >
          <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-md">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Tuyệt vời!</h3>
          <p className="text-sm text-emerald-50 opacity-90">Bạn đã hoàn thành toàn bộ lộ trình ngày hôm nay. Nghỉ ngơi và tiếp tục vào ngày mai nhé!</p>
        </motion.div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md px-4 pointer-events-none md:hidden z-30">
        {plan.progressPercent < 100 && (
          <button 
            onClick={handleResumeLearning}
            className="pointer-events-auto w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-200 flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <PlayCircle className="w-5 h-5" />
            Bắt đầu học bài mới
          </button>
        )}
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && resumeLessonId && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResumeModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white rounded-[2.5rem] p-6 shadow-2xl z-[70] overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 bg-gray-100 rounded-full text-gray-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center mt-4">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-black text-gray-900 mb-2">Tiếp tục học chứ?</h3>
                <p className="text-gray-500 text-sm mb-8 px-4 leading-relaxed">
                  Hôm qua bạn đang học <span className="font-bold text-gray-900">{getLessonById(resumeLessonId)?.title || 'bài học trước'}</span>. Bạn muốn làm gì tiếp theo?
                </p>

                <div className="grid gap-3">
                  <button 
                    onClick={() => {
                      // Logic for "next lesson": increment the ID if possible
                      const currentNum = parseInt(resumeLessonId.split('_')[1]);
                      const nextLessonId = `lesson_${currentNum + 1}`;
                      // Check if next lesson exists, else stay at same
                      if (getLessonById(nextLessonId)) {
                        navigate(`/student/lessons/${nextLessonId}`);
                      } else {
                        navigate(`/student/lessons/${resumeLessonId}`);
                      }
                      setShowResumeModal(false);
                    }}
                    className="flex items-center justify-between bg-blue-600 text-white p-4 rounded-2xl font-bold shadow-lg shadow-blue-100 active:scale-95 transition-all group"
                  >
                    <span>Học bài tiếp theo</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button 
                    onClick={() => {
                      navigate(`/student/lessons/${resumeLessonId}`);
                      setShowResumeModal(false);
                    }}
                    className="flex items-center justify-between bg-gray-50 text-gray-600 p-4 rounded-2xl font-bold border border-gray-100 active:scale-95 transition-all group"
                  >
                    <span>Ôn tập bài cũ</span>
                    <RotateCcw className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
