import React from "react";
import styles from "./Fireworks.module.css";
function Fireworks() {
  return (
    <div>
      <div className={styles.firework}></div>
      <div className={styles.firework}></div>
      <div className={styles.firework}></div>
      <div className={styles.firework}></div>
      <div className={styles.firework}></div>
    </div>
  );
}

export default Fireworks;
