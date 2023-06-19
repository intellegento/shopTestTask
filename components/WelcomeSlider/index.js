import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import Slide from "./Slide";

// const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     loop: true,
//     autoplay: {
//       delay: 240000, // Слайды меняются каждые 4 минуты (4 * 60 * 1000 миллисекунд)
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });

const WelcomeSlider = () => {
    return (
      <>
      <Swiper
        slidesPerView={1.1}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide> */}
      </Swiper>
    </>

    );
  };
  
  export default WelcomeSlider;