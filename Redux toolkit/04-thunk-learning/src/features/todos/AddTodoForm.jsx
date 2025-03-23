import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

function AddTodoForm() {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) return;
    setIsLoading(true);
    dispatch(addTodo(title))
      .unwrap()
      .then(() => {
        setTitle("");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "adding..." : "add"}
      </button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </form>
  );
}

export default AddTodoForm;
