import React, { useState, useEffect } from 'react';
import { PlayCircle, CheckCircle, Lock, BookOpen, Target, Compass, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { cn } from '../../../lib/utils';
import { getLessons, fetchLessons } from '../../../services/lessonService';
import { Lesson } from '../../../types/lesson';
import { motion } from 'motion/react';

export function Lessons() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  
  useEffect(() => {
    // Initial sync load
    setLessons(getLessons());
    
    // Async fetch for updates
    const loadData = async () => {
      const data = await fetchLessons();
      setLessons(data);
    };
    loadData();
  }, []);

  // Group lessons by stage
  const stages = Array.from(new Set(lessons.map(l => l.stage)));

  return (
    <div className="mx-auto max-w-5xl space-y-10 pb-12">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1 flex items-center gap-1.5">
            <Compass className="w-4 h-4" /> Khám phá
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Lộ trình học 60 Ngày</h1>
          <p className="text-gray-500 mt-2 font-medium max-w-xl">Giáo trình tiếng Trung Phồn thể chuyên biệt - Hành trang tự tin cho người lao động, du học sinh trước khi sinh sống tại Đài Loan.</p>
        </div>
        <div className="hidden md:flex items-center gap-3 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
           <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold flex flex-col items-center justify-center">
             <span className="text-xl leading-none mb-1">0%</span>
             <span className="text-[10px] uppercase tracking-wider opacity-80">Tiến độ</span>
           </div>
           <div className="px-4 py-2 bg-amber-50 text-amber-600 rounded-xl font-bold flex flex-col items-center justify-center">
             <span className="text-xl leading-none mb-1">0</span>
             <span className="text-[10px] uppercase tracking-wider opacity-80">Ngày chuỗi</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Highlight Box */}
          <div 
            onClick={() => lessons.length > 0 && navigate(`/student/lessons/${lessons[0].id}`)}
            className="md:col-span-2 bg-blue-600 text-white rounded-[2rem] p-6 sm:p-8 relative overflow-hidden shadow-lg shadow-blue-200 flex flex-col justify-between cursor-pointer group active:scale-[0.99] transition-all"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
             <div className="absolute bottom-0 right-10 opacity-20">
                <Target className="w-40 h-40" />
             </div>
             
             <div className="relative z-10">
                <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full border border-white/20 uppercase tracking-wider mb-6 inline-block">Học ngay</span>
                <h2 className="text-2xl font-black mb-2 drop-shadow-sm">Bài 1: Giới thiệu bản thân</h2>
                <p className="text-blue-100 font-medium max-w-sm mb-8 leading-relaxed">Bắt đầu bài học đầu tiên để làm quen với ngữ điệu và các câu chào hỏi cơ bản nhất.</p>
             </div>
             
             <div className="relative z-10 self-start sm:self-auto bg-white text-blue-600 px-6 py-3 rounded-xl font-bold shadow-sm group-hover:bg-gray-50 transition-all flex items-center gap-2">
               Bắt đầu học <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </div>
          </div>

         <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
               <Award className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Thành tựu</h3>
            <p className="text-sm text-gray-500 mb-6 px-4">Hãy hoàn thành các bài học để mở khóa huy hiệu</p>
            <div className="w-full bg-gray-50 p-4 rounded-2xl border border-gray-100 text-sm font-semibold text-gray-400">
               Chưa có huy hiệu
            </div>
         </div>
      </div>

      <div className="space-y-12">
        {stages.map((stageTitle, stageIndex) => {
          const stageLessons = lessons.filter(l => l.stage === stageTitle);
          // For mock logic: let's pretend day 1 is completed, day 2 is current
          return (
            <div key={stageTitle} className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black shadow-inner shadow-white/50 border border-blue-200">
                    {stageIndex + 1}
                 </div>
                 <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                   {stageTitle}
                 </h2>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {stageLessons.map((lesson) => {
                  const isCompleted = false; // mock
                  const isCurrent = false; // mock logic
                  const isLocked = false; // mock logic
                  
                  return (
                    <motion.div 
                      whileHover={isLocked ? {} : { y: -4 }}
                      key={lesson.id} 
                      className={cn(
                        "relative flex flex-col justify-between rounded-2xl border p-5 transition-all group overflow-hidden bg-white",
                        isLocked 
                          ? "bg-slate-50 border-slate-100" 
                          : "border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 cursor-pointer"
                      )}
                      onClick={() => !isLocked && navigate(`/student/lessons/${lesson.id}`)}
                    >
                      {/* Gradient background effect on hover */}
                      {!isLocked && (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      )}

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className={cn(
                             "px-3 py-1 text-xs font-black uppercase tracking-wider rounded-lg border",
                             isLocked 
                               ? "bg-slate-100 text-slate-400 border-slate-200" 
                               : "bg-blue-50 text-blue-600 border-blue-100/50 group-hover:bg-blue-100 transition-colors"
                          )}>
                            Ngày {lesson.day}
                          </span>
                          <span className="px-2 py-0.5 text-xs font-bold text-gray-400 bg-gray-50 rounded-md border border-gray-100">{lesson.level}</span>
                        </div>
                        <h3 className={cn("text-xl font-bold leading-tight mb-2", isLocked ? "text-gray-400" : "text-gray-900")}>
                           {lesson.title}
                        </h3>
                        <p className={cn("text-sm line-clamp-2 pr-4", isLocked ? "text-gray-400" : "text-gray-500 font-medium")}>
                           {lesson.topic}
                        </p>
                      </div>
                      
                      <div className="mt-6 flex items-center justify-between relative z-10 pt-4 border-t border-gray-50">
                        <div className="flex items-center gap-2 text-sm font-bold">
                          {isCompleted ? (
                            <span className="text-emerald-500 flex items-center gap-1.5"><CheckCircle className="h-5 w-5" /> Đã xong</span>
                          ) : isCurrent ? (
                            <span className="text-blue-500 flex items-center gap-1.5"><PlayCircle className="h-5 w-5" /> Đang học</span>
                          ) : isLocked ? (
                            <span className="text-slate-400 flex items-center gap-1.5"><Lock className="h-5 w-5" /> Đã khóa</span>
                          ) : (
                            <span className="text-gray-400 group-hover:text-blue-500 flex items-center gap-1.5 transition-colors"><BookOpen className="h-5 w-5" /> Chưa học</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

