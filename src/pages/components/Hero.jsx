import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
const Hero = () => {
  return (
    <div className=" " >
      <div className="bg-[url('https://img.freepik.com/free-vector/home-living-room-apartment-house-hall-realistic-vector-sunny-interior-chair-coffee-table-near-empty-white-wall-glossy-laminate-floor-long-white-curtain-window-rod-illustration_1441-3433.jpg?w=1380&t=st=1679657255~exp=1679657855~hmac=3315616c35eec6b237c06e2b521045fbb922ef41130f871c703711903ab6795a')] bg-cover  bg-center bg-no-repeat   max-w-[1240px] mx-auto rounded-b-[70px] lg:bg-cover">
        <div className="flex flex-col gap-7  pt-[80px] pb-[200px]">
          <h1 className=" text-4xl md:text-5xl font-bold ">
            Decorate your <br />
            Life with wood
          </h1>
          <p className="text-sm font-thin md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            accusantium
            <br /> neque molestiae rerum ipsam repudiandae distinctio recusandae
            invento
          </p>
          <button className=" flex items-center max-w-[130px] bg-green-700 text-white p-1 w-30 rounded-md md:p-2 ">
            View in shop <BiRightArrowAlt size={20} />
          </button>
        </div>
      </div>
      <div className="md:h-[200px] h-[100px] mx-auto mt-2  mb-2 md:mt-8 md:mb-8 max-w-[1240px] " >
        <img
          className="h-full w-full md:object-cover  object-cover   mx-auto  "
          src="./images/comp-logo.png"
          alt=""
        />
      </div>
      
    </div>
  );
};

export default Hero;
