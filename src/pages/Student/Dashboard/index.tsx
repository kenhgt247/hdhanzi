import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useStudyProgress } from '../../../contexts/StudyProgressContext';
import { useDailyPlan } from '../../../contexts/DailyPlanContext';
import { BookOpen, Trophy, Target, Flame, ChevronRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';

export function StudentDashboard() {
  const { user } = useAuth();
  const { currentStreak, totalWordsLearned, totalDaysActive } = useStudyProgress();
  const { plan } = useDailyPlan();
  const navigate = useNavigate();

  return (
    <div className="space-y-6 pb-10">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Xin chào, {user?.name || 'Học viên'}!</h1>
        <p className="text-sm text-gray-500">Hôm nay bạn muốn học gì?</p>
      </header>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-4 sm:p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-2 text-blue-600 shrink-0">
              <Target className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-sm text-gray-500 truncate">Mục tiêu</p>
              <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{user?.targetLevel || 'Beginner'}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-4 sm:p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-orange-100 p-2 text-orange-600 shrink-0">
              <Flame className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-sm text-gray-500 truncate">Chuỗi ngày</p>
              <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{currentStreak} Ngày</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border bg-white p-4 sm:p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-2 text-green-600 shrink-0">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-sm text-gray-500 truncate">Từ đã học</p>
              <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{totalWordsLearned}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-4 sm:p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-purple-100 p-2 text-purple-600 shrink-0">
              <Trophy className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-sm text-gray-500 truncate">Ngày hoạt động</p>
              <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{totalDaysActive} Ngày</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Roadmap Card */}
      <div 
        onClick={() => navigate('/student/today')}
        className="group relative cursor-pointer overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-200"
      >
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-3">
              <Zap className="h-4 w-4 fill-current" />
              <span>TIẾN ĐỘ LỘ TRÌNH HÔM NAY</span>
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">
              Cố gắng đạt mục tiêu của ngày nào!
            </h2>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
                <span>Hoàn thành {plan?.progressPercent || 0}%</span>
                <span>{plan?.completedTasks || 0}/{plan?.totalTasks || 0} Nhiệm vụ</span>
              </div>
              <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                  style={{ width: `${plan?.progressPercent || 0}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-center justify-center h-20 w-20 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
               <span className="text-2xl font-black">{plan?.progressPercent || 0}%</span>
            </div>
            <button className="flex items-center justify-center h-12 w-12 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Bài học mới</h2>
            <button onClick={() => navigate('/student/lessons')} className="text-blue-600 text-sm font-semibold hover:underline">
               Xem tất cả
            </button>
          </div>
          <div className="p-4">
            <div 
              onClick={() => navigate('/student/lessons/lesson_1')}
              className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50 cursor-pointer active:scale-[0.98] transition-all hover:border-blue-200 group"
            >
              <div className="min-w-0">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">Chào hỏi & Làm quen</h3>
                <p className="text-xs text-gray-500 mt-1 truncate">15 từ vựng • 10 câu giao tiếp</p>
              </div>
              <div className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white group-hover:bg-blue-700 whitespace-nowrap">
                Học ngay
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Thi thử TOCFL</h2>
            <button onClick={() => navigate('/student/tocfl')} className="text-blue-600 text-sm font-semibold hover:underline">
               Xem đề thi
            </button>
          </div>
          <div className="p-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 text-white">
              <p className="text-sm font-bold opacity-90 mb-1">KIỂM TRA TRÌNH ĐỘ</p>
              <h3 className="text-xl font-black mb-4">Sẵn sàng cho kỳ thi thật?</h3>
              <button 
                onClick={() => navigate('/student/tocfl')}
                className="w-full py-2 bg-white text-blue-600 rounded-lg font-bold text-sm shadow-lg active:scale-95 transition-transform"
              >
                Vào thi ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
