const validateRegister = (data) => {
  const errors = {};

  const name = data.name?.trim();
  const email = data.email?.trim().toLowerCase();
  const password = data.password;

  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    errors.email = "Invalid email address.";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password =
      "Password must be at least 6 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

const validateLogin = (data) => {
  const errors = {};

  const email = data.email?.trim().toLowerCase();
  const password = data.password;

  if (!email) {
    errors.email = "Email is required.";
  }

  if (!password) {
    errors.password = "Password is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export { validateRegister, validateLogin };