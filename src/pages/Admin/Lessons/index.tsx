import React, { useState } from 'react';
import { Plus, Search, BookOpen, Clock, Layers, Edit2, Trash2, Upload } from 'lucide-react';
import { allLessons } from '../../../data/seedLessons';
import { cn } from '../../../lib/utils';
import { Lesson } from '../../../types/lesson';
import { DataImporter } from '../../../components/Admin/DataImporter';
import { adminService } from '../../../services/adminService';

export function AdminLessons() {
  const [showImporter, setShowImporter] = useState(false);
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Quản lý Bài học</h1>
          <p className="text-gray-500 font-medium">Quản lý nội dung bài học, ngữ pháp và phân phối theo trình độ.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowImporter(true)}
            className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-2xl font-bold shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <Upload className="w-5 h-5" />
            Import CSV/JSON
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" />
            Thêm bài học mới
          </button>
        </div>
      </header>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Tìm kiếm bài học..."
            className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          />
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
             <thead className="bg-gray-50/50 border-b">
               <tr>
                 <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Tên bài học</th>
                 <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Trình độ</th>
                 <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Từ vựng</th>
                 <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Trạng thái</th>
                 <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Thao tác</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-50">
               {allLessons.map((lesson: Lesson) => (
                 <tr key={lesson.id} className="hover:bg-blue-50/30 transition-colors">
                   <td className="px-6 py-4">
                     <div className="flex items-center gap-3">
                       <div className="p-2 bg-gray-50 rounded-xl">
                          <BookOpen className="w-5 h-5 text-gray-400" />
                       </div>
                       <div>
                         <p className="font-bold text-gray-900">{lesson.title}</p>
                         <p className="text-xs text-gray-500 line-clamp-1">{lesson.topic}</p>
                       </div>
                     </div>
                   </td>
                   <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-600">
                        {lesson.stage}
                      </span>
                   </td>
                   <td className="px-6 py-4">
                      <span className="text-sm font-bold text-gray-600">{lesson.vocabulary.length} từ</span>
                   </td>
                   <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded uppercase">Đang mở</span>
                   </td>
                   <td className="px-6 py-4 text-right">
                     <div className="flex items-center justify-end gap-2">
                       <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                         <Edit2 className="w-4 h-4 text-gray-500" />
                       </button>
                       <button className="p-2 hover:bg-red-50 rounded-xl transition-colors">
                         <Trash2 className="w-4 h-4 text-red-500" />
                       </button>
                     </div>
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
        </div>
      </div>

      {showImporter && (
        <DataImporter 
          type="lessons"
          onClose={() => setShowImporter(false)}
          onImport={async (data) => {
            return await adminService.importLessonsBatch(data);
          }}
        />
      )}
    </div>
  );
}
