import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import taskService from "../services/task.service";

import TaskToolbar from "../components/task/TaskToolbar";
import TaskGrid from "../components/task/TaskGrid";
import TaskCard from "../components/task/TaskCard";
import CreateTaskModal from "../components/task/CreateTaskModal";
import EditTaskModal from "../components/task/EditTaskModal";
import DeleteTaskModal from "../components/task/DeleteTaskModal";
const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("ALL");

    const [openCreate, setOpenCreate] =
  useState(false);

  const [selectedTask, setSelectedTask] =
  useState(null);

const [openEdit, setOpenEdit] =
  useState(false);

const [openDelete, setOpenDelete] =
  useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data =
      await taskService.getTasks();

    setTasks(data);
  };

  const filteredTasks = tasks.filter(
    (task) => {
      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "ALL" ||
        task.status === filter;

      return (
        matchesSearch &&
        matchesFilter
      );
    }
  );

  return (
    <DashboardLayout>

      <TaskToolbar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        onCreate={() => setOpenCreate(true)}
      />

      <TaskGrid
        tasks={filteredTasks}
      >

        {filteredTasks.map((task) => (
          <TaskCard
  key={task.id}
  task={task}
  onEdit={(task) => {
    setSelectedTask(task);
    setOpenEdit(true);
  }}
  onDelete={(task) => {
    setSelectedTask(task);
    setOpenDelete(true);
  }}
/>
        ))}

      </TaskGrid>

      <CreateTaskModal
  open={openCreate}
  onClose={() => setOpenCreate(false)}
  onCreated={loadTasks}
/>

<EditTaskModal
  open={openEdit}
  task={selectedTask}
  onClose={() => {
    setOpenEdit(false);
    setSelectedTask(null);
  }}
  onUpdated={loadTasks}
/>

<DeleteTaskModal
  open={openDelete}
  task={selectedTask}
  onClose={() => {
    setOpenDelete(false);
    setSelectedTask(null);
  }}
  onDeleted={loadTasks}
/>

    </DashboardLayout>
  );
};

export default TasksPage;