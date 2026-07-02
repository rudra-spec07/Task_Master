import {
  Pencil,
  Trash2,
  Calendar,
} from "lucide-react";

import StatusBadge from "../common/StatusBadge";

const TaskCard = ({
  task,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div className="min-w-0 flex-1">

          <h2 className="break-words text-lg font-bold sm:text-xl">
            {task.title}
          </h2>

          <p className="mt-2 break-words text-text-secondary">
            {task.description}
          </p>

        </div>

        <StatusBadge status={task.status} />

      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-2 text-sm text-text-secondary">

          <Calendar size={16} />

          {new Date(task.dueDate).toLocaleDateString()}

        </div>

        <div className="flex justify-end gap-2">

          <button
            onClick={() => onEdit(task)}
            className="rounded-lg p-2 transition hover:bg-background hover:text-primary"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(task)}
            className="rounded-lg p-2 transition hover:bg-background hover:text-red-500"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default TaskCard;