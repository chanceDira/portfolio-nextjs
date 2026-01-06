'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations'

const services = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'I design and build production-ready web applications and SaaS platforms that are fast, scalable, and easy to maintain. From dashboards to complex workflows, I focus on clean architecture, performance, and long-term growth.',
    image: 'https://res.cloudinary.com/dlzsibwl6/image/upload/v1674576958/webdev_m6e0lz.png',
    icon: 'mdi:web',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'ai',
    title: 'AI-Powered Solutions',
    description: 'I integrate AI-driven features that create real business value — from intelligent assistants and automation to data-driven workflows. The goal is not AI for hype, but AI that improves efficiency and user experience.',
    image: '/robot.svg',
    icon: 'mdi:robot',
    technologies: ['OpenAI', 'LangChain', 'AI automation'],
  },
  {
    id: 'blockchain',
    title: 'Blockchain Services',
    description: 'I build secure and reliable blockchain applications, including smart contracts and decentralized systems. Ideal for teams exploring tokenization, Web3 platforms, or trust-driven applications.',
    image: 'https://res.cloudinary.com/dlzsibwl6/image/upload/v1674577395/Bitcoin_P2P-amico_w8aiho.png',
    icon: 'mdi:ethereum',
    technologies: ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'Truffle'],
  },
 
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'I develop high-quality mobile applications that align with your web products and backend systems, ensuring consistency, performance, and a smooth user experience across devices.',
    image: 'https://res.cloudinary.com/dlzsibwl6/image/upload/v1674577122/Mobile_development-rafiki_bmktrw.png',
    icon: 'mdi:cellphone',
    technologies: ['React Native', 'iOS', 'Android', 'Expo'],
  },
  
]

function Services() {
  return (
    <div className='w-full flex min-h-screen flex-col justify-center items-center py-20 px-4 md:px-16'>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-3xl md:text-5xl font-bold mb-16 text-center'
      >
        What <span className='text-primary dark:text-primary-light'>I do</span>
      </motion.div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl'
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={staggerItem}
            whileHover={{ y: -10, scale: 1.02 }}
            className='group w-full flex flex-col justify-center items-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light hover:shadow-2xl transition-all duration-300'
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className='relative w-32 h-32 mb-6'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300'></div>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className='object-contain relative z-10'
                sizes="128px"
              />
            </motion.div>
            
            <div className='flex items-center gap-2 mb-4'>
              <Icon
                icon={service.icon}
                className='text-primary dark:text-primary-light'
                width="24"
                height="24"
              />
              <h3 className='text-xl font-bold text-gray-800 dark:text-gray-200 text-center'>
                {service.title}
              </h3>
            </div>
            
            <p className='text-gray-600 dark:text-gray-400 text-sm text-center mb-4 leading-relaxed'>
              {service.description}
            </p>
            
            <div className='flex flex-wrap gap-2 justify-center mt-auto'>
              {service.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className='px-2 py-1 text-xs bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-full'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services