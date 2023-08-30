import "./App.css";
import Header from "./components/Header";
import Login from "./components/Question";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Header />
      <div className="AppContainer">
        <Login />
        {false && <Summary />}
      </div>
    </>
  );
}

export default App;
