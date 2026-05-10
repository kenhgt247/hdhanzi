import React, { useState, useRef } from 'react';
import { Sparkles, Loader2, Send, Save, Check, RefreshCcw, FileText, Upload, X } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";
import { cn } from '../../lib/utils';
import { ImportType } from './DataImporter';

interface AICreatorProps {
  type?: ImportType;
  onSave: (data: any | any[]) => Promise<void>;
  onClose: () => void;
}

export function AICreator({ type = 'vocabulary', onSave, onClose }: AICreatorProps) {
  const [input, setInput] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<any | any[] | null>(null);
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

  const getSystemPromptAndSchema = () => {
    if (type === 'vocabulary') {
      return {
        prompt: `Extract modern Chinese vocabulary. Provide a JSON array of objects.`,
        schema: {
          type: Type.ARRAY,
          items: {
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
            required: ["traditional", "pinyin", "vietnamese", "level", "exampleTraditional", "exampleVietnamese"]
          }
        }
      };
    }
    if (type === 'dialogues') {
      return {
        prompt: `Extract conversations/dialogues. Provide a JSON array of objects with title, category, and an array of messages (each message has speaker, textTraditional, pinyin, textVietnamese).`,
        schema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              category: { type: Type.STRING },
              messages: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    speaker: { type: Type.STRING },
                    textTraditional: { type: Type.STRING },
                    pinyin: { type: Type.STRING },
                    textVietnamese: { type: Type.STRING }
                  },
                  required: ["speaker", "textTraditional", "textVietnamese"]
                }
              }
            },
            required: ["title", "category", "messages"]
          }
        }
      };
    }
    if (type === 'mock-tests') {
      return {
        prompt: `Extract mock test questions. Provide a JSON array. Each test has a title, level, durationMinutes, and an array of questions. Each question has text, type (reading, listening, vocab), options (array of strings), and correctOptionIndex (integer).`,
        schema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              level: { type: Type.STRING },
              durationMinutes: { type: Type.INTEGER },
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    text: { type: Type.STRING },
                    type: { type: Type.STRING },
                    options: { type: Type.ARRAY, items: { type: Type.STRING } },
                    correctOptionIndex: { type: Type.INTEGER },
                    explanation: { type: Type.STRING }
                  },
                  required: ["text", "type", "options", "correctOptionIndex"]
                }
              }
            },
            required: ["title", "level", "questions"]
          }
        }
      };
    }
    // Default lessons
    return {
      prompt: `Extract lessons or grammar notes. Provide a JSON array of objects with title, topic, duration, and stage.`,
      schema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            topic: { type: Type.STRING },
            stage: { type: Type.STRING },
            duration: { type: Type.STRING }
          },
          required: ["title", "topic"]
        }
      }
    };
  };

  const generateData = async () => {
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
        prompt = `Analyze the provided ${file.type.includes('pdf') ? 'document' : 'image'}. ${input ? `Focus on: ${input}.` : 'Extract the content.'} `;
      } else {
        prompt = `Analyze this request: "${input}". `;
      }

      const { prompt: systemPrompt, schema } = getSystemPromptAndSchema();
      prompt += systemPrompt;
      parts.push({ text: prompt });

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: { parts },
        config: {
          responseMimeType: "application/json",
          responseSchema: schema
        }
      });

      const data = JSON.parse(response.text || '[]');
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
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-4">
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
              placeholder={file ? "Thêm ghi chú/yêu cầu cho file..." : "Mô tả nội dung cần tạo..."}
              className="w-full pl-5 pr-14 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 font-serif text-xl font-black"
              onKeyDown={(e) => e.key === 'Enter' && generateData()}
            />
            <button 
              onClick={generateData}
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

      {result && Array.isArray(result) && result.length > 0 && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300 space-y-4">
          <div className="bg-purple-50/50 p-6 rounded-3xl border border-purple-100 max-h-96 overflow-y-auto">
            <h4 className="font-bold text-gray-900 mb-4">Đã trích xuất {result.length} dữ liệu:</h4>
            <div className="space-y-4">
              {result.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-sm break-words whitespace-pre-wrap">
                  {JSON.stringify(item, null, 2)}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
             <button 
              onClick={handleSave}
              disabled={isSaving}
              className="flex-1 py-4 bg-emerald-600 text-white font-black rounded-2xl shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition flex items-center justify-center gap-2"
            >
              {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              Lưu vào hệ thống ({result.length})
            </button>
            <button 
              onClick={generateData}
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
          Đã thêm vào hệ thống!
        </div>
      )}
    </div>
  );
}
