import React, { useState } from 'react';
import { FileText, Clock, AlertCircle, ExternalLink, Globe, ChevronRight, Trophy, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MOCK_TESTS } from '../../../data/mockTests';
import { cn } from '../../../lib/utils';

export function TOCFL() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'mock' | 'sctop'>('mock');

  return (
    <div className="space-y-6 h-full flex flex-col pb-20 md:pb-0">
      <header className="flex-none">
        <h1 className="text-2xl font-bold text-gray-900">Luyện thi TOCFL</h1>
        <p className="text-sm text-gray-500">Mô phỏng kỳ thi năng lực Hoa ngữ chính thức với đầy đủ các phần.</p>
      </header>

      <div className="flex-none border-b border-gray-200">
        <nav className="-mb-px flex space-x-6">
          <button
            onClick={() => setActiveTab('mock')}
            className={cn(
              "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors",
              activeTab === 'mock'
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
          >
            Đề thi mô phỏng
          </button>
          <button
            onClick={() => setActiveTab('sctop')}
            className={cn(
              "whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors",
              activeTab === 'sctop'
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
          >
            Đề thi thử SC-TOP (Chính thức)
          </button>
        </nav>
      </div>

      {activeTab === 'mock' && (
        <div className="flex-1 overflow-y-auto pb-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {MOCK_TESTS.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group flex flex-col"
                onClick={() => navigate(`/student/tocfl-mock-test/${test.id}`)}
              >
                <div className="flex justify-between items-start mb-6 w-full">
                  <div className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest",
                    test.level.startsWith('A') ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"
                  )}>
                    Level {test.level}
                  </div>
                  <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                    <FileText className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{test.title}</h3>

                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 flex-1">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{test.durationMinutes} Phút</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    <span>{test.questions.length} Câu hỏi</span>
                  </div>
                </div>

                <button className="w-full py-3 sm:py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-blue-600 transition-colors shadow-lg active:scale-[0.98]">
                  Bắt đầu thi
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
            
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between min-h-[250px] sm:min-h-full">
              <div className="relative z-10">
                <div className="bg-white/20 w-fit p-3 rounded-2xl backdrop-blur-md mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Đang thiết kế thêm đề?</h3>
                <p className="text-blue-50 text-sm opacity-80">Chúng tôi đang cập nhật các bộ đề thi Band B và C mới nhất.</p>
              </div>
              <button className="relative z-10 w-fit px-6 py-3 mt-4 sm:mt-0 bg-white text-blue-600 rounded-xl font-bold text-sm">
                Thông báo cho tôi
              </button>
              
              <Sparkles className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 rotate-12" />
            </div>
          </div>
          
          <div className="rounded-xl bg-orange-50 p-4 border border-orange-200">
            <div className="flex items-start gap-3 text-orange-800">
              <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Lưu ý khi làm bài</h4>
                <p className="text-sm mt-1">Các đề thi mô phỏng chuẩn hệ thống TOCFL Đài Loan. Hãy chắc chắn bạn có đủ thời gian yên tĩnh trước khi bắt đầu bài test. Điểm dưới 50% sẽ được giáo viên hệ thống lưu ý tập trung cải thiện kỹ năng.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'sctop' && (
        <div className="flex-1 flex flex-col min-h-0 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex-none p-3 border-b flex justify-between items-center bg-gray-50">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Globe className="h-4 w-4 text-blue-500" />
              <span>Hệ thống thi thử TOCFL (SC-TOP)</span>
            </div>
            <a 
              href="https://cbt.sc-top.org.tw/sctopj/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-1.5 rounded-md transition"
            >
              Mở trong tab mới <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="flex-1 relative bg-gray-100">
            <iframe 
              src="https://cbt.sc-top.org.tw/sctopj/"
              className="w-full h-full absolute inset-0 border-0"
              title="SC-TOP Mock Test"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>
      )}
    </div>
  );
}

