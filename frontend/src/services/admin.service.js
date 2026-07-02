import api from "../api/axios";

const getUsers = async () => {
  const { data } = await api.get("/admin/users");
  return data.data;
};

const getStats = async () => {
  const { data } = await api.get("/admin/stats");
  return data.data;
};

const updateUserStatus = async (
  id,
  isActive
) => {
  const { data } = await api.patch(
    `/admin/users/${id}/status`,
    { isActive }
  );

  return data.data;
};

export default {
  getUsers,
  getStats,
  updateUserStatus,
};