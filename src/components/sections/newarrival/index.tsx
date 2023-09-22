import SectionHeading from "@/components/global/sectionHeading";
import SectionLabel from "@/components/global/sectionlabel";
import GridList from "./gridlist";

function NewArrival() {
  return (
    <div className="container border-b">
      <div className="py-10 flex flex-col gap-4">
        <SectionLabel label="Featured" />
        {/* Section Heading */}
        <SectionHeading title="New Arrival"></SectionHeading>
      </div>
      <div>
        <GridList />
      </div>
    </div>
  );
}

export default NewArrival;
