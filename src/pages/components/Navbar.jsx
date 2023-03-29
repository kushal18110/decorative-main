import React, { useState } from "react";
import { BiPhone } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex items-center justify-between mx-auto max-w-[1240px]   ">
      <div className="flex gap-2 items-center h-10">
        <img src="./images/logo.svg" alt="" className="w-7 h-7" />
        <h1 className=" text-2xl font-bold">Decorative</h1>
      </div>
      <div className=" hidden md:flex ">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
          <div className=" relative" onClick={handleNav}>
            <li className="flex items-center">
              Category <BiChevronDown />
            </li>
            <div
              className={
                !nav ? "hidden" : "absolute bg-white rounded-md  w-[130px] h-[200px]"
              }
            >
              <ul className=" flex flex-col justify-center pt-5  gap-3">
                <li className=" border-b border-gray-200">Kitchen</li>
                <li className=" border-b border-gray-200">Bed room</li>
                <li className=" border-b border-gray-200">Office</li>
                <li className=" border-b border-gray-200">Living room</li>
              </ul>
            </div>
          </div>
          <li className="flex items-center text-gray-700">
            <BiSearch size={20} />
          </li>
          <li className="flex items-center text-gray-700">
            <BiUser size={20} />
          </li>
        </ul>
      </div>
      <div className=" relative md:hidden">
        <div className="block md:hidden" onClick={handleNav}>
          {!nav ? <BiMenu size={20} /> : <BiX size={20} />}
        </div>
        <div
          className={
            !nav ? "hidden" : "absolute  right-0 text-right bg-white rounded-md"
          }
        >
          <ul className=" p-5 flex flex-col gap-3 ">
            <li>Home</li>
            <li>Shop</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
