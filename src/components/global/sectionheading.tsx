import React from "react";

function SectionHeading({
  children,
  title,
  subItem,
}: {
  subItem?: React.ReactNode;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex items-center gap-20">
        <h2 className="text-3xl font-bold">{title}</h2>
        {subItem && <div className=" md:block hidden">{subItem}</div>}
      </div>
      <div className="flex justify-end">{children}</div>
      {subItem && <div className=" md:hidden mt-2 block">{subItem}</div>}
    </div>
  );
}

export default SectionHeading;
