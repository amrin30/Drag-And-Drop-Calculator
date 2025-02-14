

import { useDrop } from "react-dnd";

const DropArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "BUTTON",
    drop: (item) => onDrop(item.value),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`border-2 border-dashed p-4 text-center 
        ${isOver ? "bg-gray-200" : "bg-white"}`}
    >
      Drop buttons here...
    </div>
  );
};

export default DropArea;
