import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "12df", title: "Play Cricket", completed: true },
  { id: "13dh", title: "Play Chess", completed: false },
];
const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    // addTodo: (state, actions) => {
    //   state.push(actions.payload);
    // },
    addTodo: {
      reducer: (state, actions) => {
        // console.log("reducer run", actions);
        state.push(actions.payload);
      },
      // Prepare Method ak callback function hai. Prepare Method phale run hoga reducer se.
      prepare: (title) => {
        // console.log("prepare run");
        return {
          payload: {
            id: nanoid(),
            title: title,
            completed: false,
          },
        };
      },
    },
    removeTodo: (state, actions) => {
      return state.filter((todo) => todo.id !== actions.payload.id);
    },
    toggleCompleted: (state, actions) => {
      state.map((todo) => {
        if (todo.id === actions.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted } = todosSlice.actions;

export default todosSlice.reducer;
