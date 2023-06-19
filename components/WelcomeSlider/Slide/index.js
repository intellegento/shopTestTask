import React from "react";
import styles from "./styles.module.scss";
import Button from "../../Button";

const Slide = ({data}) => {
  return (
   <div className={styles.slide}>
     <div className={styles.slide__background}>
        <span className={styles.slide__background__topLeft}></span>
        <span className={styles.slide__background__topRight}></span>
        <span className={styles.slide__background__bigF}></span>
        <span className={styles.slide__background__smallF}></span>
     </div>
     <div className={styles.slide__info}>
        <h3 className={styles.slide__info__title}>Сезон подготовки к новогодним 
продажам открыт!</h3>
        <ul className={styles.slide__info__list}>
            <li>Искуственные елки</li>
            <li>Гирлянды</li>
            <li>Игрушки и украшения</li>
            <li>Пиротехника</li>
            <li>Новогодние подарки</li>
        </ul>
        <Button />
     </div>
   </div>
  );
};

export default Slide;
