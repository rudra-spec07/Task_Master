import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Sign in to continue to ARDesk."
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;