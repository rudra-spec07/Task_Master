import bcrypt from "bcrypt";
import { User } from "../domain/index.js";
import { ROLES } from "../constants/roles.js";
import { AUTH_MESSAGES } from "../utils/messages.js";
import { generateToken } from "../utils/jwt.js";

const createAuthError = (message, statusCode = 401) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

const register = async ({ name, email, password }) => {
  email = email.toLowerCase();

  const existingUser = await User.findOne({
    where: { email },
  });

  if (existingUser) {
    throw createAuthError(AUTH_MESSAGES.EMAIL_EXISTS, 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: ROLES.USER,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    isActive: user.isActive,
  };
};

const login = async ({ email, password }) => {
  email = email.toLowerCase();

  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    throw createAuthError(AUTH_MESSAGES.INVALID_CREDENTIALS);
  }

  if (!user.isActive) {
    throw createAuthError(AUTH_MESSAGES.ACCOUNT_INACTIVE, 403);
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordMatched) {
    throw createAuthError(AUTH_MESSAGES.INVALID_CREDENTIALS);
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
    },
  };
};

const getProfile = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: [
      "id",
      "name",
      "email",
      "role",
      "isActive",
      "createdAt",
      "updatedAt",
    ],
  });

  if (!user) {
    throw createAuthError(AUTH_MESSAGES.USER_NOT_FOUND, 404);
  }

  return user;
};


const updateProfile = async (userId, payload) => {
  const user = await User.findByPk(userId);

  if (!user) {
    throw new Error("User not found.");
  }

  const { name, email } = payload;

  if (email !== user.email) {
  const existingUser =
    await User.findOne({
      where: { email },
    });

  if (existingUser) {
    throw new Error(
      "Email is already in use."
    );
  }
}

  await user.update({
    name,
    email,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};

const changePassword = async (
  userId,
  payload
) => {
  const user = await User.findByPk(userId);

  if (!user) {
    throw new Error("User not found.");
  }

  const {
    currentPassword,
    newPassword,
  } = payload;

  const isMatch =
    await bcrypt.compare(
      currentPassword,
      user.password
    );

  if (!isMatch) {
    throw new Error(
      "Current password is incorrect."
    );
  }

  user.password =
    await bcrypt.hash(newPassword, 10);

  await user.save();

  return null;
};

export default {
  register,
  login,
  getProfile,
  updateProfile,
  changePassword
};
