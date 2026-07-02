const TaskCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-2xl border border-border bg-surface p-6 shadow-card">

      <div className="flex items-start justify-between">

        <div className="flex-1">

          <div className="h-6 w-40 rounded bg-border"></div>

          <div className="mt-4 h-4 w-full rounded bg-border"></div>

          <div className="mt-2 h-4 w-3/4 rounded bg-border"></div>

        </div>

        <div className="h-7 w-20 rounded-full bg-border"></div>

      </div>

      <div className="mt-8 h-4 w-40 rounded bg-border"></div>

    </div>
  );
};

export default TaskCardSkeleton;