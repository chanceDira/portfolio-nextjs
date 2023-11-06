import React from 'react'
import { Icon } from '@iconify/react';

function Navbar() {

  const Mailto =({ email, subject, body, ...props }: any) => {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }


  return (
    <div className=' flex flex-row justify-between items-center p-4 md:p-10  w-full absolute'>
        <div className='flex flex-row justify-center items-center cursor-pointer animate-pulse '>
            <div>
            <Icon icon="tabler:message-circle-2" color="#886451" width="48" height="48" hFlip={true} />
            </div>
            <div className=' mx-2 md:text-xl italic'>
            <Mailto email="foo@bar.baz" subject="Hire Chance" body="Hello Chance">
            Hire me
  </Mailto>
                
            </div>
        </div>
        <div>
          <div className=' border border-[#886451] px-4 py-2 font-bold md:text-xl italic cursor-pointer'>
            <a target='_blank' href='https://res.cloudinary.com/dlzsibwl6/image/upload/v1699289754/My_Resume_-_Chance_wk08rg.pdf'>
            Resume
            </a>
            
          </div>
        </div>
    </div>
  )
}

export default Navbar