import Image from "next/image";

function DownloadFeature() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-light text-white">
        Save your s3 with new your only
      </span>
      <div className="flex gap-1">
        <div className="flex-1">
          <div className="flex rounded bg-gray-700">
            <Image
              src="https://res.cloudinary.com/kajolroy/image/upload/v1649315822/cld-sample.jpg"
              width={100}
              height={100}
              priority={true}
              alt="qr code"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <button className="text-xs py-1">Apple Store</button>
          <button className="text-xs py-1">Google Play</button>
        </div>
      </div>
    </div>
  );
}

export default DownloadFeature;
