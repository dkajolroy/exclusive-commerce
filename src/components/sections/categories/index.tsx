import { IconArrowLeft, IconArrowRight } from "@/components/assets/menuIcons";
import { IconTruckFast } from "@/components/assets/servicesIcons";
import SectionHeading from "@/components/global/sectionHeading";
import SectionLabel from "@/components/global/sectionlabel";
import { subcategories } from "@/constants/data";

function Categories() {
  return (
    <div className="container py-10 border-b">
      <div className="py-5 flex flex-col gap-4">
        <SectionLabel label="Categories" />
        {/* Section Heading */}
        <SectionHeading title="Browse By Category">
          <button
            type="button"
            className="text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <IconArrowLeft />
          </button>
          <button
            type="button"
            className="text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <IconArrowRight />
          </button>
        </SectionHeading>
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-3 gap-5 py-5">
        {subcategories.map((item, index) => (
          <div
            key={index}
            className="border flex  items-center  group/subcategory_b gap-5 justify-center flex-col cursor-pointer hover:bg-primary bg-white hover:text-white transition-all rounded p-5"
          >
            <span className="text-5xl">
              <IconTruckFast />
            </span>
            <h2 className="text-center font-medium">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
