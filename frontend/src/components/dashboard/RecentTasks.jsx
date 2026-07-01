import EmptyState from "../common/EmptyState";

const RecentTasks = ({ tasks }) => {
  if (!tasks.length) {
    return (
      <EmptyState
        title="No Tasks Yet"
        description="Create your first task to get started."
      />
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
      <h2 className="mb-6 text-2xl font-bold">
        Recent Tasks
      </h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-xl border border-border p-4"
          >
            <div>
              <h3 className="font-semibold">
                {task.title}
              </h3>

              <p className="text-sm text-text-secondary">
                {task.description || "No description"}
              </p>
            </div>

            <div className="text-right">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  task.status === "COMPLETED"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {task.status}
              </span>

              <p className="mt-2 text-sm text-text-secondary">
                {task.dueDate || "No Due Date"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTasks;