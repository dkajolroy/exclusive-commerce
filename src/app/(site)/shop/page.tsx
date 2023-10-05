import { IconHome } from "@/components/assets/menuIcons";
import Breadcrumb from "@/components/global/breadcrumb";
import Button from "@/components/global/button";
import Pagination from "@/components/global/pagination";
import Product from "@/components/product";
import { products } from "@/constants/dummy";
const breadcrumb = [
  {
    title: "Home",
    icon: <IconHome />,
    pathname: "/",
  },
  {
    title: "Products",
    icon: null,
    pathname: null,
  },
];
function Shop() {
  return (
    <div className="container py-10 min-h-screen">
      <Breadcrumb crumb={breadcrumb} />
      <div className="pt-5 flex justify-between items-center">
        <div>
          <h2 className="text-xl">All Products</h2>
        </div>
        <select
          name="language"
          defaultValue="relevant"
          className=" text-sm bg-gray-200 cursor-pointer hover:bg-gray-300 dark:text-gray-900  focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="relevant">Relevant </option>
          <option value="new">New </option>
          <option value="p-lth">Price {`(Low to High)`}</option>
          <option value="p-htl">Price {`(High to Low)`}</option>
        </select>
      </div>
      {/* Product List */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-2 md:gap-5 gap-3">
        {products.map((item, index) => (
          <Product
            key={index}
            item={item}
            showDiscount={true}
            showPercentage={true}
          />
        ))}
      </div>
      <div className="flex md:flex-row gap-5 flex-col justify-between items-center">
        {/* Limit up to 32 / default 12*/}
        <Button title="Load more..." />
        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
}

export default Shop;
