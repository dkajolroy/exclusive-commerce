import Image from "next/image";
import Link from "next/link";
import { IconEye, IconHeart } from "../assets/globalIcons";
import Rating from "../global/rating";

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
      <div className="relative group/product">
        <Link href={{ pathname: "view", query: { product: item.id } }}>
          <Image
            className="w-full  object-cover h-60 rounded-t-lg group-hover/product:brightness-75 transition-all"
            src={item.images[0]}
            width={300}
            height={300}
            priority={true}
            alt="product image"
          />
        </Link>
        {/* Add to cart */}
        <div className=" absolute top-2 left-2  z-10">
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
        {/* Wishlist and view button absolute */}
        <div className="absolute top-0 right-0  z-10">
          <div className="gap-2 p-2 flex flex-col">
            <button
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-300 rounded-full p-[6px] inline-flex items-center  dark:bg-gray-600 dark:hover:bg-gray-700 "
            >
              <IconHeart />
            </button>
            <Link
              href={{ pathname: "view", query: { product: item.id } }}
              className="text-gray-500 bg-white hover:bg-gray-300 rounded-full p-[6px] inline-flex items-center  dark:bg-gray-600 dark:hover:bg-gray-700 "
            >
              <IconEye />
            </Link>
          </div>
        </div>
        {/* Add to cart absolute */}
        <button
          type="button"
          className="absolute bottom-0 left-0 group-hover/product:scale-100 scale-0  py-2 text-sm font-medium text-white rounded-b focus:outline-none bg-black  hover:bg-gray-800 transition-all dark:bg-gray-800 dark:text-gray-400 w-full"
        >
          Add to cart
        </button>
      </div>
      {/* Product information */}
      <div className=" pb-5">
        {/* Title */}
        <Link href={{ pathname: "view", query: { product: item.id } }}>
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
            <Rating total={item.rating} />
            <span className="text-sm text-gray-500">{`(${item.totalReview})`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
