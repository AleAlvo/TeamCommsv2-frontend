import { createClient } from '@supabase/supabase-js'

// Retrieve environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY || ''

// Initialize Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey)
