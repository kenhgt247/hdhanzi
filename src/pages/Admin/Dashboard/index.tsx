import React, { useEffect, useState } from 'react';
import { Users, BookOpen, LayoutDashboard, Target, AlertTriangle, ChevronRight, BookA, FileText } from 'lucide-react';
import { adminService, StudentStats } from '../../../services/adminService';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';

export function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ totalStudents: 0, totalLessons: 0, totalVocab: 0 });
  const [inactiveStudents, setInactiveStudents] = useState<StudentStats[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      const [s, inactive] = await Promise.all([
        adminService.getOverallStats(),
        adminService.getInactiveStudents(3)
      ]);
      setStats(s);
      setInactiveStudents(inactive);
      setLoading(false);
    };
    fetchDashboardData();
  }, []);

  const getLoginTime = (lastLoginAt: any) => {
    if (!lastLoginAt) return 0;
    if (typeof lastLoginAt.toDate === 'function') return lastLoginAt.toDate().getTime();
    if (lastLoginAt instanceof Date) return lastLoginAt.getTime();
    return new Date(lastLoginAt).getTime();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 font-medium">Hệ thống quản lý HD Chinese.</p>
        </div>
        <div className="flex gap-2">
           <div className="px-4 py-2 bg-white rounded-xl border text-sm font-bold shadow-sm">
             {new Date().toLocaleDateString('vi-VN')}
           </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-blue-50 p-4 text-blue-600">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Học viên</p>
              <p className="text-2xl font-black text-gray-900">{stats.totalStudents}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-purple-50 p-4 text-purple-600">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Bài học</p>
              <p className="text-2xl font-black text-gray-900">{stats.totalLessons}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-orange-50 p-4 text-orange-600">
              <BookA className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Từ vựng</p>
              <p className="text-2xl font-black text-gray-900">{stats.totalVocab}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-emerald-50 p-4 text-emerald-600">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Mock Tests</p>
              <p className="text-2xl font-black text-gray-900">4</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Inactive Alert Card */}
        <div className="lg:col-span-2 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h2 className="font-bold text-gray-900">Cảnh báo: 3 ngày chưa học</h2>
            </div>
            <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
              {inactiveStudents.length} Học viên
            </span>
          </div>

          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {inactiveStudents.length === 0 ? (
              <div className="text-center py-10 text-gray-400 italic">
                Tất cả học viên đều tích cực trong 3 ngày qua.
              </div>
            ) : (
              inactiveStudents.map((s) => (
                <div 
                  key={s.id} 
                  onClick={() => navigate(`/admin/students/${s.id}`)}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-gray-600 border">
                      {s.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{s.name}</p>
                      <p className="text-xs text-gray-500">{s.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="text-right">
                       <p className="text-xs font-bold text-rose-500">Nghỉ {Math.floor((Date.now() - getLoginTime(s.lastLoginAt)) / (1000 * 60 * 60 * 24))} ngày</p>
                     </div>
                     <ChevronRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Links / Status Card */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="font-bold text-gray-900 mb-6">Lối tắt nhanh</h2>
          <div className="space-y-3">
            {[
              { label: 'Thêm bài học mới', path: '/admin/lessons', color: 'blue' },
              { label: 'Cập nhật từ vựng', path: '/admin/vocabulary', color: 'orange' },
              { label: 'Tạo đề thi mới', path: '/admin/mock-tests', color: 'emerald' },
              { label: 'Xuất báo cáo tháng', path: '/admin/reports', color: 'purple' },
            ].map((link, idx) => (
              <button 
                key={idx}
                onClick={() => navigate(link.path)}
                className={cn(
                  "w-full p-4 rounded-2xl border border-gray-50 font-bold text-sm text-left transition-all hover:shadow-md active:scale-95",
                  `hover:border-${link.color}-200 bg-white text-gray-700`
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
