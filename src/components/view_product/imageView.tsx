"use client";
import Zoom from "react-zoom-image-hover/dist/esm/components/Zoom";
import ImageFade from "../global/imageFade";

function ImageView({ item }: { item: Product }) {
  return (
    <div className="flex gap-5 h-full">
      <ul className="w-32 flex flex-col gap-2 h-full">
        {Array.from("123").map((i) => (
          <li key={i}>
            <ImageFade
              className="opacity-0 duration-500 h-auto w-full hover:brightness-90 transition-all cursor-pointer object-cover"
              src={item.images[0]}
              width={720}
              height={1280}
              priority={true}
              alt="preview image"
            />
          </li>
        ))}
      </ul>
      <div className="w-[calc(100%-8rem)] overflow-hidden cursor-pointer h-full bg-gray-200 rounded">
        {/* <Image
          className="h-full w-full object-contain"
          src={item.images[0]}
          width={720}
          height={1280}
          priority={true}
          alt="preview image"
        /> */}
        <Zoom height="100%" width="100%" zoomScale={3} src={item.images[0]} />
      </div>
    </div>
  );
}

export default ImageView;
