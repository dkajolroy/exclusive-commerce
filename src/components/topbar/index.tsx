"use client";

import Image from "next/image";
import { useState } from "react";
import { IconNotification } from "../assets/dashboardIcon";
import AdminDialog from "./adminDialog";

function TopBar() {
  const [activeDialog, setActiveDialog] = useState(false);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-end mx-auto p-4">
        <div className="flex relative gap-5 items-center md:order-2">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="bg-white flex justify-center items-center text-xl p-1">
              <IconNotification />
            </span>
          </button>
          <button
            onClick={() => setActiveDialog((s) => !s)}
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="w-8 h-8 rounded-full object-cover"
              width={40}
              height={40}
              src="https://res.cloudinary.com/kajolroy/image/upload/v1649315822/cld-sample.jpg"
              alt="user photo"
            />
          </button>
          <div
            className={`z-50 ${
              !activeDialog && "hidden"
            } absolute top-5 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
          >
            <AdminDialog />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
