import Image from "next/image";

function ArrivalLabel({
  item,
  descCollapse,
}: {
  descCollapse: boolean;
  item: Arrival;
}) {
  return (
    <div className="relative cursor-pointer group/arrival h-full w-full ">
      <Image
        className="w-full group-hover/arrival:brightness-90 transition-all h-full object-cover rounded brightness-75"
        src={item.image}
        width={1080}
        height={1920}
        priority={true}
        alt="arrival item"
      />
      <div className="absolute bottom-5 left-5 z-8 w-full">
        <div className="gap-5 flex flex-col justify-start">
          <h2 className="text-white text-2xl ">{item.name}</h2>
          <p
            className={`text-white text-xs font-light ${
              descCollapse && "max-w-[50%]"
            }`}
          >
            {item.description}
          </p>
          <button className="focus:outline-none group-hover/arrival:ms-5 transition-all hover:text-gray-300 w-fit text-white underline">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArrivalLabel;
