

import useCalculatorStore from "../store/calculatorStore"

const BackspaceButton = () => {
  const { backspace } = useCalculatorStore()

  return (
    <button
      className="flex-1 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-200 ease-in-out flex items-center justify-center"
      onClick={backspace}
    >
      ⌫
    </button>
  )
}

export default BackspaceButton

