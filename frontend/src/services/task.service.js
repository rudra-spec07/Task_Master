import api from "../api/axios";

const getTasks = async () => {
  const { data } = await api.get("/tasks");
  return data.data;
};

const createTask = async (payload) => {
  const { data } = await api.post("/tasks", payload);
  return data.data;
};

const updateTask = async (id, payload) => {
  const { data } = await api.put(
    `/tasks/${id}`,
    payload
  );

  return data.data;
};

const deleteTask = async (id) => {
  const { data } = await api.delete(
    `/tasks/${id}`
  );

  return data;
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};