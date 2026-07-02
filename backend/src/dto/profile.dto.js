export const validateUpdateProfile = (data) => {
  const errors = {};

  const { name, email } = data;

  if (!name || name.trim() === "") {
    errors.name = "Name is required.";
  }

  if (!email || email.trim() === "") {
    errors.email = "Email is required.";
  } else {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      errors.email = "Invalid email address.";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateChangePassword = (
  data
) => {
  const errors = {};

  const {
    currentPassword,
    newPassword,
  } = data;

  if (!currentPassword) {
    errors.currentPassword =
      "Current password is required.";
  }

  if (!newPassword) {
    errors.newPassword =
      "New password is required.";
  } else if (newPassword.length < 6) {
    errors.newPassword =
      "Password must be at least 6 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};