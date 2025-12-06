import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-4 rounded-full bg-gray-200 dark:bg-gray-700
                 hover:bg-gray-300 dark:hover:bg-gray-600
                 transition-colors duration-300 shadow-lg z-50"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun className="w-6 h-6 text-yellow-400" />
      ) : (
        <FaMoon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
}