import { IconSearch } from "../assets/globalIcons";

function MobileSearch() {
  return (
    <div className="relative mt-3 md:hidden">
      {/* Mobile Search Input */}
      <div className="absolute text-xl text-gray-500 inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <IconSearch />
      </div>

      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 pr-10 text-sm font-light text-gray-900 border border-gray-300  rounded bg-gray-50 focus:outline-none focus:border-gray-400 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white "
        placeholder="What your are looking for ?"
      />
    </div>
  );
}

export default MobileSearch;
