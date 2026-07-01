import { sendError } from "../utils/response.js";

const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err);

  return sendError(
    res,
    err.message || "Internal Server Error",
    null,
    err.statusCode || 500
  );
};

export default errorHandler;