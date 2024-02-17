import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice.js";
import FilterButton from "./FilterButton.jsx";
import TodoList from "./TodoList.jsx";
const Todos = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (!newTodoText.trim()) return;
    dispatch(addTodo(newTodoText));
    setNewTodoText("");
  };
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-8 bg-gray-50 rounded">
      <h2 className="mb-6 mt-3 text-center font-bold text-2xl">TODO APP</h2>
      {/* input text and button */}
      <div className="flex items-center mb-4">
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

      {/* filter and search */}
      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-600"
            type="text"
            name="addTodoInput"
            id="addTodoInput"
            value={searchTerm}
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-600 p-3 rounded ml-3 text-white hover:bg-blue-400"
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default Todos;
