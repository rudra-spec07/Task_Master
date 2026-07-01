import express from "express";

import taskController from "../controllers/task.controller.js";

import authenticate from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";

import { validateCreateTask,validateUpdateTask } from "../dto/task.dto.js";

const router = express.Router();

router.get(
  "/",
  authenticate,
  taskController.getMyTasks
);

router.post(
  "/",
  authenticate,
  validate(validateCreateTask),
  taskController.createTask
);

router.get(
  "/:id",
  authenticate,
  taskController.getTaskById
);

router.put(
  "/:id",
  authenticate,
  validate(validateUpdateTask),
  taskController.updateTask
);


router.delete(
  "/:id",
  authenticate,
  taskController.deleteTask
);


export default router;