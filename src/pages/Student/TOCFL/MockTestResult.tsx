import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Trophy, 
  CheckCircle, 
  XCircle, 
  Clock, 
  ArrowRight, 
  RotateCcw,
  BookOpen,
  PieChart as PieChartIcon
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { mockTestService } from '../../../services/mockTestService';
import { getMockTestById } from '../../../data/mockTests';
import { MockTestResult, MockTest } from '../../../types/study';
import { useAuth } from '../../../contexts/AuthContext';
import { cn } from '../../../lib/utils';

export function MockTestResultPage() {
  const { resultId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [result, setResult] = useState<MockTestResult | null>(null);
  const [test, setTest] = useState<MockTest | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      if (!resultId || !user?.id) return;
      setLoading(true);
      const res = await mockTestService.getResult(user.id, resultId);
      if (res) {
        setResult(res);
        const t = getMockTestById(res.testId);
        if (t) setTest(t);
      }
      setLoading(false);
    };
    fetchResult();
  }, [resultId, user?.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!result) return <div className="p-8 text-center">Không tìm thấy kết quả.</div>;

  const chartData = [
    { name: 'Đúng', value: result.score, color: '#10b981' },
    { name: 'Sai/Bỏ qua', value: result.totalQuestions - result.score, color: '#f43f5e' }
  ];

  const accuracy = Math.round((result.score / result.totalQuestions) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-20">
      <header className="text-center mb-10">
        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-100"
        >
          <Trophy className="w-12 h-12 text-white" />
        </motion.div>
        <h1 className="text-4xl font-black text-gray-900 mb-2">Kết quả hoàn tất!</h1>
        <p className="text-gray-500 font-medium">{result.testTitle}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        {/* Score Card */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
          <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Điểm số của bạn</p>
          <div className="relative w-48 h-48 mx-auto mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-gray-900">{result.score}</span>
              <span className="text-sm font-bold text-gray-400">/ {result.totalQuestions}</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm">
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="font-bold text-gray-700">{result.score} Đúng</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="font-bold text-gray-700">{result.totalQuestions - result.score} Sai</span>
             </div>
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-2xl">
                <PieChartIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Tỷ lệ chính xác</p>
                <p className="text-xl font-black text-gray-900">{accuracy}%</p>
              </div>
            </div>
            <div className={cn(
              "px-3 py-1 rounded-full text-xs font-bold",
              accuracy >= 60 ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
            )}>
              {accuracy >= 60 ? 'ĐẠT' : 'KHÔNG ĐẠT'}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-50 rounded-2xl">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Thời gian hoàn thành</p>
                  <p className="text-xl font-black text-gray-900">{result.timeSpentMinutes} Phút</p>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Điểm Nghe</p>
                  <p className="text-lg font-black text-blue-600">{result.listeningScore}</p>
               </div>
               <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Điểm Đọc</p>
                  <p className="text-lg font-black text-purple-600">{result.readingScore}</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-20">
         <button 
           onClick={() => navigate('/student/tocfl')}
           className="flex-1 py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2"
         >
           <ArrowRight className="w-5 h-5" />
           Quay lại danh sách
         </button>
         <button 
           onClick={() => navigate(`/student/tocfl-mock-test/${result.testId}`)}
           className="flex-1 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2"
         >
           <RotateCcw className="w-5 h-5" />
           Thi lại
         </button>
      </div>

      {/* Answer Review */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Xem lại câu hỏi</h2>
      <div className="space-y-6">
        {test?.questions.map((q, i) => {
          const userAnswer = result.answers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;
          
          return (
            <div key={q.id} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-gray-400">Câu {i + 1}</span>
                {isCorrect ? (
                  <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg text-xs font-bold">
                    <CheckCircle className="w-4 h-4" />
                    Chính xác
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-rose-600 bg-rose-50 px-3 py-1 rounded-lg text-xs font-bold">
                    <XCircle className="w-4 h-4" />
                    Sai rồi
                  </div>
                )}
              </div>

              <p className="text-lg font-bold text-gray-900 mb-4">{q.question}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {q.options.map((opt, idx) => {
                  const isCorrectOpt = opt === q.correctAnswer;
                  const isUserSelection = opt === userAnswer;
                  
                  return (
                    <div 
                      key={idx}
                      className={cn(
                        "p-4 rounded-2xl border-2 text-sm font-medium",
                        isCorrectOpt ? "border-emerald-500 bg-emerald-50 text-emerald-700" :
                        isUserSelection && !isCorrect ? "border-rose-500 bg-rose-50 text-rose-700" :
                        "border-gray-50 bg-gray-50"
                      )}
                    >
                      <span className="mr-3 opacity-50">{String.fromCharCode(65 + idx)}.</span>
                      {opt}
                    </div>
                  );
                })}
              </div>

              {q.explanation && (
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-1">
                    <BookOpen className="w-4 h-4" />
                    Giải thích
                  </div>
                  <p className="text-sm text-blue-800">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
