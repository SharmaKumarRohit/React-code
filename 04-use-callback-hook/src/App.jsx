import { useCallback, useState } from "react";
import Todos from "./Todos";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  const addTodo = useCallback(
    (num) => {
      setTodos((prevTodos) => [...prevTodos, `New Todo ${num}`]);
    },
    [todos]
  );
  return (
    <>
      <h1>useCallback Hook</h1>
      <hr />
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increase Count</button>
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </>
  );
}

export default App;
