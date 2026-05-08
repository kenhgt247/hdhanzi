import React, { useState, useEffect } from 'react';
import { CheckCircle, Volume2, XCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { SentencePattern } from '../types/lesson';

interface PinyinTypingPracticeProps {
  sentences: SentencePattern[];
}

export function PinyinTypingPractice({ sentences }: PinyinTypingPracticeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'success' | 'error' | null>(null);

  if (!sentences || sentences.length === 0) return null;

  const currentSentence = sentences[currentIndex];
  
  // A helper function to normalize pinyin for easier typing checking
  // Removes tone numbers/marks and compares lowercase
  const normalizeForCheck = (str: string) => {
    // This is basic. Since Pinyin can have marks like ā, we can ignore tones, or expect exact match.
    // Given the difficulty of typing tones without a specific keyboard, let's just strip spaces and punctuation
    // Wait, typical pinyin practice might expect numbers (e.g. ni3 hao3) or just raw letters (ni hao)
    // Let's remove tones and punctuation to make it easier to practice exactly what standard input methods use.
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/g, '').toLowerCase().replace(/\s+/g, '');
  };

  const handleCheck = () => {
    const expected = normalizeForCheck(currentSentence.pinyin);
    const typed = normalizeForCheck(inputVal);

    if (typed === expected) {
      setFeedback('success');
      setTimeout(() => {
        if (currentIndex < sentences.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setInputVal('');
          setFeedback(null);
        }
      }, 1500);
    } else {
      setFeedback('error');
    }
  };

  const handleNext = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setInputVal('');
      setFeedback(null);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setInputVal('');
      setFeedback(null);
    }
  };

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(currentSentence.traditional);
    utterance.lang = 'zh-TW';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl border shadow-sm max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6 text-sm font-medium text-gray-500">
        <span>Câu {currentIndex + 1} / {sentences.length}</span>
        <button className="text-blue-600 hover:text-blue-700" onClick={playAudio}>
          <Volume2 className="h-5 w-5" />
        </button>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-3xl font-black text-gray-900 mb-4">{currentSentence.traditional}</h3>
        <p className="text-lg text-gray-600 mb-2">{currentSentence.vietnamese}</p>
        <p className="text-sm text-gray-400">Gõ pinyin không dấu (vd: ni hao ma)</p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Nhập pinyin..."
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
              setFeedback(null);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCheck();
            }}
            className={cn(
              "w-full px-4 py-4 text-center text-lg rounded-xl border-2 focus:outline-none transition font-mono",
              feedback === 'success' ? "border-green-500 bg-green-50 text-green-700" :
              feedback === 'error' ? "border-red-500 bg-red-50 text-red-700" :
              "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
            )}
          />
          {feedback === 'success' && <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-green-500" />}
          {feedback === 'error' && <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-red-500" />}
        </div>
        
        {feedback === 'error' && (
          <div className="text-center p-3 bg-blue-50 text-blue-800 rounded-lg text-sm font-medium">
            Gợi ý: {currentSentence.pinyin}
          </div>
        )}

        <div className="flex justify-between pt-4">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg disabled:opacity-50 transition font-medium"
          >
            Câu trước
          </button>
          <button 
            onClick={handleCheck}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:scale-95 transition shadow-sm"
          >
            Kiểm tra
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex === sentences.length - 1}
            className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg disabled:opacity-50 transition font-medium"
          >
            Bỏ qua
          </button>
        </div>
      </div>
    </div>
  );
}
