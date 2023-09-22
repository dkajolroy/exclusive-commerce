import { IconBxSend } from "../assets/globalIcons";

function ListOne() {
  return (
    <div>
      <h2 className="mb-6 text-xl  dark:text-gray-900 text-white">Exclusive</h2>
      <ul className="text-white dark:text-gray-200 font-medium">
        <li className="mb-4">
          <span className="font-medium">Subscribe</span>
        </li>
        <li className="mb-4">
          <span className="text-[14px] font-light">
            Get 10% off your first order
          </span>
        </li>
        <li className="mb-4">
          <div className="relative hover:text-gray-500 hidden md:block">
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              className="dark:bg-gray-50 placeholder:text-gray-600 bg-black border border-gray-300 dark:text-gray-900 text-white text-sm rounded focus:outline-none focus:border-gray-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400 "
              placeholder="Enter your email "
            />
            <div className="absolute inset-y-0 group-focus/news:text-gray-500 right-0 flex items-center pr-3 pointer-events-none">
              <IconBxSend />
              <span className="sr-only">Search icon</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ListOne;
