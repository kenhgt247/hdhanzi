import React from 'react';
import { Users, AlertTriangle, BookOpen, Clock, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function TeacherDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Tổng quan</h1>
        <p className="text-gray-500">Giám sát tiến độ học tập và các cảnh báo khẩn cấp.</p>
      </header>

      {/* Stats Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Học viên của tôi</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">45</p>
            </div>
            <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-600">Cần chú ý khẩn</p>
              <p className="text-2xl font-bold text-red-700 mt-1">8</p>
            </div>
            <div className="rounded-lg bg-red-100 p-3 text-red-600">
              <AlertTriangle className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Bài tập chờ chấm</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
            </div>
            <div className="rounded-lg bg-amber-100 p-3 text-amber-600">
              <Clock className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Sắp thi TOCFL (30 ngày)</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">5</p>
            </div>
            <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
              <Calendar className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Urgent Alerts List */}
        <div className="rounded-xl border bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="border-b px-6 py-4 flex justify-between items-center bg-gray-50">
            <h2 className="font-semibold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500"/>
              Học viên cần quan tâm
            </h2>
            <button onClick={() => navigate('/teacher/students')} className="text-sm font-medium text-blue-600 hover:text-blue-800">Xem tất cả</button>
          </div>
          <div className="flex-1 overflow-auto p-0">
            <ul className="divide-y">
              <li className="p-4 hover:bg-gray-50 transition cursor-pointer" onClick={() => navigate('/teacher/students/st2')}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">Trần Thị B</h3>
                    <p className="text-sm text-gray-500">Lớp Nhập môn</p>
                  </div>
                  <span className="inline-flex rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                    Nghỉ &gt; 7 ngày
                  </span>
                </div>
              </li>
              <li className="p-4 hover:bg-gray-50 transition cursor-pointer" onClick={() => navigate('/teacher/students/st5')}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">Hoàng Văn E</h3>
                    <p className="text-sm text-gray-500">Lớp 60 ngày</p>
                  </div>
                  <span className="inline-flex rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                    Điểm TB &lt; 60
                  </span>
                </div>
              </li>
              <li className="p-4 hover:bg-gray-50 transition cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">Phạm Thị D</h3>
                    <p className="text-sm text-gray-500">Lớp 60 ngày</p>
                  </div>
                  <span className="inline-flex rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                    Bay sau 15 ngày
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Classes quick view */}
        <div className="rounded-xl border bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="border-b px-6 py-4 flex justify-between items-center bg-gray-50">
            <h2 className="font-semibold text-gray-900 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-500"/>
              Lớp học của tôi
            </h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Quản lý lớp</button>
          </div>
          <div className="flex-1 p-4 space-y-4">
            <div className="border rounded-lg p-4 bg-gray-50 group hover:border-blue-300 transition cursor-pointer">
              <h3 className="font-medium text-gray-900 group-hover:text-blue-700">Lớp Luyện Thi TOCFL A2 - T1</h3>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>15 Học viên</span>
                <span>Thi: 15/06/2024</span>
              </div>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50 group hover:border-blue-300 transition cursor-pointer">
              <h3 className="font-medium text-gray-900 group-hover:text-blue-700">Lớp Nhập môn Dành cho Du học sinh</h3>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>12 Học viên</span>
                <span>Thi: 10/07/2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
