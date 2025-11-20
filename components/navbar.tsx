"use client"

import { useEffect, useRef, useState } from "react"
import { ShoppingCart, Menu, X, User, LogOut, Heart, Package, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [user, setUser] = useState(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const router = useRouter()

  const toggleMenu = () => setIsOpen(!isOpen)

  const gotoSignIn = () => {
    router.push(`/Component/Auth/SignIn`)
    setIsOpen(false)
  }

  const gotoCart = () => {
    router.push(`/Component/Cart`)
    setIsOpen(false)
  }

  const gotoWishList = () => {
    router.push(`/Component/WishList`)
    setIsOpen(false)
  }

  const gotoDashBoard = () => {
    router.push(`/Component/Admin/dashboard`)
    setIsOpen(false)
  }

  const gotoMyOrders = () => {
    router.push(`/Component/Orders/MyOrdersPage`)
    setIsOpen(false)
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setIsDropdownOpen(false)
    router.push('/')
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => {
              router.push('/')
              setIsOpen(false)
            }}
          >
            <img
              src="/logoCompany-removebg-preview.png"
              alt="MuseCrafts Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
            />
            <span className="relative inline-block font-bold text-lg sm:text-xl md:text-2xl text-gray-900 cursor-pointer group ml-1">
              MuseCrafts
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={gotoCart}
              className="flex items-center gap-1.5 px-2.5 lg:px-3 py-2 text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden lg:inline">Cart</span>
            </motion.button>

            {/* My Orders */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={gotoMyOrders}
              className="flex items-center gap-1.5 px-2.5 lg:px-3 py-2 text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <Package className="w-4 h-4" />
              <span className="hidden lg:inline">Orders</span>
            </motion.button>

            {/* Wishlist */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={gotoWishList}
              className="flex items-center gap-1.5 px-2.5 lg:px-3 py-2 text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            >
              <Heart className="w-4 h-4" />
              <span className="hidden lg:inline">Wishlist</span>
            </motion.button>

            {/* Dashboard - Only show for admin */}
            {user?.role === 'admin' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={gotoDashBoard}
                className="flex items-center gap-1.5 px-2.5 lg:px-3 py-2 text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden lg:inline">Dashboard</span>
              </motion.button>
            )}

            {/* User Profile / Login */}
            <div className="relative ml-2" ref={dropdownRef}>
              {user ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleProfileClick}
                    className="flex items-center gap-1.5 px-2.5 lg:px-3 py-2 text-xs lg:text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span className="max-w-[80px] lg:max-w-[120px] truncate">{user.name}</span>
                  </motion.button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
                      >
                        <div className="px-4 py-3 border-b border-gray-200">
                          <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5 truncate">{user.email}</p>
                        </div>

                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={gotoSignIn}
                  className="px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Login
                </motion.button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-gray-200 bg-white"
            >
              <div className="py-3 space-y-1">
                {/* Cart */}
                <button
                  onClick={gotoCart}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                </button>

                {/* My Orders */}
                <button
                  onClick={gotoMyOrders}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <Package className="w-5 h-5" />
                  <span>My Orders</span>
                </button>

                {/* Wishlist */}
                <button
                  onClick={gotoWishList}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </button>

                {/* Dashboard - Only show for admin */}
                {user?.role === 'admin' && (
                  <button
                    onClick={gotoDashBoard}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard</span>
                  </button>
                )}

                {/* User Section */}
                <div className="pt-2 border-t border-gray-200 mt-2">
                  {user ? (
                    <>
                      <div className="px-4 py-2 bg-gray-50 rounded-md mx-2 mb-2">
                        <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5 truncate">{user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
                      >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={gotoSignIn}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors mx-2"
                    >
                      <User className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
