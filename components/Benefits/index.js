import React from "react";
import styles from "./styles.module.scss";

const Benefits = () => {
  return (
   <div className={styles.benefits}>
    <div className={styles.benefits__item}>
        <h3 className={styles.benefits__item__title}>Идеально для маркетплейсов</h3>
        <p className={styles.benefits__item__description}>Подробные описания, характеристики и фотографии товаров</p>
        <img src="#" alt="#" />
    </div>
   </div>
  );
};

export default Benefits;
