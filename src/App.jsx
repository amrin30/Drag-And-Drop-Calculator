

import { useTheme } from "./context/ThemeContext";
import CalculatorBuilder from "./pages/CalculatorBuilder";
import DarkModeToggle from "./components/DarkModeToggle";
import './index.css'
const App = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? "dark" : ""}`}>
      <DarkModeToggle />
      <h1 className="text-center text-3xl font-bold mt-2 text-gray-900 dark:text-white shadow-lg p-6 min-h-[100px]">
  Drag & Drop Calculator
</h1>

      <CalculatorBuilder />
    </div>
  );
};

export default App;
