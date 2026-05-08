import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function StudentAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Chào bạn! Mình là trợ lý AI học tiếng Đài Loan. Mình có thể giúp bạn dịch, giải thích ngữ pháp, từ vựng, luyện thi TOCFL hoặc cùng bạn luyện tập hội thoại. Bạn muốn hỏi gì nào?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // @ts-ignore
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

      // Create a chat session with history
      const formattedHistory = messages.filter(m => m.id !== '1').map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: 'You are an incredibly helpful AI assistant for a Taiwanese Mandarin learning app. You help students learn Traditional Chinese, translate sentences, explain grammar, practice TOCFL tests, and answer any questions about studying Mandarin and studying in Taiwan. Respond in Vietnamese. Be concise, friendly and encouraging.' }]
          },
          ...formattedHistory,
          {
            role: 'user',
            parts: [{ text: userMessage.content }]
          }
        ]
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text || 'Xin lỗi, tôi không thể trả lời lúc này.'
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Error calling Gemini API:', error);
      
      let errorText = 'Đã có lỗi xảy ra. Bạn kiểm tra lại kết nối và thử lại nhé.';
      if (error?.message?.includes('API Key must be set') || error?.message?.includes('API_KEY_INVALID')) {
        errorText = 'Lỗi cấu hình API Key. Hãy thêm biến môi trường VITE_GEMINI_API_KEY vào dự án Vercel của bạn.';
      } else if (error?.status === 403 || error?.message?.includes('Permission denied: Consumer') || error?.message?.includes('suspended')) {
        errorText = 'Tài khoản API Key của bạn bị đình chỉ hoặc đã hết hạn mức sử dụng (Quota). Hãy kiểm tra lại API Key trên Google AI Studio hoặc cập nhật biến môi trường trên Vercel nhé.';
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorText
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full flex-col -m-4 md:-m-6 bg-white overflow-hidden absolute inset-0 md:static">
      <div className="flex-none p-4 border-b bg-white flex items-center justify-between gap-3">
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 leading-tight">AI Trợ Giảng</h2>
            <p className="text-xs text-gray-500">Sẵn sàng hỗ trợ bạn học tập</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3 max-w-3xl",
              message.role === 'user' ? "ml-auto flex-row-reverse" : ""
            )}
          >
            <div className={cn(
              "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
              message.role === 'assistant' ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
            )}>
              {message.role === 'assistant' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
            </div>
            <div className={cn(
              "rounded-2xl px-4 py-3 max-w-[85%] sm:max-w-xl text-sm",
              message.role === 'user' 
                ? "bg-blue-600 text-white rounded-tr-none" 
                : "bg-gray-100 text-gray-800 rounded-tl-none"
            )}>
              {message.role === 'assistant' ? (
                <div className="prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-white/50 prose-pre:text-gray-800">
                   <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
                </div>
              ) : (
                message.content
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 max-w-3xl">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
               <Bot className="w-5 h-5" />
            </div>
            <div className="rounded-2xl rounded-tl-none bg-gray-100 px-4 py-3 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
              <span className="text-sm text-gray-600">Đang suy nghĩ...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex-none p-4 bg-white border-t">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hỏi AI bất kỳ điều gì..."
            className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-50"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-2 rounded-full text-blue-600 hover:bg-blue-50 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
        <p className="text-center text-[10px] text-gray-400 mt-2">AI có thể mắc lỗi. Vui lòng kiểm tra lại những thông tin quan trọng.</p>
      </div>
    </div>
  );
}
