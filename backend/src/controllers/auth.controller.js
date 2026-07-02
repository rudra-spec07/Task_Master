import authService from "../services/auth.service.js";
import { sendSuccess } from "../utils/response.js";
import { AUTH_MESSAGES } from "../utils/messages.js";
import asyncHandler from "../utils/asyncHandler.js";

const register = asyncHandler(async (req, res) => {
  const user = await authService.register(req.body);

  return sendSuccess(
    res,
    AUTH_MESSAGES.REGISTER_SUCCESS,
    user,
    201
  );
});

const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body);

  return sendSuccess(
    res,
    AUTH_MESSAGES.LOGIN_SUCCESS,
    result
  );
});

const me = asyncHandler(async (req, res) => {
  const user = await authService.getProfile(req.user.id);

  return sendSuccess(
    res,
    "Profile fetched successfully.",
    user
  );
});

const updateProfile = asyncHandler(
  async (req, res) => {
    const user =
      await authService.updateProfile(
        req.user.id,
        req.body
      );

    return sendSuccess(
      res,
      "Profile updated successfully.",
      user
    );
  }
);

const changePassword =
  asyncHandler(async (req, res) => {
    await authService.changePassword(
      req.user.id,
      req.body
    );

    return sendSuccess(
      res,
      "Password changed successfully."
    );
  });



export default {
  register,
  login,
  me,
  updateProfile,
  changePassword

};