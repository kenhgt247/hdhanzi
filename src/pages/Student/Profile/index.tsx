import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LogOut, User, Mail, Award, Target, Mic, PenTool, ChevronRight, BookOpen, Clock, Check, Edit2, Zap, LogIn, AlertCircle, BookA, FileText, Shield, PhoneCall } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { useStudyProgress } from '../../../contexts/StudyProgressContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';

export function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { 
    targetLevel, setTargetLevel, 
    currentStreak, totalDaysActive, totalWordsLearned, 
    todayStats, dailyStats 
  } = useStudyProgress();

  const [isEditingTarget, setIsEditingTarget] = useState(false);
  const [tempTarget, setTempTarget] = useState(targetLevel);

  const handleSaveTarget = () => {
    setTargetLevel(tempTarget);
    setIsEditingTarget(false);
  };

  const todayStr = new Date().toISOString().split('T')[0];
  const safeDailyStats = dailyStats || {};
  const totalMinutes = Object.values(safeDailyStats).reduce((sum, day) => sum + (day.minutesStudied || 0), 0);
  const totalLessons = Object.values(safeDailyStats).reduce((sum, day) => sum + (day.lessonsCompleted || 0), 0);

  const formatHours = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}p`;
  };

  const progressPercentage = Math.min((totalLessons / 60) * 100, 100).toFixed(0);

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const stats = safeDailyStats[dateStr] || { minutesStudied: 0 };
    return {
      label: d.toLocaleDateString('vi-VN', { weekday: 'short' }),
      minutes: stats.minutesStudied,
      date: dateStr
    };
  });

  const maxMinutes = Math.max(...last7Days.map(d => d.minutes), 60);

  return (
    <div className="mx-auto max-w-2xl space-y-6 pb-12">
      <header className="px-4 pt-4">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Cá nhân</h1>
      </header>

      {user?.id === 'guest' && (
        <div className="mx-4 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600">
                <LogIn className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Bảo mật tiến độ</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Đăng nhập để đồng bộ dữ liệu trên các thiết bị.</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/login')}
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
            >
              <span>Đăng nhập / Đăng ký</span>
            </button>
          </div>
        </div>
      )}

      {/* User Info Card */}
      <div className="mx-4 overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-gradient-to-tr from-blue-600 to-indigo-600 text-3xl font-black text-white shadow-lg shadow-blue-100">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 border-4 border-white w-6 h-6 rounded-full shadow-sm" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-gray-900 leading-tight">{user?.name || 'Học viên'}</h2>
              <div className="mt-1 flex items-center gap-1.5 text-gray-400 font-medium">
                <Mail className="h-3.5 w-3.5" />
                <span className="text-xs uppercase tracking-wider">{user?.email || 'Chưa đăng nhập'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-50 bg-gray-50/50 p-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-gray-400 uppercase text-[10px] font-black tracking-widest mb-1.5">
              <Award className="h-3 w-3 text-blue-500" />
              <span>Trình độ</span>
            </div>
            <p className="text-sm font-bold text-gray-900">{user?.currentLevel || 'Mới bắt đầu'}</p>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2 text-gray-400 uppercase text-[10px] font-black tracking-widest">
                <Target className="h-3 w-3 text-red-500" />
                <span>Mục tiêu</span>
              </div>
              {!isEditingTarget && (
                <button 
                  onClick={() => setIsEditingTarget(true)}
                  className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <Edit2 className="h-3 w-3 text-gray-400" />
                </button>
              )}
            </div>
            
            {isEditingTarget ? (
              <div className="flex items-center gap-1.5">
                <select 
                  value={tempTarget}
                  onChange={(e) => setTempTarget(e.target.value)}
                  className="flex-1 text-xs border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 py-1 pl-2"
                >
                  <option value="TOCFL Band A1">Band A1</option>
                  <option value="TOCFL Band A2">Band A2</option>
                  <option value="TOCFL Band B1">Band B1</option>
                  <option value="TOCFL Band B2">Band B2</option>
                </select>
                <button 
                  onClick={handleSaveTarget}
                  className="p-1.5 bg-blue-600 text-white rounded-lg shadow-md shadow-blue-100"
                >
                  <Check className="h-3 h-3" />
                </button>
              </div>
            ) : (
              <p className="text-sm font-bold text-gray-900">{targetLevel}</p>
            )}
          </div>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="mx-4 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-black text-gray-900">Hoạt động hàng tuần</h3>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">7 ngày gần nhất</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="flex items-end justify-between h-32 gap-2 mb-2">
          {last7Days.map((day, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full relative flex flex-col justify-end h-32">
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  {day.minutes}p
                </div>
                <div 
                  className={cn(
                    "w-full rounded-t-lg transition-all duration-500",
                    day.minutes > 0 ? "bg-blue-600 shadow-lg shadow-blue-100" : "bg-gray-50 border-t border-gray-100"
                  )}
                  style={{ height: `${Math.max((day.minutes / maxMinutes) * 100, 5)}%` }}
                />
              </div>
              <span className={cn(
                "text-[10px] font-black uppercase tracking-tighter transition-colors",
                day.date === todayStr ? "text-blue-600" : "text-gray-400"
              )}>
                {day.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mx-4 grid grid-cols-2 gap-4">
        <div className="rounded-[2rem] bg-indigo-600 p-6 text-white shadow-lg shadow-indigo-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/20 rounded-xl">
              <Zap className="w-5 h-5" />
            </div>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Chuỗi học</p>
          <div className="flex items-baseline gap-1">
            <h4 className="text-3xl font-black">{currentStreak}</h4>
            <span className="text-xs font-bold opacity-80">Ngày</span>
          </div>
        </div>

        <div className="rounded-[2rem] bg-orange-500 p-6 text-white shadow-lg shadow-orange-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/20 rounded-xl">
              <Target className="w-5 h-5" />
            </div>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Từ vựng</p>
          <div className="flex items-baseline gap-1">
            <h4 className="text-3xl font-black">{totalWordsLearned}</h4>
            <span className="text-xs font-bold opacity-80">Từ</span>
          </div>
        </div>
      </div>

      <div className="mx-4 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Tổng thời gian</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <p className="text-xl font-black text-gray-900">{formatHours(totalMinutes)}</p>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Bài học</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <p className="text-xl font-black text-gray-900">{totalLessons} <span className="text-xs text-gray-400">/ 60</span></p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-50">
           <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tiến độ lộ trình</span>
              <span className="text-sm font-black text-blue-600">{progressPercentage}%</span>
           </div>
           <div className="w-full bg-gray-50 h-3 rounded-full overflow-hidden border border-gray-100">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                className="h-full bg-blue-600 rounded-full shadow-md shadow-blue-200" 
              />
           </div>
        </div>
      </div>

      {/* Utilities */}
      <div className="mx-4 rounded-[2rem] border border-gray-100 bg-white overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-50">
          <h3 className="font-black text-gray-900">Hành trang du học</h3>
        </div>
        <div className="p-2 space-y-1">
          {[
            { to: "/student/tocfl", icon: FileText, bg: "bg-blue-50", text: "text-blue-600", label: "Luyện thi TOCFL" },
            { to: "/student/study-plan", icon: PenTool, bg: "bg-indigo-50", text: "text-indigo-600", label: "Kế hoạch học tập" },
            { to: "/student/interview", icon: Mic, bg: "bg-orange-50", text: "text-orange-600", label: "Luyện phỏng vấn" },
            { to: "/student/weak-words", icon: AlertCircle, bg: "bg-red-50", text: "text-red-600", label: "Từ vựng cần ôn" },
            { to: "/student/dictionary", icon: BookA, bg: "bg-teal-50", text: "text-teal-600", label: "Từ điển từ vựng" }
          ].map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left hover:bg-gray-50 transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl shadow-sm", item.bg, item.text)}>
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="font-bold text-gray-700">{item.label}</span>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-300" />
            </NavLink>
          ))}
        </div>
      </div>

      {/* Support / Contact - Mobile & Desktop */}
      <div className="mx-4 md:hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg shadow-blue-100">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm shadow-sm">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-black text-lg tracking-tight">Hỗ trợ du học Đài Loan</h3>
            <p className="text-blue-100 text-sm font-medium">Công ty Cổ phần Du học Hải Dương</p>
          </div>
        </div>
        <a 
          href="tel:0912434666" 
          className="flex items-center justify-center gap-2 w-full py-4 bg-white text-blue-700 font-black rounded-2xl shadow-sm hover:scale-[1.02] active:scale-95 transition-all"
        >
          <PhoneCall className="w-5 h-5" />
          0912.434.666
        </a>
      </div>

      {/* Account Settings */}
      <div className="mx-4 p-2 space-y-2">
        {user?.role === 'admin' && (
          <button
            onClick={() => navigate('/admin')}
            className="flex w-full items-center gap-4 rounded-2xl px-6 py-4 text-left text-white bg-slate-900 border border-slate-800 font-bold hover:bg-slate-800 transition-all active:scale-[0.98]"
          >
            <Shield className="h-5 w-5 text-indigo-400" />
            <span>Chuyển đến Admin Gateway</span>
          </button>
        )}
        
        {user?.role === 'teacher' && (
          <button
            onClick={() => navigate('/teacher')}
            className="flex w-full items-center gap-4 rounded-2xl px-6 py-4 text-left text-white bg-slate-900 border border-slate-800 font-bold hover:bg-slate-800 transition-all active:scale-[0.98]"
          >
            <BookOpen className="h-5 w-5 text-blue-400" />
            <span>Chuyển đến Teacher Portal</span>
          </button>
        )}

        {user?.id === 'guest' ? (
          <button
            onClick={() => navigate('/login')}
            className="flex w-full items-center gap-4 rounded-2xl px-6 py-4 text-left bg-blue-600 text-white font-bold shadow-lg shadow-blue-100 active:scale-[0.98] transition-all"
          >
            <LogIn className="h-5 w-5" />
            <span>Đăng nhập ngay</span>
          </button>
        ) : (
          <button 
            onClick={signOut}
            className="flex w-full items-center gap-4 rounded-2xl px-6 py-4 text-left text-red-600 bg-red-50 border border-red-100 font-bold hover:bg-red-100 transition-all active:scale-[0.98]"
          >
            <LogOut className="h-5 w-5" />
            <span>Đăng xuất tài khoản</span>
          </button>
        )}
      </div>
    </div>
  );
}
