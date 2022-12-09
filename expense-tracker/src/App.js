import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';

function App() {
  
  return (
    <div className="App">
      <h2>Expense Tracker App</h2>
      <Expenses></Expenses>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
