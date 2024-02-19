/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { FaCheck,  } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteTodo,markAsCompleted,markAsIncomplete } from "../redux/todoSlice.js";
import { useDispatch } from "react-redux";

const TodoItem = ({ index, todo }) => {
  const dispatch = useDispatch();
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-400">{index + 1}</span>
        <span>{todo.text}</span>
      </div>
      <div className="space-x-3 ml-8">
        {todo.isCompleted ? (
          <button
            className="text-sm mr-2 bg-yellow-600 rounded sm:px-2 py-1 px-1 text-white"
            onClick={() => dispatch(markAsIncomplete(todo.id))}
          >
            <ImCross />
          </button>
        ) : (
          <button
            className="text-sm mr-2 bg-green-700 rounded sm:px-2 py-1 px-1 text-white"
            onClick={() => dispatch(markAsCompleted(todo.id))}
          >
            <FaCheck />
          </button>
        )}
        <button
          className="text-sm mr-2 bg-red-700 rounded sm:px-2 py-1 px-1 text-white"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
