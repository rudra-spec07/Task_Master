import api from "../api/axios";

const me = async () => {
  const { data } = await api.get("/auth/me");
  return data.data;
};

const updateProfile = async (payload) => {
  const { data } = await api.put(
    "/auth/profile",
    payload
  );

  return data.data;
};

const changePassword = async (payload) => {
  const { data } = await api.put(
    "/auth/change-password",
    payload
  );

  return data;
};

export default {
  me,
  updateProfile,
  changePassword,
};