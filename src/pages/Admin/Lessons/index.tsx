import React, { useState, useEffect } from 'react';
import { Plus, Search, BookOpen, Clock, Layers, Edit2, Trash2, Upload, X, Sparkles, AlertTriangle, FileText } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Lesson } from '../../../types/lesson';
import { DataImporter } from '../../../components/Admin/DataImporter';
import { adminService } from '../../../services/adminService';
import { AICreator } from '../../../components/Admin/AICreator';
import { AutoGrammarGenerator } from '../../../components/Admin/AutoGrammarGenerator';
import { EditLessonModal } from '../../../components/Admin/EditLessonModal';
import { EditLessonContentModal } from '../../../components/Admin/EditLessonContentModal';

export function AdminLessons() {
  const [showImporter, setShowImporter] = useState(false);
  const [showAICreator, setShowAICreator] = useState(false);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [editingLesson, setEditingLesson] = useState<Lesson | null | undefined>(undefined);
  const [editContentLesson, setEditContentLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Pagination keys
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchLessons = async () => {
    setLoading(true);
    try {
      const data = await adminService.getLessons();
      setLessons(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  const handleSave = async (formData: any) => {
    if (editingLesson) {
      await adminService.updateLesson(editingLesson.id, formData);
    } else {
      await adminService.addLesson({
        ...formData,
        vocabulary: [],
        grammar: []
      });
    }
    setEditingLesson(undefined);
    fetchLessons();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa bài học này?')) {
      await adminService.deleteLesson(id);
      fetchLessons();
    }
  };

  const filteredLessons = lessons.filter(l => 
    l.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    l.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLessons.length / itemsPerPage);
  const paginatedLessons = filteredLessons.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Quản lý Bài học</h1>
          <p className="text-gray-500 font-medium">Quản lý nội dung bài học, ngữ pháp và phân phối theo trình độ.</p>
        </div>
        <div className="flex flex-wrap gap-2">
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
          <button onClick={() => setEditingLesson(null)} className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5" />
            Thêm thủ công
          </button>
        </div>
      </header>

      {showAICreator && (
        <AICreator 
          type="lessons"
          onSave={async (v) => {
            const arr = Array.isArray(v) ? v : [v];
            const res = await adminService.importLessonsBatch(arr);
            if (!res.success) throw new Error(String(res.error));
            fetchLessons();
          }} 
          onClose={() => setShowAICreator(false)} 
        />
      )}

      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm bài học..."
            className="w-full pl-12 pr-4 py-3 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          />
        </div>
      </div>

      <AutoGrammarGenerator onSuccess={() => fetchLessons()} />

      {loading ? (
        <div className="p-6 text-center text-gray-500 bg-white rounded-3xl border border-gray-100">Đang tải...</div>
      ) : paginatedLessons.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-gray-100">
           <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
           <p className="text-gray-500 font-medium">Chưa có bài học nào.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedLessons.map((lesson: Lesson) => (
            <div key={lesson.id} className="bg-white hover:border-blue-500 hover:shadow-lg rounded-3xl p-6 border border-gray-100 shadow-sm transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center overflow-hidden shrink-0">
                     {lesson.imageUrl ? <img src={lesson.imageUrl} alt={lesson.title} className="w-full h-full object-cover" /> : <BookOpen className="w-6 h-6 text-blue-600" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{lesson.title}</h3>
                    <p className="text-sm font-medium text-gray-400 line-clamp-1">{lesson.topic}</p>
                  </div>
                </div>
                <div className="flex gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <button onClick={() => setEditContentLesson(lesson)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-blue-500 font-medium text-sm flex items-center gap-1" title="Sửa nội dung (Từ vựng, Ngữ pháp, Nghe/Đọc)">
                    <FileText className="w-4 h-4" /> Nội dung
                  </button>
                  <button onClick={() => setEditingLesson(lesson)} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    <Edit2 className="w-4 h-4 text-gray-500" />
                  </button>
                  <button onClick={() => handleDelete(lesson.id)} className="p-2 hover:bg-red-50 rounded-xl transition-colors">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {lesson.status !== 'published' ? (
                   <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 border border-amber-200">Bản nháp</span>
                ) : (
                   <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600">Đã duyệt</span>
                )}
                <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-600 border border-blue-100">
                  {lesson.level || 'A1'}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-gray-50 text-gray-600 border border-gray-100">
                  {lesson.vocabulary?.length || 0} từ vựng
                </span>
                {lesson.audioUrl && <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 flex items-center gap-1">Nghe</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Hiển thị {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, filteredLessons.length)} trong {filteredLessons.length} bài học
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

      {showImporter && (
        <DataImporter 
          type="lessons"
          onClose={() => setShowImporter(false)}
          onImport={async (data) => {
            const res = await adminService.importLessonsBatch(data);
            fetchLessons();
            return res;
          }}
        />
      )}
      
      {editingLesson !== undefined && (
        <EditLessonModal 
          lesson={editingLesson} 
          onClose={() => setEditingLesson(undefined)}
          onSave={handleSave}
        />
      )}

      {editContentLesson && (
        <EditLessonContentModal
           lesson={editContentLesson}
           onClose={() => setEditContentLesson(null)}
           onRefresh={fetchLessons}
        />
      )}
    </div>
  );
}
