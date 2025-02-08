function Todo({ completed, id, title, dispatch }) {
  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: { id: id } });
  };
  const handleToggleCompleted = () => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: { id: id } });
  };
  return (
    <>
      <div
        style={{
          padding: "1rem",
          margin: "1rem",
          backgroundColor: "#cecece",
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
        <button onClick={handleDelete}>Delete Todo</button>
        <button onClick={handleToggleCompleted}>Toggle Completed</button>
      </div>
    </>
  );
}

export default Todo;
