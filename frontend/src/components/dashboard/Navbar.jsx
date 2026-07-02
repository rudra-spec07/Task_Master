import {
  Menu,
  Search,
} from "lucide-react";

import ThemeToggle from "../auth/ThemeToggle";

const Navbar = ({
  setSidebarOpen,
}) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-surface px-4 py-4 sm:px-6 lg:px-8">

      <div className="flex items-center gap-4">

        <button
          onClick={() =>
            setSidebarOpen(true)
          }
          className="lg:hidden"
        >

          <Menu />

        </button>

        <div className="relative hidden md:block">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search..."
            className="w-72 rounded-xl border border-border py-2 pl-10 pr-4 outline-none focus:border-primary"
          />

        </div>

      </div>

      <ThemeToggle />

    </header>
  );
};

export default Navbar;