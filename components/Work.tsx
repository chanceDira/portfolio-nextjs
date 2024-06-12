import React from 'react'
import Zoom from 'react-reveal/Zoom';


function Work() {
  return (
   <div className='w-full flex min-h-screen flex-col justify-center items-center mt-16 md:mt-0  '>
        <div className=' text-2xl md:text-4xl font-bold'>My recent <span className=' text-gray-600'>Work</span></div>
        <div className='flex flex-wrap  w-full justify-center items-center my-4 md:my-20 md:px-24'>
            
   {/* <Zoom> */}
   <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1718222763/2024-06-12_22-04_oxinrp.png' alt='img' />
            <div className=' text-gray-600 font-bold'>NFT Martetplace</div>
            <div className='underline cursor-pointer'>
              <a href='https://marketplace-five-mu.vercel.app/' target='_blank'>
              View site
              </a>
              </div>
            </div>
            {/* </Zoom> */}

             {/* <Zoom> */}
             <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='bot.png' alt='img' />
            <div className=' text-gray-600 font-bold'>AI Chatbot   </div>
            <div className='underline cursor-pointer'>
              <a href='https://dabblelab-bot.vercel.app/' target='_blank'>
              View site
              </a>
            </div>
            </div>
            {/* </Zoom> */}

        

            {/* <Zoom> */}
            <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1718222902/2024-06-12_22-08_sufvrm.png' alt='img' />
            <div className=' text-gray-600 font-bold'>Lottery</div>
            <div className='underline cursor-pointer'>
              <a href='https://chancedira.github.io/ether-lottery/' target='_blank'>
              View site
              </a>
              </div>
            </div>
            {/* </Zoom> */}

           
 
         
            {/* <Zoom> */}
            <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1718223220/2024-06-12_22-12_pgl07d.png' alt='img' />
            <div className=' text-gray-600 font-bold'>Eth Exchanger   </div>
            <div className='underline cursor-pointer'>
              <a href='https://chancedira.github.io/EthSwap-Blockchain/' target='_blank'>
              View site
              </a>
            </div>
            </div>
            {/* </Zoom> */}
                {/* <Zoom> */}
                <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674579921/2023-01-24_19-04_yy1j81.png' alt='img' />
            <div className='mt-2 '> 
            <div className=' text-gray-600 font-bold'>E-registration   </div>
            <div className='underline cursor-pointer'>
              <a href='https://www.akagera-rhein-academy.com/' target='_blank'>
              View site
              </a>
              </div>
            </div>
            
            </div>
            {/* </Zoom> */}
                       {/* <Zoom> */}
                       <div className=' m-4'>
            <img className=' w-80 h-48 border-2 rounded-md' src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674584507/2023-01-24_20-21_bfoxi5.png' alt='img' />
            <div className=' text-gray-600 font-bold'>Ck Business   </div>
            <div className='underline cursor-pointer'>
              <a href='https://ckbusinessltd.com/landing' target='_blank'>
              View site
              </a>
              </div>
            </div>
            {/* </Zoom> */}

          
          
        </div>

        <a  href='https://github.com/chanceDira' target='_blank'>
        <div className=' underline cursor-pointer'>

          
          View more
        </div>
        </a>
        <div className=' text-lg font-bold'>
          View some of my articles <a href='https://medium.com/@chancedira' target='_blank' className=' cursor-pointer text-gray-600 underline'>here</a>
        </div>
    </div>
  )
}

export default Work