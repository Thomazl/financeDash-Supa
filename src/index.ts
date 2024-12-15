import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import taskRoutes from "./routes/taskRoutes";
import authRouter from "./routes/authRoutes";
import { requestLogger } from "./utils/logger";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use('/auth', authRouter);
app.use(requestLogger);
console.log(`Servidor rodando`);

app.listen(port, () => {
  console.log(`Servidor rodando`);
});
