import { IconSearch } from "../assets/globalIcons";
import TextInput from "../global/textInput";

function DesktopSearch() {
  return (
    <>
      <TextInput name="search" placeholder="What your are looking for ?" />
      <div className="absolute text-gray-500 inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <IconSearch />
        <span className="sr-only">Search icon</span>
      </div>
    </>
  );
}

export default DesktopSearch;
