import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Question";
import Summary from "./components/Summary";

function App() {
  const isCorrect = useSelector((state) => state.answerSlice.answerStatus);
  return (
    <>
      <Header />
      <div className="AppContainer">
        <Login />
        {isCorrect && <Summary />}
      </div>
    </>
  );
}

export default App;
