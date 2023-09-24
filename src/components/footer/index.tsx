import ListFive from "./listFive";
import ListFour from "./listFour";
import ListOne from "./listOne";
import ListThree from "./listThree";
import ListTwo from "./listTwo";

function Footer() {
  return (
    <>
      {/* Menu section */}
      <footer className="bg-black dark:bg-white">
        <div className="container">
          <div className="mx-auto w-full max-w-screen-xl  py-10">
            <div className="grid grid-cols-2 gap-10  py-6 lg:py-8 md:grid-cols-3 lg:grid-cols-5">
              <ListOne />
              <ListTwo />
              <ListThree />
              <ListFour />
              <ListFive />
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