import CarouselSlider from "./carousel";
import ListGroup from "./listgroup";

function Hero() {
  return (
    <div className="flex lg:flex-row flex-col mb-10">
      <div className="xl:w-[250px] lg:w-[200px] lg:block hidden w-full lg:order-1 order-2">
        <ListGroup />
      </div>
      <div className="xl:w-[calc(100%-250px)] lg:w-[calc(100%-200px)] lg:order-2 order-1 w-full">
        <CarouselSlider />
      </div>
    </div>
  );
}

export default Hero;
