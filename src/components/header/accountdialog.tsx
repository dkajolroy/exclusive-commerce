import Link from "next/link";
import { IconStar } from "../assets/productIcons";
import {
  IconCloseO,
  IconHandbag,
  IconLogOut,
  IconUser,
} from "../assets/userIcons";

function AccountDialog() {
  return (
    <div
      id="dropdownNavbar"
      className="z-10 absolute mt-1 bg-[#0B0D105C] backdrop-blur-md right-0 top-full font-normal  divide-y divide-gray-100 rounded shadow w-52 dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        <li>
          <Link
            href="/"
            className="gap-2  flex items-center px-4 py-2 text-white hover:bg-[#00000040] mx-2 rounded"
          >
            <span className="text-xl">
              <IconUser />
            </span>
            <span>Manage Account</span>
          </Link>
        </li>
        <li>
          <a
            href="/"
            className="gap-2 flex items-center  px-4 py-2 text-white hover:bg-[#00000040] mx-2 rounded"
          >
            <span className="text-xl">
              <IconHandbag />
            </span>
            <span>My Order</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            className="gap-2 flex items-center  px-4 py-2 text-white hover:bg-[#00000040] mx-2 rounded"
          >
            <span className="text-xl">
              <IconCloseO />
            </span>
            <span>My Collection</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            className="gap-2 flex items-center  px-4 py-2 text-white hover:bg-[#00000040] mx-2 rounded "
          >
            <span className="text-xl">
              <IconStar />
            </span>
            <span>My Reviews</span>
          </a>
        </li>
      </ul>
      <div className="py-1">
        <a
          href="/"
          className="gap-2 flex items-center px-4 py-2 text-white text-sm  hover:bg-[#00000040] mx-2 rounded "
        >
          <span className="text-xl rotate-180">
            <IconLogOut />
          </span>
          <span>Sign out</span>
        </a>
      </div>
    </div>
  );
}

export default AccountDialog;
