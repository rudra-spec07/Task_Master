import { useContext } from "react";
import { Sun, Sunset } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-border bg-surface p-3 shadow-card transition hover:scale-105"
    >
      {theme === "light" ? (
        <Sunset className="h-5 w-5 text-primary" />
      ) : (
        <Sun className="h-5 w-5 text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;