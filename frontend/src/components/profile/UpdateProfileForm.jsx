import { useState } from "react";
import toast from "react-hot-toast";

import Card from "../common/Card";
import Button from "../common/Button";
import Input from "../common/Input";

import authService from "../../services/auth.service";

const UpdateProfileForm = ({
  user,
  refresh,
}) => {
  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      name: user.name,
      email: user.email,
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
    console.log("Submit clicked");
    console.log(form);
    try {
      setLoading(true);

      await authService.updateProfile(
        form
      );

      toast.success(
        "Profile updated."
      );

      refresh();

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
        Update Profile
      </h2>

      <form
        onSubmit={submit}
        className="space-y-5"
      >

        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={change}
        />

        <Input
          label="Email"
          name="email"
          value={form.email}
          onChange={change}
        />

        <Button
            type="submit"
          disabled={loading}
        >
          Save Changes
        </Button>

      </form>

    </Card>
  );
};

export default UpdateProfileForm;