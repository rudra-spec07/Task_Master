import { useState } from "react";
import toast from "react-hot-toast";

import Card from "../common/Card";
import Button from "../common/Button";
import Input from "../common/Input";

import authService from "../../services/auth.service";

const ChangePasswordForm = () => {
  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      currentPassword: "",
      newPassword: "",
    });

  const change = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await authService.changePassword(
        form
      );

      toast.success(
        "Password changed."
      );

      setForm({
        currentPassword: "",
        newPassword: "",
      });

    } catch (error) {

      toast.error(
        error.response?.data?.message
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <Card>

      <h2 className="mb-6 text-2xl font-bold">
        Change Password
      </h2>

      <form
        onSubmit={submit}
        className="space-y-5"
      >

        <Input
          label="Current Password"
          type="password"
          name="currentPassword"
          value={form.currentPassword}
          onChange={change}
        />

        <Input
          label="New Password"
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={change}
        />

        <Button
            type="submit"
          disabled={loading}
        >
          Update Password
        </Button>

      </form>

    </Card>
  );
};

export default ChangePasswordForm;