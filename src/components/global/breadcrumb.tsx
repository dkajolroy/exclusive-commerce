import Link from "next/link";
import { ArrowRightIcon } from "../assets/menuIcons";

interface Props {
  crumb: {
    title: string;
    icon: JSX.Element | null;
    pathname: string | null;
  }[];
}

function Breadcrumb({ crumb }: Props) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {crumb.map((item, index) => {
          if (item.pathname) {
            return (
              <li className="inline-flex items-center" key={index}>
                {!item.icon && (
                  <span className="text-gray-500 mr-2">
                    <ArrowRightIcon />
                  </span>
                )}
                <Link
                  href={item.pathname}
                  className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            );
          } else {
            return (
              <li aria-current="page" key={index}>
                <div className="flex items-center">
                  <span className="text-gray-500">
                    <ArrowRightIcon />
                  </span>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    {item.title}
                  </span>
                </div>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
