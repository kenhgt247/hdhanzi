import React, { useState, useEffect } from 'react';
import { Search, Plus, Filter, Edit2, Trash2, BookOpen, Upload, Sparkles, X } from 'lucide-react';
import { tocflVocabularies, Vocab } from '../../../data/vocabulary';
import { cn } from '../../../lib/utils';
import { DataImporter } from '../../../components/Admin/DataImporter';
import { AICreator } from '../../../components/Admin/AICreator';
import { adminService } from '../../../services/adminService';

function EditVocabModal({ vocab, onClose, onSave }: { vocab?: Vocab | null, onClose: () => void, onSave: (v: any) => void }) {
  const [formData, setFormData] = useState({
    traditional: vocab?.traditional || '',
    pinyin: vocab?.pinyin || '',
    vietnamese: vocab?.vietnamese || '',
    level: vocab?.level || 'A1'
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{vocab ? 'Sửa từ vựng' : 'Thêm từ vựng mới'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-5 h-5"/></button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hán tự phồn thể</label>
            <input type="text" value={formData.traditional} onChange={e => setFormData({...formData, traditional: e.target.value})} className="w-full px-4 py-2 border rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pinyin</label>
            <input type="text" value={formData.pinyin} onChange={e => setFormData({...formData, pinyin: e.target.value})} className="w-full px-4 py-2 border rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nghĩa tiếng Việt</label>
            <input type="text" value={formData.vietnamese} onChange={e => setFormData({...formData, vietnamese: e.target.value})} className="w-full px-4 py-2 border rounded-xl" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Trình độ (TOCFL)</label>
            <select value={formData.level} onChange={e => setFormData({...formData, level: e.target.value})} className="w-full px-4 py-2 border rounded-xl">
              <option value="A1">A1</option><option value="A2">A2</option><option value="B1">B1</option>
              <option value="B2">B2</option><option value="C1">C1</option>
            </select>
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

export function AdminVocabulary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [vocabList, setVocabList] = useState<Vocab[]>([]);
  const [showImporter, setShowImporter] = useState(false);
  const [showAICreator, setShowAICreator] = useState(false);
  const [editingVocab, setEditingVocab] = useState<Vocab | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const fetchVocabularies = async () => {
    setLoading(true);
    try {
      const data = await adminService.getVocabularies();
      setVocabList(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVocabularies();
  }, []);

  // Reset page when search or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedLevel]);

  const handleSave = async (formData: any) => {
    if (editingVocab && editingVocab.id) {
      await adminService.updateVocabulary(editingVocab.id, formData);
    } else {
      await adminService.addVocabulary(formData);
    }
    setEditingVocab(undefined);
    fetchVocabularies();
  };

  const handleDelete = async (id?: string) => {
    if (!id) {
      alert("Không thể xóa từ vựng mẫu (chưa có ID). Hãy import dữ liệu vào Firestore trước.");
      return;
    }
    if (window.confirm('Bạn có chắc muốn xóa từ này?')) {
      await adminService.deleteVocabulary(id);
      fetchVocabularies();
    }
  };

  const filteredVocabs = vocabList.filter(v => {
    const matchesSearch = v.traditional.includes(searchTerm) || 
                          v.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          v.vietnamese.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || v.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const totalPages = Math.ceil(filteredVocabs.length / itemsPerPage);
  const paginatedVocabs = filteredVocabs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Quản lý Từ vựng</h1>
          <p className="text-gray-500 font-medium">Chỉnh sửa, thêm mới từ vựng cho hệ thống bài học và thi thử.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowImporter(true)}
            className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-2xl font-bold shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <Upload className="w-5 h-5" />
            Import CSV/JSON
          </button>
          <button 
            onClick={() => setShowAICreator(!showAICreator)}
            className="bg-purple-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-purple-100 flex items-center gap-2 hover:bg-purple-700 transition-colors"
          >
            <Sparkles className="w-5 h-5" />
            AI Creator
          </button>
          <button onClick={() => setEditingVocab(null)} className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" />
            Thêm thủ công
          </button>
        </div>
      </header>

      {showAICreator && (
        <AICreator 
          type="vocabulary"
          onSave={async (v) => {
            const arr = Array.isArray(v) ? v : [v];
            await adminService.importVocabularyBatch(arr);
            fetchVocabularies();
          }} 
          onClose={() => setShowAICreator(false)} 
        />
      )}

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Tìm kiếm từ vựng (Hán tự, Pinyin, Nghĩa)..."
            className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-5 h-5 text-gray-400" />
          <select 
            className="flex-1 sm:flex-none py-3 px-4 border border-gray-100 rounded-2xl focus:outline-none bg-gray-50 font-bold text-gray-700"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="All">Tất cả trình độ</option>
            <option value="A1">TOCFL A1</option>
            <option value="A2">TOCFL A2</option>
            <option value="B1">TOCFL B1</option>
            <option value="B2">TOCFL B2</option>
            <option value="C1">TOCFL C1</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
             <thead className="bg-gray-50/50 border-b">
               <tr>
                 <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Hán tự</th>
                 <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Pinyin</th>
                 <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Nghĩa tiếng Việt</th>
                 <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest">Trình độ</th>
                 <th className="px-6 py-4 text-xs font-black text-gray-400 uppercase tracking-widest text-right">Thao tác</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-gray-50">
               {loading ? (
                 <tr><td colSpan={5} className="p-6 text-center text-gray-500">Đang tải...</td></tr>
               ) : paginatedVocabs.map((v, i) => (
                 <tr key={v.id || i} className="hover:bg-blue-50/30 transition-colors">
                   <td className="px-6 py-4">
                     <span className="text-2xl font-serif font-black text-gray-900">{v.traditional}</span>
                   </td>
                   <td className="px-6 py-4 font-bold text-gray-600">{v.pinyin}</td>
                   <td className="px-6 py-4 text-gray-700">{v.vietnamese}</td>
                   <td className="px-6 py-4">
                     <span className={cn(
                       "px-3 py-1 rounded-full text-xs font-black tracking-tighter",
                       v.level.startsWith('A') ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"
                     )}>
                       {v.level}
                     </span>
                   </td>
                   <td className="px-6 py-4 text-right">
                     <div className="flex items-center justify-end gap-2">
                       <button onClick={() => setEditingVocab(v)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                         <Edit2 className="w-4 h-4 text-gray-500" />
                       </button>
                       <button onClick={() => handleDelete(v.id)} className="p-2 hover:bg-red-50 rounded-xl transition-colors">
                         <Trash2 className="w-4 h-4 text-red-500" />
                       </button>
                     </div>
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
          {!loading && paginatedVocabs.length === 0 && (
            <div className="py-20 text-center">
              <BookOpen className="w-16 h-16 text-gray-200 mx-auto mb-4" />
              <p className="text-gray-400 font-medium">Không tìm thấy từ vựng nào.</p>
            </div>
          )}
        </div>
        
        {totalPages > 1 && (
          <div className="p-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Hiển thị {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, filteredVocabs.length)} trong {filteredVocabs.length} từ vựng
            </span>
            <div className="flex gap-1 overflow-x-auto">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
                className="px-3 py-1 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                Trước
              </button>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg font-medium">{currentPage} / {totalPages}</span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => p + 1)}
                className="px-3 py-1 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                Sau
              </button>
            </div>
          </div>
        )}
      </div>

      {showImporter && (
        <DataImporter 
          type="vocabulary"
          onClose={() => setShowImporter(false)}
          onImport={async (data) => {
            const res = await adminService.importVocabularyBatch(data);
            fetchVocabularies();
            return res;
          }}
        />
      )}
      
      {editingVocab !== undefined && (
        <EditVocabModal 
          vocab={editingVocab} 
          onClose={() => setEditingVocab(undefined)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
