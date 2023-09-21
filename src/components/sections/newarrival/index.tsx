import SectionHeading from "@/components/global/sectionheading";
import SectionLabel from "@/components/global/sectionlabel";

function NewArrival() {
  return (
    <div className="container py-10 border-b">
      <SectionLabel label="Featured" />
      {/* Section Heading */}
      <SectionHeading title="New Arrival"></SectionHeading>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 py-10">
        OK
      </div>
    </div>
  );
}

export default NewArrival;
