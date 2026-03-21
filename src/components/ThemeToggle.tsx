import { useTheme } from "../context/ThemeContext";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative group p-1.5 rounded-full border border-purple-500/40 hover:border-purple-500/70 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className="relative w-4 h-4">
        <FontAwesomeIcon
          icon={faMoon}
          className="absolute inset-0 w-4 h-4 text-purple-400 dark:hidden transition-all duration-300"
        />
        <FontAwesomeIcon
          icon={faSun}
          className="absolute inset-0 w-4 h-4 text-yellow-400 hidden dark:block transition-all duration-300"
        />
      </div>
    </button>
  );
}
