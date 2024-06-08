import React from 'react'
import Cards from './Cards';

function Foreground() {
  return (
    <div className='fixed z-[3] top-0 left-0 w-full h-full'>
        <Cards />
    </div>
  )
}

export default Foreground;