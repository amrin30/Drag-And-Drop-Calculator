
import { useTheme } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      className="fixed top-16 left-4 sm:top-4 sm:right-4 
                 w-10 h-10 sm:w-32 sm:h-12 flex items-center justify-center 
                 bg-gray-400 dark:bg-blue-600 text-gray-900 dark:text-white 
                 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 
                 transition-all duration-300 ease-in-out border-2 border-gray-900 dark:border-white z-50"
      onClick={() => setDarkMode(!darkMode)}
    >
      <span className="hidden sm:inline">{darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}</span>
      <span className="sm:hidden">{darkMode ? "🌞" : "🌙"}</span>
    </button>
  );
};

export default DarkModeToggle;
