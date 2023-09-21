"use client";
import { products } from "@/constants/dummy";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../../product/index";

function ProductSlider() {
  return (
    <div className="my-5 ">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className=""
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
