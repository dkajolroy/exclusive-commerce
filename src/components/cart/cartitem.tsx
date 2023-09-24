import Link from "next/link";
import ImageFade from "../global/imageFade";

function CartItem({ item }: { item: Product }) {
  return (
    <ul className="grid grid-cols-5 p-4 hover:bg-gray-100 rounded items-center">
      <li className="col-span-2 flex  items-center gap-2">
        <Link href={{ pathname: "view", query: { product: item.id } }}>
          <ImageFade
            className="w-12 h-12 rounded opacity-0 duration-500 transition-all"
            src={item.images[0]}
            width={50}
            height={50}
            priority={true}
            alt="Cover Image"
          />
        </Link>
        <Link
          href={{ pathname: "view", query: { product: item.id } }}
          className="text-sm hover:text-primary text-black"
        >
          {item.title}
        </Link>
      </li>
      <li className="col-span-1 text-sm">
        <span className="text-sm">${item.regularPrice}</span>
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
        <span className="text-sm">${item.regularPrice}</span>
      </li>
    </ul>
  );
}

export default CartItem;
