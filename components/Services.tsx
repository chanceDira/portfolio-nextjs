import React from 'react'
// import pana from '../assets/pana.svg'
import Zoom from 'react-reveal/Zoom';

function Services() {
  return (
    <div className='w-full flex min-h-screen flex-col justify-center items-center mt-16 md:mt-0 md:px-64'>
        <div className=' text-2xl md:text-4xl font-bold'>What <span className=' text-gray-600'>I do</span></div>
        <div className='flex flex-col md:flex-row  w-full justify-between items-center md:my-40'>
            {/* <Zoom> */}
            <div className=' w-72 md:w-80 flex flex-col justify-center items-center'>
                <div className=' w-40 h-40'>
                    <img src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674576958/webdev_m6e0lz.png' alt='img' />
                </div>
                <div className=' font-bold my-4'>
                Web Development
                </div>
                <div className=' text-gray-600 text-sm text-justify'>
                Responsive websites built for an optimal user experience that achieves your business goals. Hosting your website and work on SEO
                </div>
            </div>
            {/* </Zoom> */}
            {/* <Zoom> */}
            <div className=' w-72 md:w-80 flex flex-col justify-center items-center'>
                <div className=' w-40 h-40'>
                    <img src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674577122/Mobile_development-rafiki_bmktrw.png' alt='img' />
                </div>
                <div className=' font-bold my-4'>
                Mobile Development
                </div>
                <div className='text-gray-600 text-sm text-justify'>
                Awesome mobile application built with conscience as your want it to be along with the modern technology. Good testing before production
                </div>
            </div>
            {/* </Zoom> */}
            {/* <Zoom> */}
            <div className='  w-72 md:w-80 flex flex-col justify-center items-center'>
                <div className=' w-40 h-40'>
                    <img src='https://res.cloudinary.com/dlzsibwl6/image/upload/v1674577395/Bitcoin_P2P-amico_w8aiho.png' alt='img' />
                </div>
                <div className=' font-bold my-4'>
                Blockchain Development
                </div>
                <div className='text-gray-600 text-sm text-justify'>
                    Decentralized application built to run on a blockchain or peer-to-peer (P2P) network of computers instead of a single computer.
                </div>
            </div>
            {/* </Zoom> */}
        </div>
    </div>
  )
}

export default Services