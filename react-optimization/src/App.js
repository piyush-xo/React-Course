import React, { useCallback, useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

function App() {
  const [showParagraph, setshowParagraph] = useState(false);
  const [toggle, setToggle] = useState(false);
  console.log("App rendered");

  //callback saves the function somewhere in react's internal storage
  //and we will always reuse taht same function object whenever the component re-executes
  const handleButton = useCallback(() => {
    if (toggle) {
      setshowParagraph((preShowParagraph) => !preShowParagraph);
    }
  }, [toggle]);
  const handleToggle = () => {
    setToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={handleToggle}>Allow Toggle</Button>
      <Button onClick={handleButton}>Show Paragraph</Button>
      {/* {showParagraph && <p>This is new!</p>} */}
      <Demo show={showParagraph} />
    </div>
  );
}

export default App;
