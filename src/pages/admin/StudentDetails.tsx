import React, { useState } from 'react';
import { ADMIN_STUDENTS, ADMIN_SECTIONS } from '../../lib/mockData';
import { Search, User, Filter } from 'lucide-react';

export default function StudentDetails() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStudents = ADMIN_STUDENTS.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.roll.includes(searchTerm)
  );

  return (
    <div className="p-8 space-y-8 text-slate-200">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Student Directory</h1>
          <p className="text-slate-400 mt-1">Manage and view student details</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ADMIN_SECTIONS.map(sec => (
          <div key={sec.id} className="glass-dark p-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5">
            <h3 className="text-lg font-bold text-white mb-2">{sec.name}</h3>
            <div className="flex justify-between text-sm text-slate-400">
              <span>Strength: {sec.strength}</span>
              <span>Avg Attendance: <span className="text-emerald-400">{sec.averageAttendance}%</span></span>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-dark rounded-3xl p-6 border border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or roll number..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-slate-300">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 text-sm">
                <th className="pb-3 px-4">Student</th>
                <th className="pb-3 px-4">Roll Number</th>
                <th className="pb-3 px-4">Branch/Year</th>
                <th className="pb-3 px-4">Section</th>
                <th className="pb-3 px-4">Attendance</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, i) => (
                <tr key={student.id} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i === filteredStudents.length - 1 ? 'border-b-0' : ''}`}>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-400" />
                      </div>
                      <span className="font-semibold text-white">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-mono text-slate-300">{student.roll}</td>
                  <td className="py-4 px-4 text-slate-300">{student.branch} - Year {student.year}</td>
                  <td className="py-4 px-4 text-slate-300">{student.section}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      student.attendance >= 85 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' :
                      student.attendance >= 75 ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                      'bg-rose-500/20 text-rose-400 border-rose-500/30'
                    }`}>
                      {student.attendance}%
                    </span>
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
