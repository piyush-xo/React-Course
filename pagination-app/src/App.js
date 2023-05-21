import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(10);

  const noOfPages = Math.ceil(todos.length / todosPerPage); //10
  const pages = [...Array(noOfPages + 1).keys()].slice(1);
  const indexOfLastTodo = todosPerPage * currentPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  console.log(todosPerPage, indexOfFirstTodo, indexOfLastTodo);
  const visibleTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);

  return (
    <div className="App">
      <div className="App-header">Pagination</div>
      <select
        style={{ margin: "1rem" }}
        onChange={(e) => {
          setCurrentPage(1);
          setTodosPerPage(e.target.value);
        }}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <div>
        {visibleTodos.map((todo) => (
          <p
            key={todo.id}
            className={todo.completed === true ? "completed" : "notCompleted"}
          >
            {todo.id}. {todo.title}
          </p>
        ))}
      </div>
      <span>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (currentPage !== 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          Prev
        </p>
        {pages.map((page) => (
          <>
            <span
              key={page}
              className={page === currentPage ? "active" : ""}
              style={{ cursor: "pointer" }}
              onClick={() => setCurrentPage(page)}
            >{` ${page} `}</span>
            <span>|</span>
          </>
        ))}
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (currentPage !== noOfPages) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Next
        </p>
      </span>
    </div>
  );
}

export default App;
