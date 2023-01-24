import { Icon } from '@iconify/react'
import React from 'react'

function Header() {
  return (
    <div className=' flex min-h-screen flex-row w-9/12 justify-center items-center'>
        
      
        <div className=' text-[#886451] w-2/3 text-xl pr-6 '>
            <div className=' '>

        <div className=' text-4xl w-full mb-4 font-bold'>Hi, I'm <span className=' text-gray-600'>Chance Desire IRADUKUNDA.</span></div> 
        A <span className=' text-gray-600'>Full-Stack Web Developer</span> with a vast experience in <span className='text-gray-600'>front-end</span> and <span className='text-gray-600'>back-end</span> development. I have a <span className='text-gray-600'>bachelor's degree</span> in <span className='text-gray-600'>Software engineering</span>. My focus is on developing a most perfect product in <span className='text-gray-600'>the worldwide IT industry</span>.
            </div>
            <div className='flex flex-row mt-4'>
                <div>
                <Icon icon="mdi:github" color="#886451" width="24" height="24" />
                </div>
                <div>
                <Icon icon="mdi:linkedin" color="#886451" width="24" height="24" />
                </div>
                <div>
                <Icon icon="mdi:twitter" color="#886451" width="24" height="24" />
                </div>
                <div>
                <Icon icon="uil:instagram-alt" color="#886451" width="24" height="24" />
                </div>
            </div>
            <div className='mt-4'>
                <div className=' bg-[#886451] cursor-pointer w-28 flex justify-center items-center px-2 py-2 rounded-md text-white' >
                    Let's talk
                </div>
            </div>
        </div>

        {/* <div className='w-30'>
            <img
                className=' w-full h-40'
                src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1668021997/ChanceDira3_cwdxum.png'
                alt='image'
            />
        </div> */}
       
      
        
    </div>
  )
}

export default Header