import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.plum}>🍑</div>
      <div style={{fontSize: "12px", margin: "10px"}}>Spank me</div>
    </div>
  );
}

export default Header;
