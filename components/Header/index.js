import React from "react";
import styles from "./styles.module.scss";
import Telegram from "../../public/icons/telegram.svg";

const Header = () => {

  return (
    <div className={styles.header}>
        <ul className={styles.header__nav}>
            <li>О Нас</li>
            <li>Оплата и доставка</li>
            <li>Товары из Китая</li>
            <li>Статьи</li>
        </ul>
        <ul className={styles.header__links}>
        <li>
            <a href="#">
                <img src="/icons/telegram.svg" alt="telegram" />
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/icons/whatsapp.svg" alt="whatsapp" />
            </a>
        </li>

        </ul>
    </div>
  );
};

export default Header;