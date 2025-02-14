

import { useDrag } from "react-dnd";

const DraggableButton = ({ value }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BUTTON",
    item: { value },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      className={`p-4 rounded-lg text-lg font-bold bg-gray-300 
        dark:bg-gray-700 dark:text-white text-black shadow-md 
        hover:shadow-lg transform hover:scale-105 transition duration-300 
        ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      {value}
    </button>
  );
};

export default DraggableButton;
