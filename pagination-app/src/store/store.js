import { configureStore, createSlice, current } from "@reduxjs/toolkit";
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
    toggleProgress(state, action) {
      state.todolist = state.todolist.map((todo) => {
        if(todo.id===action.payload){
            return {...todo, completed: !todo.completed};
        }
        return todo;
      })
    }
  },
});

const store = configureStore({ reducer: todosSlice.reducer});

export const todosActions = todosSlice.actions;
export default store;
