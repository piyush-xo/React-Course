import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log("Button Rendered")
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
//Memoization won't help here because it is getting a function(or object) in props, 
//which gets created every time the parent function got re-rendered 
