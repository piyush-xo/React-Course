import React from "react";
import Card from "../ui/Card";  
import Button from "../ui/Button"
import styles from './AddUser.module.css'

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Userame</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Enter Age</label>
        <input id="age" type="number"></input>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUser;
