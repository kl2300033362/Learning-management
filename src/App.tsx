import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { ProtectedRoute } from './components/Routes/ProtectedRoute';
import { AuthForm } from './components/Auth/AuthForm';
import { Dashboard } from './pages/Dashboard';
import { Home, AlertTriangle } from 'lucide-react';
import { Sidebar } from './components/Layout/Sidebar';

// Lazy-load new pages
const CoursesPage = lazy(() => import('./pages/student/CoursesPage'));
const ExamSection = lazy(() => import('./pages/student/ExamSection'));
const AttendancePage = lazy(() => import('./pages/student/AttendancePage'));
const PaymentPage = lazy(() => import('./pages/student/PaymentPage'));
const RewardsPage = lazy(() => import('./pages/student/RewardsPage'));

const StudentDetails = lazy(() => import('./pages/admin/StudentDetails'));
const AttendanceReport = lazy(() => import('./pages/admin/AttendanceReport'));
const TimetableManager = lazy(() => import('./pages/admin/TimetableManager'));
const CourseRegistration = lazy(() => import('./pages/admin/CourseRegistration'));

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-4">We encountered an unexpected error. Please refresh the page.</p>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Refresh Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const NotFound = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">404 - Page Not Found</h1>
      <a href="#/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg">Go Home</a>
    </div>
  </div>
);

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-slate-900">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

function App() {
  const suspenseFallback = (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* If user hits /, send them to Dashboard if logged in, otherwise show AuthForm */}
              <Route path="/" element={<AuthForm />} />
              <Route path="/auth" element={<Navigate to="/" replace />} />
              
              <Route path="/dashboard" element={<ProtectedRoute><AppLayout><Dashboard /></AppLayout></ProtectedRoute>} />
              
              {/* Student Routes */}
              <Route path="/courses" element={<ProtectedRoute><AppLayout><Suspense fallback={suspenseFallback}><CoursesPage /></Suspense></AppLayout></ProtectedRoute>} />
              <Route path="/exams" element={<ProtectedRoute><AppLayout><Suspense fallback={suspenseFallback}><ExamSection /></Suspense></AppLayout></ProtectedRoute>} />
              <Route path="/attendance" element={<ProtectedRoute><AppLayout><Suspense fallback={suspenseFallback}><AttendancePage /></Suspense></AppLayout></ProtectedRoute>} />
              <Route path="/payment" element={<ProtectedRoute><AppLayout><Suspense fallback={suspenseFallback}><PaymentPage /></Suspense></AppLayout></ProtectedRoute>} />
              <Route path="/rewards" element={<ProtectedRoute><AppLayout><Suspense fallback={suspenseFallback}><RewardsPage /></Suspense></AppLayout></ProtectedRoute>} />
              
              {/* Admin Routes */}
              <Route path="/admin/students" element={<ProtectedRoute requireRole="instructor"><AppLayout><Suspense fallback={suspenseFallback}><StudentDetails /></Suspense></AppLayout></ProtectedRoute>} />
              <Route path="/admin/attendance" element={<ProtectedRoute requireRole="instructor"><AppLayout><Suspense fallback={suspenseFallback}><AttendanceReport /></Suspense></AppLayout></ProtectedRoute>} />
              <Route path="/admin/timetable" element={<ProtectedRoute requireRole="instructor"><AppLayout><Suspense fallback={suspenseFallback}><TimetableManager /></Suspense></AppLayout></ProtectedRoute>} />
              <Route path="/admin/registration" element={<ProtectedRoute requireRole="instructor"><AppLayout><Suspense fallback={suspenseFallback}><CourseRegistration /></Suspense></AppLayout></ProtectedRoute>} />
              
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;