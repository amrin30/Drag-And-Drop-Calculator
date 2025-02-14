


import useCalculatorStore from "../store/calculatorStore";

const ClearButton = () => {
  const { clearItems } = useCalculatorStore();

  return (
    <button
      className="flex-1 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all duration-200 ease-in-out text-lg font-semibold"
      onClick={clearItems} 
    >
      Clear
    </button>
  );
};

export default ClearButton;
