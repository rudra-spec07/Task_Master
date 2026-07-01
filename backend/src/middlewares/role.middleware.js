import { sendError } from "../utils/response.js";

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return sendError(
        res,
        "Access denied.",
        null,
        403
      );
    }

    next();
  };
};

export default authorize;