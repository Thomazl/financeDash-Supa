// authModels.ts
import { User } from "@supabase/supabase-js";

/**
 * Interface do body recebido pela rota de login.
 */
export interface LoginRequestBody {
  email: string;
  password: string;
}

/**
 * Interface da resposta de sucesso do login.
 */
export interface LoginResponseSuccess {
  user: User;
  access_token: string;
  refresh_token: string | null; // dependendo da config do Supabase pode ser null
  expires_in: number;
  token_type: string;
}

/**
 * Interface da resposta de erro do login.
 */
export interface LoginResponseError {
  error: string;
}
