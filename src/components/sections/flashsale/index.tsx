import { IconArrowLeft, IconArrowRight } from "@/components/assets/menuIcons";
import SectionHeading from "@/components/global/section_Heading";
import SectionLabel from "@/components/global/sectionlabel";
import Link from "next/link";
import CountdownTimer from "./countdowntimer";
import ProductSlider from "./productslider";

async function FlashSale() {
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
                className="swiper-flash-prev text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
              >
                <IconArrowLeft />
              </button>
              <button
                type="button"
                className="swiper-flash-next text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
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
          <Link
            className={` text-white border border-gray-300 bg-primary md:px-8 px-3 rounded hover:brightness-90 transition-all text-xs py-2 md:py-3 focus:outline-none`}
            href="/shop"
          >
            View All Products
          </Link>
        </div>
      </div>
    </>
  );
}

export default FlashSale;
