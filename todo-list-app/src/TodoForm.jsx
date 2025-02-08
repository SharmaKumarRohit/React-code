import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("Please fill the input", {
        autoClose: 2000,
      });
      return;
    }
    const addNewTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addTodo(addNewTodo);
    setTitle("");
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="todoForm">
        <input
          className="todoForm__input"
          type="text"
          placeholder="Write here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="todoForm__btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default TodoForm;
