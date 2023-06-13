import { useEffect, useState } from "react";
import axios from "axios";
import PageNavigation from "./pageNavigation";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(15);

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
      <div className="App-header">TODO - LIST</div>
      <div className="Todo-list">
        <select
          style={{ margin: "1rem" }}
          onChange={(e) => {
            setCurrentPage(1);
            setTodosPerPage(e.target.value);
          }}
        >
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
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
        <PageNavigation pages={pages} currentPage={currentPage} noOfPages={noOfPages} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  );
};
export default Todos;
