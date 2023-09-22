import { ArrowRightIcon, IconHome } from "../assets/menuIcons";

function Breadcrumb() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <IconHome />
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <span className="text-gray-500">
              <ArrowRightIcon />
            </span>
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              Projects
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="text-gray-500">
              <ArrowRightIcon />
            </span>
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              Flowbite
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
