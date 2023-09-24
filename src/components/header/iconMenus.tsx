import Link from "next/link";
import { IconHeart } from "../assets/globalIcons";
import { IconCart3 } from "../assets/productIcons";
import HandleUserDialog from "./handleUserDialog";

function IconMenus() {
  return (
    <>
      <div className="hidden  w-full md:block md:w-auto" id="navbar-dropdown">
        <div className=" flex items-center gap-5">
          {/* Wishlist */}
          <Link
            href="/wishlist"
            className="flex text-xl items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            <IconHeart />
          </Link>
          {/* Cart */}
          <Link
            href="/cart"
            className="flex text-xl items-center justify-between w-full py-2 pl-3 pr-4 relative text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            <IconCart3 />
            <div className="absolute inline-flex items-center justify-center w-[18px] h-[18px] text-xs font text-white bg-red-500 rounded-full -top-[10px] -right-[10px] dark:border-gray-900">
              2
            </div>
          </Link>
          {/* User */}
          <HandleUserDialog />
        </div>
      </div>
    </>
  );
}

export default IconMenus;
