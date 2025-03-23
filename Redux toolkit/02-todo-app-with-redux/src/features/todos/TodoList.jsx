import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="todo__list">
      {todos.map((todo) => (
        <SingleTodo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
