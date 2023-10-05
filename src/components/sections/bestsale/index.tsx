import { IconArrowLeft, IconArrowRight } from "@/components/assets/menuIcons";
import SectionHeading from "@/components/global/section_Heading";
import SectionLabel from "@/components/global/sectionlabel";
import Product from "@/components/product";
import { products } from "@/constants/dummy";

function BestSales() {
  return (
    <div className="container py-10 border-b">
      <div className="py-5 flex flex-col gap-4">
        <SectionLabel label="This Month" />
        {/* Section Heading */}
        <SectionHeading title="Best Selling Products ">
          <div className="flex items-center gap-1 md:gap-2">
            <button
              type="button"
              className=" text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
            >
              <IconArrowLeft />
            </button>
            <button
              type="button"
              className=" text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
            >
              <IconArrowRight />
            </button>
          </div>
        </SectionHeading>
      </div>
      {/* Product List */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-5 md:gap-5 gap-3">
        {products.slice(0, 4).map((item, index) => (
          <Product
            key={index}
            item={item}
            showDiscount={true}
            showPercentage={true}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSales;
