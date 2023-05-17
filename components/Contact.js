import Image from "next/image";
import React from "react";

const Contact = ({ img, name }) => {
  return (
    <div className="space-x-3 mb-2 flex items-center relative hover:bg-gray-200 cursor-pointer p-2 mr-2 rounded-xl">
      <Image
        src={img}
        fixed
        width={50}
        height={50}
        className="rounded-[1000px]"
        style={{ objectFit: "cover" }}
      />
      <p>{name}</p>
      <div className="absolute  bottom-2 left-7 bg-green-400 rounded-full h-3 w-3 animate-pulse"/>
    </div>
  );
};

export default Contact;
