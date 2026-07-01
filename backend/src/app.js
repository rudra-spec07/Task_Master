import express from "express";
import cors from "cors";

import env from "./config/env.js";
import authRoutes from "./routes/auth.routes.js";

import taskRoutes from "./routes/task.routes.js";

import errorHandler from "./middlewares/error.middleware.js";
import adminRoutes from "./routes/admin.routes.js";
import notFound from "./middlewares/notFound.middleware.js";


const app = express();

// Middlewares
app.use(
  cors({
    origin: env.frontendUrl,
    credentials: true,
  })
);

app.use(express.json());



// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Manager API is running 🚀",
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/admin", adminRoutes);
app.use(errorHandler);
app.use(notFound);
export default app;