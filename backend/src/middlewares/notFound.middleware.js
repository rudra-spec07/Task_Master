import { sendError } from "../utils/response.js";

const notFound = (req, res) => {
  return sendError(
    res,
    `Route ${req.originalUrl} not found.`,
    null,
    404
  );
};

export default notFound;