"use client";
import Image, { ImageProps } from "next/image";

function ImageFade(props: ImageProps) {
  return (
    <>
      <Image
        {...props}
        onLoadingComplete={(img) => img.classList.remove("opacity-0")}
      />
    </>
  );
}

export default ImageFade;
