import React from 'react'

function Work() {
  return (
    // <div>Work

    //     <img src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674579506/computer_zfdatg.jpg' />
    // </div>
    <div className='w-full flex min-h-screen flex-col justify-center items-center '>
        <div className=' text-4xl font-bold'>My recent <span className=' text-gray-600'>Work</span></div>
        <div className='flex flex-wrap  w-full justify-center items-center my-20 px-24'>
            
            <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674579921/2023-01-24_19-04_yy1j81.png' alt='img' />
            <div className='mt-2 '> 
            <div className=' text-gray-600 font-bold'>E-registration   </div>
            <div className='underline'>View site</div>
            </div>
            
            </div>
            <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674583745/2023-01-24_20-05_gb1z5s.png' alt='img' />
            <div className=' text-gray-600 font-bold'>DevPulse   </div>
            <div className='underline'>View site</div>
            </div>
            <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674584340/2023-01-24_20-18_ttvszg.png' alt='img' />
            <div className=' text-gray-600 font-bold'>Panel Tech   </div>
            <div className='underline'>View site</div>
            </div>
            <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674584507/2023-01-24_20-21_bfoxi5.png' alt='img' />
            <div className=' text-gray-600 font-bold'>Ck Business   </div>
            <div className='underline'>View site</div>
            </div>
            <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674584226/2023-01-24_20-16_cxu3qk.png' alt='img' />
            <div className=' text-gray-600 font-bold'>Aupair service   </div>
            <div className='underline'>View site</div>
            </div>
            <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674584048/2023-01-24_20-13_sugl0l.png' alt='img' />
            <div className=' text-gray-600 font-bold'>Bus Tracker   </div>
            <div className='underline'>View site</div>
            </div>
          
          
        </div>
    </div>
  )
}

export default Work