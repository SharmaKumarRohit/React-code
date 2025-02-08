import { useReducer, createContext, useContext } from "react";

const TodosContext = createContext();

function reducer(todos, action) {
  if (action.type === "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }
  if (action.type === "TOGGLE_TODO") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload.newTodo];
  }
  return todos;
}

const initialTodos = [
  { id: "1", title: "Play Badminton", completed: true },
  { id: "2", title: "Play Hockey", completed: false },
  { id: "3", title: "Play Kabaddi", completed: false },
];

function TodosProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id: id } });
  };
  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id: id } });
  };
  const addNewTodo = (newTodo) => {
    dispatch({ type: "ADD_TODO", payload: { newTodo: newTodo } });
  };
  return (
    <TodosContext.Provider
      value={{
        todos: todos,
        handleDelete: handleDelete,
        handleToggle: handleToggle,
        addNewTodo: addNewTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}

export default TodosProvider;
