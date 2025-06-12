'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@heroui/button' 

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-600 to-blue-700 text-center px-6 py-10">
    <motion.h1
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-9xl font-extrabold text-white tracking-tight leading-tight"
    >
      404
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-4 text-lg sm:text-xl md:text-2xl text-white opacity-85 max-w-lg"
    >
      Sorry, the page you are looking for might have been moved or no longer exists.
    </motion.p>

    <motion.img
      src="https://illustrations.popsy.co/gray/web-error.svg"
      alt="Page Not Found"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="w-64 mt-8 rounded-xl shadow-xl transform transition-all hover:scale-105"
    />

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, ease: 'easeOut' }}
      className="mt-8"
    >
      <Button
        onClick={() => router.push('/')}
        color="primary"
        className="px-6 py-3 text-lg font-medium rounded-lg shadow-lg bg-white text-indigo-600 hover:bg-indigo-100 transition-all"
      >
        Return to Homepage
      </Button>
    </motion.div>
  </div>  
  )
}
