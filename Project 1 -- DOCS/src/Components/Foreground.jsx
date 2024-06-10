import React, { useRef } from 'react'
import Cards from './Cards';

function Foreground() {

  const ForegroundRef = useRef(null);

  const data = [
    {
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, rerum!",
      filesize : "1mb",
      close: false,
      tag : { isOpen : true, tagTitle :"Upload Now", tagColor: "blue"}
    },
    {
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, rerum!",
      filesize : "1mb",
      close: true,
      tag : { isOpen : true, tagTitle :"Download Now", tagColor: "green"}
    },
    {
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, rerum!",
      filesize : "1mb",
      close: false,
      tag : { isOpen : false, tagTitle :"Download Now", tagColor: "green"}
    },
    {
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, rerum!",
      filesize : "1mb",
      close: false,
      tag : { isOpen : true, tagTitle :"Download Now", tagColor: "green"}
    }
  ]

  return (
    <div ref={ForegroundRef} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
      {
        data.map((item , ind) => (
          <Cards data={item} reference={ForegroundRef}/>
        ))
      }
    </div>
  )
}

export default Foreground;