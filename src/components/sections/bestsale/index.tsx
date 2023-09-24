import Button from "@/components/global/button";
import SectionHeading from "@/components/global/sectionHeading";
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
          <Button title="View All" />
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
