import React from 'react';
import { Calendar, Plus, Edit2, Trash2 } from 'lucide-react';
import { TIMETABLE } from '../../lib/mockData';

export default function TimetableManager() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="p-8 space-y-8 text-slate-200">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Timetable Manager</h1>
          <p className="text-slate-400 mt-1">Manage schedules, holidays, and leaves</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors shadow-lg flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Session
        </button>
      </div>

      <div className="glass-dark rounded-3xl p-6 border border-white/10">
        <div className="space-y-8">
          {days.map(day => {
            const dayClasses = TIMETABLE.filter(t => t.day === day);
            if (dayClasses.length === 0) return null;
            
            return (
              <div key={day} className="border border-white/10 rounded-2xl p-6 bg-white/5 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-2 h-full bg-blue-500"></div>
                <h3 className="text-xl font-bold text-white mb-4 pl-4">{day}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4">
                  {dayClasses.map((cls, i) => (
                    <div key={i} className="bg-slate-900/50 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-bold text-blue-400">{cls.time}</span>
                        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="text-slate-400 hover:text-white"><Edit2 className="w-4 h-4" /></button>
                          <button className="text-rose-400 hover:text-rose-300"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                      <h4 className="font-bold text-white mb-1">{cls.subject}</h4>
                      <div className="flex justify-between text-sm text-slate-400">
                        <span>{cls.room}</span>
                        <span>{cls.instructor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
