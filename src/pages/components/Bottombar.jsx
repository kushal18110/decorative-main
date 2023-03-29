import React from "react";
import {SlSocialInstagram,
  SlSocialFacebook,
  SlSocialLinkedin,
  SlSocialTwitter,} from 'react-icons/sl'
const Bottombar = () => {
  return (
    <div className="max-w-[1240px] mx-auto mb-8 mt-8">
      <div className="block md:flex   md:justify-evenly">
        <div className=" flex flex-col gap-3 mb-4 text-center items-center md:text-left md:items-start">
          <div className=" flex gap-3 items-center justify-center">
            <img src="./images/logo.svg" alt="" className="w-7 h-7" />
            <h1 className=" text-2xl font-bold">Decorative</h1>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur a</p>
          <ul className="flex gap-3">
            <li>
              <SlSocialInstagram size={25} className="text-green-700   " />
            </li>
            <li>
              <SlSocialLinkedin size={25} className="text-green-700 " />{" "}
            </li>
            <li>
              <SlSocialFacebook size={25} className="text-green-700 " />
            </li>
            <li>
              <SlSocialTwitter size={25} className="text-green-700" />
            </li>
          </ul>
        </div>
        <div className="flex justify-evenly md:gap-9">
          <div className="flex flex-col gap-3 ">
            <h2 className=" text-green-700 font-bold">Pages</h2>
            <ul className="flex flex-col gap-4">
              <li>About Us</li>
              <li>Our Team</li>
              <li>contact Us</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 mb-4">
            <h2 className=" text-green-700 font-bold">Services</h2>
            <ul className="flex flex-col gap-4">
              <li>Kitchen</li>
              <li>Living area </li>
              <li>Bathroom</li>
              <li>Dining Hall</li>
              <li>Bed Room</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center text-center md:text-left  md:items-start">
          <h2 className=" text-green-700 font-bold">contact</h2>
          <ul className="flex flex-col gap-4">
            <li>
              Lorem ipsum dolor, sit amet consectetur
              <br /> adipisicing elit. Quis, fugiat.
            </li>
            <li>contact@Decorative.com</li>
            <li>+91 986474875</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
