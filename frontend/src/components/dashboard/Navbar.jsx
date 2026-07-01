import { Search } from "lucide-react";

import ThemeToggle from "../auth/ThemeToggle";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-border bg-surface px-8 py-5">

      <div className="relative w-80">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          placeholder="Search tasks..."
          className="w-full rounded-xl border border-border py-2 pl-10 pr-4 outline-none focus:border-primary"
        />

      </div>

      <ThemeToggle />

    </header>
  );
};

export default Navbar;