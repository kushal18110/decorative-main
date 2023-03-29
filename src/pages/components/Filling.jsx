import React from 'react'
import {BiRightArrowAlt, BiPhone} from 'react-icons/bi'
const Filling = () => {
  return (
    <div className='mt-[50px]'>
        <div className=" grid  gap-8  md:grid-cols-2 max-w-[1240px]  mx-auto ">
            <div className=" flex flex-col justify-center ">
                <ul className='flex flex-col gap-4 pr-3'>
                    <li><h2 className='md:text-4xl   text-xl font-bold '>Filling the home with beatiful creation</h2></li>
                    <li >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita quam quis quaerat officiis dicta earum voluptas dolor totam quisquam praesentium ipsam tenetur, eos animi tempora ab, molestias vel eveniet.</li>
                    <li className='flex items-center gap-2'><BiPhone size={40} className=' bg-orange-100 p-2 rounded-full' /> <span className=' flex flex-col '><span className=' font-bold'>012345678</span>  call us anytime</span></li>
                    <li className=''><button className='flex items-center  bg-green-700 text-white p-2 rounded-md'>Get free estimate < BiRightArrowAlt size={20}/></button></li>

                </ul>
            </div>
            <div className=" ">
                <img className=' p-[50px] md:p-3 rounded-[70px] md:rounded-[30px]' src="https://img.freepik.com/free-photo/scandinavian-living-room-interior-design-zoom-background_53876-143147.jpg?w=996&t=st=1679722555~exp=1679723155~hmac=24263d8d1d72f773f05352c5eab68b635f1eb80295847f6299a7c95d0d240e3a" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Filling