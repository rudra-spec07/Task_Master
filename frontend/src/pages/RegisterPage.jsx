import AuthLayout from "../layouts/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start your productivity journey."
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;