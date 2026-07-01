import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";

import Button from "../common/Button";
import Input from "../common/Input";

const LoginForm = () => {
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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

      const { data } = await api.post(
        "/auth/login",
        form
      );

      localStorage.setItem(
        "token",
        data.data.token
      );

      setUser(data.data.user);

      toast.success(data.message);

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Login failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <Button
        type="submit"
        disabled={loading}
      >
        {loading ? "Signing In..." : "Sign In"}
      </Button>

      <p className="text-center text-sm text-text-secondary">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-primary hover:underline"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;