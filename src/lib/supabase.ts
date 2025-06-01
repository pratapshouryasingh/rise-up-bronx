
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pvgxuxqnrevhjqqdizea.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2Z3h1eHFucmV2aGpxcWRpemVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NjE5NjEsImV4cCI6MjA2NDMzNzk2MX0.ff_3uVpsPWFmOeuZ0YgOmfd1VyE_R05lqZAIkSiV70s'

// Use static data for now
export const supabase = null

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
