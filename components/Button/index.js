import React from "react";
import styles from "./styles.module.scss";

const Button = ({data}) => {
  return (
   <button className={styles.button}>
        <img className={styles.button__icon} src="/icons/menuBtn.svg" alt="catalog" />
        <span className={styles.button__text}>Каталог</span>
   </button>
  );
};

export default Button;
