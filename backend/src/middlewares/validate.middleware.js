import { sendError } from "../utils/response.js";

const validate = (validator) => {
  return (req, res, next) => {
    const { isValid, errors } = validator(req.body);

    if (!isValid) {
      return sendError(
        res,
        "Validation failed.",
        errors,
        400
      );
    }

    next();
  };
};

export default validate;