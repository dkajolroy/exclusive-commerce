function ListFive() {
  return (
    <div>
      <h2 className="mb-6 text-xl  dark:text-gray-900 text-white">
        Download App
      </h2>
      <ul className="text-white dark:text-gray-200 font-medium">
        <li className="mb-4">
          <span className="text-[14px] hover:underline font-light">
            QR Code
          </span>
        </li>{" "}
        <li className="mb-4">
          <span className="text-[14px] hover:underline font-light">
            Apple store
          </span>
        </li>
        <li className="mb-4">
          <span className="text-[14px] hover:underline font-light">
            Google play
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ListFive;
