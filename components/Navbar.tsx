import React from 'react'
import { Icon } from '@iconify/react';

function Navbar() {
  return (
    <div className=' absolute flex flex-row justify-between items-center p-10  w-full'>
        <div className='flex flex-row justify-center items-center cursor-pointer animate-pulse '>
            <div>
            <Icon icon="tabler:message-circle-2" color="#886451" width="48" height="48" hFlip={true} />
            </div>
            <div className=' mx-2 text-xl italic'>
                Hire me
            </div>
        </div>
        <div>
          <div className=' border border-[#886451] px-4 py-2 font-bold text-xl italic cursor-pointer'>
            Resume
          </div>
        </div>
    </div>
  )
}

export default Navbar