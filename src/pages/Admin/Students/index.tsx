import React, { useState, useEffect } from 'react';
import { Search, Filter, AlertTriangle, ChevronRight, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { useAuth } from '../../../contexts/AuthContext';
import { adminService, StudentStats } from '../../../services/adminService';

export function AdminStudents() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [students, setStudents] = useState<StudentStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      const data = await adminService.getAllStudents();
      setStudents(data);
      setLoading(false);
    };
    fetchStudents();
  }, []);

  const filteredStudents = students.filter(st => {
    const matchesSearch = st.name.toLowerCase().includes(searchTerm.toLowerCase()) || st.email.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    
    if (filter === 'inactive') {
      if (!st.lastLoginAt) return true;
      const days = Math.floor((Date.now() - st.lastLoginAt.toDate().getTime()) / (1000 * 60 * 60 * 24));
      return days > 3;
    }
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý Học viên</h1>
          <p className="text-sm text-gray-500">Xem danh sách, kiểm tra tiến độ và cảnh báo học viên</p>
        </div>
      </header>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-xl shadow-sm border">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên, email..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select 
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Tất cả học viên</option>
            <option value="inactive">Nghỉ quá 3 ngày</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-900 border-b">
              <tr>
                <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-widest text-gray-400">Học viên</th>
                <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-widest text-gray-400">Trình độ</th>
                <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-widest text-gray-400">Điểm tích lũy</th>
                <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-widest text-gray-400">Hoạt động</th>
                <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-widest text-gray-400 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredStudents.map((st) => {
                const daysInactive = st.lastLoginAt ? Math.floor((Date.now() - st.lastLoginAt.toDate().getTime()) / (1000 * 60 * 60 * 24)) : -1;
                
                return (
                  <tr key={st.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs uppercase">
                          {st.name[0]}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{st.name}</div>
                          <div className="text-xs text-gray-500">{st.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-gray-500 uppercase">{st.currentLevel || 'N/A'}</span>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">
                      {st.totalPoints || 0}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        {daysInactive > 3 && (
                          <span className="inline-flex w-fit items-center gap-1 rounded bg-red-50 px-2 py-1 text-[10px] font-black text-red-600 uppercase">
                            <AlertTriangle className="h-3 w-3" />
                            Nghỉ {daysInactive} ngày
                          </span>
                        )}
                        {daysInactive === -1 && (
                          <span className="inline-flex w-fit items-center gap-1 rounded bg-gray-100 px-2 py-1 text-[10px] font-black text-gray-600 uppercase">
                            Chưa học
                          </span>
                        )}
                        {daysInactive >= 0 && daysInactive <= 3 && (
                          <span className="inline-flex w-fit items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-[10px] font-black text-emerald-600 uppercase">
                            Đang học
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => navigate(`/admin/students/${st.id}`)}
                        className="inline-flex items-center justify-center p-2 rounded-lg text-blue-600 hover:bg-blue-50 font-bold text-xs"
                      >
                        Chi tiết <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    Không tìm thấy học viên nào phù hợp với điều kiện lọc.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
