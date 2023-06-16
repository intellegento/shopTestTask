import React from "react";
import styles from "./styles.module.scss";
import Button from "../../Button";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Button />
      <div className={styles.navigation__searchSection}>
        <input
          className={styles.navigation__searchSection__input}
          type="text"
          class="input"
          placeholder="Напишите, что вы ищете..."
        ></input>
        <button className={styles.navigation__searchSection__button}>
          Найти
        </button>
      </div>
      <div className={styles.navigation__userSection}></div>
    </div>
  );
};

export default Navigation;
