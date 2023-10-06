"use client";
import { useSubcategories } from "@/hooks/useSubcategories";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function CategorySlider() {
  const { subcategories } = useSubcategories("/api/subcategories");

  return (
    <Swiper
      breakpoints={{
        420: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        960: {
          slidesPerView: 6,
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
        nextEl: ".swiper-category-next",
        prevEl: ".swiper-category-prev",
      }}
      modules={[Autoplay, Navigation]}
      className="slider"
    >
      {subcategories.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="border flex  items-center  group/subcategory_b gap-2 md:gap-5 justify-center flex-col cursor-pointer hover:bg-primary bg-white hover:text-white transition-all rounded md:p-5 p-2">
            <span className="text-5xl">
              <i className={item.icon}></i>
            </span>
            <h2 className="text-center font-medium">{item.name}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategorySlider;
