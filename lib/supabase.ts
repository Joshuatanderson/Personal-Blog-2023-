import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
    process.env.PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    ''
const supabaseServiceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    ''

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey)
