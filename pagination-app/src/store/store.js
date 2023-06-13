import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let todos = [];

todos = await axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.data);

const initialTodos = { todolist: todos };
console.log("initialTodos", initialTodos);
const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    setCompleted(state, action) {
      console.log("setCompleted");
    },
    setUncompleted(state, action) {
      console.log("setUncompleted");
    },
  },
});

const store = configureStore({ reducer: todosSlice.reducer});
export default store;
