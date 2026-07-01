import toast from "react-hot-toast";

import Modal from "../common/Modal";
import Button from "../common/Button";

import taskService from "../../services/task.service";

const DeleteTaskModal = ({
  open,
  onClose,
  task,
  onDeleted,
}) => {
  if (!task) return null;

  const handleDelete =
    async () => {
      try {
        await taskService.deleteTask(
          task.id
        );

        toast.success(
          "Task deleted."
        );

        onDeleted();

        onClose();

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
            "Unable to delete task."
        );

      }
    };

  return (
    <Modal
      open={open}
      title="Delete Task"
      onClose={onClose}
    >
      <p className="mb-6 text-text-secondary">
        Are you sure you want to delete
        <strong> {task.title}</strong>?
      </p>

      <div className="flex justify-end gap-4">

        <Button
          variant="secondary"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          onClick={handleDelete}
        >
          Delete
        </Button>

      </div>
    </Modal>
  );
};

export default DeleteTaskModal;