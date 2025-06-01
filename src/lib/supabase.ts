
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'

// Check if we have valid Supabase credentials
const hasValidCredentials = supabaseUrl !== 'YOUR_SUPABASE_URL' && supabaseKey !== 'YOUR_SUPABASE_ANON_KEY'

export const supabase = hasValidCredentials 
  ? createClient(supabaseUrl, supabaseKey)
  : null

// Database types
export interface Profile {
  id: string
  email: string
  name: string
  role: 'youth' | 'mentor'
  interests: string[]
  avatar_url?: string
  badges: string[]
  streak_days: number
  created_at: string
  updated_at: string
}

export interface Mentor {
  id: string
  profile_id: string
  expertise: string[]
  bio: string
  availability: string
  rating: number
  total_mentees: number
}

export interface LearningTrack {
  id: string
  title: string
  description: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration_weeks: number
  badge_reward: string
  lessons: any[]
}

export interface Opportunity {
  id: string
  title: string
  description: string
  type: 'event' | 'job' | 'scholarship' | 'internship'
  location: string
  date: string
  external_link?: string
  created_at: string
}
