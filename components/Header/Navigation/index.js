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
      <ul className={styles.navigation__userSection}>
        <li>
          <a className={styles.navigation__userSection__link} href="#">
            <img src="../icons/login-icon.svg" alt="Войти" />
            <span>Войти</span>
          </a>
        </li>
        <li>
          <a className={styles.navigation__userSection__link} href="#">
            <img src="../icons/heart.svg" alt="Избранное" />
            <span>Избранное</span>
          </a>
        </li>
        <li>
          <a className={styles.navigation__userSection__link} href="#">
            <img src="../icons/basket-icon.svg" alt="Корзина" />
            <span>Корзина</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
