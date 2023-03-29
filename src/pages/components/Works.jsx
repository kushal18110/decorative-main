import React from "react";

const Works = () => {
  return (
    <div className="max-w-[1240px] mt-[30px] mx-auto">
      <div className=" text-center">
        <h2 className=" font-bold text-2xl">How It Works</h2>
        <p className=" font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea beatae
          debitis ab nulla qui
        </p>
      </div>
      <div className="pt-5">
        <div className=" block md:flex md:gap-2 md:justify-center">
          <div className="flex flex-col   items-center text-center ">
            <img
              className=" w-[200px] h-[200px] object-cover rounded-[20px]"
              src="https://img.freepik.com/free-photo/chair-table-yellow-living-room-with-copy-space_43614-859.jpg?size=338&ext=jpg&uid=R94520814&ga=GA1.1.1322900918.1679057571&semt=sph"
              alt=""
            />
            <h3 className=' before:flex before:justify-center before:items-center before:rounded-full before:border-4 before:bg-green-800 before:inset-1 before:absolute relative before:h-10 before:w-10 before:text-white before: before:mx-auto before:top-[-25px] before:content-["1"]  font-bold  pt-3'>
              Purchase securely
            </h3>
            <p className=" font-thin pr-[100px] pl-[100px] md:p-0 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              illo!
            </p>
          </div>
          <div className="flex flex-col items-center text-center  ">
            <img
              className="  w-[200px] h-[200px]  object-cover rounded-[20px]"
              src="https://img.freepik.com/free-photo/interior-design-with-photoframes-nice-chairs_23-2149385446.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.1.1322900918.1679057571&semt=sph"
              alt=""
            />
            <h3 className=' before:flex before:justify-center before:items-center before:rounded-full before:border-4 before:bg-green-800 before:inset-1 before:absolute relative before:h-10 before:w-10 before:text-white before: before:mx-auto before:top-[-25px] before:content-["2"] font-bold  pt-3'>
              Ships from warehouse
            </h3>
            <p className=" font-thin pr-[100px] pl-[100px] md:p-0 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              illo!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center  text-center">
            <img
              className=" w-[200px] h-[200px] object-cover rounded-[20px]"
              src="https://img.freepik.com/free-photo/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf_105762-2162.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.2.1322900918.1679057571&semt=sph"
              alt=""
            />
            <h3 className=' before:flex before:justify-center before:items-center before:rounded-full before:border-4 before:bg-green-800 before:inset-1 before:absolute relative before:h-10 before:w-10 before:text-white before: before:mx-auto before:top-[-25px] before:content-["3"] font-bold  pt-3'>
              Style Your Room
            </h3>
            <p className=" font-thin  pr-[100px] pl-[100px] md:p-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              illo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
