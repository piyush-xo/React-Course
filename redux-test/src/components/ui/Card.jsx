import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card2}>
        {props.children}
      </div>
    </div>
  );
}

export default Card;
