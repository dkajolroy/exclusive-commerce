import { LeftDoubleArrow } from "../assets/icons";

function Footer() {
  return (
    <>
      {/* Menu section */}
      <footer className="bg-black dark:bg-white">
        <div className="container">
          <div className="mx-auto w-full max-w-screen-xl  py-10">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 lg:grid-cols-5">
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-gray-900 text-white">
                  Exclusive
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      Subscribe
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Get 10% off your first order
                    </a>
                  </li>
                  <li className="mb-4">
                    <div className="relative hidden md:block">
                      <input
                        type="email"
                        id="helper-text"
                        aria-describedby="helper-text-explanation"
                        className="dark:bg-gray-50 bg-black border border-gray-300 dark:text-gray-900 text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <LeftDoubleArrow />
                        <span className="sr-only">Search icon</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold dark:text-gray-900 text-white uppercase ">
                  Help center
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Discord Server
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold dark:text-gray-900 text-white uppercase ">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold dark:text-gray-900 text-white uppercase ">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold dark:text-gray-900 text-white uppercase">
                  Download
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      iOS
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Android
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Windows
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      MacOS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-6 border-t border-gray-600 flex items-center justify-center">
          {/* Copyright */}
          <span className=" text-sm text-gray-500 text-center dark:text-gray-700">
            © Copyright Rimel 2022. All right reserved
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
