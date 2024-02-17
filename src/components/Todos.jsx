import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice.js";
const Todos = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (!newTodoText.trim()) return;
    dispatch(addTodo(newTodoText));
    setNewTodoText("");
  };
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-8 bg-gray-200 rounded">
      <h2 className="mb-6 mt-3 text-center font-bold text-2xl">TODO APP</h2>
      {/* input text and button */}
      <div className="flex items-center mb-6">
        <input
          className="flex-grow p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-600"
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-600 p-3 rounded ml-3 text-white hover:bg-blue-400"
        >
          <BsPlus />
        </button>
      </div>
    </div>
  );
};

export default Todos;
