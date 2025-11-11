'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-gray-900 text-white p-3 rounded-full shadow-2xl hover:bg-gray-800 hover:shadow-gray-900/50 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      )}
    </>
  )
}
