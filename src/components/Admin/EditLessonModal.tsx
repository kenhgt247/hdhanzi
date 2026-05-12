import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon, Music } from 'lucide-react';
import { Lesson } from '../../types/lesson';
import { storage } from '../../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { cn } from '../../lib/utils';

export function EditLessonModal({ lesson, onClose, onSave }: { lesson?: Lesson | null, onClose: () => void, onSave: (l: any) => void }) {
  const [formData, setFormData] = useState({
    title: lesson?.title || '',
    topic: lesson?.topic || '',
    stage: lesson?.stage || 'A1',
    level: lesson?.level || 'A1',
    status: lesson?.status || 'draft',
    imageUrl: lesson?.imageUrl || '',
    audioUrl: lesson?.audioUrl || '',
  });
  
  const [uploadingObj, setUploadingObj] = useState<{[key: string]: boolean}>({});

  const handleFileUpload = async (field: 'imageUrl' | 'audioUrl', file: File) => {
    setUploadingObj(prev => ({...prev, [field]: true}));
    try {
      const ext = file.name.split('.').pop();
      const storageRef = ref(storage, `lessons/${Date.now()}.${ext}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setFormData(prev => ({ ...prev, [field]: url }));
    } catch (err: any) {
      alert("Upload thất bại: " + err.message);
    } finally {
      setUploadingObj(prev => ({...prev, [field]: false}));
    }
  };

  const triggerFileUpload = (field: 'imageUrl' | 'audioUrl') => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = field === 'imageUrl' ? 'image/*' : 'audio/*';
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFileUpload(field, file);
      }
    };
    input.click();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{lesson ? 'Sửa bài học' : 'Thêm bài học mới'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-5 h-5"/></button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tên bài học</label>
              <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 border rounded-xl" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Chủ đề</label>
              <input type="text" value={formData.topic} onChange={e => setFormData({...formData, topic: e.target.value})} className="w-full px-4 py-2 border rounded-xl" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Trình độ (Stage)</label>
              <input type="text" value={formData.stage} onChange={e => setFormData({...formData, stage: e.target.value})} className="w-full px-4 py-2 border rounded-xl" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">TOCFL Level</label>
              <select value={formData.level} onChange={e => setFormData({...formData, level: e.target.value as any})} className="w-full px-4 py-2 border rounded-xl">
                <option value="beginner">Beginner</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
              <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value as any})} className="w-full px-4 py-2 border rounded-xl">
                <option value="draft">Bản nháp (Draft)</option>
                <option value="published">Đã duyệt (Published)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Hình ảnh</label>
                  <div className="flex gap-2 items-center">
                    <input 
                       type="text" 
                       placeholder="URL hình ảnh" 
                       value={formData.imageUrl} 
                       onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                       className="w-full px-4 py-2 border rounded-xl"
                    />
                    <button 
                       disabled={uploadingObj['imageUrl']}
                       onClick={() => triggerFileUpload('imageUrl')}
                       className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 shrink-0"
                    >
                       {uploadingObj['imageUrl'] ? <span className="animate-pulse text-xs">...</span> : <ImageIcon className="w-4 h-4" />}
                    </button>
                  </div>
                  {formData.imageUrl && <img src={formData.imageUrl} alt="preview" className="mt-2 h-20 rounded border object-contain" />}
               </div>
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Âm thanh / Mp3</label>
                  <div className="flex gap-2 items-center">
                    <input 
                       type="text" 
                       placeholder="URL âm thanh" 
                       value={formData.audioUrl} 
                       onChange={e => setFormData({...formData, audioUrl: e.target.value})}
                       className="w-full px-4 py-2 border rounded-xl"
                    />
                    <button 
                       disabled={uploadingObj['audioUrl']}
                       onClick={() => triggerFileUpload('audioUrl')}
                       className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 shrink-0"
                    >
                       {uploadingObj['audioUrl'] ? <span className="animate-pulse text-xs">...</span> : <Music className="w-4 h-4" />}
                    </button>
                  </div>
                  {formData.audioUrl && <audio controls src={formData.audioUrl} className="mt-2 w-full max-h-10" />}
               </div>
          </div>

        </div>
        <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
          <button onClick={onClose} className="px-6 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-xl">Hủy</button>
          <button onClick={() => onSave(formData)} className="px-6 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700">Lưu thay đổi</button>
        </div>
      </div>
    </div>
  );
}
