import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { 
  BookOpen, Users, Award, TrendingUp, LogOut, 
  User as UserIcon, Calendar, Clock, CheckCircle, 
  AlertCircle, Activity, BookMarked, Wallet
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/auth');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const isStudent = user.role === 'student';

  // Mock data for KL Student Features
  const studentMetrics = [
    { icon: TrendingUp, label: 'Current CGPA', value: '9.24', color: 'from-emerald-400 to-teal-500', trend: '+0.12' },
    { icon: Activity, label: 'Overall Attendance', value: '87%', color: 'from-blue-400 to-indigo-500', trend: 'Good' },
    { icon: BookMarked, label: 'Active Backlogs', value: '0', color: 'from-rose-400 to-red-500', trend: 'Clear' },
    { icon: Award, label: 'Credits Earned', value: '142', color: 'from-purple-400 to-fuchsia-500', trend: 'On Track' },
  ];

  const adminMetrics = [
    { icon: Users, label: 'Total Students Enrolled', value: '15,248', color: 'from-blue-400 to-indigo-500', trend: '+124 this week' },
    { icon: CheckCircle, label: 'Average Attendance', value: '82%', color: 'from-emerald-400 to-teal-500', trend: '+2.4%' },
    { icon: AlertCircle, label: 'Pending Leaves', value: '45', color: 'from-amber-400 to-orange-500', trend: 'Needs Action' },
    { icon: Wallet, label: 'Fee Collection Rate', value: '94%', color: 'from-purple-400 to-fuchsia-500', trend: '+1.2%' },
  ];

  const metrics = isStudent ? studentMetrics : adminMetrics;

  const timetable = [
    { time: '09:00 AM', subject: 'Advanced Mathematics (M201)', room: 'Block 4 - 402', status: 'upcoming' },
    { time: '11:00 AM', subject: 'Data Structures Lab', room: 'Lab 2 - CS Dept', status: 'upcoming' },
    { time: '02:00 PM', subject: 'Web Technologies', room: 'Block 3 - 301', status: 'upcoming' },
  ];

  const recentNotices = [
    { date: 'Today', title: 'Mid-Term Examination Schedule Released', type: 'Exam' },
    { date: 'Yesterday', title: 'Fee Payment Deadline Extended to 30th Sep', type: 'Admin' },
    { date: '2 days ago', title: 'Campus Placements: Tech Mahindra Drive', type: 'Placement' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden text-slate-200">
      {/* Premium Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
      
      {/* Header */}
      <nav className="glass border-b border-white/10 sticky top-0 z-50 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  KL Portal
                </h1>
                <p className="text-xs text-slate-400 uppercase tracking-wider">{isStudent ? 'Student Dashboard' : 'Admin Gateway'}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-3 bg-white/5 py-1 px-3 rounded-full border border-white/10">
                {user.avatar_url ? (
                  <img src={user.avatar_url} alt={user.full_name} className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="text-sm pr-2">
                  <p className="font-medium text-white">{user.full_name}</p>
                  <p className="text-xs text-emerald-400">{user.email}</p>
                </div>
              </div>
              
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-rose-400 hover:text-rose-300 transition-colors px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 space-y-8">
        
        {/* Welcome Section */}
        <div className="glass-dark rounded-3xl p-8 relative overflow-hidden border-l-4 border-l-emerald-500">
          <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome back, <span className="text-gradient from-emerald-400 to-cyan-400">{user.full_name.split(' ')[0]}</span>! 👋
          </h2>
          <p className="text-slate-400 max-w-2xl">
            {isStudent 
              ? "Here's what's happening with your academic progress today. Check your timetable and upcoming assignments."
              : "Overview of university metrics, attendance reports, and quick administrative actions."}
          </p>
        </div>

        {/* Real-time Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="glass-dark rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-white/5 to-white/0 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${metric.color} bg-opacity-20 backdrop-blur-sm`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                  {metric.trend}
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-1">{metric.label}</p>
              <h3 className="text-3xl font-bold text-white">{metric.value}</h3>
            </div>
          ))}
        </div>

        {/* Two Column Layout for Dashboard Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Wider) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Timetable / Schedule Widget */}
            <div className="glass-dark rounded-3xl p-6 border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-indigo-400" />
                  {isStudent ? 'Today\'s Timetable' : 'Upcoming Meetings & Events'}
                </h3>
                <button className="text-sm text-indigo-400 hover:text-indigo-300">View Full Schedule</button>
              </div>
              
              <div className="space-y-4">
                {timetable.map((item, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                    <div className="w-24 text-center border-r border-white/10 pr-4">
                      <p className="text-lg font-bold text-white">{item.time.split(' ')[0]}</p>
                      <p className="text-xs text-indigo-400 font-medium">{item.time.split(' ')[1]}</p>
                    </div>
                    <div className="pl-6 flex-1">
                      <h4 className="text-base font-semibold text-white">{item.subject}</h4>
                      <p className="text-sm text-slate-400 flex items-center mt-1">
                        <Clock className="w-3 h-3 mr-1" /> {item.room}
                      </p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: BookOpen, label: 'LMS Portal', color: 'from-blue-500 to-cyan-500' },
                { icon: Wallet, label: 'Fee Payment', color: 'from-emerald-500 to-teal-500' },
                { icon: BookMarked, label: 'Library', color: 'from-purple-500 to-pink-500' },
                { icon: Users, label: 'Clubs', color: 'from-orange-500 to-red-500' },
              ].map((action, idx) => (
                <button key={idx} className="glass-dark rounded-2xl p-4 flex flex-col items-center justify-center space-y-3 hover:bg-white/10 transition-colors group border border-white/5">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{action.label}</span>
                </button>
              ))}
            </div>

          </div>

          {/* Right Column (Narrower) */}
          <div className="space-y-8">
            
            {/* Notice Board */}
            <div className="glass-dark rounded-3xl p-6 border border-white/5 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 text-rose-400" />
                  Notice Board
                </h3>
              </div>
              
              <div className="space-y-6">
                {recentNotices.map((notice, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-slate-700 hover:border-emerald-500 transition-colors cursor-pointer group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-emerald-500 transition-colors"></div>
                    <span className="text-xs font-semibold text-emerald-400 mb-1 block">{notice.date} • {notice.type}</span>
                    <h4 className="text-sm font-medium text-slate-200 group-hover:text-white">{notice.title}</h4>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-8 py-3 bg-white/5 hover:bg-white/10 text-sm font-semibold rounded-xl transition-colors border border-white/10">
                View All Notices
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}