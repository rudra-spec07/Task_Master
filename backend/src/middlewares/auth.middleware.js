import { verifyToken } from "../utils/jwt.js";
import { User } from "../domain/index.js";
import { sendError } from "../utils/response.js";

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return sendError(
        res,
        "Authentication token is missing.",
        null,
        401
      );
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token);

    const user = await User.findByPk(decoded.id);

    if (!user) {
      return sendError(
        res,
        "User no longer exists.",
        null,
        401
      );
    }

    if (!user.isActive) {
      return sendError(
        res,
        "Your account has been deactivated.",
        null,
        403
      );
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
    };

    next();
  } catch (error) {
    return sendError(
      res,
      "Invalid or expired token.",
      null,
      401
    );
  }
};

export default authenticate;