import React, { createContext, useContext, useEffect, useState } from 'react';

type User = {
  id: string;
  email: string;
  full_name: string;
  role: 'student' | 'instructor';
  avatar_url?: string;
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string, role: 'student' | 'instructor') => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
  isInstructor: boolean;
  isStudent: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_SESSION_KEY = 'edu-session';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const sessionUser = localStorage.getItem(LOCAL_SESSION_KEY);
      if (sessionUser) {
        setUser(JSON.parse(sessionUser));
      }
    } catch (e) {
      console.error('Failed to parse session', e);
    } finally {
      setLoading(false);
    }
  }, []);

  const signUp = async (email: string, password: string, fullName: string, role: 'student' | 'instructor') => {
    setLoading(true);
    setTimeout(() => {
      const newUser: User = { id: Date.now().toString(), email, full_name: fullName, role };
      setUser(newUser);
      localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify(newUser));
      setLoading(false);
    }, 500);
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setTimeout(() => {
      let role: 'student' | 'instructor' = 'student';
      if (email.toLowerCase().includes('admin') || email.toLowerCase().includes('instructor')) {
        role = 'instructor';
      }
      const loggedUser: User = { 
        id: Date.now().toString(), 
        email, 
        full_name: email.split('@')[0], 
        role 
      };
      setUser(loggedUser);
      localStorage.setItem(LOCAL_SESSION_KEY, JSON.stringify(loggedUser));
      setLoading(false);
    }, 500);
  };

  const signOut = async () => {
    setLoading(true);
    setTimeout(() => {
      setUser(null);
      localStorage.removeItem(LOCAL_SESSION_KEY);
      setLoading(false);
    }, 300);
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    isAuthenticated: !!user,
    isInstructor: user?.role === 'instructor',
    isStudent: user?.role === 'student'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useRequireAuth() {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading && !user) window.location.hash = '/auth';
  }, [user, loading]);
  return { user, loading };
}

export function useRequireRole(role: 'student' | 'instructor') {
  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading && (!user || user.role !== role)) window.location.hash = '/';
  }, [user, loading, role]);
  return { user, loading };
}