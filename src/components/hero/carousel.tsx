"use client";

import { carousel } from "@/constants/dummy";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function CarouselSlider() {
  return (
    <div className="hero-carousel lg:pt-8 lg:ps-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {carousel.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.image}
              width={1280}
              height={720}
              priority={true}
              className="h-auto object-cover"
              alt="cover image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselSlider;
