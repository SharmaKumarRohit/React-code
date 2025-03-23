import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  return (
    <div className="container">
      <h1>Good Morning! ☀️</h1>
      <h3>Let's see what we've got to do today.</h3>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoApp;
