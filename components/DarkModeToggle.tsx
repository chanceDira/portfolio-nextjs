'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <Icon icon="mdi:weather-sunny" className="w-5 h-5 text-yellow-500" />
      ) : (
        <Icon icon="mdi:weather-night" className="w-5 h-5 text-gray-700" />
      )}
    </button>
  )
}

