import React from 'react'
import { CiFileOn } from "react-icons/ci";

function Cards() {
  return (
    <div className='relative w-60 h-72 rounded-[35px] bg-zinc-600/70 text-white p-5 overflow-hidden'>
        <CiFileOn />
        <p className='text-sm mt-10 leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nesciunt ab accusantium.</p>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-sky-200"></div>
    </div>
  )
}

export default Cards