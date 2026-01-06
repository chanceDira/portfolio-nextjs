'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { articles, getFeaturedArticles } from '../data/articles'
import { SOCIAL_LINKS } from '../data/constants'
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations'

function Articles() {
  const featuredArticles = getFeaturedArticles()

  return (
    <div className='w-full flex min-h-screen flex-col justify-center items-center py-20 px-4 md:px-8'>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-3xl md:text-5xl font-bold mb-4 text-center'
      >
        My <span className='text-primary dark:text-primary-light'>Articles</span> & Insights
      </motion.div>
      
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl'
      >
        Sharing knowledge and insights about blockchain, AI, full-stack development, and modern web technologies.
      </motion.p>

      {/* Featured Articles Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mb-12'
      >
        {featuredArticles.map((article, index) => (
          <motion.a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={staggerItem}
            whileHover={{ y: -10, scale: 1.02 }}
            className='group bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full'
          >
            {/* Category Badge */}
            {article.category && (
              <div className='mb-4'>
                <span className='inline-block px-3 py-1 text-xs font-semibold bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-full'>
                  {article.category}
                </span>
              </div>
            )}

            {/* Article Image Placeholder */}
            <div className='w-full h-48 bg-gradient-to-br from-primary/20 to-primary-light/20 dark:from-primary/30 dark:to-primary-light/30 rounded-lg mb-4 flex items-center justify-center overflow-hidden'>
              {article.image ? (
                <img
                  src={article.image}
                  alt={article.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
              ) : (
                <Icon
                  icon="mdi:newspaper-variant"
                  className='text-primary dark:text-primary-light opacity-50'
                  width="64"
                  height="64"
                />
              )}
            </div>

            {/* Article Content */}
            <div className='flex-1 flex flex-col'>
              <h3 className='text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors'>
                {article.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3'>
                {article.description}
              </p>

              {/* Meta Information */}
              <div className='flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700'>
                <div className='flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400'>
                  {article.date && (
                    <span className='flex items-center gap-1'>
                      <Icon icon="mdi:calendar" width="16" height="16" />
                      {new Date(article.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  )}
                  {article.readTime && (
                    <span className='flex items-center gap-1'>
                      <Icon icon="mdi:clock-outline" width="16" height="16" />
                      {article.readTime}
                    </span>
                  )}
                </div>
                <Icon
                  icon="mdi:arrow-top-right"
                  className='text-primary dark:text-primary-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='flex flex-col items-center gap-4'
      >
        <motion.a
          href={SOCIAL_LINKS.medium}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='flex items-center gap-2 px-8 py-4 bg-primary dark:bg-primary-light text-white dark:text-gray-900 rounded-lg hover:bg-primary-light dark:hover:bg-primary-dark transition-colors font-semibold shadow-lg hover:shadow-xl'
        >
          <Icon icon="mdi:medium" width="24" height="24" />
          View All Articles on Medium
          <Icon icon="mdi:arrow-right" width="20" height="20" />
        </motion.a>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          {articles.length}+ articles published
        </p>
      </motion.div>
    </div>
  )
}

export default Articles

