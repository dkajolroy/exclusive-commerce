import Link from "next/link";
import { IconStar } from "../assets/productIcons";
import { IconCloseO, IconHandbag, IconUser } from "../assets/userIcons";
import SignOutButton from "./signOutButton";

function AccountDialog() {
  return (
    <>
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        <li>
          <Link
            href="/account"
            className="gap-2  flex items-center px-4 py-2 text-white hover:bg-[#00000040] mx-2 rounded"
          >
            <span className="text-xl">
              <IconUser />
            </span>
            <span>Manage Account</span>
          </Link>
        </li>
        <li>
          <Link
            href="/order"
            className="gap-2 flex items-center  px-4 py-2 text-white hover:bg-[#00000040] mx-2 rounded"
          >
            <span className="text-xl">
              <IconHandbag />
            </span>
            <span>My Order</span>
          </Link>
        </li>
        <li>
          <Link
            href="/collection"
            className="gap-2 flex items-center  px-4 py-2 text-white hover:bg-[#00000040] mx-2 rounded"
          >
            <span className="text-xl">
              <IconCloseO />
            </span>
            <span>My Collection</span>
          </Link>
        </li>
        <li>
          <Link
            href="/reviews"
            className="gap-2 flex items-center  px-4 py-2 text-white hover:bg-[#00000040] mx-2 rounded "
          >
            <span className="text-xl">
              <IconStar />
            </span>
            <span>My Reviews</span>
          </Link>
        </li>
      </ul>
      <div className="py-1 px-2">
        <SignOutButton />
      </div>
    </>
  );
}

export default AccountDialog;
