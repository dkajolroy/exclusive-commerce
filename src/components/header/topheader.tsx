import Link from "next/link";
function TopHeader() {
  return (
    <div className="bg-black  dark:bg-white">
      <div className="container">
        <div className="container">
          <div className="flex items-center ">
            <div className="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-between">
              <span className="sm:text-sm text-xs text-gray-300 sm:text-center dark:text-gray-500">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
                <Link
                  href="/shop"
                  className="hover:underline ms-2 underline font-bold"
                >
                  ShopNow
                </Link>
              </span>
            </div>
            <div>
              <select
                name="language"
                defaultValue="English"
                className="  text-sm bg-black dark:text-gray-900 text-white focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="English">English</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
