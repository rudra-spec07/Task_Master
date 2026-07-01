export const validateUserStatus = (data) => {
  const errors = {};

  if (typeof data.isActive !== "boolean") {
    errors.isActive =
      "isActive must be true or false.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};