import React from "react";
import styles from "./styles.module.scss";

const Benefits = () => {
  return (
   <div className={styles.benefits}>
    <div className={styles.benefits__item}>
        <h3 className={styles.benefits__item__title}>Идеально для маркетплейсов</h3>
        <p className={styles.benefits__item__description}>Подробные описания, характеристики и фотографии товаров</p>
        <img className={styles.benefits__item__img1} src="/images/sber.png"  alt="#" />
        <img className={styles.benefits__item__img2} src="/images/wb.png" alt="#" />
        <img className={styles.benefits__item__img3} src="/images/ya.png" alt="#" />
        <img className={styles.benefits__item__img4} src="/images/ozon.png" alt="#" />
    </div>
    <div className={styles.benefits__item}>
        <h3 className={styles.benefits__item__title}>Работаем официально</h3>
        <p className={styles.benefits__item__description}>Белая бухгалтерия: договора, закрывающие документы, ЭДО, оплата по счету или на сайте</p>
        <img className={styles.benefits__item__img2item} src="/images/2.png"  alt="#" />
    </div>
    <div className={styles.benefits__item}>
        <h3 className={styles.benefits__item__title}>Цены от производителей без наценок</h3>
        <p className={styles.benefits__item__description}>Недорогие, но качественные товары  + Прогрессирующая система скидок и бонусов</p>
        <img className={styles.benefits__item__img3item} src="/images/3.png"  alt="#" />
    </div>
    <div className={styles.benefits__item}>
        <h3 className={styles.benefits__item__title}>Быстрая обработка заказов. <br/>Доставка в РФ и СНГ</h3>
        <p className={styles.benefits__item__description}>Отгружаем заказ до любой транспортной компании. Отправка в течение 1-3 дней с момента получения оплаты</p>
        <img className={styles.benefits__item__img4item} src="/images/4.png"  alt="#" />
    </div>
    <div className={styles.benefits__item}>
        <h3 className={styles.benefits__item__title}>Собственный склад и офис</h3>
        <p className={styles.benefits__item__description}>Будем рады угостить ваc чашечкой кофе в нашем офисе с Екатеринбурге</p>
        <img className={styles.benefits__item__img5item} src="/images/5.png"  alt="#" />
    </div>
   </div>
  );
};

export default Benefits;
