import express from "express";

import authController from "../controllers/auth.controller.js";
import validate from "../middlewares/validate.middleware.js";
import authenticate from "../middlewares/auth.middleware.js";

import {
  validateRegister,
  validateLogin,
} from "../dto/auth.dto.js";

import {
  validateUpdateProfile,
  validateChangePassword,
} from "../dto/profile.dto.js";

const router = express.Router();

router.get(
  "/me",
  authenticate,
  authController.me
);

router.post(
  "/register",
  validate(validateRegister),
  authController.register
);

router.post(
  "/login",
  validate(validateLogin),
  authController.login
);

router.put(
  "/profile",
  authenticate,
  validate(validateUpdateProfile),
  authController.updateProfile
);

router.put(
  "/change-password",
  authenticate,
  validate(validateChangePassword),
  authController.changePassword
);

export default router;