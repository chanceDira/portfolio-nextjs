'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { SOCIAL_LINKS } from '../data/constants'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', url: SOCIAL_LINKS.github, icon: 'mdi:github' },
    { name: 'LinkedIn', url: SOCIAL_LINKS.linkedin, icon: 'mdi:linkedin' },
    { name: 'Twitter', url: SOCIAL_LINKS.twitter, icon: 'mdi:twitter' },
    { name: 'Medium', url: SOCIAL_LINKS.medium, icon: 'mdi:medium' },
  ]

  return (
    <footer className='bg-primary dark:bg-primary-dark text-white dark:text-gray-900 py-8 w-full'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='text-center md:text-left'>
            <p className='text-sm md:text-base font-medium mb-2'>
              Designed & Built by Chance Desire IRADUKUNDA
            </p>
            <p className='text-xs md:text-sm opacity-90'>
              © {currentYear} All rights reserved
            </p>
          </div>
          
          <div className='flex items-center gap-4'>
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className='p-2 rounded-full bg-white/10 dark:bg-gray-900/20 hover:bg-white/20 dark:hover:bg-gray-900/30 transition-colors'
                aria-label={social.name}
              >
                <Icon icon={social.icon} width="20" height="20" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer