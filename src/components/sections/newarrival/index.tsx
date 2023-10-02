import SectionHeading from "@/components/global/SectionHeading";
import SectionLabel from "@/components/global/sectionlabel";
import GridList from "./gridlist";

function NewArrival() {
  return (
    <div className="container border-b">
      <div className="flex py-5 flex-col gap-4">
        <SectionLabel label="Featured" />
        {/* Section Heading */}
        <SectionHeading title="New Arrival"></SectionHeading>
      </div>
      <div className="py-5">
        <GridList />
      </div>
    </div>
  );
}

export default NewArrival;
