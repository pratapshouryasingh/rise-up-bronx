
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, type Profile } from '@/lib/supabase';
import { toast } from '@/hooks/use-toast';

interface AuthContextType {
  user: Profile | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: { email: string; password: string; name: string; role: 'youth' | 'mentor'; interests: string[] }) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      // If Supabase is not connected, use mock data
      const mockUser = localStorage.getItem('youthrise_user');
      if (mockUser) {
        setUser(JSON.parse(mockUser));
      }
      setLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchUserProfile(session.user.id);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        await fetchUserProfile(session.user.id);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId: string) => {
    if (!supabase) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) throw error;
      setUser(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast({
        title: "Error",
        description: "Failed to load user profile",
        variant: "destructive"
      });
    }
  };

  const signup = async (userData: { email: string; password: string; name: string; role: 'youth' | 'mentor'; interests: string[] }) => {
    setLoading(true);
    try {
      if (!supabase) {
        // Mock signup for when Supabase is not connected
        const mockUser: Profile = {
          id: Date.now().toString(),
          email: userData.email,
          name: userData.name,
          role: userData.role,
          interests: userData.interests,
          badges: ['welcome'],
          streak_days: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        setUser(mockUser);
        localStorage.setItem('youthrise_user', JSON.stringify(mockUser));
        toast({
          title: "Welcome to YouthRise! 🎉",
          description: "Your account has been created successfully (Demo Mode)",
        });
        return;
      }

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
      });

      if (authError) throw authError;

      if (authData.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: authData.user.id,
            email: userData.email,
            name: userData.name,
            role: userData.role,
            interests: userData.interests,
            badges: ['welcome'],
            streak_days: 1
          });

        if (profileError) throw profileError;

        toast({
          title: "Welcome to YouthRise! 🎉",
          description: "Your account has been created successfully",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      if (!supabase) {
        // Mock login for when Supabase is not connected
        const mockUser: Profile = {
          id: '1',
          email,
          name: email.split('@')[0],
          role: email.includes('mentor') ? 'mentor' : 'youth',
          interests: ['coding', 'design'],
          badges: ['welcome', 'first-login'],
          streak_days: 3,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        setUser(mockUser);
        localStorage.setItem('youthrise_user', JSON.stringify(mockUser));
        toast({
          title: "Welcome back! 👋",
          description: "You've successfully logged in (Demo Mode)",
        });
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Welcome back! 👋",
        description: "You've successfully logged in",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    } else {
      localStorage.removeItem('youthrise_user');
    }
    setUser(null);
    toast({
      title: "Logged out",
      description: "See you next time! 👋",
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
