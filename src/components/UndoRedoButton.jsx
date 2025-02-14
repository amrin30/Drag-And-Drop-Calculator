
import { Undo2, Redo2 } from "lucide-react";
import useCalculatorStore from "../store/calculatorStore";

const UndoRedoButtons = () => {
  const { undo, redo, currentIndex, history } = useCalculatorStore();

  const canUndo = currentIndex > 0;
  const canRedo = currentIndex < history.length - 1;

  return (
    <div className="flex gap-2 sm:gap-4 mt-4">
      <button
        onClick={undo}
        disabled={!canUndo}
        className={`flex-1 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 ease-in-out flex items-center justify-center ${
          !canUndo ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <Undo2 className="w-4 h-4" />
        Undo
      </button>
      <button
        onClick={redo}
        disabled={!canRedo}
        className={`flex-1 py-3 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition-all duration-200 ease-in-out flex items-center justify-center ${
          !canRedo ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <Redo2 className="w-4 h-4" />
        Redo
      </button>
    </div>
  );
};

export default UndoRedoButtons;
