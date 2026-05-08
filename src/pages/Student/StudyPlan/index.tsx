import React, { useState } from 'react';
import { PenTool, Sparkles, Loader2, Save, Languages, ArrowRight } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { cn } from '../../../lib/utils';

export function StudyPlan() {
  const [formData, setFormData] = useState({
    schoolName: '',
    majorName: '',
    programType: '1+4', // 1+4, vhvl, language
    introduction: '',
    reasonStudyAbroad: '',
    reasonSchoolMajor: '',
    studyPlan: '',
    futurePlan: '',
    promise: ''
  });

  const [viResult, setViResult] = useState('');
  const [zhResult, setZhResult] = useState('');
  
  const [isGeneratingVi, setIsGeneratingVi] = useState(false);
  const [isTranslatingZh, setIsTranslatingZh] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerateVi = async () => {
    setIsGeneratingVi(true);
    setZhResult(''); // clear old translation if any

    const programInfo = formData.programType === '1+4' 
      ? 'Hệ 1+4 (1 năm học tiếng Đài Loan để đạt TOCFL A2 trở lên, 4 năm còn lại học chuyên ngành. Tổng 5 năm học)' 
      : formData.programType === 'vhvl' 
      ? 'Hệ Vừa học vừa làm (Năm đầu học tiếng Trung + đại cương. Năm 2 chuyên ngành. Năm 3 và 4 thực tập tại doanh nghiệp liên kết. Tổng 4 năm học)' 
      : 'Hệ Ngôn ngữ tự túc';

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `Viết một bài Kế hoạch học tập (Study Plan) xin đi du học Đài Loan hoàn chỉnh bằng Tiếng Việt dựa trên các thông tin gạch đầu dòng sau:
- Tên trường dự định học: ${formData.schoolName}
- Tên ngành dự định học: ${formData.majorName}
- Hệ học: ${programInfo}

1. Giới thiệu bản thân: ${formData.introduction || 'Sinh viên Việt Nam mong muốn đi du học'}
2. Lý do đi du học và chọn Đài Loan: ${formData.reasonStudyAbroad || 'Yêu thích văn hóa, giáo dục chất lượng cao'}
3. Lý do chọn ngành và trường: ${formData.reasonSchoolMajor || 'Phù hợp định hướng, trường có tiếng'}
4. Kế hoạch học tập tại trường (Lưu ý viết phù hợp với hệ học ${formData.programType}): ${formData.studyPlan || 'Sẽ cố gắng học tập chuyên ngành và thực tập'}
5. Kế hoạch tương lai sau tốt nghiệp: ${formData.futurePlan || 'Vận dụng kiến thức để làm việc'}
6. Lời hứa tuân thủ pháp luật: ${formData.promise || 'Tuân thủ pháp luật Đài Loan, chăm chỉ học tập, mong trường cho cơ hội'}

Yêu cầu:
- Viết văn phong mạch lạc, chân thành, tự nhiên. Trình bày rõ ràng thành các đoạn văn.
- Nếu thông tin người dùng cung cấp ngắn (ví dụ: chỉ gõ "Hà Nội, 18 tuổi, du lịch, hệ 1+4"), hãy TỰ ĐỘNG THÊM MẮM THÊM MUỐI, MỞ RỘNG thành các câu văn hoàn chỉnh cho thật hay và thuyết phục. Vẫn phải giữ đúng ý gốc.
- Chỉ trả về nội dung bài viết, tuyệt đối không có các câu như "Dưới đây là bản kế hoạch...".`;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
      });

      setViResult(response.text?.trim() || '');
      
      // cuộn xuống phần kết quả
      setTimeout(() => {
        document.getElementById('vi-result-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error) {
      console.error("Lỗi khi tạo kế hoạch tiếng Việt:", error);
      alert("Đã xảy ra lỗi khi tạo kế hoạch học tập. Vui lòng thử lại.");
    } finally {
      setIsGeneratingVi(false);
    }
  };

  const handleTranslateZh = async () => {
    if (!viResult.trim()) {
      alert("Vui lòng sinh và chỉnh sửa bản Tiếng Việt trước khi dịch.");
      return;
    }

    setIsTranslatingZh(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `Dịch toàn bộ bài Kế hoạch học tập đi du học Đài Loan sau đây sang Tiếng Trung Phồn Thể (Đài Loan). 
Yêu cầu:
- Tên trường và ngành nếu không chắc chắn tên tiếng Trung chuẩn có thể giữ nguyên hoặc dịch theo nghĩa. 
- Văn phong tự nhiên, lịch sự, thuyết phục, dùng từ ngữ chuyên dùng trong văn bản chính thức xin học.
- Chỉ trả về văn bản Tiếng Trung Phồn thể, không giải thích gì thêm.

Bài Tiếng Việt:
"""
${viResult}
"""`;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: prompt,
      });

      setZhResult(response.text?.trim() || '');
      
      // cuộn xuống phần kết quả
      setTimeout(() => {
        document.getElementById('zh-result-section')?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }, 100);

    } catch (error) {
      console.error("Lỗi khi dịch tiếng Trung:", error);
      alert("Đã xảy ra lỗi khi dịch sang Tiếng Trung. Vui lòng thử lại.");
    } finally {
      setIsTranslatingZh(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
          <PenTool className="h-8 w-8 text-blue-600" />
          Viết Kế Hoạch Học Tập (AI)
        </h1>
        <p className="text-gray-500 text-lg">
          Hãy nhập các ý chính bằng Tiếng Việt. AI sẽ giúp bạn soạn thảo một bản kế hoạch hoàn chỉnh và dịch sang tiếng Trung Phồn thể.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Form nhập liệu */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:p-8 space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl font-bold text-gray-900">Thông tin cơ bản</h2>
            <p className="text-sm text-gray-500">Giới thiệu ngắn gọn các ý tưởng chính</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Tên trường dự định nộp</label>
                <input 
                  type="text" 
                  value={formData.schoolName}
                  onChange={(e) => handleInputChange('schoolName', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                  placeholder="VD: Đại học KHKT Minh Tân"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Tên ngành học</label>
                <input 
                  type="text" 
                  value={formData.majorName}
                  onChange={(e) => handleInputChange('majorName', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50"
                  placeholder="VD: Quản trị Kinh doanh"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Hệ học</label>
              <select 
                value={formData.programType}
                onChange={(e) => handleInputChange('programType', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 font-medium text-gray-700"
              >
                <option value="1+4">Hệ 1+4 (1 năm tiếng + 4 năm chuyên ngành)</option>
                <option value="vhvl">Hệ Vừa học vừa làm</option>
                <option value="language">Hệ Ngôn ngữ tự túc</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Giới thiệu bản thân</label>
              <textarea 
                value={formData.introduction}
                onChange={(e) => handleInputChange('introduction', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-y min-h-[80px]"
                placeholder="VD: Tên, tuổi, sinh ra và lớn lên ở đâu, gia đình có mấy người..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Lý do đi du học & chọn Đài Loan</label>
              <textarea 
                value={formData.reasonStudyAbroad}
                onChange={(e) => handleInputChange('reasonStudyAbroad', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-y min-h-[80px]"
                placeholder="VD: Môi trường giáo dục tốt, văn hóa tương đồng, cơ hội việc làm..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Lý do chọn Trường & Ngành</label>
              <textarea 
                value={formData.reasonSchoolMajor}
                onChange={(e) => handleInputChange('reasonSchoolMajor', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-y min-h-[80px]"
                placeholder="VD: Trường có cơ sở vật chất tốt, ngành này phù hợp với sở thích..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Kế hoạch học tập tại trường</label>
              <textarea 
                value={formData.studyPlan}
                onChange={(e) => handleInputChange('studyPlan', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-y min-h-[80px]"
                placeholder={formData.programType === '1+4' ? "VD: Năm đầu chuyên tâm học tiếng Trung mục tiêu A2. Các năm sau học môn chuyên ngành..." : formData.programType === 'vhvl' ? "VD: Năm 1 học tiếng + đại cương. Năm 2 chuyên ngành. Năm 3, 4 tham gia thực tập tại trạm..." : "VD: Mục tiêu thi TOCFL, tập trung học các kĩ năng..."}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Kế hoạch tương lai</label>
              <textarea 
                value={formData.futurePlan}
                onChange={(e) => handleInputChange('futurePlan', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-y min-h-[80px]"
                placeholder="VD: Tốt nghiệp muốn ở lại Đài Loan làm việc, học lên Thạc sĩ..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Lời hứa tuân thủ pháp luật</label>
              <textarea 
                value={formData.promise}
                onChange={(e) => handleInputChange('promise', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-y min-h-[80px]"
                placeholder="VD: Chăm chỉ học tập, tuân thủ nội quy, luật pháp Đài Loan, mong được nhận..."
              />
            </div>
            
            <button
              onClick={handleGenerateVi}
              disabled={isGeneratingVi}
              className={cn(
                "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition duration-200 mt-6",
                isGeneratingVi 
                  ? "bg-blue-100 text-blue-400 cursor-not-allowed" 
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
              )}
            >
              {isGeneratingVi ? (
                <><Loader2 className="h-5 w-5 animate-spin" /> Hệ thống đang soạn thảo...</>
              ) : (
                <><Sparkles className="h-5 w-5" /> AI Viết Kế Hoạch (Tiếng Việt)</>
              )}
            </button>
          </div>
        </div>

        {/* Cột hiển thị kết quả */}
        <div className="space-y-6">
          {(viResult || isGeneratingVi) && (
             <div id="vi-result-section" className="bg-white border-2 border-blue-100 rounded-2xl shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-blue-50 pb-4">
                <h2 className="text-lg font-bold text-blue-900 flex items-center gap-2">
                   Bài Kế Hoạch (Tiếng Việt)
                </h2>
                <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded uppercase">Bước 1: Soát lỗi</span>
              </div>
              <p className="text-sm text-gray-500">Bạn có thể chỉnh sửa trực tiếp nội dung dưới đây cho đến khi hài lòng.</p>
              
              <textarea 
                value={viResult}
                onChange={(e) => setViResult(e.target.value)}
                disabled={isGeneratingVi}
                className={cn(
                  "w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-y min-h-[400px] text-gray-800 leading-relaxed font-medium transition",
                  isGeneratingVi && "opacity-50 animate-pulse bg-gray-50"
                )}
                placeholder="Nội dung kế hoạch học tập sẽ hiển thị ở đây..."
              />

              {!isGeneratingVi && viResult && (
                <button
                  onClick={handleTranslateZh}
                  disabled={isTranslatingZh}
                  className={cn(
                    "w-full py-4 rounded-xl flexitems-center flex justify-center gap-2 font-bold transition",
                    isTranslatingZh 
                      ? "bg-purple-100 text-purple-400 cursor-not-allowed" 
                      : "bg-purple-600 text-white hover:bg-purple-700 shadow-md"
                  )}
                >
                  {isTranslatingZh ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Đang dịch sang Tiến Trung...</>
                  ) : (
                    <><Languages className="h-5 w-5" /> Dịch sang Tiếng Trung Phồn Thể <ArrowRight className="h-5 w-5 ml-1"/></>
                  )}
                </button>
              )}
             </div>
          )}

          {(zhResult || isTranslatingZh) && (
            <div id="zh-result-section" className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-purple-200/50 pb-4">
                <h2 className="text-lg font-bold text-purple-900 flex items-center gap-2">
                   Bài Kế Hoạch (Tiếng Trung)
                </h2>
                <span className="text-xs font-bold px-2 py-1 bg-purple-200 text-purple-800 rounded uppercase">Bước 2: Hoàn thành</span>
              </div>
              <p className="text-sm text-purple-700/80">Đây là bản dịch Tiếng Trung. Bạn có thể chép lại và nộp cho nhà trường.</p>
              
              <textarea 
                value={zhResult}
                onChange={(e) => setZhResult(e.target.value)}
                disabled={isTranslatingZh}
                className={cn(
                  "w-full p-4 border border-purple-200 bg-white/80 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none resize-y min-h-[500px] text-gray-900 leading-relaxed font-medium transition",
                  isTranslatingZh && "opacity-50 animate-pulse"
                )}
                placeholder="Kết quả dịch tiếng Trung..."
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
