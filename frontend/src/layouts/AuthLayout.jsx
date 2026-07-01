import Logo from "../components/common/Logo";
import ThemeToggle from "../components/auth/ThemeToggle";

const AuthLayout = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="min-h-screen bg-background">

      <div className="absolute right-8 top-8">
        <ThemeToggle />
      </div>

      <div className="grid min-h-screen lg:grid-cols-2">

        <div className="hidden flex-col justify-center bg-primary px-16 text-white lg:flex">

          <Logo />

          <h2 className="mt-10 text-5xl font-bold leading-tight">
            Organize.
            <br />
            Track.
            <br />
            Achieve.
          </h2>

          <p className="mt-6 max-w-md text-lg opacity-90">
            Manage your work beautifully with
            ARDesk.
          </p>

        </div>

        <div className="flex items-center justify-center px-6">

          <div className="w-full max-w-md">

            <h1 className="text-3xl font-bold">
              {title}
            </h1>

            <p className="mt-2 text-text-secondary">
              {subtitle}
            </p>

            <div className="mt-8">
              {children}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;