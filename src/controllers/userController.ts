import { Request, Response } from "express";
import * as userService from "../services/userService";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    console.log("getUsers", users);
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error in getUsers:", error.message || error);
    res
      .status(500)
      .json({ error: error.message || "An unexpected error occurred" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    console.error("Error in addUser:", error.message || error);
    res
      .status(500)
      .json({ error: error.message || "An unexpected error occurred" });
  }
};
