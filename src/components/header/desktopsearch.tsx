import { SearchInputIcon } from "../assets/icons";

function DesktopSearch() {
  return (
    <>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="What your are looking for ?"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <SearchInputIcon />
        <span className="sr-only">Search icon</span>
      </div>
    </>
  );
}

export default DesktopSearch;
