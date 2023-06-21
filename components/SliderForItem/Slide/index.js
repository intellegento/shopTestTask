import React from "react";
import styles from "./styles.module.scss";
import Button from "../../Button";

const SlideItem = () => {
  return (
   <div className={styles.slideItem}>
     <div className={styles.slideItem__img}>
        <img src="/images/image 11.png" alt="" />
        {/* <img src="/icons/favorite_border.svg" alt="" /> */}
     </div>
     <div className={styles.slideItem__descr}>
        <span>Ель рожденственная с белыми кончиками</span>
     </div>
     <div className={styles.slideItem__spec}>
            <span>Размер</span>
            <ul className={styles.slideItem__spec__size}>
                <li>60см</li>
                <li>90см</li>
                <li>120см</li>
                <li>150см</li>
                <li>180см</li>
                <li>210см</li>
                <li>240см</li>
                <li>270см</li>
                <li>300см</li>
            </ul>
       <div>
       <span className={styles.slideItem__coast}>6 331.00 р.</span>
       <Button />
       </div>
     </div>
   </div>
  );
};

export default SlideItem;
