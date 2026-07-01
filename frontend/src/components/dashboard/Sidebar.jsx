import {
  LayoutDashboard,
  CheckSquare,
  User,
  Shield,
  LogOut,
} from "lucide-react";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../common/Logo";
import NavItem from "./NavItem";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-border bg-surface p-6">

      <Logo />

      <div className="mt-10 flex flex-col gap-2">

        <NavItem
          to="/dashboard"
          icon={LayoutDashboard}
          label="Dashboard"
        />

        <NavItem
          to="/tasks"
          icon={CheckSquare}
          label="Tasks"
        />

        <NavItem
          to="/profile"
          icon={User}
          label="Profile"
        />

        {user?.role === "ADMIN" && (
          <NavItem
            to="/admin"
            icon={Shield}
            label="Admin"
          />
        )}

      </div>

      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-50"
      >
        <LogOut size={20} />
        Logout
      </button>

    </aside>
  );
};

export default Sidebar;