import React, { useState } from 'react';
import { BookOpen, Check, X, AlertTriangle } from 'lucide-react';
import { ADMIN_STUDENTS } from '../../lib/mockData';

export default function CourseRegistration() {
  const [requests] = useState([
    { id: 1, studentId: 'S1', course: 'Machine Learning', type: 'Elective', status: 'Pending', gap: false },
    { id: 2, studentId: 'S2', course: 'Advanced Algorithms', type: 'Core', status: 'Pending', gap: true },
    { id: 3, studentId: 'S3', course: 'Cloud Computing', type: 'Elective', status: 'Pending', gap: false },
  ]);

  return (
    <div className="p-8 space-y-8 text-slate-200">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Course Registration</h1>
          <p className="text-slate-400 mt-1">Manage student registration gaps and approvals</p>
        </div>
      </div>

      <div className="glass-dark rounded-3xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Pending Approvals</h3>
        
        <div className="space-y-4">
          {requests.map(req => {
            const student = ADMIN_STUDENTS.find(s => s.id === req.studentId);
            if (!student) return null;

            return (
              <div key={req.id} className="flex flex-col md:flex-row items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors gap-4">
                <div className="flex items-center space-x-4 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{req.course}</h4>
                    <p className="text-slate-400 text-sm">{student.name} ({student.roll}) • {student.section}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
                  {req.gap && (
                    <span className="flex items-center px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-medium border border-amber-500/30">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Prerequisite Gap
                    </span>
                  )}
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-medium border border-white/10">
                    {req.type}
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/40 rounded-lg transition-colors" title="Approve">
                      <Check className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-rose-500/20 text-rose-400 hover:bg-rose-500/40 rounded-lg transition-colors" title="Reject">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
