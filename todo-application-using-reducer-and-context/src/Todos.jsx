import { useTodos } from "./contexts/TodosProvider";
import Todo from "./Todo";

function Todos() {
  const { todos } = useTodos();
  return (
    <>
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </div>
    </>
  );
}

export default Todos;
