import React from "react";

const News = () => {
  return (
    <div className="max-w-[1240px] mt-[0px] mx-auto">
      <div className=" text-center">
        <h2 className=" font-bold text-2xl">Artice & News</h2>
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
              src="https://img.freepik.com/free-photo/luxury-working-room-executive-office_105762-1725.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.1.1322900918.1679057571&semt=ais"
              alt=""
            />
            <h3 className=' before:flex before:justify-center before:items-center before:rounded-full  before:bg-white  before:absolute relative before:h-[30px] before:w-[90px] before:text-black before: before:mx-auto before:top-[-35px] before:left-[px] before:content-["LivingDesign"] before:text-[12px] before:font-thin font-bold  '>
              Best for offices and <br/> business  interior solution
            </h3>
            <p className=" font-thin pr-[100px] pl-[100px] md:p-0 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              illo!
            </p>
          </div>
          <div className="flex flex-col items-center text-center  ">
            <img
              className="  w-[200px] h-[200px]  object-cover rounded-[20px]"
              src="https://img.freepik.com/free-photo/3d-rendering-luxury-business-meeting-working-room-executive-office_105762-1997.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.1.1322900918.1679057571&semt=ais"
              alt=""
            />
            <h3 className='before:flex before:justify-center before:items-center before:rounded-full  before:bg-white  before:absolute relative before:h-[30px] before:w-[90px] before:text-black before: before:mx-auto before:top-[-35px] before:left-[0px] before:content-["LivingDesign"] before:text-[12px] before:font-thin font-bold'>
              Low cost latest invented <br/> interior design ideas
            </h3>
            <p className=" font-thin pr-[100px] pl-[100px] md:p-0 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              illo!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center  text-center">
            <img
              className=" w-[200px] h-[200px] object-cover rounded-[20px]"
              src="https://img.freepik.com/free-photo/3d-rendering-business-meeting-yellow-working-room-with-stair_105762-1996.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.1.1322900918.1679057571&semt=ais"
              alt=""
            />
            <h3 className='before:flex before:justify-center before:items-center before:rounded-full  before:bg-white  before:absolute relative before:h-[30px] before:w-[90px] before:text-black before: before:mx-auto before:top-[-35px] before:left-[0px] before:content-["LivingDesign"] before:text-[12px] before:font-thin font-bold'>
              Best for offices and<br/> business  interior solution
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

export default News;
