import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';


dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL ou Anon Key não configurados corretamente.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);