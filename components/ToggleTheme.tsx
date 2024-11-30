'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Render a placeholder with the same dimensions while mounting
  if (!mounted) {
    return <div className="h-10 w-10" />
  }

  return (
    <motion.button
      suppressHydrationWarning
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative h-10 w-10 rounded-lg bg-zinc-100 p-2 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
      aria-label="Toggle theme"
    >
      <div className="relative h-6 w-6">
        {/* Sun icon */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="absolute inset-0 h-6 w-6 stroke-2"
          animate={{
            opacity: theme === 'dark' ? 0 : 1,
            scale: theme === 'dark' ? 0.5 : 1,
            rotate: theme === 'dark' ? 90 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.svg>

        {/* Moon icon */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute inset-0 h-6 w-6"
          animate={{
            opacity: theme === 'dark' ? 1 : 0,
            scale: theme === 'dark' ? 1 : 0.5,
            rotate: theme === 'dark' ? 0 : 90,
          }}
          transition={{ duration: 0.2 }}
        >
          <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </motion.svg>
      </div>
    </motion.button>
  )
}