import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
// import Navbar from "./navbar/Navbar";
// import Footer from "./footer/Footer";

interface LayoutProps {
    children:React.ReactNode
}

export default function Layout({children}:LayoutProps) {
    return (
        <div className=' text-[#886451] relative'>
            <Head>
            <title>Chance Desire IRADUKUNDA</title>
            <meta name="description" content="Hi, I'm Chance Desire IRADUKUNDA. A Full-Stack Web Developer with a vast experience in front-end and back-end development. I have a bachelor's degree in Software engineering. My focus is on developing a most perfect product in the worldwide IT industry." />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className='flex flex-col justify-center items-center '>
            {children}
            </main>
            {/* <Footer /> */}
        </div>
    )
}