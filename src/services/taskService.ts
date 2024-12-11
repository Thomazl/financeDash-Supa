import { supabase } from "../config/supabaseClient";

export const getAllTasks = async () => {
  const { data, error, status, statusText } = await supabase
    .from("TB_TASKS")
    .select("*");
  console.log({ data, error, status, statusText });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const createTask = async (taskData: any) => {
  const { data, error, status, statusText } = await supabase
    .from("TB_TASKS")
    .insert(taskData);
  console.log({ data, error, status, statusText });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
