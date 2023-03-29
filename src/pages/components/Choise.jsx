import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight} from 'react-icons/bi'
const Choise = () => {
  const slides = [
    {
      url: "https://img.freepik.com/free-photo/gray-sofa-white-living-room-interior-with-copy-space-3d-rendering_43614-802.jpg?w=900&t=st=1679738788~exp=1679739388~hmac=5179f14dcc96b5bcd8f3fea7c36aaeddb41eb8aa35aeae6b760c8c86abdd4671",
    },
    {
      url: "https://img.freepik.com/free-photo/sofa-purple-living-room-with-copy-space_43614-946.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.2.1322900918.1679057571",
    },
    {
      url: "https://img.freepik.com/free-photo/sofa-living-room-with-copy-space_43614-869.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.2.1322900918.1679057571",
    },
    {
      url: "https://img.freepik.com/free-photo/sofa-living-room-interior-with-copy-space_43614-878.jpg?size=626&ext=jpg&uid=R94520814&ga=GA1.2.1322900918.1679057571",
    },
  ];

  const [CurrentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const ifFirstSlide = CurrentIndex === 0;
    const newIndex = ifFirstSlide ? slides.length - 1 : CurrentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const ifLastSlide = CurrentIndex === slides.length - 1;
    const newIndex = ifLastSlide ? 0 : CurrentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mx-auto max-w-[1240px] mt-8">
      <div className=" text-center">
        <h3 className=" font-bold text-3xl">Pick your choice</h3>
        <p className="pt-3 font-thin ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error
          ullam dolor quidem doloribus natus iusto vitae dolores voluptate
          tempora.
        </p>
      </div>
      <div className=" max-w-[1240px] mx-auto pt-12">
        <div
          style={{ backgroundImage: `url(${slides[CurrentIndex].url})` }}
          className=" md:w-[700px] h-[300px]  relative flex justify-center mx-auto bg-no-repeat bg-cover bg-center"
        > 
          <div className=" absolute text-white top-[50%]  z-1 left-5 bg-black/70 rounded-full  cursor-pointer ">
            <BiChevronLeft onClick={prevSlide} size={30} />
          </div>
          <div className=" absolute top-[50%] text-white z-1 right-5 bg-black/70 rounded-full  cursor-pointer">
            <BiChevronRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choise;
