// services/authService.ts
import { supabase } from "../config/supabaseClient";
import { User, Session } from "@supabase/supabase-js";

export async function signInWithEmailPassword(
  email: string,
  password: string
): Promise<{ user: User | null; session: Session | null }> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return { user: data.user, session: data.session };
}
