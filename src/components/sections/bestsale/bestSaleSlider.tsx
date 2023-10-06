"use client";
import Product from "@/components/product";
import CarouselSlide, { ResponsiveType } from "react-multi-carousel";

function BestSaleSlider({ products }: { products: Product[] }) {
  return (
    <CarouselSlide
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      containerClass="lg:pt-8 lg:ms-8 relative"
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
      {products.map((item, index) => (
        <Product
          key={index}
          item={item}
          showPercentage={false}
          showDiscount={true}
        />
      ))}
    </CarouselSlide>
  );
}

export default BestSaleSlider;

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 4,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 2,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 3,
  },
};
