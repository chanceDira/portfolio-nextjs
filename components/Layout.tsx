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
        <div className='bg-black text-[#886451] relative'>
            <Head>
            <title>Chance Desire IRADUKUNDA</title>
            <meta name="description" content="Statistic using Next.js and GraphQL" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className=''>
            {children}
            </main>
            {/* <Footer /> */}
        </div>
    )
}