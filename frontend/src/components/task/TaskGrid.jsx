import EmptyState from "../common/EmptyState";

const TaskGrid = ({ children, tasks }) => {
  if (!tasks.length) {
    return (
      <EmptyState
        title="No Tasks Found"
        description="Create a task to get started."
      />
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
};

export default TaskGrid;