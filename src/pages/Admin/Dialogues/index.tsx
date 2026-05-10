import React, { useState, useEffect } from 'react';
import { Plus, Search, MessageSquare, Edit2, Trash2, Upload, X, Sparkles } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { DataImporter } from '../../../components/Admin/DataImporter';
import { adminService } from '../../../services/adminService';
import { AICreator } from '../../../components/Admin/AICreator';

// Mock dialogues for initial view
const MOCK_DIALOGUES = [
  { id: 'd1', title: 'Tại sân bay', category: 'Du lịch', questionsCount: 5 },
  { id: 'd2', title: 'Đặt món ăn', category: 'Đời sống', questionsCount: 8 },
  { id: 'd3', title: 'Phỏng vấn xin việc', category: 'Công việc', questionsCount: 12 },
];

function EditDialogueModal({ dialogue, onClose, onSave }: { dialogue?: any | null, onClose: () => void, onSave: (d: any) => void }) {
  const [formData, setFormData] = useState({
    title: dialogue?.title || '',
    category: dialogue?.category || '',
    questionsCount: dialogue?.questionsCount || 0
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{dialogue ? 'Sửa hội thoại' : 'Thêm hội thoại mới'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-5 h-5"/></button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
            <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 border rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
            <input type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 border rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Số lượng câu hỏi</label>
            <input type="number" value={formData.questionsCount} onChange={e => setFormData({...formData, questionsCount: parseInt(e.target.value) || 0})} className="w-full px-4 py-2 border rounded-xl" />
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

export function AdminDialogues() {
  const [showImporter, setShowImporter] = useState(false);
  const [showAICreator, setShowAICreator] = useState(false);
  const [dialogues, setDialogues] = useState<any[]>(MOCK_DIALOGUES);
  const [editingDialogue, setEditingDialogue] = useState<any | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  const fetchDialogues = async () => {
    setLoading(true);
    const data = await adminService.getDialogues();
    setDialogues(data.length > 0 ? data : MOCK_DIALOGUES);
    setLoading(false);
  };

  useEffect(() => {
    fetchDialogues();
  }, []);

  const handleSave = async (formData: any) => {
    if (editingDialogue && editingDialogue.id && !editingDialogue.id.startsWith('d')) {
      await adminService.updateDialogue(editingDialogue.id, formData);
    } else {
      await adminService.addDialogue(formData);
    }
    setEditingDialogue(undefined);
    fetchDialogues();
  };

  const handleDelete = async (id: string) => {
    if (id.startsWith('d')) {
      alert("Không thể xóa dữ liệu mẫu");
      return;
    }
    if (window.confirm('Bạn có chắc muốn xóa?')) {
      await adminService.deleteDialogue(id);
      fetchDialogues();
    }
  };
  
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Quản lý Hội thoại</h1>
          <p className="text-gray-500 font-medium">Hệ thống các tình huống hội thoại và luyện phỏng vấn.</p>
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
          <button onClick={() => setEditingDialogue(null)} className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" />
            Thêm thủ công
          </button>
        </div>
      </header>

      {showAICreator && (
        <AICreator 
          type="dialogues"
          onSave={async (v) => {
            const arr = Array.isArray(v) ? v : [v];
            await adminService.importDialoguesBatch(arr);
            fetchDialogues();
          }} 
          onClose={() => setShowAICreator(false)} 
        />
      )}

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

      {loading ? (
         <div className="p-6 text-center text-gray-500">Đang tải...</div>
      ) : (
      <div className="grid gap-6 md:grid-cols-3">
        {dialogues.map((d) => (
          <div key={d.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 rounded-2xl">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex gap-1">
                <button onClick={() => setEditingDialogue(d)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <Edit2 className="w-4 h-4 text-gray-500" />
                </button>
                <button onClick={() => handleDelete(d.id)} className="p-2 hover:bg-red-50 rounded-xl transition-colors">
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
      )}

      {showImporter && (
        <DataImporter 
          type="dialogues"
          onClose={() => setShowImporter(false)}
          onImport={async (data) => {
            const res = await adminService.importDialoguesBatch(data);
            fetchDialogues();
            return res;
          }}
        />
      )}
      
      {editingDialogue !== undefined && (
        <EditDialogueModal 
          dialogue={editingDialogue} 
          onClose={() => setEditingDialogue(undefined)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
