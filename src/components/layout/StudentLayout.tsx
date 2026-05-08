import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Home, BookOpen, GraduationCap, FileText, UserCircle, BookA, Sparkles, LogIn, LogOut, Zap, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth } from '../../contexts/AuthContext';

export function StudentLayout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  const navItems = [
    { name: 'Khám phá', path: '/student', icon: Home },
    { name: 'Học bài', path: '/student/lessons', icon: BookOpen },
    { name: 'Từ yếu', path: '/student/weak-words', icon: AlertCircle },
    { name: 'Từ vựng', path: '/student/vocabulary', icon: GraduationCap },
    { name: 'Cá nhân', path: '/student/profile', icon: UserCircle },
  ];

  const sidebarItems = [
    { name: 'Hôm nay', path: '/student/today', icon: Zap },
    { name: 'Khám phá', path: '/student', icon: Home },
    { name: 'Học bài', path: '/student/lessons', icon: BookOpen },
    { name: 'Từ yếu', path: '/student/weak-words', icon: AlertCircle },
    { name: 'Hỏi AI', path: '/student/ai', icon: Sparkles },
    { name: 'Từ điển', path: '/student/dictionary', icon: BookA },
    { name: 'Từ vựng', path: '/student/vocabulary', icon: GraduationCap },
    { name: 'TOCFL', path: '/student/tocfl', icon: FileText },
    { name: 'Cá nhân', path: '/student/profile', icon: UserCircle },
  ];

  return (
    <div className="flex h-screen flex-col bg-gray-50 pb-[calc(5rem+env(safe-area-inset-bottom))] md:flex-row md:pb-0">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-3 border-b border-gray-100 shadow-sm md:hidden">
        <h1 className="text-xl font-black text-blue-600 tracking-tighter">HD Chinese</h1>
        <div className="flex items-center gap-3">
          <NavLink 
            to="/student/today" 
            className={({ isActive }) => cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all border",
              isActive 
                ? "bg-orange-50 border-orange-200 text-orange-600 shadow-sm" 
                : "bg-gray-50 border-gray-100 text-gray-500"
            )}
          >
            <Zap className="h-4 w-4 fill-current" />
            <span className="text-xs font-bold">Hôm nay</span>
          </NavLink>
          <NavLink 
            to="/student/ai" 
            className={({ isActive }) => cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all border",
              isActive 
                ? "bg-blue-600 border-blue-700 text-white shadow-lg shadow-blue-100" 
                : "bg-blue-50 border-blue-100 text-blue-600"
            )}
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-bold">Hỏi AI</span>
          </NavLink>
        </div>
      </header>

      <aside className="hidden w-64 flex-col border-r bg-white shadow-md md:flex">
        <div className="flex h-14 items-center justify-center border-b px-4">
          <h1 className="text-xl font-bold text-blue-600">HD Chinese</h1>
        </div>
        <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )
              }
              end={item.path === '/student' || item.path === '/student/today'}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="border-t p-4 flex flex-col gap-3">
          <div className="text-[11px] text-gray-500 bg-gray-50 p-2 rounded-lg border border-gray-100">
            <p className="font-semibold text-gray-700">Công ty cổ phần du học Hải Dương</p>
            <p>SĐT: 0912.434.666</p>
          </div>
          
          {user?.id !== 'guest' ? (
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900 overflow-hidden text-ellipsis mr-2">
                <p className="truncate">{user?.name}</p>
                <p className="text-xs text-gray-500 font-normal truncate">{user?.email}</p>
              </div>
              <button onClick={signOut} className="p-2 text-red-500 hover:bg-red-50 rounded-lg shrink-0 transition-colors" title="Đăng xuất">
                 <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div>
              <p className="text-sm font-medium text-gray-900 mb-2">Xin chào, Khách</p>
              <button 
                onClick={() => navigate('/login')} 
                className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-600 rounded-lg py-2 text-sm font-semibold hover:bg-blue-100 transition-colors"
                title="Đăng nhập để đồng bộ tiến trình học"
              >
                <LogIn className="h-4 w-4" />
                Đăng nhập ngay
              </button>
            </div>
          )}
        </div>
      </aside>

      <main className="flex-1 overflow-auto p-4 md:p-6 relative">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 pb-[env(safe-area-inset-bottom)]">
        <div className="flex w-full items-center justify-around h-16 px-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-full h-full gap-1"
              end={item.path === '/student' || item.path === '/student/today'}
            >
              {({ isActive }) => (
                <>
                  <item.icon 
                    className={cn(
                      "transition-all duration-200", 
                      isActive ? "text-blue-600 h-6 w-6 stroke-[2.5px] scale-110" : "text-gray-400 h-6 w-6 stroke-[2px]"
                    )} 
                  />
                  <span className={cn(
                    "text-[10px] font-medium transition-colors duration-200 text-center leading-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-0.5",
                    isActive ? "text-blue-600" : "text-gray-500"
                  )}>
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
