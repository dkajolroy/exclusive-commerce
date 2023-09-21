import { SearchInputIcon } from "../assets/icons";

function MobileSearch() {
  return (
    <div className="relative mt-3 md:hidden">
      {/* Mobile Search Input */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchInputIcon />
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      />
    </div>
  );
}

export default MobileSearch;
