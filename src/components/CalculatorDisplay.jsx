
import { useEffect } from "react";
import { evaluate } from "mathjs";
import useCalculatorStore from "../store/calculatorStore";

const CalculatorDisplay = () => {
  const { items, result, setResult, setItems } = useCalculatorStore();


  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("calculatorItems")) || [];
    const savedResult = localStorage.getItem("calculatorResult") || "";
    
    setItems(savedItems);
    setResult(savedResult);
  }, [setItems, setResult]);

  useEffect(() => {
    if (items.length > 0) {
      try {
        const expression = items.join("");
        const calculatedResult = evaluate(expression)?.toString() || "0";
        setResult(calculatedResult);

        
        localStorage.setItem("calculatorResult", calculatedResult);
      } catch {
        setResult("Error");
      }
    } else {
      setResult("");
    }
  }, [items, setResult]);

  return (
    <div className="p-4 sm:p-6 bg-gray-100 dark:bg-gray-700 text-right">
      <div className="text-xl sm:text-2xl font-semibold mb-2 h-8 overflow-x-auto whitespace-nowrap">
        {items.length > 0 ? items.join(" ") : "0"}
      </div>
      <div className="text-3xl sm:text-4xl font-bold h-12 overflow-x-auto whitespace-nowrap">
        {result || "0"}
      </div>
    </div>
  );
};

export default CalculatorDisplay;
