import bcrypt from "bcrypt";
import { User } from "../domain/index.js";
import { ROLES } from "../constants/roles.js";
import { AUTH_MESSAGES } from "../utils/messages.js";
import { generateToken } from "../utils/jwt.js";

const register = async ({ name, email, password }) => {
  email = email.toLowerCase();

  const existingUser = await User.findOne({
    where: { email },
  });

  if (existingUser) {
    throw new Error(AUTH_MESSAGES.EMAIL_EXISTS);
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
    throw new Error(AUTH_MESSAGES.INVALID_CREDENTIALS);
  }

  if (!user.isActive) {
    throw new Error(AUTH_MESSAGES.ACCOUNT_INACTIVE);
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordMatched) {
    throw new Error(AUTH_MESSAGES.INVALID_CREDENTIALS);
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
    throw new Error(AUTH_MESSAGES.USER_NOT_FOUND);
  }

  return user;
};

export default {
  register,
  login,
  getProfile,
};