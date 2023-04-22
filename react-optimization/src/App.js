import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import Demo from './components/Demo/Demo';

function App() {
  const [showParagraph, setshowParagraph] = useState(false);
  console.log("App rendered");
  const handleButton = () => {
    setshowParagraph((preShowParagraph) => !preShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={handleButton}>Show Paragraph</Button>
      {/* {showParagraph && <p>This is new!</p>} */}
      <Demo show={showParagraph} />
    </div>
  );
}

export default App;
