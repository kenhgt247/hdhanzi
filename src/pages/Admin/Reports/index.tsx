import React from 'react';
import { BarChart3, TrendingUp, Users, Target, Download, Calendar } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const data = [
  { name: 'Thứ 2', studySessions: 24, newUsers: 4 },
  { name: 'Thứ 3', studySessions: 18, newUsers: 2 },
  { name: 'Thứ 4', studySessions: 32, newUsers: 6 },
  { name: 'Thứ 5', studySessions: 28, newUsers: 3 },
  { name: 'Thứ 6', studySessions: 45, newUsers: 8 },
  { name: 'Thứ 7', studySessions: 55, newUsers: 12 },
  { name: 'Chủ nhật', studySessions: 60, newUsers: 15 },
];

export function AdminReports() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Báo cáo & Phân tích</h1>
          <p className="text-gray-500 font-medium">Theo dõi hiệu quả học tập và sự phát triển của trung tâm.</p>
        </div>
        <div className="flex gap-4">
           <button className="bg-white border text-gray-700 px-6 py-3 rounded-2xl font-bold shadow-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <Calendar className="w-5 h-5" />
            Tháng này
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-100 flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Download className="w-5 h-5" />
            Xuất PDF
          </button>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
           <div className="text-gray-400 font-black text-[10px] uppercase tracking-widest mb-2">Số giờ học TB</div>
           <div className="flex items-end gap-2">
             <span className="text-3xl font-black text-gray-900">14.5</span>
             <span className="text-sm font-bold text-emerald-500 mb-1">+12%</span>
           </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
           <div className="text-gray-400 font-black text-[10px] uppercase tracking-widest mb-2">Học viên mới</div>
           <div className="flex items-end gap-2">
             <span className="text-3xl font-black text-gray-900">48</span>
             <span className="text-sm font-bold text-emerald-500 mb-1">+5%</span>
           </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
           <div className="text-gray-400 font-black text-[10px] uppercase tracking-widest mb-2">Tỷ lệ hoàn thành</div>
           <div className="flex items-end gap-2">
             <span className="text-3xl font-black text-gray-900">68%</span>
             <span className="text-sm font-bold text-rose-500 mb-1">-2%</span>
           </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
           <div className="text-gray-400 font-black text-[10px] uppercase tracking-widest mb-2">Điểm Mock Test TB</div>
           <div className="flex items-end gap-2">
             <span className="text-3xl font-black text-gray-900">72.4</span>
             <span className="text-sm font-bold text-emerald-500 mb-1">+4.2</span>
           </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
           <div className="flex items-center justify-between mb-8">
             <h2 className="text-xl font-bold text-gray-900">Hoạt động học tập theo tuần</h2>
             <TrendingUp className="w-5 h-5 text-gray-400" />
           </div>
           <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} />
                 <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} />
                 <Tooltip 
                   contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                 />
                 <Bar dataKey="studySessions" name="Số lượt học" fill="#3b82f6" radius={[6, 6, 0, 0]} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
           <div className="flex items-center justify-between mb-8">
             <h2 className="text-xl font-bold text-gray-900">Học viên mới theo ngày</h2>
             <Users className="w-5 h-5 text-gray-400" />
           </div>
           <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={data}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} />
                 <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 600 }} />
                 <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                 />
                 <Line type="monotone" dataKey="newUsers" name="Người dùng mới" stroke="#8b5cf6" strokeWidth={4} dot={{ r: 6, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff' }} />
               </LineChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>
    </div>
  );
}
