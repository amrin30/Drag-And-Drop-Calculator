
import DraggableButton from "../components/DraggableButton";
import DropZone from "../components/DropZone";
import CalculatorDisplay from "../components/CalculatorDisplay";
import DarkModeToggle from "../components/DarkModeToggle";
import ClearButton from "../components/ClearButton";
import BackspaceButton from "../components/BackspaceButton";
import UndoRedoButtons from "../components/UndoRedoButton";
import useCalculatorStore from "../store/calculatorStore";

const CalculatorBuilder = () => {
  const { addItem } = useCalculatorStore();

  const handleDrop = (droppedValue) => {
    addItem(droppedValue);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center transition-all duration-300">
      <DarkModeToggle />
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all p-6">
        <CalculatorDisplay />
        <DropZone onDrop={handleDrop} />
        <div className="grid grid-cols-4 gap-3 mt-4">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
            <DraggableButton key={btn} value={btn} />
          ))}
        </div>
        <div className="flex gap-2 sm:gap-4 mt-4">
          <BackspaceButton />
          <ClearButton />
        </div>

        <UndoRedoButtons />
      </div>
    </div>
  );
};

export default CalculatorBuilder;
