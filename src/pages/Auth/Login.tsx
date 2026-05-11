import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { GraduationCap, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../lib/utils';

export function Login() {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail, loading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mode, setMode] = useState<'login' | 'register'>('login');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const from = location.state?.from?.pathname || '/student';

  React.useEffect(() => {
    if (!loading && user && user.id !== 'guest') {
      navigate(from, { replace: true });
    }
  }, [user, loading, navigate, from]);

  const handleGoogleAuth = async () => {
    try {
      setError(null);
      setIsSubmitting(true);
      await signInWithGoogle();
    } catch (err: any) {
      if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') {
        setError('Bạn đã huỷ đăng nhập. Vui lòng thử lại.');
      } else {
        setError(err.message || 'Đã xảy ra lỗi khi xác thực bằng Google.');
      }
      setIsSubmitting(false); // Only set to false on error, because on success it will redirect
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (mode === 'register' && !name)) {
       setError("Vui lòng nhập đầy đủ thông tin.");
       return;
    }
    
    try {
      setError(null);
      setIsSubmitting(true);
      if (mode === 'login') {
         await signInWithEmail(email, password);
      } else {
         await signUpWithEmail(email, password, name);
      }
    } catch (err: any) {
      setError(err.message || 'Đã xảy ra lỗi khi xác thực.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <GraduationCap className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 border-b pb-4 mb-4">
               {mode === 'login' ? 'Đăng nhập' : 'Tạo tài khoản'}
           </h2>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleEmailAuth}>
          <div className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="sr-only">Họ và tên</label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                    placeholder="Họ và tên"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="sr-only">Email</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                  placeholder="Địa chỉ Email"
                />
              </div>
            </div>
            <div>
              <label className="sr-only">Mật khẩu</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                  placeholder="Mật khẩu"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "flex w-full justify-center rounded-lg border border-transparent bg-blue-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              isSubmitting && "opacity-70 cursor-not-allowed"
            )}
          >
            {isSubmitting ? "Đang xử lý..." : (mode === 'login' ? 'Đăng nhập' : 'Đăng ký')}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Hoặc tiếp tục với</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleGoogleAuth}
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
              <span>{isSubmitting ? 'Đang chuyển hướng...' : 'Đăng nhập bằng Google'}</span>
            </button>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col items-center gap-4 border-t pt-6">
           <button 
             onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
             className="text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
           >
              {mode === 'login' ? 'Chưa có tài khoản? Đăng ký ngay' : 'Đã có tài khoản? Đăng nhập'}
           </button>
           
           <button
             onClick={() => navigate('/student')}
             className="group flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none"
           >
             Tiếp tục với tư cách Khách <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
           </button>
        </div>

      </div>
    </div>
  );
}
