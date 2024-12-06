import express from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.get("/getUsers", userController.getUsers);
router.post("/addUser", userController.addUser);

export default router;
