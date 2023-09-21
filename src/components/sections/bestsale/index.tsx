import SectionHeading from "@/components/global/sectionheading";
import SectionLabel from "@/components/global/sectionlabel";
import ViewMore from "@/components/global/viewmore";
import Product from "@/components/product";
import { products } from "@/constants/dummy";

function BestSales() {
  return (
    <div className="container py-10 border-b">
      <SectionLabel label="This Month" />
      {/* Section Heading */}
      <SectionHeading title="Best Selling Products ">
        <ViewMore title="View All" />
      </SectionHeading>
      {/* Product List */}
      <div className="grid py-10 md:grid-cols-4 grid-cols-2 gap-5">
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
