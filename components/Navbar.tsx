'use client'

import React, { useState, useEffect } from "react"
import { Icon } from "@iconify/react"
import { motion, AnimatePresence } from "framer-motion"
import { useScrollPosition } from "../hooks/useScrollPosition"
import DarkModeToggle from "./DarkModeToggle"
import { CONTACT_EMAIL, RESUME_LINK } from "../data/constants"

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Articles', href: '#articles' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isScrolled } = useScrollPosition()

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  const Mailto = ({ email, subject, body, children }: { email: string; subject?: string; body?: string; children: React.ReactNode }) => {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {children}
      </a>
    )
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="flex flex-row justify-between items-center p-4 md:p-10 w-full max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-row justify-center items-center cursor-pointer"
        >
          <div className="text-primary dark:text-primary-light">
            <Icon
              icon="tabler:message-circle-2"
              width="48"
              height="48"
              hFlip={true}
            />
          </div>
          <div className="mx-2 md:text-xl italic text-primary dark:text-primary-light font-semibold">
            <Mailto email={CONTACT_EMAIL} subject="Hire Chance" body="Hello Chance">
              Get in touch
            </Mailto>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === item.href.substring(1)
                  ? 'text-primary dark:text-primary-light'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light'
              }`}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary dark:bg-primary-light"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
          <DarkModeToggle />
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary dark:border-primary-light px-4 py-2 font-bold md:text-lg italic cursor-pointer text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-gray-900 transition-colors"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <DarkModeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary dark:text-primary-light"
            aria-label="Toggle menu"
          >
            <Icon
              icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
              width="32"
              height="32"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left px-4 py-2 rounded-md transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-primary text-white dark:bg-primary-light dark:text-gray-900'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center border-2 border-primary dark:border-primary-light px-4 py-2 font-bold italic cursor-pointer text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-gray-900 transition-colors rounded-md"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
