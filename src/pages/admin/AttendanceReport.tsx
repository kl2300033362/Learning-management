import React, { useState } from 'react';
import { ADMIN_STUDENTS } from '../../lib/mockData';
import { ClipboardCheck, Calendar as CalendarIcon, CheckCircle2, XCircle } from 'lucide-react';

export default function AttendanceReport() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedSection, setSelectedSection] = useState('S1');

  return (
    <div className="p-8 space-y-8 text-slate-200">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Post Attendance</h1>
          <p className="text-slate-400 mt-1">Submit day-wise attendance for students</p>
        </div>
      </div>

      <div className="glass-dark rounded-3xl p-6 border border-white/10 mb-8">
        <div className="flex flex-wrap gap-6 items-end mb-8">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Select Date</label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-colors"
                style={{ colorScheme: 'dark' }}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Select Section</label>
            <select 
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-colors w-48"
            >
              <option value="S1">CSE - Y3 - Sec 1</option>
              <option value="S2">CSE - Y3 - Sec 2</option>
              <option value="E1">ECE - Y2 - Sec 1</option>
              <option value="M1">ME - Y4 - Sec 1</option>
            </select>
          </div>
          <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors shadow-lg shadow-emerald-500/20 ml-auto flex items-center">
            <ClipboardCheck className="w-5 h-5 mr-2" />
            Submit Attendance
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 text-sm">
                <th className="pb-3 px-4">Roll No</th>
                <th className="pb-3 px-4">Name</th>
                <th className="pb-3 px-4 text-center">Mark Status</th>
              </tr>
            </thead>
            <tbody>
              {ADMIN_STUDENTS.filter(s => s.section === selectedSection).map((student, i) => (
                <tr key={student.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-mono text-slate-300">{student.roll}</td>
                  <td className="py-4 px-4 font-semibold text-white">{student.name}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center space-x-4">
                      <label className="flex items-center space-x-2 cursor-pointer group">
                        <input type="radio" name={`att-${student.id}`} defaultChecked className="hidden" />
                        <div className="w-8 h-8 rounded-full border-2 border-slate-600 group-hover:border-emerald-500 flex items-center justify-center bg-emerald-500/20 group-has-[:checked]:border-emerald-500 group-has-[:checked]:text-emerald-400 text-transparent transition-all">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-slate-400 group-has-[:checked]:text-emerald-400">Present</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer group">
                        <input type="radio" name={`att-${student.id}`} className="hidden" />
                        <div className="w-8 h-8 rounded-full border-2 border-slate-600 group-hover:border-rose-500 flex items-center justify-center bg-rose-500/20 group-has-[:checked]:border-rose-500 group-has-[:checked]:text-rose-400 text-transparent transition-all">
                          <XCircle className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-slate-400 group-has-[:checked]:text-rose-400">Absent</span>
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
