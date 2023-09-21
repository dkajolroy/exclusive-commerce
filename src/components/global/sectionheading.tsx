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
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-20">
        <h2 className="text-3xl font-bold">{title}</h2>
        {subItem && <div>{subItem}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
}

export default SectionHeading;
