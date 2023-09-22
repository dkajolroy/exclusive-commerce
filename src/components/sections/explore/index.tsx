import { IconArrowLeft, IconArrowRight } from "@/components/assets/menuIcons";
import SectionHeading from "@/components/global/sectionHeading";
import SectionLabel from "@/components/global/sectionlabel";
import ViewMore from "@/components/global/viewmore";
import Product from "@/components/product";
import { products } from "@/constants/dummy";

function Explore() {
  return (
    <div className="container">
      <div className="py-10 flex flex-col gap-4">
        <SectionLabel label="Our Products" />
        {/* Section Heading */}
        <SectionHeading title="Explore Our Products">
          <button
            type="button"
            className="text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <IconArrowLeft />
          </button>
          <button
            type="button"
            className="text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <IconArrowRight />
          </button>
        </SectionHeading>
      </div>
      {/* Product List */}
      <div className="grid py-10  lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        {products.map((item, index) => (
          <Product
            key={index}
            item={item}
            showDiscount={true}
            showPercentage={true}
          />
        ))}
      </div>
      <ViewMore title="View All Products" />
    </div>
  );
}

export default Explore;
