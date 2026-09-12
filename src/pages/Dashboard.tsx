import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { MOCK_STUDENT, ADMIN_SECTIONS } from '../lib/mockData';
import { 
  TrendingUp, Clock, BookOpen, Users, 
  Calendar, CreditCard, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const { user, isStudent } = useAuth();

  const StudentDashboard = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stat Cards */}
        <div className="glass-dark p-6 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-emerald-500/10 to-transparent"></div>
          <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
          <p className="text-slate-400 text-sm mb-1">Current CGPA</p>
          <h2 className="text-4xl font-bold text-white">{MOCK_STUDENT.cgpa}</h2>
        </div>
        
        <div className="glass-dark p-6 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
          <Clock className="w-8 h-8 text-blue-400 mb-4" />
          <p className="text-slate-400 text-sm mb-1">Attendance</p>
          <h2 className="text-4xl font-bold text-white">{MOCK_STUDENT.attendance}%</h2>
        </div>

        <div className="glass-dark p-6 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-purple-500/10 to-transparent"></div>
          <BookOpen className="w-8 h-8 text-purple-400 mb-4" />
          <p className="text-slate-400 text-sm mb-1">Credits Earned</p>
          <h2 className="text-4xl font-bold text-white">{MOCK_STUDENT.creditsEarned}</h2>
        </div>

        <div className="glass-dark p-6 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-rose-500/30 transition-colors">
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-rose-500/10 to-transparent"></div>
          <CreditCard className="w-8 h-8 text-rose-400 mb-4" />
          <p className="text-slate-400 text-sm mb-1">Active Backlogs</p>
          <h2 className="text-4xl font-bold text-white">{MOCK_STUDENT.activeBacklogs}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Links Section */}
        <div className="glass-dark p-8 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { to: '/courses', icon: BookOpen, title: 'My Courses', color: 'text-indigo-400', bg: 'bg-indigo-500/20' },
              { to: '/exams', icon: Calendar, title: 'Exams', color: 'text-amber-400', bg: 'bg-amber-500/20' },
              { to: '/payment', icon: CreditCard, title: 'Fee Payment', color: 'text-rose-400', bg: 'bg-rose-500/20' },
              { to: '/attendance', icon: Clock, title: 'Attendance', color: 'text-blue-400', bg: 'bg-blue-500/20' },
            ].map(link => (
              <Link key={link.to} to={link.to} className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${link.bg}`}>
                  <link.icon className={`w-7 h-7 ${link.color}`} />
                </div>
                <span className="text-slate-300 font-medium group-hover:text-white">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Schedule Preview */}
        <div className="glass-dark p-8 rounded-3xl border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Today's Schedule</h3>
            <span className="text-emerald-400 text-sm font-bold bg-emerald-500/20 px-3 py-1 rounded-full">On Track</span>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 border-l-4 border-emerald-500 rounded-xl relative overflow-hidden">
               <p className="text-sm text-emerald-400 font-bold mb-1">09:00 AM - 11:00 AM</p>
               <h4 className="text-white font-bold text-lg">Artificial Intelligence</h4>
               <p className="text-slate-400 text-sm mt-1">Room C-402 • Dr. Sharma</p>
            </div>
            <div className="p-4 bg-white/5 border-l-4 border-blue-500 rounded-xl relative overflow-hidden">
               <p className="text-sm text-blue-400 font-bold mb-1">11:00 AM - 01:00 PM</p>
               <h4 className="text-white font-bold text-lg">Web Technologies Lab</h4>
               <p className="text-slate-400 text-sm mt-1">Lab 2 • Prof. Reddy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AdminDashboard = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-dark p-6 rounded-3xl border border-white/10">
          <Users className="w-8 h-8 text-indigo-400 mb-4" />
          <p className="text-slate-400 text-sm mb-1">Total Active Students</p>
          <h2 className="text-4xl font-bold text-white">4,250</h2>
        </div>
        <div className="glass-dark p-6 rounded-3xl border border-white/10">
          <Clock className="w-8 h-8 text-emerald-400 mb-4" />
          <p className="text-slate-400 text-sm mb-1">University Avg Attendance</p>
          <h2 className="text-4xl font-bold text-white">82.5%</h2>
        </div>
        <div className="glass-dark p-6 rounded-3xl border border-white/10">
          <BookOpen className="w-8 h-8 text-amber-400 mb-4" />
          <p className="text-slate-400 text-sm mb-1">Pending Course Approvals</p>
          <h2 className="text-4xl font-bold text-white">124</h2>
        </div>
      </div>

      <div className="glass-dark p-8 rounded-3xl border border-white/10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Section Overview</h3>
          <Link to="/admin/students" className="text-indigo-400 hover:text-indigo-300 text-sm flex items-center">
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADMIN_SECTIONS.map(sec => (
            <div key={sec.id} className="p-5 bg-white/5 border border-white/10 rounded-2xl">
              <h4 className="text-white font-bold mb-2">{sec.name}</h4>
              <div className="flex justify-between text-slate-400 text-sm">
                <span>Students: {sec.strength}</span>
                <span>Att: <span className="text-emerald-400">{sec.averageAttendance}%</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Welcome back, {user?.full_name || 'User'}! 👋
        </h1>
        <p className="text-slate-400 mt-2 text-lg">
          {isStudent ? 'Here is your academic overview for today.' : 'Here is the university overview.'}
        </p>
      </div>

      {isStudent ? <StudentDashboard /> : <AdminDashboard />}
    </div>
  );
}