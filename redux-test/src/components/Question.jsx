import React, { useEffect } from "react";
import Card from "./ui/Card";
import "./Question.css";

function Login() {
  const [answer, setAnswer] = React.useState("");
  const [hint, setHint] = React.useState(false);

  useEffect(() => {
    if (hint) {
      const timer = setTimeout(() => {
        setHint(false);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [hint]);
  
  const handleSubmit = () => {
    console.log("Submit");
  };

  const handleHint = () => {
    setHint((prev) => !prev);
  };

  return (
    <Card>
      {false ? (
        <h1 style={{ marginTop: "10px" }}>Brown Rang</h1>
      ) : (
        <>
          <h1>???</h1>
          <label>Ritik Gupta daddy name?</label>
          <input
            className="input"
            type="text"
            placeholder={hint ? "He is Politician 😎" : "Answer me peasant 🤬"}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></input>
          <span>
            <button onClick={handleHint}>Hint</button>
            <button onClick={handleSubmit}>Submit</button>
          </span>
        </>
      )}
    </Card>
  );
}

export default Login;
