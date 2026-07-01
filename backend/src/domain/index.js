import User from "./user.domain.js";
import Task from "./task.domain.js";

// Relationships
User.hasMany(Task, {
  foreignKey: "userId",
  as: "tasks",
  onDelete: "CASCADE",
});

Task.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

export { User, Task };