import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const searchTerm = useSelector((state) => state.search);
  // filter the todos based on the filter and search state
  const filteredAndSearchedTodos = todos.filter((todo) => {
    if (filter === "Completed" && !todo.isCompleted) return false;
    if (filter === "Incomplete" && todo.isCompleted) return false;
    if (searchTerm && !todo.text.includes(searchTerm)) return false;
    return true;
  });
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here....😀</li>
      {filteredAndSearchedTodos.map((todo, index) => (
        <TodoItem key={todo.id} index={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
