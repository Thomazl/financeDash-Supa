import express from "express";
import * as taskController from "../controllers/taskController";

const router = express.Router();

router.get("/getTasks", taskController.getTasks);
router.post("/addTask", taskController.addTask);

export default router;
