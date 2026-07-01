import adminService from "../services/admin.service.js";
import asyncHandler from "../utils/asyncHandler.js";
import { sendSuccess } from "../utils/response.js";

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await adminService.getAllUsers();

  return sendSuccess(
    res,
    "Users fetched successfully.",
    users
  );
});

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await adminService.getAllTasks();

  return sendSuccess(
    res,
    "Tasks fetched successfully.",
    tasks
  );
});

const getStats = asyncHandler(async (req, res) => {
  const stats = await adminService.getStats();

  return sendSuccess(
    res,
    "Statistics fetched successfully.",
    stats
  );
});

const updateUserStatus = asyncHandler(async (req, res) => {
  const user = await adminService.updateUserStatus(
    req.params.id,
    req.user.id,
    req.body.isActive
  );

  return sendSuccess(
    res,
    "User status updated successfully.",
    user
  );
});

export default {
  getAllUsers,
  getAllTasks,
  getStats,
  updateUserStatus,
};