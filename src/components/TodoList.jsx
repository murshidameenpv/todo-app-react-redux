import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here....😀</li>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} index={index} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
