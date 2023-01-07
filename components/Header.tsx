import { Icon } from '@iconify/react'
import React from 'react'

function Header() {
  return (
    <div className='flex flex-row w-9/12 min-h-screen justify-center items-center'>
        
        <div className='w-30'>
            <img
                className=' w-full h-40'
                src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1668021997/ChanceDira3_cwdxum.png'
                alt='image'
            />
        </div>
        <div className=' text-[#886451] italic w-96 mx-20 text-xl '>
            <div className=''>

        Hi, I'm Chance Desire IRADUKUNDA. A Full-Stack Web Developer with a vast experience in front-end and back-end development. I have a bachelor's degree in Software engineering. My focus is on developing a most perfect product in the worldwide IT industry.
            </div>
            <div className='flex flex-row mt-4'>
                <div>
                <Icon icon="mdi:github" color="#886451" width="48" height="48" />
                </div>
                <div>
                <Icon icon="mdi:linkedin" color="#886451" width="48" height="48" />
                </div>
                <div>
                <Icon icon="mdi:twitter" color="#886451" width="48" height="48" />
                </div>
                <div>
                <Icon icon="uil:instagram-alt" color="#886451" width="48" height="48" />
                </div>
            </div>
        </div>
       
      
        
    </div>
  )
}

export default Header