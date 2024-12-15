import { supabase } from "../config/supabaseClient";

export const getAllUsers = async () => {
  const { data, error, status, statusText } = await supabase
    .from("TB_USER")
    .select("*");
  console.log({ data, error, status, statusText }); // Logs para depuração
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const createUser = async (userData: any) => {
  const { data, error } = await supabase.from("users").insert(userData);
  if (error) throw new Error(error.message);
  return data;
};

export const LoginUser = async (userData: any) => {
  const { data, error, status, statusText } = await supabase
    .from("TB_USER")
    .select("*");
  console.log({ data, error, status, statusText }); // Logs para depuração
  if (error) {
    throw new Error(error.message);
  }
  return data;
}