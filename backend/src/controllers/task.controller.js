import taskService from "../services/task.service.js";
import { TASK_MESSAGES } from "../utils/messages.js";

import asyncHandler from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/response.js";
const createTask = asyncHandler(async (req, res) => {
  const task = await taskService.createTask(
    req.user.id,
    req.body
  );

  return sendSuccess(
    res,
    TASK_MESSAGES.TASK_CREATED,
    task,
    201
  );
});

const getMyTasks = asyncHandler(async (req, res) => {
  const tasks = await taskService.getMyTasks(req.user.id);

  return sendSuccess(
    res,
    "Tasks fetched successfully.",
    tasks
  );
});

const getTaskById = asyncHandler(async (req, res) => {
  const task = await taskService.getTaskById(
    req.params.id,
    req.user.id
  );

  return sendSuccess(
    res,
    "Task fetched successfully.",
    task
  );
});

const updateTask = asyncHandler(async (req, res) => {
  const task = await taskService.updateTask(
    req.params.id,
    req.user.id,
    req.body
  );

  return sendSuccess(
    res,
    "Task updated successfully.",
    task
  );
});

const deleteTask = asyncHandler(async (req, res) => {
  await taskService.deleteTask(
    req.params.id,
    req.user.id
  );

  return sendSuccess(
    res,
    "Task deleted successfully.",
    null
  );
});

export default {
  createTask,
  getMyTasks,
  getTaskById,
  updateTask,
  deleteTask,
};  