import { useSelector, } from "react-redux";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
