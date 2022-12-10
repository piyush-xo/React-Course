import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  
  return (
    <div className="App">
      <NewExpense/>
      <Expenses></Expenses>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
