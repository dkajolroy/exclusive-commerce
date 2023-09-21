import { MenuBarIcon, SearchIcon } from "../assets/icons";

function MobileMenuButton() {
  return (
    <div className="md:hidden">
      {/* Mobile Search button */}
      <button
        type="button"
        data-collapse-toggle="navbar-search"
        aria-controls="navbar-search"
        aria-expanded="false"
        className=" text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
      >
        <SearchIcon />
        <span className="sr-only">Search</span>
      </button>
      {/* Mobile Menu Button */}
      <button
        data-collapse-toggle="navbar-search"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-search"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <MenuBarIcon />
      </button>
    </div>
  );
}

export default MobileMenuButton;
