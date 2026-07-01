import {
  Pencil,
  Trash2,
  Calendar,
} from "lucide-react";

const TaskCard = ({
  task,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {task.title}
          </h2>

          <p className="mt-2 text-text-secondary">
            {task.description}
          </p>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            task.status === "COMPLETED"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.status}
        </span>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <div className="flex items-center gap-2 text-text-secondary">

          <Calendar size={16} />

          {task.dueDate}

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => onEdit(task)}
            className="transition hover:text-primary"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(task)}
            className="transition hover:text-red-500"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default TaskCard;