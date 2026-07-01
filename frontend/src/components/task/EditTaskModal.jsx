import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";
import TaskForm from "./TaskForm";

import taskService from "../../services/task.service";

const EditTaskModal = ({
  open,
  onClose,
  task,
  onUpdated,
}) => {
  const [loading, setLoading] =
    useState(false);

  if (!task) return null;

  const updateTask = async (
    payload
  ) => {
    try {
      setLoading(true);

      await taskService.updateTask(
        task.id,
        payload
      );

      toast.success(
        "Task updated successfully."
      );

      onUpdated();

      onClose();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Unable to update task."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <Modal
      open={open}
      title="Edit Task"
      onClose={onClose}
    >
      <TaskForm
        initialValues={task}
        loading={loading}
        onSubmit={updateTask}
      />
    </Modal>
  );
};

export default EditTaskModal;