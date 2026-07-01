import { useState } from "react";

import Button from "../common/Button";
import Input from "../common/Input";

const TaskForm = ({
  initialValues,
  onSubmit,
  loading,
}) => {
  const [form, setForm] = useState(
    initialValues || {
      title: "",
      description: "",
      dueDate: "",
      status: "PENDING",
    }
  );

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={submit}
      className="space-y-5"
    >
      <Input
        label="Title"
        name="title"
        value={form.title}
        onChange={handleChange}
      />

      <Input
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <Input
        label="Due Date"
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
      />

      <div>
        <label className="mb-2 block text-sm font-medium">
          Status
        </label>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 outline-none"
        >
          <option value="PENDING">
            Pending
          </option>

          <option value="COMPLETED">
            Completed
          </option>
        </select>
      </div>

      <Button
        type="submit"
        disabled={loading}
      >
        {loading
          ? "Saving..."
          : "Save Task"}
      </Button>
    </form>
  );
};

export default TaskForm;