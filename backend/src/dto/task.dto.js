const allowedStatus = ["PENDING", "COMPLETED"];

const validateCreateTask = (data) => {
  const errors = {};

  const title = data.title?.trim();
  const status = data.status;
  const dueDate = data.dueDate;

  if (!title) {
    errors.title = "Title is required.";
  } else if (title.length < 3) {
    errors.title =
      "Title must be at least 3 characters.";
  }

  if (status && !allowedStatus.includes(status)) {
    errors.status = "Invalid task status.";
  }

  if (dueDate && Number.isNaN(Date.parse(dueDate))) {
    errors.dueDate = "Invalid due date.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

const validateUpdateTask = (data) => {
  return validateCreateTask(data);
};

export {
  validateCreateTask,
  validateUpdateTask,
};