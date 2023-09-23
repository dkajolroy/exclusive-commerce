"use client";
import { products } from "@/constants/dummy";
import { useRef } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../../product/index";

function ProductSlider() {
  const navigationNextRef = useRef(null);

  return (
    <div className="my-5 ">
      <Swiper
        breakpoints={{
          // when window width is >= 480px
          // 540: {
          //   slidesPerView: 2,
          //   //spaceBetween: 40,
          // },
          // when window width is >= 640px
          720: {
            slidesPerView: 3,
            //spaceBetween: 100,
          },
          960: {
            slidesPerView: 4,
            // spaceBetween: 40,
          },
        }}
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        speed={700}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Navigation]}
        className="slider"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <Product item={item} showPercentage={false} showDiscount={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSlider;
