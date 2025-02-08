import { useTodos } from "./contexts/TodosProvider";

function Todo({ id, title, completed }) {
  const { handleDelete, handleToggle } = useTodos();
  return (
    <>
      <div
        style={{
          backgroundColor: "#cecece",
          padding: "1rem",
          margin: "1rem",
          borderRadius: "10px",
        }}
      >
        <h4>id: {id}</h4>
        <h4
          style={{
            textDecoration: completed ? "line-through" : "solid",
          }}
        >
          title: {title}
        </h4>
        <h4>completed: {completed ? "true" : "false"}</h4>
        <button onClick={() => handleDelete(id)}>Delete Todo</button>
        <button onClick={() => handleToggle(id)}>Toggle Todo</button>
      </div>
    </>
  );
}

export default Todo;
