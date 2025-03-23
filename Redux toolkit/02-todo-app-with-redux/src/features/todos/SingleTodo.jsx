import { useDispatch } from "react-redux";
import { removeTodo, toggleCompleted } from "./todosSlice";
import { RiDeleteBinLine } from "@remixicon/react";

function SingleTodo({ id, title, completed }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`single__todo ${
        completed ? "deActive__todo" : "active__todo"
      }`}
    >
      <div className="title__todo">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleCompleted({ id: id }))}
        />
        <p className={`${completed ? "title__deActive" : null}`}>{title}</p>
      </div>
      <button
        onClick={() => dispatch(removeTodo({ id: id }))}
        className="delete__todo"
      >
        <RiDeleteBinLine />
      </button>
    </div>
  );
}

export default SingleTodo;
