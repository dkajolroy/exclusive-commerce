import { CartIcon, HeartIcon, UserIcon } from "../assets/icons";
import AccountDialog from "./accountdialog";

function HeaderButtons() {
  return (
    <>
      <div className="hidden  w-full md:block md:w-auto" id="navbar-dropdown">
        <div className="relative flex items-center gap-5">
          {/* Wishlist */}
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            <span className="w-5 h-5 text-gray-600 dark:text-white">
              <HeartIcon />
            </span>
          </button>
          {/* Cart */}
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex items-center justify-between w-full py-2 pl-3 pr-4 relative text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            <CartIcon />
            <div className="absolute inline-flex items-center justify-center w-[18px] h-[18px] text-xs font text-white bg-red-500 rounded-full -top-[10px] -right-[10px] dark:border-gray-900">
              2
            </div>
          </button>
          {/* User */}
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex p-1 bg-orange-600 rounded-full text-white "
          >
            <UserIcon />
          </button>
          {/* Account Info dropdown */}
          <AccountDialog />
        </div>
      </div>
    </>
  );
}

export default HeaderButtons;
