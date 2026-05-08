import React, { useState } from 'react';
import { Plus, Users, Calendar, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { useAuth } from '../../../contexts/AuthContext';

const mockClasses = [
  { id: '1', name: 'Lớp Luyện Thi TOCFL A2 - T1', teacher: 'Lý Lão Sư', studentsCount: 15, targetExamDate: '2024-06-15', departureDate: '2024-08-20', status: 'active' },
  { id: '2', name: 'Lớp Nhập môn Dành cho Du học sinh', teacher: 'Vương Lão Sư', studentsCount: 12, targetExamDate: '2024-07-10', departureDate: '2024-09-05', status: 'active' },
  { id: '3', name: 'Lớp Cấp tốc 60 Ngày', teacher: 'Lâm Lão Sư', studentsCount: 8, targetExamDate: '2024-05-20', departureDate: '2024-06-01', status: 'completed' },
];

export function AdminClasses() {
  const { user } = useAuth();
  const [classes, setClasses] = useState(mockClasses);

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý Lớp học</h1>
          <p className="text-sm text-gray-500">Tạo, sửa, xóa và quản lý thông tin các lớp học của trung tâm</p>
        </div>
        {user?.role === 'admin' && (
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            Thêm Lớp mới
          </button>
        )}
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((cls) => (
          <div key={cls.id} className="flex flex-col rounded-xl border bg-white shadow-sm overflow-hidden hover:border-blue-300 transition">
            <div className="p-5 flex-1">
              <div className="flex justify-between items-start mb-4">
                <span className={cn(
                  "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
                  cls.status === 'active' ? "bg-green-50 text-green-700 ring-green-600/20" : "bg-gray-50 text-gray-700 ring-gray-500/20"
                )}>
                  {cls.status === 'active' ? 'Đang hoạt động' : 'Đã kết thúc'}
                </span>
                {user?.role === 'admin' && (
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[3.5rem]">{cls.name}</h3>
              <p className="text-sm font-medium text-gray-600 mt-2">Giáo viên: {cls.teacher}</p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>{cls.studentsCount} học viên</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>Thi TOCFL: {new Date(cls.targetExamDate).toLocaleDateString('vi-VN')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>Ngày bay: {new Date(cls.departureDate).toLocaleDateString('vi-VN')}</span>
                </div>
              </div>
            </div>
            <div className="border-t bg-gray-50 p-4">
              <button className="w-full text-center text-sm font-medium text-blue-600 hover:text-blue-800">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
