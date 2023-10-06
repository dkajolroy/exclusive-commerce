import Link from "next/link";
import ImageFade from "../../global/imageFade";

function CartItem({ item }: { item: CartList }) {
  return (
    <ul className="grid grid-cols-5 p-4 hover:bg-gray-100 rounded items-center">
      <li className="col-span-2 ">
        <Link
          className="flex  items-center gap-2 h-full"
          href={{ pathname: "view", query: { product: item.id } }}
        >
          <ImageFade
            className="w-12 h-12 rounded opacity-0 duration-500 transition-all"
            src={item.product.images[0]}
            width={50}
            height={50}
            priority={true}
            alt="Cover Image"
          />
          <h2 className="text-sm hover:text-primary text-black">
            {item.product.title}
          </h2>
        </Link>
      </li>
      <li className="col-span-1 text-sm">
        <span className="text-sm">${item.product.regularPrice}</span>
      </li>
      <li className="col-span-1 text-sm">
        <select
          name="quantity"
          defaultValue={1}
          className="text-sm  text-black focus:outline-none rounded-lg  block p-2.5 border border-gray-300"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </li>
      <li className="col-span-1 text-sm">
        <span className="text-sm">${item.product.regularPrice}</span>
      </li>
    </ul>
  );
}

export default CartItem;
