import { categories } from "@/constants/data";
import { ArrowRightIcon } from "../assets/menuIcons";

function ListGroup() {
  return (
    <div className="lg:border-e border-gray-300 lg:pt-8 h-full">
      <ul className=" text-gray-900 bg-white dark:bg-gray-700 dark:text-white">
        {categories.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer text-black justify-between inline-flex items-center w-full px-4 xl:py-2 md:py-[5px] py-2 text-[15px] font-medium hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            <div className="flex items-center gap-2">
              <span>{item.name}</span>
            </div>
            <span>
              <ArrowRightIcon />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
