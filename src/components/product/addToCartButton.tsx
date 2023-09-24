function AddToCartButton() {
  return (
    <button
      type="button"
      className="absolute bottom-0 left-0 group-hover/product:scale-100 scale-0  py-2 text-sm font-medium text-white rounded-b focus:outline-none bg-black  hover:bg-gray-800 transition-all dark:bg-gray-800 dark:text-gray-400 w-full"
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
