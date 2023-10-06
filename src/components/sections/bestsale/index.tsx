import { IconArrowLeft, IconArrowRight } from "@/components/assets/menuIcons";
import SectionHeading from "@/components/global/section_Heading";
import SectionLabel from "@/components/global/sectionlabel";
import { getProducts } from "@/hooks/getProducts";
import BestSaleSlider from "./bestSaleSlider";

async function BestSales() {
  // Get SSR Products
  const url = `${process.env.NEXTAUTH_URL}/api/products?type=best_sale`; // change sale type
  const { products } = await getProducts(url);

  return (
    <div className="container py-10 border-b">
      <div className="py-5 flex flex-col gap-4">
        <SectionLabel label="This Month" />
        {/* Section Heading */}
        <SectionHeading title="Best Selling Products ">
          <div className="flex items-center gap-1 md:gap-2">
            <button
              type="button"
              className="swiper-best-prev text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
            >
              <IconArrowLeft />
            </button>
            <button
              type="button"
              className="swiper-best-next text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
            >
              <IconArrowRight />
            </button>
          </div>
        </SectionHeading>
      </div>
      {/* Product List */}
      <div className="py-5">
        <BestSaleSlider products={products} />
      </div>
    </div>
  );
}

export default BestSales;
