import bcrypt from "bcrypt";
import { User } from "../domain/index.js";
import env from "../config/env.js";
import { ROLES } from "../constants/roles.js";

const seedAdmin = async () => {
  const hashedPassword = await bcrypt.hash(env.admin.password, 10);

  const admin = await User.findOne({
    where: {
      role: ROLES.ADMIN,
    },
  });

  if (!admin) {
    await User.create({
      name: env.admin.name,
      email: env.admin.email.toLowerCase(),
      password: hashedPassword,
      role: ROLES.ADMIN,
      isActive: true,
    });

    console.log("✅ Default admin created.");
    return;
  }

  await admin.update({
    name: env.admin.name,
    email: env.admin.email.toLowerCase(),
    password: hashedPassword,
    isActive: true,
  });

  console.log("✅ Admin updated from .env");
};

export default seedAdmin;