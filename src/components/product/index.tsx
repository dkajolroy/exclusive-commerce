import Image from "next/image";
import Link from "next/link";
import { EyeIcon, HeartIcon, StarEmpty, StarFill } from "../assets/icons";

function Product({
  showDiscount,
  showPercentage,
  item,
}: {
  item: Product;
  showPercentage: boolean;
  showDiscount: boolean;
}) {
  return (
    <div className="w-full max-w-sm bg-white  rounded">
      <Link href="/" className="relative group/product">
        <Image
          className="w-full  object-cover h-48 rounded-t-lg group-hover/product:brightness-75 transition-all"
          src={item.images[0]}
          width={300}
          height={300}
          priority={true}
          alt="product image"
        />
        {/* Add to cart */}
        <div className="absolute top-0 left-0 h-full w-full z-10">
          <div className="flex justify-between">
            <div className="p-2">
              {showPercentage ? (
                <span className="bg-primary py-1 font-extralight text-white text-xs px-2 rounded ">
                  -30%
                </span>
              ) : (
                <span className="bg-green-500 py-0.5 font-extralight text-white text-xs px-1.5 rounded ">
                  NEW
                </span>
              )}
            </div>
            <div className="gap-2 p-2 flex flex-col">
              <button
                type="button"
                className="text-black bg-white hover:bg-gray-300 rounded-full p-[6px] inline-flex items-center  dark:bg-gray-600 dark:hover:bg-gray-700 "
              >
                <span className="w-4 h-4 flex items-center text-gray-600 dark:text-white">
                  <HeartIcon />
                </span>
              </button>
              <button
                type="button"
                className="text-black bg-white hover:bg-gray-300 rounded-full p-[6px] inline-flex items-center  dark:bg-gray-600 dark:hover:bg-gray-700 "
              >
                <span className="w-4 h-4 flex items-center text-gray-600 dark:text-white">
                  <EyeIcon />
                </span>
              </button>
            </div>
          </div>
          <button
            type="button"
            className="absolute bottom-0 left-0 group-hover/product:scale-100 scale-0  py-2 text-sm font-medium text-white rounded-b focus:outline-none bg-black  hover:bg-gray-800 transition-all dark:bg-gray-800 dark:text-gray-400 w-full"
          >
            Add to cart
          </button>
        </div>
      </Link>
      <div className=" pb-5">
        {/* Title */}
        <Link href="/">
          <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
        </Link>
        {/* Price and Discount */}
        <div className={!showDiscount ? "flex gap-3 items-center" : ""}>
          <div className="flex items-center gap-2">
            <span className="text-sm  text-primary dark:text-red">$599</span>
            {showDiscount && <del className="text-gray-500">$565</del>}
          </div>
          {/* Rating  */}
          <div className="flex items-center my-2">
            <StarFill />
            <StarFill />
            <StarFill />
            <StarFill />
            <StarEmpty />
            <span className="text-sm text-gray-500"> (56)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
