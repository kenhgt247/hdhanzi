import React, { useState } from 'react';
import { Plus, Search, MessageSquare, Edit2, Trash2, Upload } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { DataImporter } from '../../../components/Admin/DataImporter';
import { adminService } from '../../../services/adminService';

// Mock dialogues for initial view
const MOCK_DIALOGUES = [
  { id: 'd1', title: 'Tại sân bay', category: 'Du lịch', questionsCount: 5 },
  { id: 'd2', title: 'Đặt món ăn', category: 'Đời sống', questionsCount: 8 },
  { id: 'd3', title: 'Phỏng vấn xin việc', category: 'Công việc', questionsCount: 12 },
];

export function AdminDialogues() {
  const [showImporter, setShowImporter] = useState(false);
  
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Quản lý Hội thoại</h1>
          <p className="text-gray-500 font-medium">Hệ thống các tình huống hội thoại và luyện phỏng vấn.</p>
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
            Thêm hội thoại mới
          </button>
        </div>
      </header>

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Tìm kiếm hội thoại..."
            className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {MOCK_DIALOGUES.map((d) => (
          <div key={d.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 rounded-2xl">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex gap-1">
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <Edit2 className="w-4 h-4 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-red-50 rounded-xl transition-colors">
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{d.title}</h3>
            <p className="text-sm font-medium text-gray-400 mb-4">{d.category}</p>
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-xs font-black text-gray-500 uppercase">{d.questionsCount} Câu hỏi</span>
              <button className="text-blue-600 font-bold text-sm hover:underline">Chi tiết</button>
            </div>
          </div>
        ))}
      </div>

      {showImporter && (
        <DataImporter 
          type="dialogues"
          onClose={() => setShowImporter(false)}
          onImport={async (data) => {
            return await adminService.importDialoguesBatch(data);
          }}
        />
      )}
    </div>
  );
}
