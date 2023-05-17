import Image from "next/image";
import React from "react";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          src={src}
          width={40}
          height={40}
        fixed
          className="rounded-full"
          alt="img"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium ">{title}</p>
    </div>
  );
};

export default SidebarRow;
