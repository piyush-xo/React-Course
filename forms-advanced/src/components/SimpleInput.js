import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("Name is Valid");
  //   }
  // }, [enteredNameIsValid]);

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    // if (event.target.value.trim().length !== 0) {
    //   setEnteredNameIsValid(true);
    // }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    // if (enteredName.trim().length === 0) {
    //   setEnteredNameIsValid(false);
    // }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    // setEnteredNameIsValid(true);
    console.log(enteredName);
    console.log(enteredEmail);
    // console.log(nameInputRef.current.value);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim() !== "" && enteredEmail.indexOf('@') !== -1 ;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  }

  const emailInputClasses = !emailInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  let formIsValid = enteredNameIsValid && enteredEmailIsValid;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          // ref={nameInputRef}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          // ref={nameInputRef}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
