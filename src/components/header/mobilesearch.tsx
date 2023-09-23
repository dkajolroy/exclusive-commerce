import { IconSearch } from "../assets/globalIcons";
import TextInput from "../global/textInput";

function MobileSearch() {
  return (
    <div className="relative mt-3 md:hidden">
      {/* Mobile Search Input */}
      <div className="absolute text-xl text-gray-500 inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <IconSearch />
      </div>

      <TextInput name="search" placeholder="What your are looking for ?" />
    </div>
  );
}

export default MobileSearch;
