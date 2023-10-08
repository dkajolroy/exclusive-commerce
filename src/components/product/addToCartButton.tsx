"use client";

import { useAddToCartMutation, useGetCartItemsQuery } from "@/slices/cartSlice";
import Link from "next/link";

function AddToCartButton({ item }: { item: Product }) {
  const [addPost] = useAddToCartMutation();
  const { data } = useGetCartItemsQuery(undefined);

  async function submitPost() {
    await addPost({
      user_id: "6520cde2609c696e44eb6a5f",
      product_id: item.id,
    });
  }

  const existInCart = data?.cartList.find((x) => x.product_id === item.id);
  if (existInCart) {
    return (
      <Link
        href="/cart"
        className="text-center absolute bottom-0 left-0 group-hover/product:scale-100 scale-0  py-2 text-sm font-medium text-white rounded-b focus:outline-none bg-primary  hover:bg-red-600 transition-all dark:bg-gray-800 dark:text-gray-400 w-full"
      >
        View Cart
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={submitPost}
      className="absolute bottom-0 left-0 group-hover/product:scale-100 scale-0  py-2 text-sm font-medium text-white rounded-b focus:outline-none bg-black  hover:bg-gray-800 transition-all dark:bg-gray-800 dark:text-gray-400 w-full"
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
