import { User, Task } from "../domain/index.js";
import { Op } from "sequelize";
const getAllUsers = async () => {
  return await User.findAll({
    attributes: {
      exclude: ["password"],
    },
    order: [["createdAt", "DESC"]],
  });
};

const getAllTasks = async () => {
  return await Task.findAll({
    include: [
      {
        model: User,
        as:"user",
        attributes: ["id", "name", "email"],
      },
    ],
    order: [["createdAt", "DESC"]],
  });
};



const getStats = async () => {
  const totalUsers = await User.count();

  const activeUsers = await User.count({
    where: { isActive: true },
  });

  const inactiveUsers = await User.count({
    where: { isActive: false },
  });

  const totalTasks = await Task.count();

  const completedTasks = await Task.count({
    where: { status: "COMPLETED" },
  });

  const pendingTasks = await Task.count({
    where: { status: "PENDING" },
  });

  return {
    totalUsers,
    activeUsers,
    inactiveUsers,
    totalTasks,
    completedTasks,
    pendingTasks,
  };
};

const updateUserStatus = async (
  userId,
  adminId,
  isActive
) => {
  if (Number(userId) === Number(adminId)) {
  const error = new Error(
    "You cannot deactivate your own account."
  );
  error.statusCode = 403;
  throw error;
}

  const user = await User.findByPk(userId);

  if (!user) {
    const error = new Error("User not found.");
error.statusCode = 404;
throw error;
  }

  // New validation
  if (user.isActive === isActive) {
  const error = new Error(
    `User is already ${isActive ? "active" : "inactive"}.`
  );
  error.statusCode = 409;
  throw error;
}

  await user.update({
    isActive,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    isActive: user.isActive,
  };
};

export default {
  getAllUsers,
  getAllTasks,
  getStats,
  updateUserStatus,
};