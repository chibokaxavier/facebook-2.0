import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="cursor-pointer  md:px-10 sm:h-14 flex items-center active:border-b-2 active:border-blue-500 rounded-xl md:hover:bg-gray-100">
      <Icon className={`h-5 text-gray-500 mx-auto sm:h-7 hover:text-blue-500 ${active && 'text-blue-500'}`} />
    </div>
  );
};

export default HeaderIcon;
