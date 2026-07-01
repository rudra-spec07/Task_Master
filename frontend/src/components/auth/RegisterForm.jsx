import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../api/axios";
import Button from "../common/Button";
import Input from "../common/Input";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await api.post("/auth/register", form);

      toast.success(data.message);

      setForm({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="John Doe"
      />

      <Input
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="john@example.com"
      />

      <Input
        label="Password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="********"
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Account"}
      </Button>

      <p className="text-center text-sm text-text-secondary">
        Already have an account?{" "}
        <Link
          to="/"
          className="font-semibold text-primary"
        >
          Login
        </Link>
      </p>

    </form>
  );
};

export default RegisterForm;