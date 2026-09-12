import React from 'react';
import { MOCK_STUDENT } from '../../lib/mockData';
import { Award, Trophy, Star, TrendingUp } from 'lucide-react';

export default function RewardsPage() {
  const achievements = [
    { id: 1, title: 'Dean\'s List', description: 'Top 5% of class in Semester 5', icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-400/20' },
    { id: 2, title: 'Perfect Attendance', description: '100% attendance in Cloud Computing', icon: Star, color: 'text-blue-400', bg: 'bg-blue-400/20' },
    { id: 3, title: 'Hackathon Winner', description: '1st place in University Hackathon', icon: Award, color: 'text-purple-400', bg: 'bg-purple-400/20' },
  ];

  return (
    <div className="p-8 space-y-8 text-slate-200">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Rewards & CGPA</h1>
          <p className="text-slate-400 mt-1">Track your academic performance and achievements</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-dark p-8 rounded-3xl border border-emerald-500/30 flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 border border-emerald-500/30">
            <TrendingUp className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-5xl font-black text-white mb-2">{MOCK_STUDENT.cgpa}</h2>
          <p className="text-emerald-400 font-medium uppercase tracking-wider text-sm">Cumulative GPA</p>
        </div>

        <div className="md:col-span-2 glass-dark p-6 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Recent Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map(ach => (
              <div key={ach.id} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start space-x-4 hover:bg-white/10 transition-all cursor-default hover:scale-[1.02]">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${ach.bg}`}>
                  <ach.icon className={`w-6 h-6 ${ach.color}`} />
                </div>
                <div>
                  <h4 className="text-white font-bold">{ach.title}</h4>
                  <p className="text-slate-400 text-sm mt-1 leading-snug">{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-dark rounded-3xl p-6 border border-white/10 mt-8">
        <h3 className="text-xl font-bold text-white mb-6">Performance Graph</h3>
        <div className="h-64 flex items-end justify-between space-x-2 pt-10">
          {[8.4, 8.7, 8.6, 9.0, 9.1, 9.24].map((gpa, i) => (
            <div key={i} className="flex-1 flex flex-col items-center group">
              <span className="text-emerald-400 font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">{gpa}</span>
              <div 
                className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg relative overflow-hidden transition-all duration-500" 
                style={{ height: `${(gpa / 10) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white/20 w-full h-full transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </div>
              <span className="text-slate-400 text-sm mt-3">Sem {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
