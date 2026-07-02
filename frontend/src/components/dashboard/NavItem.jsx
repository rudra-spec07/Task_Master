import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

const NavItem = ({
  to,
  icon: Icon,
  label,
  onClick,
}) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
          isActive
            ? "bg-primary text-white"
            : "text-text-secondary hover:bg-gray-100 dark:hover:bg-gray-800"
        )
      }
    >
      <Icon size={20} />

      <span className="font-medium">
        {label}
      </span>

    </NavLink>
  );
};

export default NavItem;