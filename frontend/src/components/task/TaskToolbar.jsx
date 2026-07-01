import { Search } from "lucide-react";

import Button from "../common/Button";

const TaskToolbar = ({
  search,
  setSearch,
  filter,
  setFilter,
  onCreate,
}) => {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <div className="flex gap-4">

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-text-secondary"
            size={18}
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search task..."
            className="w-72 rounded-xl border border-border bg-surface py-2 pl-10 pr-4 outline-none"
          />

        </div>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          className="rounded-xl border border-border bg-surface px-4"
        >
          <option value="ALL">
            All
          </option>

          <option value="PENDING">
            Pending
          </option>

          <option value="COMPLETED">
            Completed
          </option>

        </select>

      </div>

      <div className="w-48">

        <Button onClick={onCreate}>
          + New Task
        </Button>

      </div>

    </div>
  );
};

export default TaskToolbar;