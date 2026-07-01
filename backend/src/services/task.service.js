import { Task } from "../domain/index.js";

const createTask = async (userId, taskData) => {
  return await Task.create({
    userId,
    title: taskData.title,
    description: taskData.description,
    dueDate: taskData.dueDate,
  });
};

const getMyTasks = async (userId) => {
  return await Task.findAll({
    where: {
      userId,
    },
    order: [["createdAt", "DESC"]],
  });
};

const getTaskById = async (taskId, userId) => {
  const task = await Task.findOne({
    where: {
      id: taskId,
      userId,
    },
  });

  if (!task) {
    throw new Error("Task not found.");
  }

  return task;
};

const updateTask = async (
  taskId,
  userId,
  taskData
) => {
  const task = await Task.findOne({
    where: {
      id: taskId,
      userId,
    },
  });

  if (!task) {
    throw new Error("Task not found.");
  }

  await task.update({
    title: taskData.title,
    description: taskData.description,
    status: taskData.status,
    dueDate: taskData.dueDate,
  });

  return task;
};

const deleteTask = async (taskId, userId) => {
  const task = await Task.findOne({
    where: {
      id: taskId,
      userId,
    },
  });

  if (!task) {
    throw new Error("Task not found.");
  }

  await task.destroy();

  return;
};

export default {
  createTask,
  getMyTasks,
  getTaskById,
  updateTask,
  deleteTask,
};