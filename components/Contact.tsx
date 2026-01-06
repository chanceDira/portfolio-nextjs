'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import toast from 'react-hot-toast'
import { fadeInUp } from '../utils/animations'

function Contact() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({})

  const validateForm = () => {
    const newErrors: { email?: string; message?: string } = {}
    
    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!message.trim()) {
      newErrors.message = 'Message is required'
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)
    const loadingToast = toast.loading('Sending message...')

    try {
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, email, subject }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      toast.success('Message sent successfully!', { id: loadingToast })
      setEmail('')
      setSubject('')
      setMessage('')
      setErrors({})
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Failed to send message. Please try again.', { id: loadingToast })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-full flex md:min-h-screen flex-col justify-center items-center py-20 px-4 md:px-8'>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-3xl md:text-5xl font-bold mb-12 text-center'
      >
        Get in <span className='text-primary dark:text-primary-light'>touch</span>
      </motion.div>
      
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='w-full max-w-2xl'
      >
        <form onSubmit={handleSubmit} className='bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg'>
          <div className='flex flex-col md:flex-row gap-4 mb-4'>
            <div className='flex flex-col flex-1'>
              <label className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Email <span className='text-red-500'>*</span>
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) setErrors({ ...errors, email: undefined })
                }}
                className={`mt-2 border-2 px-4 py-3 rounded-md outline-none transition-colors ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary-light'
                } bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
                placeholder='your.email@example.com'
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
              )}
            </div>
            
            <div className='flex flex-col flex-1'>
              <label className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Subject
              </label>
              <input
                type='text'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className='mt-2 border-2 border-gray-300 dark:border-gray-600 px-4 py-3 rounded-md outline-none focus:border-primary dark:focus:border-primary-light transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'
                placeholder='Project inquiry'
              />
            </div>
          </div>
          
          <div className='flex flex-col mb-6'>
            <label className='text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Message <span className='text-red-500'>*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
                if (errors.message) setErrors({ ...errors, message: undefined })
              }}
              rows={6}
              className={`mt-2 border-2 px-4 py-3 rounded-md outline-none transition-colors resize-none ${
                errors.message
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary-light'
              } bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
              placeholder='Tell me about your project...'
            />
            {errors.message && (
              <p className='text-red-500 text-sm mt-1'>{errors.message}</p>
            )}
            <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
              {message.length} / 500 characters
            </p>
          </div>
          
          <motion.button
            type='submit'
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            className='w-full md:w-auto mx-auto bg-primary dark:bg-primary-light hover:bg-primary-light dark:hover:bg-primary-dark text-white dark:text-gray-900 cursor-pointer px-8 py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl'
          >
            {isSubmitting ? (
              <>
                <Icon icon="mdi:loading" className="animate-spin" width="20" height="20" />
                Sending...
              </>
            ) : (
              <>
                <Icon icon="mdi:send" width="20" height="20" />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact