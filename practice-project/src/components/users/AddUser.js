import React, { useState, useRef } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../ui/ErrorModal";
import Wrapper from "../helpers/Wrapper";

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const usernameInputeRef = useRef();
  const ageInputeRef = useRef();
  const [error, setError] = useState();

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername=usernameInputeRef.current.value;
    const enteredAge=ageInputeRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    // console.log('adduser', enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    // setEnteredAge("");
    // setEnteredUsername("");
    usernameInputeRef.current.value='';
    ageInputeRef.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Userame</label>
          <input
            id="username"
            type="text"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            ref={usernameInputeRef}
          ></input>
          <label htmlFor="age">Enter Age</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            ref={ageInputeRef}
          ></input>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
