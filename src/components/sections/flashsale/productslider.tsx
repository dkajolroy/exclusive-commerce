"use client";
import { products } from "@/constants/dummy";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../../product/index";

function ProductSlider() {
  return (
    <>
      <Swiper
        breakpoints={{
          720: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={false}
        loop={true}
        speed={700}
        autoplay={{
          delay: 5000,
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
    </>
  );
}

export default ProductSlider;
