"use client";
import CarouselSlide, { ResponsiveType } from "react-multi-carousel";

function FlashSlider({ subcategories }: { subcategories: Subcategory[] }) {
  return (
    <CarouselSlide
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      containerClass="relative"
      dotListClass="p-5"
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass="h-full "
      itemClass="pr-5"
      slidesToSlide={1}
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr
      deviceType={"desktop"}
    >
      {subcategories.map((item, index) => (
        <div
          key={index}
          className="border flex  items-center  group/subcategory_b gap-2 md:gap-5 justify-center flex-col cursor-pointer hover:bg-primary bg-white hover:text-white transition-all rounded md:p-5 p-2"
        >
          <span className="text-5xl">
            <i className={item.icon}></i>
          </span>
          <h2 className="text-center font-medium md:text-base text-sm">{item.name}</h2>
        </div>
      ))}
    </CarouselSlide>
  );
}

export default FlashSlider;

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 6,
  },
  mobile: {
    breakpoint: {
      max: 720,
      min: 0,
    },
    items: 2,
  },
  tablet: {
    breakpoint: {
      max: 1280,
      min: 720,
    },
    items: 4,
  },
};
