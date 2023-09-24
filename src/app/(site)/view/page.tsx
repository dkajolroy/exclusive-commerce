import SectionLabel from "@/components/global/sectionlabel";
import Product from "@/components/product";
import Breadcrumb from "@/components/view_product/breadcrumb";
import ImageView from "@/components/view_product/imageView";
import ProductInfo from "@/components/view_product/productInfo";
import { products } from "../../../constants/dummy";

function View({ searchParams }: { searchParams: { product?: string } }) {
  //  find product by view id
  const product = products.find((p) => p.id === searchParams.product);
  //  Render not found
  if (!searchParams.product || !product) {
    return (
      <div className="min-h-[75vh] flex flex-col justify-center items-center">
        <span className="text-3xl text-primary font-bold">404</span>
        <span className="text-xl"> Product not found !</span>
      </div>
    );
  }

  return (
    <>
      <div className="container py-10">
        <Breadcrumb />
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10">
          {/* Product Image View */}
          <div className="lg:col-span-3 lg:py-10 py-5 ">
            <ImageView item={product} />
          </div>
          {/* Product Information */}
          <div className="lg:col-span-2 lg:py-10 py-5 ">
            <ProductInfo item={product} />
          </div>
        </div>
        {/* Related products */}
        <div>
          <div className="my-10">
            <SectionLabel label="Related Item" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((item, index) => (
              <Product
                key={index}
                showDiscount={true}
                showPercentage={true}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default View;