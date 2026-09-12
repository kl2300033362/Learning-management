import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { 
  Home, Book, Award, Clock, DollarSign, Calendar, Users, FileText, Settings, LogOut, FileCheck
} from 'lucide-react';

export function Sidebar() {
  const { isStudent, isInstructor, signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const studentLinks = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/courses', icon: Book, label: 'My Courses' },
    { to: '/exams', icon: FileCheck, label: 'Exam Section' },
    { to: '/attendance', icon: Clock, label: 'Attendance' },
    { to: '/payment', icon: DollarSign, label: 'Payments' },
    { to: '/rewards', icon: Award, label: 'Rewards & CGPA' },
  ];

  const adminLinks = [
    { to: '/', icon: Home, label: 'Overview' },
    { to: '/admin/students', icon: Users, label: 'Student Details' },
    { to: '/admin/attendance', icon: FileText, label: 'Attendance Report' },
    { to: '/admin/timetable', icon: Calendar, label: 'Timetable Manager' },
    { to: '/admin/registration', icon: Book, label: 'Course Registration' },
  ];

  const links = isStudent ? studentLinks : adminLinks;

  return (
    <div className="w-64 bg-slate-900/50 backdrop-blur-xl border-r border-white/10 h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          KL Portal
        </h2>
        <p className="text-xs text-slate-400 mt-1">{isStudent ? 'Student Gateway' : 'Admin Gateway'}</p>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => 
              `flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
              }`
            }
          >
            <link.icon className="w-5 h-5 mr-3" />
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center space-x-3 mb-4 px-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold">{user?.full_name?.charAt(0) || 'U'}</span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-white truncate">{user?.full_name}</p>
            <p className="text-xs text-slate-400 truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="w-full flex items-center px-4 py-3 text-sm font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
