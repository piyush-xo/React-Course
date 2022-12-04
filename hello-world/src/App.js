import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import GreetClass from './components/GreetClass'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css'
import style from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={style.success}>Success</h1>
      <Inline></Inline> */}
      {/* <Stylesheets primary={true}></Stylesheets> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <ClassClick></ClassClick> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Counter></Counter> */}
      {/* <Message></Message> */}
      {/* <Greet name='Piyush' surname='Mehta'> 
        <p>This is children of Piyush</p>
      </Greet>
      <Greet name='Nikhil' surname='Pai'/>
      <Greet name='Chandra' surname='Janti'>
        <button>T9</button>
      </Greet>
      </div>
      <GreetClass name='Piyush' surname='Mehta'/> */}
    </div>
  );
}

export default App;
