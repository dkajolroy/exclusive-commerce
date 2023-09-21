import {
  ArrowSwitchLeftIcon,
  ArrowSwitchRightIcon,
} from "@/components/assets/icons";
import SectionHeading from "@/components/global/sectionheading";
import SectionLabel from "@/components/global/sectionlabel";
import { subcategories } from "@/constants/data";

function Categories() {
  return (
    <div className="container py-10 border-b">
      <SectionLabel label="Categories" />
      {/* Section Heading */}
      <SectionHeading title="Browse By Category">
        <button
          type="button"
          className="text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <ArrowSwitchLeftIcon />
        </button>
        <button
          type="button"
          className="text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <ArrowSwitchRightIcon />
        </button>
      </SectionHeading>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 py-10">
        {subcategories.map((item, index) => (
          <div
            key={index}
            className="border cursor-pointer hover:bg-primary bg-white hover:text-white transition-all rounded p-5"
          >
            <h2 className="text-center font-medium">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
