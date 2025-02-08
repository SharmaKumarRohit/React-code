import { useState } from "react";
import { useTodos } from "./contexts/TodosProvider";

function UserForm() {
  const { addNewTodo } = useTodos();
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("type something ....");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    addNewTodo(newTodo);
    setTitle("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="sumbit">Add Todo</button>
      </form>
    </>
  );
}

export default UserForm;
