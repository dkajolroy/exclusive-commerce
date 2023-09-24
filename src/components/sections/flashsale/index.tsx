import { IconArrowLeft, IconArrowRight } from "@/components/assets/menuIcons";
import Button from "@/components/global/button";
import SectionHeading from "@/components/global/sectionHeading";
import SectionLabel from "@/components/global/sectionlabel";
import CountdownTimer from "./countdowntimer";
import ProductSlider from "./productslider";

function FlashSale() {
  return (
    <>
      <div className="container py-10 border-b">
        <div className="flex py-5 flex-col gap-4">
          <SectionLabel label="Today's" />
          {/* Section Heading */}
          <SectionHeading title="Flash Sales" subItem={<CountdownTimer />}>
            <div className="flex items-center gap-1 md:gap-2">
              <button
                type="button"
                className="swiper-button-prev text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
              >
                <IconArrowLeft />
              </button>
              <button
                type="button"
                className="swiper-button-next text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
              >
                <IconArrowRight />
              </button>
            </div>
          </SectionHeading>
        </div>
        {/* Product List */}
        <div className="py-5">
          <ProductSlider />
        </div>
        <div className="flex justify-center">
          <Button title="View All Products" />
        </div>
      </div>
    </>
  );
}

export default FlashSale;
