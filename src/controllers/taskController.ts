import { Request, Response } from "express";
import * as taskService from "../services/taskService";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const users = await taskService.getAllTasks();
    console.log("getTasks", users);
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error in getTasks:", error.message || error);
    res
      .status(500)
      .json({ error: error.message || "An unexpected error occurred" });
  }
};

export const addTask = async (req: Request, res: Response) => {
  try {
    const user = await taskService.createTask(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    console.error("Error in addTask:", error.message || error);
    res
      .status(500)
      .json({ error: error.message || "An unexpected error occurred" });
  }
};
