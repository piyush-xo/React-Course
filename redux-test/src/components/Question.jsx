import React, { useEffect } from "react";
import Card from "./ui/Card";
import "./Question.css";
import { useDispatch, useSelector } from "react-redux";
import { answerActions } from "./store";

function Login() {
  const isCorrect = useSelector((state) => state.answerSlice.answerStatus);
  const dispatch = useDispatch();

  const [answer, setAnswer] = React.useState("");
  const [hint, setHint] = React.useState(false);

  useEffect(() => {
    if (hint) {
      const timer = setTimeout(() => {
        setHint(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [hint]);

  const handleSubmit = () => {
    console.log("Submit");
    if (answer.toLowerCase() === "raju mahajan") {
      dispatch(answerActions.correctAnswer());
      return;
    }
    setAnswer("");
    setHint(true);
  };

  const handleHint = () => {
    setAnswer("");
    setHint(true);
  };

  return (
    <Card>
      {isCorrect ? (
        <h1 style={{ marginTop: "10px" }}>Brown Rang</h1>
      ) : (
        <>
          <h1>???</h1>
          <label>Ritik Gupta daddy name?</label>
          <input
            className="input"
            type="text"
            placeholder={hint ? "He is a Politics 😎" : "Answer me peasant 🤬"}
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
