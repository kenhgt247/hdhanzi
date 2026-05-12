import React, { useState, useMemo } from 'react';
import { Search, Volume2, BookA, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { vocabularyService } from '../../../services/vocabularyService';
import { Vocab } from '../../../data/vocabulary';
import { cn } from '../../../lib/utils';
import { HanziWriterPractice } from '../../../components/HanziWriterPractice';

export function Dictionary() {
  const [query, setQuery] = useState('');
  const [selectedVocab, setSelectedVocab] = useState<any>(null);
  const [allVocabs, setAllVocabs] = useState<Vocab[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    vocabularyService.getVocabularies().then(data => {
      setAllVocabs(data);
      setLoading(false);
    });
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return allVocabs.filter(v => 
      v.traditional.includes(lowerQuery) || 
      v.vietnamese.toLowerCase().includes(lowerQuery) ||
      v.pinyin.toLowerCase().includes(lowerQuery)
    ).slice(0, 20); // Limit to 20 results for performance
  }, [query, allVocabs]);

  const playAudio = (text: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-TW';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8 pb-12 h-full flex flex-col pt-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1 flex items-center gap-1.5">
            <BookA className="w-4 h-4" /> Tra cứu
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Từ điển TOCFL</h1>
          <p className="text-gray-500 mt-2 font-medium max-w-xl">Tìm kiếm từ vựng theo chữ Hán, Pinyin hoặc nghĩa Tiếng Việt.</p>
        </div>
      </div>

      <div className="relative z-20">
        <div className="relative flex items-center w-full max-w-2xl group">
           <Search className="absolute left-5 w-6 h-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
           <input 
             value={query}
             onChange={e => setQuery(e.target.value)}
             placeholder="Nhập chữ Hán, pinyin hoặc nghĩa..."
             className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 pl-14 pr-6 text-lg font-medium text-gray-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
           />
           {query && (
             <button onClick={() => setQuery('')} className="absolute right-5 text-gray-400 hover:text-gray-600 font-bold bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center text-xs">
               X
             </button>
           )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
        <div className="md:col-span-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col max-h-[600px]">
           <div className="p-4 border-b border-gray-50 bg-gray-50/50">
             <h3 className="font-bold text-gray-700 text-sm">{results.length > 0 ? `Tìm thấy ${results.length} kết quả` : 'Kết quả tìm kiếm'}</h3>
           </div>
           
           <div className="overflow-y-auto flex-grow p-2 space-y-1 custom-scrollbar">
             {loading ? (
               <div className="p-8 text-center text-gray-400 font-medium">Đang tải dữ liệu...</div>
             ) : query.trim() === '' ? (
               <div className="p-8 text-center text-gray-400 font-medium">
                  Hãy nhập từ khóa để tra cứu
               </div>
             ) : results.length === 0 ? (
               <div className="p-8 text-center text-gray-400 font-medium">
                  Không tìm thấy từ vựng nào phù hợp
               </div>
             ) : (
               results.map(vocab => (
                 <div 
                   key={vocab.id}
                   onClick={() => setSelectedVocab(vocab)}
                   className={cn(
                     "flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all",
                     selectedVocab?.id === vocab.id ? "bg-blue-50 border-blue-200 border shadow-sm" : "hover:bg-gray-50 border border-transparent"
                   )}
                 >
                   <div>
                     <p className="text-xl font-bold text-gray-900">{vocab.traditional}</p>
                     <p className="text-sm font-medium text-gray-500 truncate max-w-[150px]">{vocab.vietnamese}</p>
                   </div>
                   <ArrowRight className={cn("w-4 h-4 transition-transform", selectedVocab?.id === vocab.id ? "text-blue-500 translate-x-1" : "text-gray-300")} />
                 </div>
               ))
             )}
           </div>
        </div>

        <div className="md:col-span-2 relative">
           <AnimatePresence mode="wait">
             {selectedVocab ? (
               <motion.div 
                 key={selectedVocab.id}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full"
               >
                 <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden bg-slate-50/50">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    
                    <div className="relative z-10 flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-white border border-emerald-100 text-emerald-600 text-xs font-bold rounded-lg uppercase tracking-wider shadow-sm">
                          {selectedVocab.type || 'Từ vựng'}
                        </span>
                        <span className="px-3 py-1 bg-white border border-blue-100 text-blue-600 text-xs font-bold rounded-lg uppercase tracking-wider shadow-sm">
                          TOCFL {selectedVocab.level}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-6 mb-2">
                        <h2 className="text-7xl font-black text-gray-900 tracking-tight">{selectedVocab.traditional}</h2>
                        <button 
                          onClick={(e) => playAudio(selectedVocab.traditional, e)}
                          className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-blue-500 hover:bg-blue-50 hover:border-blue-200 transition-all active:scale-95"
                        >
                          <Volume2 className="w-7 h-7" />
                        </button>
                      </div>
                      
                      <div className="inline-block px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm mt-4">
                        <p className="text-2xl font-mono text-gray-700 font-bold">{selectedVocab.pinyin}</p>
                        {selectedVocab.zhuyin && <p className="text-sm text-gray-400 font-medium">{selectedVocab.zhuyin}</p>}
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Ý nghĩa</h4>
                        <p className="text-3xl font-bold text-blue-700">{selectedVocab.vietnamese}</p>
                      </div>
                    </div>
                 </div>

                 <div className="p-8 md:p-10 border-t border-gray-50 flex-grow bg-white">
                    {(selectedVocab.exampleTraditional || selectedVocab.exampleVietnamese) ? (
                      <div className="space-y-4 max-w-2xl">
                         <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Ví dụ</h4>
                         <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                           <p className="text-xl font-medium text-gray-900 leading-relaxed">{selectedVocab.exampleTraditional}</p>
                           <p className="text-base font-mono text-gray-500 mt-2 mb-4">{selectedVocab.examplePinyin}</p>
                           <p className="text-lg text-gray-700 font-medium">{selectedVocab.exampleVietnamese}</p>
                         </div>
                      </div>
                    ) : (
                      <div className="text-gray-400 font-medium italic">Không có ví dụ cho từ này.</div>
                    )}
                    
                    <div className="mt-10 max-w-2xl">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Cách viết chữ Hán</h4>
                      <div className="flex flex-wrap gap-4">
                        {Array.from(selectedVocab.traditional)
                          .filter((char: any) => /[\u4e00-\u9fa5]/.test(char))
                          .map((char: any, idx) => (
                           <div key={idx} className="bg-slate-50 p-4 rounded-3xl border border-slate-100">
                             <HanziWriterPractice character={char} size={150} hideControls={true} />
                           </div>
                        ))}
                      </div>
                    </div>
                 </div>
               </motion.div>
             ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-slate-50/50 rounded-3xl border border-dashed border-gray-200">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                     <BookA className="w-10 h-10 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Chưa chọn từ vựng</h3>
                  <p className="text-gray-500 font-medium max-w-sm">Hãy tìm kiếm và chọn một từ vựng ở thanh bên trái để xem chi tiết cách đọc, ý nghĩa và cách viết.</p>
                </div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
