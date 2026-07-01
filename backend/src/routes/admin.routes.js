import express from "express";

import adminController from "../controllers/admin.controller.js";

import authenticate from "../middlewares/auth.middleware.js";
import authorize from "../middlewares/role.middleware.js";

import { ROLES } from "../constants/roles.js";
import validate from "../middlewares/validate.middleware.js";
import { validateUserStatus } from "../dto/admin.dto.js";

const router = express.Router();

router.get(
  "/users",
  authenticate,
  authorize(ROLES.ADMIN),
  adminController.getAllUsers
);

router.get(
  "/tasks",
  authenticate,
  authorize(ROLES.ADMIN),
  adminController.getAllTasks
);

router.get(
  "/stats",
  authenticate,
  authorize(ROLES.ADMIN),
  adminController.getStats
);

router.patch(
  "/users/:id/status",
  authenticate,
  authorize(ROLES.ADMIN),
  validate(validateUserStatus),
  adminController.updateUserStatus
);

export default router;