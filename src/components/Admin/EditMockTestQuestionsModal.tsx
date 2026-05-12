import React, { useState, useRef } from 'react';
import { X, Plus, Trash2, Upload, Image as ImageIcon, Music, GripVertical } from 'lucide-react';
import { adminService } from '../../services/adminService';
import { MockTest, MockQuestion } from '../../types/study';
import { cn } from '../../lib/utils';
import { storage } from '../../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface Props {
  test: MockTest;
  onClose: () => void;
  onRefresh: () => void;
}

export function EditMockTestQuestionsModal({ test, onClose, onRefresh }: Props) {
  const [questions, setQuestions] = useState<MockQuestion[]>(test.questions || []);
  const [saving, setSaving] = useState(false);
  const [uploadingObj, setUploadingObj] = useState<{[key: string]: boolean}>({});

  const handleSave = async () => {
    setSaving(true);
    try {
      await adminService.updateMockTest(test.id, { questions });
      onRefresh();
      onClose();
    } catch (err: any) {
      alert("Lỗi khi lưu: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  const addQuestion = () => {
    const newQ: MockQuestion = {
      id: `q-${Date.now()}-${Math.floor(Math.random()*1000)}`,
      type: 'reading',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: ''
    };
    setQuestions([...questions, newQ]);
  };

  const removeQuestion = (idx: number) => {
    if (!window.confirm("Xóa câu hỏi này?")) return;
    const nq = [...questions];
    nq.splice(idx, 1);
    setQuestions(nq);
  };

  const updateQuestion = (idx: number, updates: Partial<MockQuestion>) => {
    const nq = [...questions];
    nq[idx] = { ...nq[idx], ...updates };
    setQuestions(nq);
  };

  const updateOption = (qIdx: number, oIdx: number, val: string) => {
    const nq = [...questions];
    const newOptions = [...nq[qIdx].options];
    newOptions[oIdx] = val;
    nq[qIdx].options = newOptions;

    // auto update correct answer if it was the same Option text (optional)
    if (nq[qIdx].correctAnswer === questions[qIdx].options[oIdx]) {
        nq[qIdx].correctAnswer = val;
    }

    setQuestions(nq);
  };

  const handleFileUpload = async (qIdx: number, field: 'imageUrl' | 'audioUrl', file: File) => {
    const uploadKey = `${qIdx}-${field}`;
    setUploadingObj(prev => ({...prev, [uploadKey]: true}));
    
    try {
      const ext = file.name.split('.').pop();
      const storageRef = ref(storage, `mock-tests/${test.id}/${Date.now()}.${ext}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      updateQuestion(qIdx, { [field]: url });
    } catch (err: any) {
      alert("Upload thất bại: " + err.message);
    } finally {
      setUploadingObj(prev => ({...prev, [uploadKey]: false}));
    }
  };

  const triggerFileUpload = (qIdx: number, field: 'imageUrl' | 'audioUrl') => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = field === 'imageUrl' ? 'image/*' : 'audio/*';
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFileUpload(qIdx, field, file);
      }
    };
    input.click();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl">
        <div className="p-6 border-b flex justify-between items-center bg-gray-50/50 rounded-t-3xl">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Chỉnh sửa câu hỏi</h2>
            <p className="text-gray-500 text-sm mt-1">{test.title} - Level {test.level}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors"><X className="w-5 h-5"/></button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-gray-50">
          {questions.map((q, idx) => (
            <div key={q.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative group">
              <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-gray-400 cursor-grab">
                 <GripVertical className="w-5 h-5" />
              </div>

              <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="font-bold text-gray-900">Câu {idx + 1}</h3>
                 </div>
                 <button onClick={() => removeQuestion(idx)} className="text-red-500 hover:bg-red-50 p-2 rounded-xl transition-colors">
                   <Trash2 className="w-4 h-4" />
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Loại kỹ năng</label>
                  <select 
                    value={q.type} 
                    onChange={e => updateQuestion(idx, { type: e.target.value as 'listening'|'reading' })}
                    className="w-full px-4 py-2 bg-gray-50 border-gray-200 border rounded-xl"
                  >
                    <option value="listening">Nghe hiểu (Listening)</option>
                    <option value="reading">Đọc hiểu (Reading)</option>
                  </select>
                </div>

                <div className="flex gap-4 items-end">
                   <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Âm thanh / Mp3</label>
                      <div className="flex gap-2 items-center">
                        <input 
                           type="text" 
                           placeholder="URL âm thanh (hoặc tải lên)" 
                           value={q.audioUrl || ''} 
                           onChange={e => updateQuestion(idx, { audioUrl: e.target.value })}
                           className="w-full px-4 py-2 border rounded-xl"
                        />
                        <button 
                           disabled={uploadingObj[`${idx}-audioUrl`]}
                           onClick={() => triggerFileUpload(idx, 'audioUrl')}
                           className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 shrink-0"
                        >
                           {uploadingObj[`${idx}-audioUrl`] ? <span className="animate-pulse text-xs">...</span> : <Music className="w-4 h-4" />}
                        </button>
                      </div>
                   </div>
                   <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Hình ảnh</label>
                      <div className="flex gap-2 items-center">
                        <input 
                           type="text" 
                           placeholder="URL hình ảnh (hoặc tải lên)" 
                           value={q.imageUrl || ''} 
                           onChange={e => updateQuestion(idx, { imageUrl: e.target.value })}
                           className="w-full px-4 py-2 border rounded-xl"
                        />
                        <button 
                           disabled={uploadingObj[`${idx}-imageUrl`]}
                           onClick={() => triggerFileUpload(idx, 'imageUrl')}
                           className="p-2.5 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 shrink-0"
                        >
                           {uploadingObj[`${idx}-imageUrl`] ? <span className="animate-pulse text-xs">...</span> : <ImageIcon className="w-4 h-4" />}
                        </button>
                      </div>
                   </div>
                </div>
              </div>

              {(q.imageUrl || q.audioUrl) && (
                <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  {q.imageUrl && <img src={q.imageUrl} alt="preview" className="max-h-32 rounded object-contain border" />}
                  {q.audioUrl && (
                    <audio controls src={q.audioUrl} className="w-full max-w-sm mt-auto" />
                  )}
                </div>
              )}

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Nội dung câu hỏi</label>
                <textarea 
                   rows={3}
                   value={q.question || ''}
                   onChange={e => updateQuestion(idx, { question: e.target.value })}
                   className="w-full px-4 py-3 border rounded-xl"
                   placeholder="Nhập phần văn bản của câu hỏi (có thể để trống nếu chỉ có hình/âm thanh)..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Các lựa chọn & Đáp án đúng</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {q.options.map((opt, oIdx) => (
                      <div key={oIdx} className="flex gap-3 items-center">
                         <input 
                            type="radio" 
                            name={`correct-${idx}`}
                            checked={q.correctAnswer === opt && opt !== ''}
                            onChange={() => updateQuestion(idx, { correctAnswer: opt })}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                         />
                         <input 
                            type="text"
                            value={opt}
                            onChange={(e) => updateOption(idx, oIdx, e.target.value)}
                            placeholder={`Lựa chọn ${oIdx + 1}`}
                            className={cn(
                              "w-full px-4 py-2 border rounded-xl",
                              q.correctAnswer === opt && opt !== '' ? "border-green-500 bg-green-50" : ""
                            )}
                         />
                      </div>
                   ))}
                </div>
                {!q.correctAnswer && <p className="text-red-500 text-xs mt-2 font-medium">Vui lòng chọn một đáp án đúng (bằng cách tích vào radio box).</p>}
              </div>
            </div>
          ))}

          <button 
             onClick={addQuestion}
             className="w-full p-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 font-bold hover:bg-gray-50 hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
          >
             <Plus className="w-5 h-5" /> Thêm câu hỏi mới
          </button>
        </div>

        <div className="p-6 border-t flex justify-between bg-white rounded-b-3xl">
          <div className="text-gray-500 text-sm font-medium self-center">
             Tổng cộng: {questions.length} câu hỏi
          </div>
          <div className="flex gap-3">
             <button onClick={onClose} className="px-6 py-2.5 text-gray-600 font-bold hover:bg-gray-100 rounded-xl transition-colors">Hủy</button>
             <button disabled={saving} onClick={handleSave} className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50">
               {saving ? "Đang lưu..." : "Lưu bộ đề"}
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
