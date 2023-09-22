import { IconSearch } from "../assets/globalIcons";

function DesktopSearch() {
  return (
    <>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 pr-10 text-sm font-light text-gray-900 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white"
        placeholder="What your are looking for ?"
      />
      <div className="absolute text-gray-500 inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <IconSearch />
        <span className="sr-only">Search icon</span>
      </div>
    </>
  );
}

export default DesktopSearch;
