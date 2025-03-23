import { memo } from "react";

function Todos({ todos, addTodo }) {
  console.log("child rendered");
  return (
    <div>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
      <button onClick={() => addTodo(10)}>Add Todo</button>
    </div>
  );
}

export default memo(Todos);
