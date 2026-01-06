'use client'

import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import Image from "next/image"
import { slideInLeft, slideInRight, fadeInUp, staggerContainer, staggerItem, fadeInRight } from "../utils/animations"
import { SOCIAL_LINKS, CONTACT_EMAIL } from "../data/constants"

function Header() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const socialLinks = [
    { name: 'GitHub', url: SOCIAL_LINKS.github, icon: 'mdi:github' },
    { name: 'LinkedIn', url: SOCIAL_LINKS.linkedin, icon: 'mdi:linkedin' },
    { name: 'Upwork', url: SOCIAL_LINKS.upwork, icon: 'simple-icons:upwork' },
    { name: 'Twitter', url: SOCIAL_LINKS.twitter, icon: 'mdi:twitter' },
    // { name: 'Instagram', url: SOCIAL_LINKS.instagram, icon: 'uil:instagram-alt' },
  ]

  return (
    <div className="flex min-h-screen flex-col-reverse md:flex-row w-11/12 md:w-9/12 md:pt-20 justify-center items-center pt-32">
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
        className="text-primary dark:text-primary-light md:w-1/2 md:text-xl md:pr-6"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.div
            variants={staggerItem}
            className="text-xl md:text-2xl w-full mb-4 font-bold text-gray-700 dark:text-gray-300"
          >
            Hi, I'm{" "}
            <span className="text-gray-700 dark:text-gray-300">
              Chance Desire IRADUKUNDA.
            </span>
          </motion.div>
          <motion.div
            variants={staggerItem}
            className="text-xl md:text-3xl w-full mb-4 font-bold"
          >
            Senior Full-Stack Engineer building scalable SaaS & AI-powered products.
          </motion.div>
          
          <motion.div
            variants={staggerItem}
            className="text-gray-700 pt-5  dark:text-gray-300 font-light text-lg md:text-xl leading-relaxed"
          >
            I help startups and growing companies design and build production-ready SaaS platforms, dashboards, and AI-driven systems that scale reliably, perform well, and remain easy to maintain as teams and products grow.
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="text-gray-700   dark:text-gray-300 font-light text-lg md:text-xl leading-relaxed"
          >
             <div className="mt-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-light text-primary dark:text-primary-light hover:underline "
            >
              <Icon icon="mdi:shield-check" width="20" height="20" />
              7+ years experience • Top Rated on Upwork
            </a>
          </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap mt-6 gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-row items-center border-2 border-primary dark:border-primary-light rounded-full px-4 py-2 cursor-pointer hover:bg-primary hover:text-white dark:hover:bg-primary-light dark:hover:text-gray-900 transition-colors duration-200"
              >
                <Icon
                  icon={social.icon}
                  className="text-primary dark:text-primary-light group-hover:text-white"
                  width="20"
                  height="20"
                />
                <span className="ml-2 text-sm font-medium">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={staggerItem} className="mt-6">
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary dark:bg-primary-light hover:bg-primary-light dark:hover:bg-primary-dark cursor-pointer w-32 flex justify-center items-center px-4 py-3 rounded-md text-white dark:text-gray-900 font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Let's talk
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
  variants={fadeInRight}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0"
>
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full blur-2xl" />

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="absolute inset-0"
    >
      <Image
        src="/mine6.png"
        alt="Chance Desire IRADUKUNDA"
        fill
        className="rounded-full object-cover relative z-10"
        priority
        sizes="(max-width: 768px) 256px, 320px"
      />
    </motion.div>
  </motion.div>
</motion.div>

    </div>
  )
}

export default Header
