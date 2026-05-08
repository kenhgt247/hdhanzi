import React, { useState, useRef } from 'react';
import { Upload, X, FileJson, FileSpreadsheet, AlertCircle, CheckCircle2, Loader2, Info, Eye, Save, Download } from 'lucide-react';
import Papa from 'papaparse';
import { cn } from '../../lib/utils';

export type ImportType = 'vocabulary' | 'lessons' | 'mock-tests' | 'dialogues';

interface DataImporterProps {
  type: ImportType;
  onClose: () => void;
  onImport: (data: any[]) => Promise<{ success: boolean; count?: number; error?: any }>;
}

export function DataImporter({ type, onClose, onImport }: DataImporterProps) {
  const [file, setFile] = useState<File | null>(null);
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [errors, setErrors] = useState<{ row: number; field: string; message: string }[]>([]);
  const [isParsing, setIsParsing] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [importResult, setImportResult] = useState<{ success: boolean; count: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getTemplate = () => {
    switch (type) {
      case 'vocabulary':
        return [
          { traditional: '你', pinyin: 'nǐ', zhuyin: 'ㄋㄧˇ', vietnamese: 'Bạn', level: 'A1', exampleTraditional: '你好！', exampleVietnamese: 'Chào bạn!' },
        ];
      case 'lessons':
        return [
          { title: 'Bài 1: Chào hỏi', stage: 'Stage A1', topic: 'Greetings', duration: '15 mins' },
        ];
      case 'mock-tests':
        return [
          { title: 'TOCFL A1 Test 1', level: 'A1', durationMinutes: 60, questionsCount: 50 },
        ];
      default:
        return [];
    }
  };

  const downloadTemplate = (format: 'csv' | 'json') => {
    const data = getTemplate();
    let blob;
    if (format === 'json') {
      blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    } else {
      const csv = Papa.unparse(data as any);
      blob = new Blob([csv], { type: 'text/csv' });
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `template_${type}.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const validateData = (data: any[]) => {
    const newErrors: { row: number; field: string; message: string }[] = [];
    
    data.forEach((row, index) => {
      if (type === 'vocabulary') {
        if (!row.traditional) newErrors.push({ row: index + 1, field: 'traditional', message: 'Thiếu chữ Hán' });
        if (!row.pinyin) newErrors.push({ row: index + 1, field: 'pinyin', message: 'Thiếu Pinyin' });
        if (!row.vietnamese) newErrors.push({ row: index + 1, field: 'vietnamese', message: 'Thiếu nghĩa tiếng Việt' });
        if (!['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(row.level)) {
          newErrors.push({ row: index + 1, field: 'level', message: 'Sai trình độ (phải là A1-C2)' });
        }
      }
      
      if (type === 'mock-tests') {
        if (!row.title) newErrors.push({ row: index + 1, field: 'title', message: 'Thiếu tiêu đề' });
      }
    });

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImportResult(null);
      parseFile(selectedFile);
    }
  };

  const parseFile = (file: File) => {
    setIsParsing(true);
    const reader = new FileReader();

    if (file.name.endsWith('.json')) {
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          const data = Array.isArray(json) ? json : [json];
          setPreviewData(data);
          validateData(data);
        } catch (err) {
          setErrors([{ row: 0, field: 'file', message: 'Không thể parse JSON' }]);
        } finally {
          setIsParsing(false);
        }
      };
      reader.readAsText(file);
    } else {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
          setPreviewData(results.data);
          validateData(results.data);
          setIsParsing(false);
        },
        error: (err) => {
          setErrors([{ row: 0, field: 'file', message: 'Lỗi parse CSV: ' + err.message }]);
          setIsParsing(false);
        }
      });
    }
  };

  const handleImport = async () => {
    if (errors.length > 0) return;
    setIsImporting(true);
    const result = await onImport(previewData);
    if (result.success) {
      setImportResult({ success: true, count: result.count || previewData.length });
      setPreviewData([]);
      setFile(null);
    } else {
      setErrors([{ row: 0, field: 'server', message: 'Import thất bại: ' + result.error }]);
    }
    setIsImporting(false);
  };

  const displayNameMap = {
    vocabulary: 'Từ vựng',
    lessons: 'Bài học',
    'mock-tests': 'Đề thi Mock',
    dialogues: 'Hội thoại'
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-8 border-b flex justify-between items-center bg-gray-50/50">
          <div>
            <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
              <Upload className="w-6 h-6 text-blue-600" />
              Import {displayNameMap[type]}
            </h2>
            <p className="text-sm font-medium text-gray-500 mt-1">Dữ liệu thật cho hệ thống HD Chinese.</p>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-gray-200 rounded-2xl transition-colors">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {/* Instructions & Template */}
          {!file && !importResult && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 h-full">
                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  Hướng dẫn
                </h3>
                <ul className="space-y-3 text-sm text-blue-800 font-medium">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    Hỗ trợ tệp <strong>.csv</strong> hoặc <strong>.json</strong>.
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    Tên cột trong tệp CSV phải khớp với mẫu.
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    Hệ thống sẽ kiểm tra chữ Hán, Pinyin và Nghĩa trước khi lưu.
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                    Từ vựng đã tồn tại sẽ được giữ nguyên (không tạo trùng).
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
                <h3 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 text-purple-600" />
                  Tải tệp mẫu
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => downloadTemplate('csv')}
                    className="flex items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-purple-200 text-purple-700 font-bold text-sm hover:shadow-md transition-shadow"
                  >
                    <FileSpreadsheet className="w-5 h-5" />
                    Mẫu CSV
                  </button>
                  <button 
                    onClick={() => downloadTemplate('json')}
                    className="flex items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-purple-200 text-purple-700 font-bold text-sm hover:shadow-md transition-shadow"
                  >
                    <FileJson className="w-5 h-5" />
                    Mẫu JSON
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Upload Area */}
          {!file && !importResult && (
            <div 
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('border-blue-400', 'bg-blue-50/50'); }}
              onDragLeave={(e) => { e.preventDefault(); e.currentTarget.classList.remove('border-blue-400', 'bg-blue-50/50'); }}
              onDrop={(e) => {
                e.preventDefault();
                e.currentTarget.classList.remove('border-blue-400', 'bg-blue-50/50');
                const droppedFile = e.dataTransfer.files[0];
                if (droppedFile) {
                  setFile(droppedFile);
                  parseFile(droppedFile);
                }
              }}
              className="border-4 border-dashed border-gray-100 rounded-[40px] p-20 text-center cursor-pointer hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept=".csv,.json"
              />
              <div className="w-24 h-24 bg-gray-50 rounded-[32px] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform group-hover:bg-blue-50">
                <Upload className="w-10 h-10 text-gray-300 group-hover:text-blue-500" />
              </div>
              <p className="text-xl font-black text-gray-900">Kéo thả tệp vào đây</p>
              <p className="text-gray-400 font-bold mt-2">Hoặc click để chọn tệp từ máy tính</p>
            </div>
          )}

          {/* Parsing State */}
          {isParsing && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
              <p className="font-bold text-gray-600 tracking-widest text-sm uppercase">Đang phân tích dữ liệu...</p>
            </div>
          )}

          {/* Errors Display */}
          {errors.length > 0 && (
            <div className="bg-rose-50 border border-rose-100 rounded-3xl p-6">
              <h3 className="text-rose-900 font-black mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Phát hiện {errors.length} lỗi
              </h3>
              <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
                {errors.map((error, idx) => (
                  <div key={idx} className="flex gap-3 text-sm text-rose-700 font-bold bg-white/50 p-3 rounded-xl border border-rose-100">
                    <span className="text-rose-400">#Dòng {error.row}:</span>
                    <span>[{error.field}]</span>
                    <span>{error.message}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => { setFile(null); setPreviewData([]); setErrors([]); }}
                className="mt-6 w-full py-4 bg-white border border-rose-200 text-rose-700 font-black rounded-2xl hover:bg-rose-100 transition-colors"
              >
                Chọn lại tập tin khác
              </button>
            </div>
          )}

          {/* Preview Table */}
          {previewData.length > 0 && errors.length === 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-emerald-500" />
                  Xem trước dữ liệu ({previewData.length} mục)
                </h3>
                <button 
                  onClick={() => { setFile(null); setPreviewData([]); }}
                  className="text-sm font-bold text-gray-400 hover:text-gray-600 flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Hủy và chọn lại
                </button>
              </div>
              
              <div className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                <div className="max-h-[400px] overflow-y-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead className="bg-gray-50 border-b sticky top-0 z-10">
                      <tr>
                        {Object.keys(previewData[0]).map(key => (
                          <th key={key} className="px-6 py-4 font-black text-[10px] uppercase tracking-widest text-gray-400">{key}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {previewData.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                          {Object.values(row).map((val: any, j) => (
                            <td key={j} className="px-6 py-4 font-bold text-gray-700 line-clamp-2">{String(val)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Success Result */}
          {importResult && (
            <div className="text-center py-20 px-8 flex flex-col items-center">
              <div className="w-24 h-24 bg-emerald-50 rounded-[32px] flex items-center justify-center mb-6 animate-bounce">
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-2">Import Thành Công!</h3>
              <p className="text-gray-500 font-bold mb-8">
                Đã đưa <strong>{importResult.count}</strong> {displayNameMap[type]} vào hệ thống an toàn.
              </p>
              <div className="flex gap-3 w-full max-w-sm">
                <button 
                  onClick={() => { setImportResult(null); setFile(null); setPreviewData([]); }}
                  className="flex-1 py-4 bg-gray-100 text-gray-900 font-black rounded-2xl hover:bg-gray-200 transition-colors"
                >
                  Tiếp tục Import
                </button>
                <button 
                  onClick={onClose}
                  className="flex-1 py-4 bg-blue-600 text-white font-black rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition"
                >
                  Đóng
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {previewData.length > 0 && errors.length === 0 && (
          <div className="p-8 border-t bg-gray-50/50 flex justify-end gap-3">
            <button 
              onClick={onClose}
              className="px-8 py-4 bg-white border text-gray-600 font-black rounded-2xl hover:bg-gray-100 transition shadow-sm"
            >
              Hủy bỏ
            </button>
            <button 
              onClick={handleImport}
              disabled={isImporting}
              className="px-10 py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition active:scale-95 disabled:bg-blue-300"
            >
              {isImporting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Đang lưu...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Xác nhận Lưu vào Firestore
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
