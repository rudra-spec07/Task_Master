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
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {task.title}
          </h2>

          <p className="mt-2 text-text-secondary">
            {task.description}
          </p>

        </div>

        <StatusBadge status={task.status} />

      </div>

      {/* <div className="mt-6 flex items-center justify-between">

        <div className="flex items-center gap-2 text-text-secondary">

          <Calendar size={16} />

          {task.dueDate}

        </div>

      </div> */}

      <div className="mt-6 flex items-center justify-between">

        <div className="flex items-center gap-2 text-text-secondary">

          <Calendar size={16} />

         {new Date(task.dueDate).toLocaleDateString()}

        </div>

        <div className="flex gap-2">

          <button className="rounded-lg p-2 transition hover:bg-background"
            onClick={() => onEdit(task)}
            className="transition hover:text-primary"
          >
            <Pencil size={18} />
          </button>

          <button className="rounded-lg p-2 transition hover:bg-background"
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