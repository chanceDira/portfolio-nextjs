import React from 'react'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import { SOCIAL_LINKS } from '../data/constants'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const title = "Chance Desire IRADUKUNDA | Senior Full-Stack Developer | SaaS, AI, and Web3 Expert"
  const description = "7+ years Full-Stack Developer specializing in SaaS, Blockchain, AI, and Mobile applications. Executive Member @ Rwanda Blockchain Association. Building scalable solutions for clients worldwide."
  const url = "https://chancedira.com"
  const image = `${url}/mine6.png`

  return (
    <div className='text-primary dark:text-primary-light relative min-h-screen'>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content="Full-stack developer, Blockchain developer, AI developer, React, Next.js, Solidity, Web3, Smart contracts, DApps, Software engineer, Rwanda" />
        <meta name="author" content="Chance Desire IRADUKUNDA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Chance Desire IRADUKUNDA",
              "jobTitle": "Senior Full-Stack Developer",
              "description": description,
              "url": url,
              "image": image,
              "sameAs": [
                SOCIAL_LINKS.linkedin,
                SOCIAL_LINKS.github,
                SOCIAL_LINKS.twitter,
                SOCIAL_LINKS.medium,
              ],
              "knowsAbout": [
                "Full-Stack Development",
                "Blockchain Development",
                "Web3",
                "Smart Contracts",
                "AI Development",
                "React",
                "Next.js",
                "Solidity",
              ],
              "memberOf": {
                "@type": "Organization",
                "name": "Rwanda Blockchain Association",
                "url": "https://blockchain.org.rw/",
              },
            }),
          }}
        />
      </Head>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#f9fafb',
            border: '1px solid #374151',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
            style: {
              background: '#064e3b',
              color: '#d1fae5',
              border: '1px solid #10b981',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
            style: {
              background: '#7f1d1d',
              color: '#fecaca',
              border: '1px solid #ef4444',
            },
          },
          loading: {
            iconTheme: {
              primary: '#B18974',
              secondary: '#1f2937',
            },
            style: {
              background: '#1f2937',
              color: '#f9fafb',
              border: '1px solid #B18974',
            },
          },
        }}
      />
      <Navbar />
      <main className='flex flex-col justify-center items-center'>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}