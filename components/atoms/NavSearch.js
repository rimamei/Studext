import React from "react";
import Image from "next/image";
import Search from "../../public/images/search.png";

const NavSearch = ({ outerClassName }) => {
  return (
    <div className={`flex items-center w-full font-medium bg-black-5 p-2.5 px-3 rounded-full ${outerClassName}`}>
      <Image src={Search} alt="Search" className="p-2.5"></Image>
      <input
        type="text"
        className="w-full bg-black-5 px-2.5 outline-none cursor-pointer"
        placeholder="Search..."
      />
    </div>
  );
};

export default NavSearch;
