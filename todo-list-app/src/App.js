import { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn JavaScript", completed: false },
    { id: 2, title: "Learn React", completed: true },
    { id: 3, title: "I am form Bihar", completed: false },
  ]);
  const addTodo = (newTodo) => {
    setTodos((previousState) => [...previousState, newTodo]);
  };
  const toggleCompleted = (id) => {
    setTodos((previousState) =>
      previousState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };
  const removeTodo = (id) => {
    setTodos((previousState) => previousState.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div className="container">
        <ToastContainer />
        <h1 className="main-title">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos
          todos={todos}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />
      </div>
    </>
  );
}

export default App;
