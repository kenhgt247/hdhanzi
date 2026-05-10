import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, Settings, LogOut, FileText, BookA, BarChart3, MessageSquare, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useAuth, Role } from '../../contexts/AuthContext';

export function DashboardLayout({ role }: { role: Role }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const navItems = role === 'admin' ? [
    { name: 'Tổng quan', path: '/admin', icon: LayoutDashboard },
    { name: 'Khóa học', path: '/admin/lessons', icon: BookOpen },
    { name: 'Từ vựng', path: '/admin/vocabulary', icon: BookA },
    { name: 'Hội thoại', path: '/admin/dialogues', icon: MessageSquare },
    { name: 'Đề thi', path: '/admin/mock-tests', icon: FileText },
    { name: 'Học viên', path: '/admin/students', icon: Users },
  ] : [
    { name: 'Tổng quan', path: '/teacher', icon: LayoutDashboard },
    { name: 'Lớp học', path: '/teacher/classes', icon: BookOpen },
    { name: 'Học viên', path: '/teacher/students', icon: Users },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-slate-900 text-white p-4 shrink-0">
        <h1 className="text-xl font-bold">{role === 'admin' ? 'Admin Gateway' : 'Teacher Portal'}</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -mr-2 text-slate-300 hover:text-white">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={cn(
        "bg-slate-900 text-white shadow-xl flex-col shrink-0 w-64 md:flex fixed md:relative z-40 h-[100dvh] md:h-full transition-transform duration-300 ease-in-out left-0 top-0",
        isMobileMenuOpen ? "flex translate-x-0" : "hidden md:flex md:translate-x-0 -translate-x-full"
      )}>
        <div className="hidden md:flex h-16 items-center px-6 shrink-0">
          <h1 className="text-xl font-bold">{role === 'admin' ? 'Admin Gateway' : 'Teacher Portal'}</h1>
        </div>
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
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
        <div className="p-4 border-t border-slate-800 shrink-0">
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

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-slate-50 p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}
