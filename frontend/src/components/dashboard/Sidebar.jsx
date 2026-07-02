import {
  LayoutDashboard,
  CheckSquare,
  User,
  Shield,
  LogOut,
  X,
} from "lucide-react";

import {
  useContext,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import Logo from "../common/Logo";
import NavItem from "./NavItem";

import {
  AuthContext,
} from "../../context/AuthContext";

const Sidebar = ({
  open,
  setOpen,
}) => {
  const navigate =
    useNavigate();

  const {
    user,
    logout,
  } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>

      {/* Overlay */}

      {open && (
        <div
          onClick={() =>
            setOpen(false)
          }
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`
fixed left-0 top-0 z-50
h-screen w-72
border-r border-border
bg-surface p-6
transition-transform duration-300

${open
? "translate-x-0"
: "-translate-x-full"}

lg:translate-x-0
`}
      >

        <div className="mb-8 flex items-center justify-between">

          <Logo />

          <button
            onClick={() =>
              setOpen(false)
            }
            className="lg:hidden"
          >
            <X />
          </button>

        </div>

        <div className="space-y-2">

          <NavItem
  to="/dashboard"
  icon={LayoutDashboard}
  label="Dashboard"
  onClick={() => setOpen(false)}
/>

          <NavItem
            to="/tasks"
            icon={CheckSquare}
            label="Tasks"
            onClick={() => setOpen(false)}
/>
          

          <NavItem
            to="/profile"
            icon={User}
            label="Profile"
            onClick={() => setOpen(false)}
/>
          

          {user?.role ===
            "ADMIN" && (
            <NavItem
              to="/admin"
              icon={Shield}
              label="Admin"
            />
          )}

        </div>

        <button
          onClick={handleLogout}
          className="mt-auto flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 hover:bg-red-50"
        >

          <LogOut size={20} />

          Logout

        </button>

      </aside>

    </>
  );
};

export default Sidebar;