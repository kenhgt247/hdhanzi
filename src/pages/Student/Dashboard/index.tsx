import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useStudyProgress } from '../../../contexts/StudyProgressContext';
import { useDailyPlan } from '../../../contexts/DailyPlanContext';
import { BookOpen, Trophy, Target, Flame, ChevronRight, Zap, Award, Star, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';

export function StudentDashboard() {
  const { user } = useAuth();
  const { currentStreak, totalWordsLearned, totalDaysActive, dailyStats, completedLessonIds } = useStudyProgress();
  const { plan } = useDailyPlan();
  const navigate = useNavigate();

  // Calculate total minutes studied
  const totalMinutesStudied = Object.values(dailyStats).reduce((sum, stat) => sum + (stat.minutesStudied || 0), 0);
  const completedLessonsCount = completedLessonIds?.length || 0;

  // Define achievements
  const achievements = [
    {
      id: 'streak_3',
      name: 'Rực lửa',
      description: 'Học liên tục 3 ngày',
      icon: Flame,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
      progress: Math.min(currentStreak, 3),
      max: 3,
      achieved: currentStreak >= 3,
    },
    {
      id: 'words_50',
      name: 'Ngân hàng từ vựng 1',
      description: 'Học 50 từ vựng',
      icon: BookOpen,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      progress: Math.min(totalWordsLearned, 50),
      max: 50,
      achieved: totalWordsLearned >= 50,
    },
    {
      id: 'words_500',
      name: 'Ngân hàng từ vựng 2',
      description: 'Học 500 từ vựng',
      icon: BookOpen,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-100',
      progress: Math.min(totalWordsLearned, 500),
      max: 500,
      achieved: totalWordsLearned >= 500,
    },
    {
      id: 'time_120',
      name: 'Ong chăm chỉ',
      description: 'Học tổng cộng 120 phút',
      icon: Clock,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-100',
      progress: Math.min(totalMinutesStudied, 120),
      max: 120,
      achieved: totalMinutesStudied >= 120,
    },
    {
      id: 'lessons_5',
      name: 'Kẻ chinh phục',
      description: 'Hoàn thành 5 bài học',
      icon: Target,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
      progress: Math.min(completedLessonsCount, 5),
      max: 5,
      achieved: completedLessonsCount >= 5,
    },
    {
      id: 'lessons_all',
      name: 'Bậc thầy TOCFL',
      description: 'Hoàn thành 50 bài học',
      icon: Award,
      color: 'text-amber-500',
      bgColor: 'bg-amber-100',
      progress: Math.min(completedLessonsCount, 50),
      max: 50,
      achieved: completedLessonsCount >= 50,
    }
  ];

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

      {/* Achievements Section */}
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" /> Thành tựu của bạn
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={achievement.id} 
                className={cn(
                  "p-4 rounded-xl border relative overflow-hidden transition-all",
                  achievement.achieved 
                    ? "bg-amber-50/30 border-amber-200" 
                    : "bg-gray-50/50 border-gray-100 grayscale-[0.6] opacity-80"
                )}
              >
                {achievement.achieved && (
                  <div className="absolute top-2 right-2 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <div className={cn("p-2.5 rounded-xl shrink-0", achievement.bgColor, achievement.color)}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className={cn("font-bold text-sm truncate", achievement.achieved ? "text-gray-900" : "text-gray-600")}>
                      {achievement.name}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">{achievement.description}</p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-gray-500">
                    <span>{achievement.progress} / {achievement.max}</span>
                    <span>{Math.round((achievement.progress / achievement.max) * 100)}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all duration-1000",
                        achievement.achieved ? "bg-amber-500" : "bg-gray-400"
                      )}
                      style={{ width: `${(achievement.progress / achievement.max) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

