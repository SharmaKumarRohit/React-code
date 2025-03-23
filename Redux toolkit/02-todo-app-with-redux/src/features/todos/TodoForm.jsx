import { useState } from "react";
import { addTodo } from "./todosSlice";
// import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("please fill the input field");
      return;
    }
    // const addNewTodo = {
    //   id: nanoid(),
    //   title: title,
    //   completed: false,
    // };
    dispatch(addTodo(title));
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        maxLength={45}
        placeholder="Write a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn-form">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
