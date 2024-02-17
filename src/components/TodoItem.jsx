/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { FaCheck, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoItem = ({ index, todo }) => {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-400">{index + 1}</span>
        <span>{todo.text}</span>
      </div>
      <div className="space-x-3 ml-8">
        <button className="text-sm mr-2 bg-blue-700 rounded sm:px-2 py-1 px-1 text-white">
          <FaToggleOff />
          <FaToggleOn />
        </button>
        <button className="text-sm mr-2 bg-green-700 rounded sm:px-2 py-1 px-1 text-white">
          <FaCheck />
        </button>
        <button className="text-sm mr-2 bg-red-700 rounded sm:px-2 py-1 px-1 text-white">
          <RiDeleteBin6Line />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
