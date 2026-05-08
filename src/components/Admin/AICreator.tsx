import React, { useState, useRef } from 'react';
import { Sparkles, Loader2, Send, Save, Check, RefreshCcw, Image as ImageIcon, FileText, Upload, X } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";
import { cn } from '../../lib/utils';
import { Vocab } from '../../data/vocabulary';

interface AICreatorProps {
  onSave: (vocab: Partial<Vocab>) => Promise<void>;
  onClose: () => void;
}

export function AICreator({ onSave, onClose }: AICreatorProps) {
  const [input, setInput] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<Partial<Vocab> | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => setFilePreview(e.target?.result as string);
        reader.readAsDataURL(selectedFile);
      } else {
        setFilePreview(null);
      }
    }
  };

  const fileToGenerativePart = async (file: File) => {
    return new Promise<{ inlineData: { data: string, mimeType: string } }>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = (reader.result as string).split(',')[1];
        resolve({
          inlineData: {
            data: base64Data,
            mimeType: file.type
          },
        });
      };
      reader.readAsDataURL(file);
    });
  };

  const generateVocab = async () => {
    if (!input.trim() && !file) return;
    setIsGenerating(true);
    setResult(null);
    setSaved(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      let parts: any[] = [];
      let prompt = "";

      if (file) {
        const filePart = await fileToGenerativePart(file);
        parts.push(filePart);
        prompt = `Analyze the provided ${file.type.includes('pdf') ? 'document' : 'image'}. ${input ? `Focus on: ${input}.` : 'Extract the main Chinese vocabulary or lesson content.'} `;
      } else {
        prompt = `Analyze the Chinese character(s): "${input}". `;
      }

      prompt += `Provide traditional character, pinyin, zhuyin (bopomofo), vietnamese meaning, level (A1, A2, B1, B2, C1, or C2), one example in traditional Chinese and its Vietnamese translation. Return multiple entries if possible, but currently focus on the most relevant one.`;
      
      parts.push({ text: prompt });

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: { parts },
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              traditional: { type: Type.STRING },
              pinyin: { type: Type.STRING },
              zhuyin: { type: Type.STRING },
              vietnamese: { type: Type.STRING },
              level: { type: Type.STRING },
              exampleTraditional: { type: Type.STRING },
              exampleVietnamese: { type: Type.STRING },
            },
            required: ["traditional", "pinyin", "zhuyin", "vietnamese", "level", "exampleTraditional", "exampleVietnamese"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}');
      setResult(data);
    } catch (error) {
      console.error('AI Error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async () => {
    if (!result) return;
    setIsSaving(true);
    await onSave(result);
    setSaved(true);
    setIsSaving(false);
    setResult(null);
    setInput('');
    setFile(null);
    setFilePreview(null);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-purple-600" />
          AI Creator (Text / Image / PDF)
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
          Đóng
        </button>
      </div>

      <div className="space-y-4">
        {/* File Preview */}
        {file && (
          <div className="relative group">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              {filePreview ? (
                <img src={filePreview} alt="Preview" className="w-20 h-20 object-cover rounded-xl" />
              ) : (
                <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center">
                  <FileText className="w-10 h-10 text-blue-500" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 truncate">{file.name}</p>
                <p className="text-xs text-gray-400 uppercase font-black">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <button 
                onClick={() => { setFile(null); setFilePreview(null); }}
                className="p-2 hover:bg-red-50 rounded-xl transition-colors text-red-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <div className="relative flex-1">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={file ? "Thêm ghi chú/yêu cầu cho file..." : "Nhập chữ Hán (Vd: 學習, 機會...)"}
              className="w-full pl-5 pr-14 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 font-serif text-xl font-black"
              onKeyDown={(e) => e.key === 'Enter' && generateVocab()}
            />
            <button 
              onClick={generateVocab}
              disabled={isGenerating || (!input.trim() && !file)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition disabled:bg-gray-300"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
          
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*,.pdf"
            className="hidden"
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="p-4 bg-gray-50 border border-gray-100 text-gray-400 rounded-2xl hover:bg-gray-100 transition flex items-center justify-center aspect-square"
            title="Tải lên ảnh hoặc PDF"
          >
            <Upload className="w-6 h-6" />
          </button>
        </div>
      </div>

      {result && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="grid md:grid-cols-2 gap-4 bg-purple-50/50 p-6 rounded-3xl border border-purple-100">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Hán tự (Traditional)</label>
              <p className="text-3xl font-serif font-black text-gray-900">{result.traditional}</p>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Pinyin / Zhuyin</label>
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold text-gray-700">{result.pinyin}</p>
                <span className="text-xs text-gray-400 font-medium">{result.zhuyin}</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Nghĩa tiếng Việt</label>
              <p className="text-lg font-bold text-gray-700">{result.vietnamese}</p>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Trình độ TOCFL</label>
              <span className="inline-block px-3 py-1 bg-white border border-purple-200 rounded-full text-xs font-black text-purple-600">
                {result.level}
              </span>
            </div>
            <div className="md:col-span-2 pt-4 border-t border-purple-100 space-y-2">
              <label className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Ví dụ minh họa</label>
              <p className="font-serif text-lg text-gray-900">{result.exampleTraditional}</p>
              <p className="text-sm text-gray-500 font-medium italic">{result.exampleVietnamese}</p>
            </div>
          </div>
          
          <div className="mt-4 flex gap-3">
             <button 
              onClick={handleSave}
              disabled={isSaving}
              className="flex-1 py-4 bg-emerald-600 text-white font-black rounded-2xl shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition flex items-center justify-center gap-2"
            >
              {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              Lưu vào hệ thống
            </button>
            <button 
              onClick={generateVocab}
              className="p-4 bg-white border border-gray-200 text-gray-600 rounded-2xl hover:bg-gray-50 transition"
            >
              <RefreshCcw className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {saved && (
        <div className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl flex items-center justify-center gap-2 font-black animate-in zoom-in duration-300">
          <Check className="w-5 h-5" />
          Đã thêm vào danh sách!
        </div>
      )}
    </div>
  );
}
