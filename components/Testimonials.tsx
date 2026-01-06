'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import { testimonials } from '../data/testimonials'
import { fadeInUp } from '../utils/animations'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Calculate how many testimonials to show (3 at a time)
  const testimonialsToShow = 3
  const maxIndex = Math.max(0, testimonials.length - testimonialsToShow)

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }
  }

  // Calculate the translate percentage
  const translateX = -(currentIndex * (100 / testimonialsToShow))

  return (
    <div className='w-full flex min-h-screen flex-col justify-center items-center py-20 md:px-8'>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-3xl md:text-5xl font-bold mb-16 text-center'
      >
        What <span className='text-primary dark:text-primary-light'>Clients</span> Say
      </motion.div>

      <div className='relative w-full md:max-w-7xl flex items-center gap-4'>
        {/* Left Arrow - Outside container */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={` hidden md:block flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg transition-all ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:border-primary dark:hover:border-primary-light hover:shadow-xl hover:scale-110 cursor-pointer'
          }`}
          aria-label="Previous testimonials"
        >
          <Icon
            icon="mdi:chevron-left"
            className={`${currentIndex === 0 ? 'text-gray-400' : 'text-primary dark:text-primary-light'}`}
            width="28"
            height="28"
          />
        </button>

        {/* Sliding Container */}
        <div className='flex-1 overflow-hidden w-[350px] md:w-full '>
          <motion.div
            className='flex w-[600%] md:w-[200%]'
            animate={{
              x: `${translateX}%`,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            style={{
              // width: `500%`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='flex-shrink-0 px-4'
                style={{
                  width: `${100 / testimonials.length}%`,
                }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light shadow-lg hover:shadow-xl transition-all duration-300 h-full'
                >
                  {/* Rating Stars */}
                  {testimonial.rating && (
                    <div className='flex gap-1 mb-4'>
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          icon="mdi:star"
                          className={`${
                            i < testimonial.rating!
                              ? 'text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                          width="20"
                          height="20"
                        />
                      ))}
                    </div>
                  )}

                  {/* Quote Icon */}
                  <div className='mb-4'>
                    <Icon
                      icon="mdi:format-quote-open"
                      className='text-primary dark:text-primary-light opacity-50'
                      width="40"
                      height="40"
                    />
                  </div>

                  {/* Content */}
                  <p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic'>
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className='flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
                    {testimonial.avatar ? (
                      <div className='w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700'>
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    ) : (
                      <div className='w-12 h-12 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center'>
                        <Icon
                          icon="mdi:account"
                          className='text-primary dark:text-primary-light'
                          width="24"
                          height="24"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className='font-semibold text-gray-800 dark:text-gray-200'>
                        {testimonial.name}
                      </h4>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        {testimonial.role}
                        {testimonial.company && ` at ${testimonial.company}`}
                        {testimonial.location && ` • ${testimonial.location}`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
          <div className='mt-4 flex gap-4 flex-row justify-center items-center'>
              {/* Left Arrow - Outside container */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={` block md:hidden flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg transition-all ${
            currentIndex === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:border-primary dark:hover:border-primary-light hover:shadow-xl hover:scale-110 cursor-pointer'
          }`}
          aria-label="Previous testimonials"
        >
          <Icon
            icon="mdi:chevron-left"
            className={`${currentIndex === 0 ? 'text-gray-400' : 'text-primary dark:text-primary-light'}`}
            width="28"
            height="28"
          />
        </button>
         {/* Right Arrow - Outside container */}
         <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className={` block md:hidden flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg transition-all ${
            currentIndex >= maxIndex
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:border-primary dark:hover:border-primary-light hover:shadow-xl hover:scale-110 cursor-pointer'
          }`}
          aria-label="Next testimonials"
        >
          <Icon
            icon="mdi:chevron-right"
            className={`${currentIndex >= maxIndex ? 'text-gray-400' : 'text-primary dark:text-primary-light'}`}
            width="28"
            height="28"
          />
        </button>

          </div>
        </div>

        {/* Right Arrow - Outside container */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className={` hidden md:block flex-shrink-0 p-3 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg transition-all ${
            currentIndex >= maxIndex
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:border-primary dark:hover:border-primary-light hover:shadow-xl hover:scale-110 cursor-pointer'
          }`}
          aria-label="Next testimonials"
        >
          <Icon
            icon="mdi:chevron-right"
            className={`${currentIndex >= maxIndex ? 'text-gray-400' : 'text-primary dark:text-primary-light'}`}
            width="28"
            height="28"
          />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className='w-full max-w-7xl flex flex-col items-center'>
        <div className='flex justify-center gap-2 mt-12'>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary dark:bg-primary-light w-8'
                  : 'bg-gray-300 dark:bg-gray-600 w-2 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonials ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className='text-center mt-4 text-sm text-gray-600 dark:text-gray-400'>
          Showing {currentIndex + 1}-{Math.min(currentIndex + testimonialsToShow, testimonials.length)} of {testimonials.length}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
