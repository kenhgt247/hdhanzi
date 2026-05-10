import React, { useState, useEffect } from 'react';
import { Plus, Search, FileText, Clock, Trophy, Edit2, Trash2, Upload, X, Sparkles } from 'lucide-react';
import { MOCK_TESTS as seedMockTests } from '../../../data/mockTests';
import { cn } from '../../../lib/utils';
import { DataImporter } from '../../../components/Admin/DataImporter';
import { adminService } from '../../../services/adminService';
import { AICreator } from '../../../components/Admin/AICreator';

function EditMockTestModal({ test, onClose, onSave }: { test?: any | null, onClose: () => void, onSave: (t: any) => void }) {
  const [formData, setFormData] = useState({
    title: test?.title || '',
    level: test?.level || 'A1',
    durationMinutes: test?.durationMinutes || 60
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{test ? 'Sửa đề thi' : 'Thêm đề thi mới'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-5 h-5"/></button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
            <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 border rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Trình độ</label>
            <input type="text" value={formData.level} onChange={e => setFormData({...formData, level: e.target.value})} className="w-full px-4 py-2 border rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Thời gian (Phút)</label>
            <input type="number" value={formData.durationMinutes} onChange={e => setFormData({...formData, durationMinutes: parseInt(e.target.value) || 60})} className="w-full px-4 py-2 border rounded-xl" />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-8">
          <button onClick={onClose} className="px-6 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-xl">Hủy</button>
          <button onClick={() => onSave(formData)} className="px-6 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700">Lưu thay đổi</button>
        </div>
      </div>
    </div>
  );
}

export function AdminMockTests() {
  const [showImporter, setShowImporter] = useState(false);
  const [showAICreator, setShowAICreator] = useState(false);
  const [tests, setTests] = useState<any[]>(seedMockTests);
  const [editingTest, setEditingTest] = useState<any | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const fetchTests = async () => {
    setLoading(true);
    const data = await adminService.getMockTests();
    setTests(data.length > 0 ? data : seedMockTests);
    setLoading(false);
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const handleSave = async (formData: any) => {
    if (editingTest && editingTest.id && editingTest.id.length > 5) { // seed data is usually mock1
      await adminService.updateMockTest(editingTest.id, formData);
    } else {
      await adminService.addMockTest({ ...formData, questions: [] });
    }
    setEditingTest(undefined);
    fetchTests();
  };

  const handleDelete = async (id: string) => {
    if (id.length <= 5) {
      alert("Không thể xóa dữ liệu mẫu");
      return;
    }
    if (window.confirm('Bạn có chắc muốn xóa?')) {
      await adminService.deleteMockTest(id);
      fetchTests();
    }
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Quản lý Đề thi Mock</h1>
          <p className="text-gray-500 font-medium">Thiết lập bộ đề thi thử TOCFL cho các trình độ A1, A2, B1.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowAICreator(!showAICreator)}
            className={cn(
              "px-6 py-3 rounded-2xl font-bold shadow-sm flex items-center gap-2 transition-colors",
              showAICreator ? "bg-purple-100 text-purple-700 border-purple-200" : "bg-purple-50 text-purple-600 border border-purple-100 hover:bg-purple-100"
            )}
          >
            <Sparkles className="w-5 h-5" />
            AI Creator
          </button>
          <button 
            onClick={() => setShowImporter(true)}
            className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-2xl font-bold shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <Upload className="w-5 h-5" />
            Import CSV/JSON
          </button>
          <button onClick={() => setEditingTest(null)} className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" />
            Thêm thủ công
          </button>
        </div>
      </header>

      {showAICreator && (
        <AICreator 
          type="mock-tests"
          onSave={async (v) => {
            const arr = Array.isArray(v) ? v : [v];
            await adminService.importMockTestsBatch(arr);
            fetchTests();
          }} 
          onClose={() => setShowAICreator(false)} 
        />
      )}

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

      {loading ? (
        <div className="p-6 text-center text-gray-500">Đang tải...</div>
      ) : (
      <div className="grid gap-6 md:grid-cols-2">
        {tests.map((test) => (
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
                   <button onClick={() => setEditingTest(test)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                     <Edit2 className="w-4 h-4 text-gray-500" />
                   </button>
                   <button onClick={() => handleDelete(test.id)} className="p-2 hover:bg-red-50 rounded-xl transition-colors">
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
                  <span>{test.questions?.length || 0} Câu hỏi</span>
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
      )}

      {showImporter && (
        <DataImporter 
          type="mock-tests"
          onClose={() => setShowImporter(false)}
          onImport={async (data) => {
            const res = await adminService.importMockTestsBatch(data);
            fetchTests();
            return res;
          }}
        />
      )}

      {editingTest !== undefined && (
        <EditMockTestModal 
          test={editingTest} 
          onClose={() => setEditingTest(undefined)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
