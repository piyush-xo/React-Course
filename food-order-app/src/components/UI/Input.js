import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.inputProps.id}>{props.label}</label>
      <input {...props.inputProps}></input>
    </div>
  );
};

export default Input;
