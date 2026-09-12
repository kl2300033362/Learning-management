import React from 'react';
import { SEMESTER_COURSES, MOCK_STUDENT } from '../../lib/mockData';
import { Book, CheckCircle, Clock } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div className="p-8 space-y-8 text-slate-200">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Semester Courses</h1>
          <p className="text-slate-400 mt-1">Semester {MOCK_STUDENT.semester} • Total Credits: {MOCK_STUDENT.creditsEarned}</p>
        </div>
        <div className="px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl font-bold">
          SCGPA: {MOCK_STUDENT.cgpa}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SEMESTER_COURSES.map(course => (
          <div key={course.id} className="glass-dark p-6 rounded-2xl border-l-4 border-l-emerald-500 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-emerald-500/10 to-transparent"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md mb-2 inline-block">
                  {course.code}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{course.name}</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                {course.status === 'Completed' ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : <Clock className="w-5 h-5 text-amber-500" />}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <p className="text-xs text-slate-400">Credits</p>
                <p className="text-lg font-semibold text-white">{course.credits}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Type</p>
                <p className="text-lg font-semibold text-white">{course.type}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Grade</p>
                <p className="text-lg font-bold text-emerald-400">{course.grade || '--'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
