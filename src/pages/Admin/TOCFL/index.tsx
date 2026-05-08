import React, { useState } from 'react';
import { Plus, Search, FileText, Clock, Trophy, Edit2, Trash2, Upload } from 'lucide-react';
import { MOCK_TESTS } from '../../../data/mockTests';
import { cn } from '../../../lib/utils';
import { DataImporter } from '../../../components/Admin/DataImporter';
import { adminService } from '../../../services/adminService';

export function AdminMockTests() {
  const [showImporter, setShowImporter] = useState(false);
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Quản lý Đề thi Mock</h1>
          <p className="text-gray-500 font-medium">Thiết lập bộ đề thi thử TOCFL cho các trình độ A1, A2, B1.</p>
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
            Thêm đề thi mới
          </button>
        </div>
      </header>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Tìm kiếm bộ đề..."
            className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {MOCK_TESTS.map((test) => (
          <div key={test.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest",
                  test.level.startsWith('A') ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"
                )}>
                  Level {test.level}
                </div>
                <div className="flex gap-2">
                   <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                     <Edit2 className="w-4 h-4 text-gray-500" />
                   </button>
                   <button className="p-2 hover:bg-red-50 rounded-xl transition-colors">
                     <Trash2 className="w-4 h-4 text-red-500" />
                   </button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{test.title}</h3>

              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{test.durationMinutes} Phút</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  <span>{test.questions.length} Câu hỏi</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-6 border-t mt-auto">
               <div className="flex-1 text-xs text-gray-400 font-medium">
                 Đã có 12 học viên tham gia thi đề này
               </div>
               <button className="px-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                 Chỉnh sửa câu hỏi
               </button>
            </div>
          </div>
        ))}
      </div>

      {showImporter && (
        <DataImporter 
          type="mock-tests"
          onClose={() => setShowImporter(false)}
          onImport={async (data) => {
            return await adminService.importMockTestsBatch(data);
          }}
        />
      )}
    </div>
  );
}
