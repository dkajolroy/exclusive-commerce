import { IconHeart } from "../assets/globalIcons";

function AddToWishlistButton() {
  return (
    <button
      type="button"
      className="text-gray-500 bg-white hover:bg-gray-300 rounded-full p-[6px] inline-flex items-center  dark:bg-gray-600 dark:hover:bg-gray-700 "
    >
      <IconHeart />
    </button>
  );
}

export default AddToWishlistButton;
