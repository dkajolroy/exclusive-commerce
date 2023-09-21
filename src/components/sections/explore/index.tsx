import { ArrowSwitchLeftIcon } from "@/components/assets/icons";
import SectionHeading from "@/components/global/sectionheading";
import SectionLabel from "@/components/global/sectionlabel";
import ViewMore from "@/components/global/viewmore";
import Product from "@/components/product";
import { products } from "@/constants/dummy";
import { ArrowSwitchRightIcon } from "../../assets/icons";

function Explore() {
  return (
    <div className="container py-10 border-b">
      <SectionLabel label="Our Products" />
      {/* Section Heading */}
      <SectionHeading title="Explore Our Products">
        <button
          type="button"
          className="text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <ArrowSwitchLeftIcon />
        </button>
        <button
          type="button"
          className="text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <ArrowSwitchRightIcon />
        </button>
      </SectionHeading>
      {/* Product List */}
      <div className="grid py-10 md:grid-cols-4 grid-cols-2 gap-5">
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
