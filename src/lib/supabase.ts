// Mock Supabase Implementation

// Mock user type
export type User = {
  id: string;
  email?: string;
  phone?: string;
  created_at: string;
  role?: string;
  aud: string;
  user_metadata?: any;
};

// Database type definitions
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          role: 'student' | 'instructor';
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: any;
        Update: any;
      };
      courses: {
        Row: {
          id: string;
          title: string;
          description: string;
          instructor_id: string;
          thumbnail_url: string | null;
          price: number | null;
          duration_hours: number | null;
          difficulty_level: 'Beginner' | 'Intermediate' | 'Advanced';
          is_published: boolean;
          category: string | null;
          tags: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: any;
        Update: any;
      };
      enrollments: { Row: any; Insert: any; Update: any };
      assignments: { Row: any; Insert: any; Update: any };
      submissions: { Row: any; Insert: any; Update: any };
    };
  };
};

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Course = Database['public']['Tables']['courses']['Row'];
export type Enrollment = Database['public']['Tables']['enrollments']['Row'];
export type Assignment = Database['public']['Tables']['assignments']['Row'];
export type Submission = Database['public']['Tables']['submissions']['Row'];

// Mock internal state
let currentUser: User | null = null;
let currentProfile: Profile | null = null;

// The mock supabase client
export const supabase = {
  auth: {
    getUser: async () => ({ data: { user: currentUser }, error: null }),
    getSession: async () => ({ data: { session: currentUser ? { user: currentUser, access_token: 'mock-token' } : null }, error: null }),
    onAuthStateChange: (callback: any) => {
      return { data: { subscription: { unsubscribe: () => {} } } };
    },
    signInWithPassword: async ({ email, password }: any) => {
      currentUser = {
        id: 'mock-user-id',
        email,
        created_at: new Date().toISOString(),
        aud: 'authenticated',
        user_metadata: {}
      };
      currentProfile = {
        id: currentUser.id,
        email: email || '',
        full_name: email?.split('@')[0] || 'User',
        role: email?.toLowerCase().includes('admin') || email?.toLowerCase().includes('instructor') ? 'instructor' : 'student',
        avatar_url: null,
        bio: 'Mock user bio',
        created_at: currentUser.created_at,
        updated_at: currentUser.created_at,
      };
      return { data: { user: currentUser, session: { user: currentUser } }, error: null };
    },
    signUp: async ({ email, password }: any) => {
      return supabase.auth.signInWithPassword({ email, password });
    },
    signOut: async () => {
      currentUser = null;
      currentProfile = null;
      return { error: null };
    }
  },
  from: (table: string) => {
    return {
      select: (query?: string) => {
        let result: any = null;
        if (table === 'profiles' && currentProfile) {
           result = currentProfile;
        } else {
           result = [];
        }
        
        const chain: any = {
          limit: () => chain,
          eq: () => chain,
          in: () => chain,
          order: () => chain,
          single: async () => ({ data: result, error: null }),
          then: (resolve: any) => resolve({ data: Array.isArray(result) ? result : [result], error: null })
        };
        return chain;
      },
      insert: (data: any) => ({
        select: () => ({ single: async () => ({ data, error: null }), then: (r: any) => r({ data, error: null }) })
      }),
      upsert: (data: any) => {
        if (table === 'profiles') {
          currentProfile = { ...currentProfile, ...data } as Profile;
        }
        return {
          select: () => ({
            single: async () => ({ data: currentProfile, error: null })
          })
        };
      }
    };
  }
};

export const supabaseHelpers = {
  async isAvailable() { return true; },
  async getCurrentUserProfile() { return currentProfile; },
  async upsertProfile(profile: any) {
    currentProfile = { ...currentProfile, ...profile } as Profile;
    return currentProfile;
  },
  isDemoMode() { return true; },
  async getConnectionStatus() {
    return { connected: true, message: 'Connected to mock local auth' };
  }
};

export default supabase;