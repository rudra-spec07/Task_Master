import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";
import TaskForm from "./TaskForm";

import taskService from "../../services/task.service";

const CreateTaskModal = ({
  open,
  onClose,
  onCreated,
}) => {
  const [loading, setLoading] =
    useState(false);

  const createTask = async (
    payload
  ) => {
    try {
      setLoading(true);

      await taskService.createTask(
        payload
      );

      toast.success(
        "Task created successfully."
      );

      onCreated();

      onClose();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Unable to create task."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <Modal
      open={open}
      title="Create Task"
      onClose={onClose}
    >
      <TaskForm
        loading={loading}
        onSubmit={createTask}
      />
    </Modal>
  );
};

export default CreateTaskModal;