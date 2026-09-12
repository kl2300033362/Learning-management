import React from 'react';
import { MOCK_STUDENT } from '../../lib/mockData';
import { Activity, CalendarDays, Check, X } from 'lucide-react';

export default function AttendancePage() {
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return {
      date: d.toISOString().split('T')[0],
      status: Math.random() > 0.15 ? 'Present' : 'Absent'
    };
  });

  return (
    <div className="p-8 space-y-8 text-slate-200">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Attendance Register</h1>
          <p className="text-slate-400 mt-1">Track your day-wise attendance and percentage</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-400 mb-1">Overall Percentage</p>
          <p className="text-4xl font-bold text-emerald-400">{MOCK_STUDENT.attendance}%</p>
        </div>
      </div>

      <div className="glass-dark rounded-3xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-400" />
          Recent Activity (Last 14 Days)
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {days.reverse().map((day, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-4 flex flex-col items-center justify-center border border-white/5 hover:bg-white/10 transition-colors">
              <CalendarDays className="w-5 h-5 text-slate-400 mb-2" />
              <p className="text-xs text-slate-300 font-medium mb-3">{day.date}</p>
              {day.status === 'Present' ? (
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <X className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
