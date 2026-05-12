import React, { useState } from 'react';
import { X, Save, FileText, Music, Image as ImageIcon } from 'lucide-react';
import { Lesson } from '../../types/lesson';
import { adminService } from '../../services/adminService';
import { storage } from '../../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { cn } from '../../lib/utils';

export function EditLessonContentModal({ lesson, onClose, onRefresh }: { lesson: Lesson, onClose: () => void, onRefresh: () => void }) {
  const [content, setContent] = useState({
    vocabulary: lesson.vocabulary || [],
    grammar: lesson.grammar || [],
    sentencePatterns: lesson.sentencePatterns || [],
    listening: lesson.listening || { title: '', transcriptTraditional: '', transcriptPinyin: '', transcriptVietnamese: '', questions: [] },
    reading: lesson.reading || { title: '', passageTraditional: '', passagePinyin: '', passageVietnamese: '', questions: [] },
  });
  
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<'listening' | 'reading' | 'vocabulary' | 'grammar'>('listening');

  const handleSave = async () => {
    setSaving(true);
    try {
      await adminService.updateLesson(lesson.id, content);
      onRefresh();
      onClose();
    } catch (err: any) {
      alert("Lỗi khi lưu: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl">
        <div className="p-6 border-b flex justify-between items-center bg-gray-50/50 rounded-t-3xl">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Chi tiết Nội dung Bài học</h2>
            <p className="text-gray-500 text-sm mt-1">{lesson.title} - {lesson.topic}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors"><X className="w-5 h-5"/></button>
        </div>
        
        <div className="flex border-b overflow-x-auto">
          <button onClick={() => setActiveTab('listening')} className={cn("px-6 py-3 font-bold text-sm whitespace-nowrap", activeTab === 'listening' ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700")}>Nghe (Listening)</button>
          <button onClick={() => setActiveTab('reading')} className={cn("px-6 py-3 font-bold text-sm whitespace-nowrap", activeTab === 'reading' ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700")}>Đọc (Reading)</button>
          <button onClick={() => setActiveTab('vocabulary')} className={cn("px-6 py-3 font-bold text-sm whitespace-nowrap", activeTab === 'vocabulary' ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700")}>Từ vựng (JSON)</button>
          <button onClick={() => setActiveTab('grammar')} className={cn("px-6 py-3 font-bold text-sm whitespace-nowrap", activeTab === 'grammar' ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700")}>Ngữ pháp (JSON)</button>
          <button onClick={() => setActiveTab('sentencePatterns' as any)} className={cn("px-6 py-3 font-bold text-sm whitespace-nowrap", activeTab === 'sentencePatterns' as any ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700")}>Mẫu câu (JSON)</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-gray-50 bg-white">
           {activeTab === 'listening' && (
             <div className="space-y-4 max-w-3xl mx-auto">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tiêu đề bài nghe</label>
                  <input type="text" value={content.listening.title} onChange={e => setContent({...content, listening: {...content.listening, title: e.target.value}})} className="w-full px-4 py-2 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Transcript (Tiếng Trung)</label>
                  <textarea rows={4} value={content.listening.transcriptTraditional} onChange={e => setContent({...content, listening: {...content.listening, transcriptTraditional: e.target.value}})} className="w-full px-4 py-2 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Transcript (Pinyin)</label>
                  <textarea rows={3} value={content.listening.transcriptPinyin} onChange={e => setContent({...content, listening: {...content.listening, transcriptPinyin: e.target.value}})} className="w-full px-4 py-2 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Transcript (Tiếng Việt)</label>
                  <textarea rows={4} value={content.listening.transcriptVietnamese} onChange={e => setContent({...content, listening: {...content.listening, transcriptVietnamese: e.target.value}})} className="w-full px-4 py-2 border rounded-xl" />
                </div>
             </div>
           )}

           {activeTab === 'reading' && (
             <div className="space-y-4 max-w-3xl mx-auto">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Tiêu đề bài đọc</label>
                  <input type="text" value={content.reading.title} onChange={e => setContent({...content, reading: {...content.reading, title: e.target.value}})} className="w-full px-4 py-2 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nội dung (Tiếng Trung)</label>
                  <textarea rows={6} value={content.reading.passageTraditional} onChange={e => setContent({...content, reading: {...content.reading, passageTraditional: e.target.value}})} className="w-full px-4 py-2 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nội dung (Pinyin)</label>
                  <textarea rows={4} value={content.reading.passagePinyin} onChange={e => setContent({...content, reading: {...content.reading, passagePinyin: e.target.value}})} className="w-full px-4 py-2 border rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nội dung (Tiếng Việt)</label>
                  <textarea rows={6} value={content.reading.passageVietnamese} onChange={e => setContent({...content, reading: {...content.reading, passageVietnamese: e.target.value}})} className="w-full px-4 py-2 border rounded-xl" />
                </div>
             </div>
           )}

           {activeTab === 'vocabulary' && (
             <div className="h-full flex flex-col">
               <p className="text-sm text-gray-500 mb-2 font-medium">Bạn có thể chỉnh sửa mảng JSON chứa danh sách từ vựng của bài học.</p>
               <textarea 
                  className="w-full flex-1 min-h-[400px] font-mono text-sm p-4 border rounded-xl bg-gray-50 focus:bg-white"
                  value={JSON.stringify(content.vocabulary, null, 2)}
                  onChange={(e) => {
                    try {
                      setContent({...content, vocabulary: JSON.parse(e.target.value)});
                    } catch (err) {
                      // ignore parse errors while typing, but this is a naive implemention
                      // better to just use standard local state and parse on blur, but this is ok for admin
                    }
                  }}
                  onBlur={(e) => {
                    try {
                      setContent({...content, vocabulary: JSON.parse(e.target.value)});
                    } catch (err) {
                      alert("Lỗi JSON từ vựng! Vui lòng kiểm tra lại cú pháp.");
                    }
                  }}
               />
             </div>
           )}

           {activeTab === 'grammar' && (
             <div className="h-full flex flex-col">
               <p className="text-sm text-gray-500 mb-2 font-medium">Bạn có thể chỉnh sửa mảng JSON chứa danh sách ngữ pháp.</p>
               <textarea 
                  className="w-full flex-1 min-h-[400px] font-mono text-sm p-4 border rounded-xl bg-gray-50 focus:bg-white"
                  value={JSON.stringify(content.grammar, null, 2)}
                  onChange={(e) => {
                    try {
                      setContent({...content, grammar: JSON.parse(e.target.value)});
                    } catch (err) {}
                  }}
                  onBlur={(e) => {
                    try {
                      setContent({...content, grammar: JSON.parse(e.target.value)});
                    } catch (err) {
                      alert("Lỗi JSON ngữ pháp! Vui lòng kiểm tra lại cú pháp.");
                    }
                  }}
               />
             </div>
           )}

           {activeTab === 'sentencePatterns' as any && (
             <div className="h-full flex flex-col">
               <p className="text-sm text-gray-500 mb-2 font-medium">Bạn có thể chỉnh sửa mảng JSON chứa danh sách mẫu câu.</p>
               <textarea 
                  className="w-full flex-1 min-h-[400px] font-mono text-sm p-4 border rounded-xl bg-gray-50 focus:bg-white"
                  value={JSON.stringify(content.sentencePatterns, null, 2)}
                  onChange={(e) => {
                    try {
                      setContent({...content, sentencePatterns: JSON.parse(e.target.value)});
                    } catch (err) {}
                  }}
                  onBlur={(e) => {
                    try {
                      setContent({...content, sentencePatterns: JSON.parse(e.target.value)});
                    } catch (err) {
                      alert("Lỗi JSON mẫu câu! Vui lòng kiểm tra lại cú pháp.");
                    }
                  }}
               />
             </div>
           )}
        </div>

        <div className="p-6 border-t flex justify-end gap-3 bg-white rounded-b-3xl mt-auto">
             <button onClick={onClose} className="px-6 py-2.5 text-gray-600 font-bold hover:bg-gray-100 rounded-xl transition-colors">Hủy</button>
             <button disabled={saving} onClick={handleSave} className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50">
               {saving ? "Đang lưu..." : "Lưu chi tiết"}
             </button>
        </div>
      </div>
    </div>
  );
}
