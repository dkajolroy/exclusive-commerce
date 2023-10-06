"use client";
import CarouselSlide from "react-multi-carousel";
import ImageFade from "./imageFade";

function Slider({ carousels }: { carousels: Carousel[] }) {
  return (
    <CarouselSlide
      //   additionalTransfrom={0}
      //   arrows
      //   autoPlaySpeed={3000}
      //   centerMode={false}
      //   className=""
      //   containerClass="container-with-dots"
      //   dotListClass=""
      //   focusOnSelect={false}
      //   infinite
      //   itemClass=""
      //   keyBoardControl
      //   minimumTouchDrag={80}
      //   pauseOnHover
      //   renderArrowsWhenDisabled={false}
      //   renderButtonGroupOutside={false}
      //   renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      ssr
      swipeable={false}
      draggable={false}
      containerClass="first-carousel-container container"
      deviceType={"desktop"}
    >
      {carousels.map((item, i) => (
        <div key={i}>
          <ImageFade src={item.image} width={300} height={200} alt="carousel" />
        </div>
      ))}
    </CarouselSlide>
  );
}

export default Slider;
