import React from 'react';
import { EXAM_SCHEDULE } from '../../lib/mockData';
import { FileCheck, MapPin, Calendar } from 'lucide-react';

export default function ExamSection() {
  return (
    <div className="p-8 space-y-8 text-slate-200">
      <div>
        <h1 className="text-3xl font-bold text-white">Examination Section</h1>
        <p className="text-slate-400 mt-1">View your upcoming exams and seating arrangements</p>
      </div>

      <div className="glass-dark rounded-3xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Upcoming Schedule</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 text-sm">
                <th className="pb-3 px-4">Date & Time</th>
                <th className="pb-3 px-4">Subject</th>
                <th className="pb-3 px-4">Type</th>
                <th className="pb-3 px-4">Room/Seating</th>
              </tr>
            </thead>
            <tbody>
              {EXAM_SCHEDULE.map((exam, i) => (
                <tr key={exam.id} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i === EXAM_SCHEDULE.length - 1 ? 'border-b-0' : ''}`}>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      <div>
                        <p className="text-white font-medium">{exam.date}</p>
                        <p className="text-xs text-slate-400">{exam.time}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-semibold text-white">{exam.subject}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-medium border border-indigo-500/30">
                      {exam.type}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <MapPin className="w-4 h-4 text-rose-400" />
                      <span>{exam.room}</span>
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
