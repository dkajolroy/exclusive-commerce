import { IconHome } from "@/components/assets/menuIcons";
import Breadcrumb from "@/components/global/breadcrumb";
import Pagination from "@/components/global/pagination";
import Product from "@/components/product";
import { getProducts } from "@/hooks/getProducts";

interface Props {
  searchParams: {
    limit?: string;
    page?: string;
  };
}
async function Shop({ searchParams }: Props) {
  // Url limit Edit protected up to 40
  const limit =
    parseInt(searchParams.limit || "16") > 40
      ? 16
      : parseInt(searchParams.limit || "16");
  // Current pages
  const page = parseInt(searchParams.page || "1");

  // get SSR data with pagination
  var url = `${process.env.NEXTAUTH_URL}/api/products?limit=${
    limit || 16
  }&page=${page || 1}`;

  // SSR Get Data
  const { products, total } = await getProducts(url);

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
      {/* Product not found to show*/}
      {!products.length && (
        <div className="flex items-center h-full justify-center mt-[25vh] flex-col">
          <span className="text-3xl text-primary font-bold">404</span>
          <span className="text-xl">Product not found !</span>
        </div>
      )}
      {/* Product not found to hidden */}
      <div
        className={`flex justify-center items-center ${
          !products.length && "hidden"
        }`}
      >
        {/* Pagination */}
        <Pagination limit={limit} page={page} total={total} />
      </div>
    </div>
  );
}

export default Shop;

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
