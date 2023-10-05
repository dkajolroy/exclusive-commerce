import { IconHome } from "@/components/assets/menuIcons";
import Breadcrumb from "@/components/global/breadcrumb";
import Button from "@/components/global/button";
import Product from "@/components/product";
import { products } from "@/constants/dummy";
const breadcrumb = [
  {
    title: "Home",
    icon: <IconHome />,
    pathname: "/",
  },
  {
    title: "Wishlist",
    icon: null,
    pathname: null,
  },
];
function Wishlist() {
  return (
    <div className="container pb-20 min-h-screen">
      {/* Breadcrumb */}
      <div className="py-10">
        <Breadcrumb crumb={breadcrumb} />
      </div>

      {/* Recommended  items*/}
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-black font-medium">Wishlist {`(4)`}</h2>
          <Button
            title="Move all to cart"
            background="bg-white"
            textColor="text-black font-medium"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-5">
          {products.slice(0, 4).map((item, index) => (
            <Product
              cartStyle="WISHLIST"
              showDiscount
              showPercentage
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
      {/* All whitelisted items */}
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center">
          {/* Heading */}
          <div className="flex items-center gap-4">
            <span className="w-5 bg-[#db4444] rounded h-10"></span>
            <h2 className="text-xl text-black font-medium">Just for you</h2>
          </div>
          <Button
            title="See All"
            background="bg-white"
            textColor="text-black font-medium"
          />
        </div>
        {/* All Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-5">
          {products.map((item, index) => (
            <Product
              cartStyle="WISHLIST"
              showDiscount
              showPercentage
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
