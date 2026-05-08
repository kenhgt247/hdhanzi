import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, Settings, LogOut, FileText, BookA, BarChart3, MessageSquare } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth, Role } from '../../contexts/AuthContext';

export function DashboardLayout({ role }: { role: Role }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const navItems = role === 'admin' ? [
    { name: 'Tổng quan', path: '/admin', icon: LayoutDashboard },
    { name: 'Quản lý Học viên', path: '/admin/students', icon: Users },
    { name: 'Tất cả Đề thi', path: '/admin/mock-tests', icon: FileText },
    { name: 'Quản lý Bài học', path: '/admin/lessons', icon: BookOpen },
    { name: 'Quản lý Từ vựng', path: '/admin/vocabulary', icon: BookA },
    { name: 'Quản lý Hội thoại', path: '/admin/dialogues', icon: MessageSquare },
    { name: 'Báo cáo', path: '/admin/reports', icon: BarChart3 },
    { name: 'Cài đặt', path: '/admin/settings', icon: Settings },
  ] : [
    { name: 'Tổng quan', path: '/teacher', icon: LayoutDashboard },
    { name: 'Quản lý Lớp', path: '/teacher/classes', icon: BookOpen },
    { name: 'Học viên của tôi', path: '/teacher/students', icon: Users },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="flex w-64 flex-col bg-slate-900 text-white shadow-xl">
        <div className="flex h-16 items-center px-6">
          <h1 className="text-xl font-bold">{role === 'admin' ? 'Admin Gateway' : 'Teacher Portal'}</h1>
        </div>
        <div className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                )
              }
              end={item.path === `/${role}`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="p-4 border-t border-slate-800">
          <div className="mb-4">
            <p className="text-sm font-medium truncate">{user?.name}</p>
            <p className="text-xs text-slate-400 truncate">{user?.email}</p>
          </div>
          <button 
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
          >
            <LogOut className="h-5 w-5" />
            Đăng xuất
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto bg-slate-50 p-8">
        <Outlet />
      </main>
    </div>
  );
}
