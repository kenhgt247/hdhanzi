import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Calendar, Target, Award, AlertCircle, BookA, History } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../../../lib/utils';
import { useAuth } from '../../../contexts/AuthContext';
import { adminService, StudentStats } from '../../../services/adminService';
import { MockTestResult, WeakWord } from '../../../types/study';

export function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [student, setStudent] = useState<StudentStats | null>(null);
  const [mockResults, setMockResults] = useState<MockTestResult[]>([]);
  const [weakWords, setWeakWords] = useState<WeakWord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      setLoading(true);
      const [s, results, words] = await Promise.all([
        adminService.getStudentById(id),
        adminService.getStudentMockResults(id),
        adminService.getStudentWeakWords(id)
      ]);
      setStudent(s);
      setMockResults(results);
      setWeakWords(words);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const backPath = user?.role === 'admin' ? '/admin/students' : '/teacher/students';

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="text-center py-20">
        <AlertCircle className="w-16 h-16 text-gray-200 mx-auto mb-4" />
        <p className="text-gray-500 font-medium">Không tìm thấy học viên.</p>
        <button onClick={() => navigate(backPath)} className="mt-4 text-blue-600 font-bold">Quay lại</button>
      </div>
    );
  }

  const chartData = mockResults.slice().reverse().map((r, i) => ({
    name: `Lần ${i + 1}`,
    score: Math.round((r.score / r.totalQuestions) * 100)
  }));

  return (
    <div className="space-y-6 pb-20">
      <header className="flex items-center gap-4">
        <button 
          onClick={() => navigate(backPath)}
          className="p-3 bg-white rounded-2xl hover:bg-gray-100 transition shadow-sm border"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-3xl font-black text-gray-900">Chi tiết Học viên</h1>
          <p className="text-gray-500 font-medium">{student.name} • {student.email}</p>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <div className="col-span-1">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-md text-3xl font-black text-white shadow-xl border border-white/30">
                {student.name[0]}
              </div>
              <h2 className="mt-6 text-2xl font-black text-white">{student.name}</h2>
              <div className="mt-2 flex items-center justify-center gap-2 text-blue-100 font-medium">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{student.email}</span>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-50">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Trình độ</p>
                  <p className="text-lg font-black text-gray-900">{student.currentLevel || 'A1'}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-50">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Điểm tích lũy</p>
                  <p className="text-lg font-black text-gray-900">{student.totalPoints || 0}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Target className="h-5 w-5"/>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Mục tiêu</p>
                    <p className="text-sm font-bold text-gray-900">TOCFL {student.currentLevel === 'A1' ? 'A2' : 'B1'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <History className="h-5 w-5"/>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Lần cuối học</p>
                    <p className="text-sm font-bold text-gray-900">
                      {student.lastLoginAt ? new Date(typeof student.lastLoginAt.toDate === 'function' ? student.lastLoginAt.toDate() : student.lastLoginAt).toLocaleDateString('vi-VN') : 'Chưa có dữ liệu'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 border-t flex flex-col gap-3">
              <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-100 hover:bg-blue-700 transition">
                Giao Bài Tập
              </button>
              <button className="w-full py-4 bg-white border border-rose-100 text-rose-600 rounded-2xl font-black hover:bg-rose-50 transition shadow-sm">
                Cảnh báo học tập
              </button>
            </div>
          </div>
        </div>

        {/* Activity & Performance */}
        <div className="lg:col-span-2 space-y-6">
          {chartData.length > 0 ? (
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black text-gray-900 mb-8">Tiến độ điểm Mock Test</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={4} fillOpacity={1} fill="url(#colorScore)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center py-20">
               <Award className="w-16 h-16 text-gray-100 mx-auto mb-4" />
               <p className="text-gray-400 font-medium">Học viên chưa tham gia kỳ thi thử nào.</p>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2">
             {/* Weak Words Summary */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-gray-900">Từ vựng yếu</h3>
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <BookA className="h-5 w-5" />
                </div>
              </div>
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {weakWords.length === 0 ? (
                  <p className="text-gray-400 text-sm italic py-4">Chưa có dữ liệu từ vựng yếu.</p>
                ) : (
                  weakWords.map((word) => (
                    <div key={word.wordId} className="flex justify-between items-center p-3 bg-gray-50 rounded-2xl border border-gray-50">
                      <div>
                        <p className="font-bold text-gray-900">{word.chinese}</p>
                        <p className="text-[10px] text-gray-500">{word.pinyin}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-black text-rose-500 uppercase">
                          {Object.entries(word.mistakeTypes).sort((a,b) => b[1] - a[1])[0][0]}
                        </span>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Lỗi: {word.mistakeCount}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Test History */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-gray-900">Lịch sử thi thử</h3>
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <History className="h-5 w-5" />
                </div>
              </div>
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {mockResults.length === 0 ? (
                  <p className="text-gray-400 text-sm italic py-4">Chưa có dữ liệu thi thử.</p>
                ) : (
                  mockResults.map((result, idx) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-2xl border border-gray-50">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-sm font-bold text-gray-900">Đề thi {result.level}</p>
                        <span className="text-sm font-black text-blue-600">
                          {Math.round((result.score / result.totalQuestions) * 100)}%
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-500 font-bold">
                        {new Date(typeof result.completedAt.toDate === 'function' ? result.completedAt.toDate() : result.completedAt).toLocaleDateString('vi-VN')} • Đúng {result.score}/{result.totalQuestions}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
