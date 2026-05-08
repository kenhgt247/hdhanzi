import React, { useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';
import { Volume2, RefreshCw } from 'lucide-react';
import { cn } from '../lib/utils';

interface HanziWriterPracticeProps {
  character: string;
  pinyin?: string;
  vietnamese?: string;
  size?: number;
  hideControls?: boolean;
}

export function HanziWriterPractice({ character, pinyin, vietnamese, size = 150, hideControls = false }: HanziWriterPracticeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<any>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Make sure we only use the first character if a string is provided
    const char = character.charAt(0);

    writerRef.current = HanziWriter.create(containerRef.current, char, {
      width: size,
      height: size,
      padding: 5,
      showOutline: true,
      strokeAnimationSpeed: 1.5,
      delayBetweenStrokes: 150,
      strokeColor: '#2563eb', // blue-600
      radicalColor: '#16a34a', // green-600
      charDataLoader: (char, onLoad, onError) => {
        fetch(`https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/${encodeURIComponent(char)}.json`)
          .then(res => {
            if (!res.ok) throw new Error('jsdelivr fetch failed');
            return res.json();
          })
          .then(onLoad)
          .catch(() => {
            fetch(`https://unpkg.com/hanzi-writer-data@2.0.1/${encodeURIComponent(char)}.json`)
              .then(res => {
                if (!res.ok) throw new Error('unpkg fetch failed');
                return res.json();
              })
              .then(onLoad)
              .catch(onError);
          });
      }
    });

    return () => {
      // Cleanup if needed
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [character, size]);

  const handleAnimate = () => {
    if (writerRef.current && !isAnimating) {
      setIsAnimating(true);
      writerRef.current.animateCharacter({
        onComplete: () => setIsAnimating(false)
      });
    }
  };

  const handleQuiz = () => {
    if (writerRef.current) {
      writerRef.current.quiz();
    }
  };

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(character);
    utterance.lang = 'zh-TW';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-2xl border shadow-sm max-w-sm w-full mx-auto">
      <div className="border-4 border-dashed border-gray-200 rounded-xl mb-6 relative bg-gray-50 flex items-center justify-center" style={{ width: size + 16, height: size + 16 }}>
        <div ref={containerRef} />
        {/* Draw a subtle grid */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-2 grid-rows-2">
            <div className="border-r border-b border-gray-200/50"></div>
            <div className="border-b border-gray-200/50"></div>
            <div className="border-r border-gray-200/50"></div>
            <div></div>
        </div>
      </div>
      
      {(pinyin || vietnamese) && !hideControls && (
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{pinyin}</h3>
          <p className="text-gray-500">{vietnamese}</p>
        </div>
      )}

      {!hideControls && (
        <div className="flex gap-3 justify-center">
          <button 
            onClick={handleAnimate}
            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 font-medium transition flex items-center gap-2"
          >
            <RefreshCw className={cn("h-4 w-4", isAnimating && "animate-spin")} />
            Xem nét vẽ
          </button>
          <button 
            onClick={handleQuiz}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium shadow-sm transition"
          >
            Luyện viết
          </button>
          <button 
            onClick={playAudio}
            className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
          >
            <Volume2 className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
