import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'



const Join = () => {
  return (
    <div className=' max-w-[1240px] text-center bg-green-700 rounded-[30px] mx-auto mt-7'>
        <div className="flex flex-col gap-3 text-white p-12">
            <h2 className='text-3xl font-bold '>Wanna join the Decorative?</h2>
            <p className='text-gray-300'>join us and get all offer from our news letters!</p>
            <button className='  backdrop-blur-3xl border-gray-300 border p-2 text-sm rounded-lg bb flex mx-auto items-center justify-center'> Contact with us <BiRightArrowAlt/> </button>
        </div>  
    </div>
  )
}

export default Join