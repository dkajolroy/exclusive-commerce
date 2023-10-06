import { IconArrowLeft, IconArrowRight } from "@/components/assets/menuIcons";
import SectionHeading from "@/components/global/section_Heading";
import SectionLabel from "@/components/global/sectionlabel";
import { getSubcategories } from "@/hooks/getSubcategories";
import CategorySlider from "./categorySlider";

async function Categories() {
  const url = `${process.env.NEXTAUTH_URL}/api/subcategories`;
  const { subcategories } = await getSubcategories(url);
  return (
    <div className="container py-10 border-b">
      <div className="py-5 flex flex-col gap-4">
        <SectionLabel label="Categories" />
        {/* Section Heading */}
        <SectionHeading title="Browse By Category">
          <div className="flex items-center gap-1 md:gap-2">
            <button
              type="button"
              className="swiper-category-prev text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
            >
              <IconArrowLeft />
            </button>
            <button
              type="button"
              className="swiper-category-next text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2 md:p-2.5 text-center flex items-center"
            >
              <IconArrowRight />
            </button>
          </div>
        </SectionHeading>
      </div>
      <div className="py-5">
        <CategorySlider subcategories={subcategories} />
      </div>
    </div>
  );
}

export default Categories;
