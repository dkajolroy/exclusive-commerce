import Image from "next/image";

function CartItem() {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <Image
            className="w-8 h-8 rounded-full"
            width={30}
            height={30}
            src="https://res.cloudinary.com/kajolroy/image/upload/v1649315822/cld-sample.jpg"
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            Neil Sims
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            email@windster.com
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          $320
        </div>
      </div>
    </li>
  );
}

export default CartItem;
