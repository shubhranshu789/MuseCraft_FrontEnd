'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Gift, Star, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';

import GiftFinder from "../../Component/SectionComponents/PersonalGift/page"
import ShopByCategory from "../../Component/SectionComponents/ShopByCategory/page"

import Link from 'next/link';


import {
    products,
    trendingProducts,
    miniBooks,

} from '@/lib/data/products'


import "../../../public/ShopbyCategories/Category 2_ Gratitude Reminders/1.jpg"
import "../../../public/ShopbyCategories/Category 5_ Personalized Desk Calendar/1.jpg"
import "../../../public/LogoPics/fargnance.jpg"
import "../../../public/LogoPics/journal.jpg"
import "../../../public/LogoPics/magnet.jpg"

export interface Product {
    id: string;
    title: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviews: number;
    image: string;
    image2: string;
    image3: string;
    description: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
    inside1: string;
    inside2: string;
    inside3: string;
    inside4: string;
    inside5: string;
    inside6: string;
    loveit1: string;
    loveit2: string;
    loveit3: string;
    loveit4: string;
    bestseller?: boolean;
    trending?: boolean;
}

const HomePage = () => {
    const router = useRouter();
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    const [isInWishlist, setIsInWishlist] = useState(false)  // Shared by ALL products
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [loading, setLoading] = useState<string | null>(null) // Track which product is loading
    const [wishlistedProducts, setWishlistedProducts] = useState<Set<string>>(new Set()) // Track all wishlisted IDs

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const userString = localStorage.getItem('user')
                if (!userString) return

                const user = JSON.parse(userString)
                const userId = user._id

                // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getwishlist/${userId}`)
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getwishlist/${userId}`)
                const data = await response.json()

                if (data.success && data.wishlist) {
                    // Create a Set of product IDs from wishlist
                    const wishlistedIds = new Set(data.wishlist.map((item: any) => item.productId))
                    setWishlistedProducts(wishlistedIds)
                }
            } catch (error) {
                console.error('Error fetching wishlist:', error)
            }
        }

        fetchWishlist()
    }, [])

    // const handleAddToWishlist = async (e: React.MouseEvent, product: Product) => {
    //     e.stopPropagation()
    //     setLoading(product.id)

    //     try {
    //         const userString = localStorage.getItem('user')

    //         if (!userString) {
    //             alert('Please login to add items to wishlist')
    //             return
    //         }

    //         const user = JSON.parse(userString)
    //         const userId = user._id

    //         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/addtowishlist`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 userId: userId,
    //                 productId: product.id,
    //                 image: product.image,
    //                 title: product.title,
    //                 price: product.price
    //             })
    //         })

    //         const data = await response.json()

    //         if (data.success) {
    //             // Add this product ID to the Set
    //             setWishlistedProducts(prev => new Set(prev).add(product.id))
    //             alert('Item added to wishlist!')
    //         } else {
    //             alert(`Failed: ${data.message}`)
    //         }

    //     } catch (error) {
    //         console.error('Error adding to wishlist:', error)
    //         alert('An error occurred. Please try again.')
    //     } finally {
    //         setLoading(null)
    //     }
    // }

    // Product navigation handler
    // const handleProductClick = (product: Product) => {
    //     const query = new URLSearchParams({
    //         id: product.id,
    //         image: product.image,
    //         image2: product.image,
    //         title: product.title,
    //         price: product.price.toString(),
    //         description: product.description
    //     }).toString();

    //     router.push(`/Component/ParticularProduct2?${query}`);
    // };


    const handleAddToWishlist = async (e: React.MouseEvent, product: Product) => {
        e.stopPropagation()
        setLoading(product.id)

        try {
            const userString = localStorage.getItem('user')

            if (!userString) {
                alert('Please login to add items to wishlist')
                return
            }

            const user = JSON.parse(userString)
            const userId = user._id

            // Check if already wishlisted
            const isCurrentlyWishlisted = wishlistedProducts.has(product.id)

            if (isCurrentlyWishlisted) {
                // Remove from wishlist
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/removefromwishlist`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userId,
                        productId: product.id
                    })
                })

                const data = await response.json()

                if (data.success) {
                    setWishlistedProducts(prev => {
                        const newSet = new Set(prev)
                        newSet.delete(product.id)
                        return newSet
                    })
                    // alert('Item removed from wishlist!')
                } else {
                    alert(`Failed: ${data.message}`)
                }
            } else {
                // Add to wishlist
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/addtowishlist`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userId,
                        productId: product.id,
                        image: product.image,
                        title: product.title,
                        price: product.price
                    })
                })

                const data = await response.json()

                if (data.success) {
                    setWishlistedProducts(prev => new Set(prev).add(product.id))
                    // alert('Item added to wishlist!')
                } else {
                    alert(`Failed: ${data.message}`)
                }
            }

        } catch (error) {
            console.error('Error toggling wishlist:', error)
            alert('An error occurred. Please try again.')
        } finally {
            setLoading(null)
        }
    }

    const handleProductClick = (book: Product) => {
        const query = new URLSearchParams({
            id: book.id,
            image: book.image,
            image2: book.image2, // Since your Product interface only has one image
            image3: book.image3, // Since your Product interface only has one image
            title: book.title,
            price: book.price.toString(), // Convert number to string
            description: book.description,
            description2: book.description2,
            description3: book.description3,
            description4: book.description4,
            inside1: book.inside1,
            inside2: book.inside2,
            inside3: book.inside3,
            inside4: book.inside4,
            inside5: book.inside5,
            inside6: book.inside6,

            loveit1: book.loveit1,
            loveit2: book.loveit2,
            loveit3: book.loveit3,
            loveit4: book.loveit4,
        }).toString();

        router.push(`/Component/ParticularProduct2?${query}`);
    };


    // const handleProductClick3 = (product: Product) => {
    //     const query = new URLSearchParams({
    //         id: product.id,
    //         image: product.image,
    //         image2: product.image,
    //         title: product.title,
    //         price: product.price.toString(),
    //         description: product.description
    //     }).toString();

    //     router.push(`/Component/ParticularProduct3?${query}`);
    // };

    const handleProductClick3 = (product: Product) => {
        const query = new URLSearchParams({
            id: product.id,
            image: product.image,
            image2: product.image2,
            image3: product.image3,
            title: product.title,
            price: product.price.toString(),
            description: product.description,
            description2: product.description2,
            description3: product.description3,
            description4: product.description4,
            inside1: product.inside1,
            inside2: product.inside2,
            inside3: product.inside3,
            inside4: product.inside4,
            inside5: product.inside5,

            loveit1: product.loveit1,
            loveit2: product.loveit2,
            loveit3: product.loveit3,
            loveit4: product.loveit4,

        }).toString();

        router.push(`/Component/ParticularProduct3?${query}`);
    };

    const handleCardClick = (product: Product) => {
        // Check if product ID starts with 'm'
        if (product.id.toLowerCase().startsWith('m')) {
            handleProductClick(product)
        } else {
            handleProductClick3(product)
        }
    }

    // Hero carousel data
    const heroSlides = [
        {
            title: "CRAFTED WITH CARE,",
            subtitle: "WRAPPED IN LOVE",
            description: "Discover unique, handmade gifts that tell your story",
            image: "/ShopbyCategories/Category 2_ Gratitude Reminders/1.jpg",
            cta: "Explore Gifts",
            theme: "from-rose-100 via-amber-50 to-pink-100"
        },
        {
            title: "PERSONALIZED GIFTS,",
            subtitle: "MADE FOR YOU",
            description: "Customize every detail to create something truly special",
            image: "/ShopbyCategories/Category 5_ Personalized Desk Calendar/1.jpg",
            cta: "Start Personalizing",
            theme: "from-blue-100 via-purple-50 to-pink-100"
        },
        {
            title: "CELEBRATE MOMENTS,",
            subtitle: "CREATE MEMORIES",
            description: "Perfect presents for life's most precious occasions",
            image: "/ShopbyCategories/Category 6_ Wallet Card/1.jpg",
            cta: "Shop Now",
            theme: "from-amber-100 via-orange-50 to-red-100"
        }
    ];


    // Category data

    const categories = [
        { name: "Gratitude Journal", image: "/LogoPics/journal.jpg", path: "/Component/CategoryNew/GratitudeJournal" },
        { name: "Personalized Novels", image: "/LogoPics/Novel.jpg", path: "/Component/Category/MemoryBook" },
        { name: "Gratitude Reminder", image: "/LogoPics/Gratitude.jpg", path: "/Component/CategoryNew/GratitudeRemainder" },
        { name: "Magzine", image: "/LogoPics/Magzine.jpg", path: "/Component/CategoryNew/Magzine" },
        { name: "Desk Calender", image: "/LogoPics/Calender.jpg", path: "/Component/CategoryNew/DeskCalender" },
        { name: "Wallet Cards", image: "/LogoPics/Wallet.jpg", path: "/Component/CategoryNew/WalletCard" },
        { name: "White Book", image: "/LogoPics/WhteBook.jpg", path: "/Component/CategoryNew/WhiteBook" },
        { name: "Personalized Frames", image: "/LogoPics/frames.jpg", path: "/Component/CategoryNew/PersonalizedFrame" },
        { name: "Caricurate", image: "/LogoPics/Circulate.jpg", path: "/Component/CategoryNew/Caricurate" },
        { name: "Fragrance", image: "/LogoPics/fargnance.jpg", path: "/Component/CategoryNew/Fragrance" },
        { name: "Fridge Magnet", image: "/LogoPics/magnet.jpg", path: "/Component/CategoryNew/FridgeMagnet" },
    ];

    // Products data - Using your structure


    // Filter bestsellers
    const bestSellers = products.filter(p => p.bestseller);

    // Improved Carousel Component with 2 items on mobile
    const Carousel = ({ items, renderItem }: { items: Product[], renderItem: (item: Product, index: number) => React.ReactNode }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [direction, setDirection] = useState(0);

        const getItemsPerView = () => {
            if (windowWidth < 640) return 2; // Changed from 1 to 2 for mobile
            if (windowWidth < 1024) return 2;
            return 4;
        };

        const itemsPerView = getItemsPerView();
        const maxIndex = Math.ceil(items.length / itemsPerView) - 1;

        const nextSlide = () => {
            if (currentIndex < maxIndex) {
                setDirection(1);
                setCurrentIndex(currentIndex + 1);
            }
        };

        const prevSlide = () => {
            if (currentIndex > 0) {
                setDirection(-1);
                setCurrentIndex(currentIndex - 1);
            }
        };

        const slideVariants = {
            enter: (direction: number) => ({
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            }),
            center: {
                x: 0,
                opacity: 1
            },
            exit: (direction: number) => ({
                x: direction > 0 ? -1000 : 1000,
                opacity: 0
            })
        };

        const swipeConfidenceThreshold = 10000;
        const swipePower = (offset: number, velocity: number) => {
            return Math.abs(offset) * velocity;
        };

        return (
            <div className="relative overflow-hidden px-2 md:px-0">
                <div className="relative h-full">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    nextSlide();
                                } else if (swipe > swipeConfidenceThreshold) {
                                    prevSlide();
                                }
                            }}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
                        >
                            {items.slice(currentIndex * itemsPerView, (currentIndex + 1) * itemsPerView).map((item, index) => (
                                <div key={item.id}>
                                    {renderItem(item, index)}
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                {currentIndex > 0 && (
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-100 transition-colors z-10"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                )}

                {currentIndex < maxIndex && (
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-100 transition-colors z-10"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                )}

                {/* Dot Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                    {[...Array(maxIndex + 1)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentIndex === index ? 'bg-red-600 w-6 md:w-8' : 'bg-gray-300'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        );
    };

    // Product card component with your navigation
    // const ProductCard = ({ product }: { product: Product }) => (
    //     <motion.div
    //         whileHover={{ y: -5 }}
    //         onClick={() => handleCardClick(product)}
    //         className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group h-full"
    //     >
    //         <div className="relative overflow-hidden">
    //             <img
    //                 src={product.image}
    //                 alt={product.title}
    //                 className="w-full h-40 sm:h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
    //             />
    //             {product.discount > 0 && (
    //                 <span className="absolute top-2 right-2 md:top-3 md:right-3 bg-green-500 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
    //                     {product.discount}% OFF
    //                 </span>
    //             )}
    //             <motion.button
    //                 whileHover={{ scale: 1.1 }}
    //                 whileTap={{ scale: 0.9 }}
    //                 onClick={(e) => handleAddToWishlist(e, product)}
    //                 className={`absolute top-2 left-2 md:top-3 md:left-3 p-1.5 md:p-2 rounded-full shadow-md transition-all duration-300`}
    //             >
    //                 <Heart
    //                     className={`w-3 h-3 md:w-5 md:h-5 transition-colors duration-300 ${isWishlisted
    //                         ? 'text-pink-500 fill-pink-500'
    //                         : 'text-gray-600'
    //                         }`}
    //                 />
    //             </motion.button>

    //         </div>
    // <div className="p-2 md:p-4">
    //     <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
    //         {product.title}
    //     </h3>
    //     {/* <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
    //         {product.id}
    //     </h3> */}
    //     <div className="flex items-center mb-1 md:mb-2">
    //         <div className="flex text-yellow-400">
    //             {[...Array(5)].map((_, i) => (
    //                 <Star
    //                     key={i}
    //                     className={`w-2 h-2 md:w-4 md:h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
    //                 />
    //             ))}
    //         </div>
    //         {product.reviews > 0 && (
    //             <span className="text-xs md:text-sm text-gray-600 ml-1 md:ml-2">
    //                 ({product.reviews})
    //             </span>
    //         )}
    //     </div>
    //     <div className="flex items-center gap-1 md:gap-2">
    //         <p className="text-sm md:text-xl font-bold text-gray-900">₹{product.price}</p>
    //         {product.originalPrice > product.price && (
    //             <p className="text-xs md:text-base text-gray-500 line-through">₹{product.originalPrice}</p>
    //         )}
    //     </div>
    // </div>
    //     </motion.div>
    // );

    const ProductCard = ({ product }: { product: Product }) => {
        const isWishlisted = wishlistedProducts.has(product.id)

        return (
            <motion.div
                whileHover={{ y: -5 }}
                onClick={() => handleCardClick(product)}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group h-full"
            >
                <div className="relative overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-40 sm:h-48 md:h-64 object-fit group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.discount > 0 && (
                        <span className="absolute top-2 right-2 md:top-3 md:right-3 bg-green-500 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                            {product.discount}% OFF
                        </span>
                    )}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => handleAddToWishlist(e, product)}
                        disabled={loading === product.id}
                        className={`absolute top-2 left-2 md:top-3 md:left-3 p-1.5 md:p-2 rounded-full shadow-md transition-all duration-300 ${isWishlisted ? 'bg-pink-50' : 'bg-white'
                            }`}
                    >
                        <Heart
                            className={`w-3 h-3 md:w-5 md:h-5 transition-colors duration-300 ${isWishlisted
                                ? 'text-pink-500 fill-pink-500'
                                : 'text-gray-600'
                                }`}
                        />
                    </motion.button>
                </div>
                {/* Rest of your card content */}
                <div className="p-2 md:p-4">
                    <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                        {product.title}
                    </h3>
                    {/* <h3 className="font-semibold text-xs md:text-lg mb-1 md:mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                    {product.id}
                </h3> */}
                    <div className="flex items-center mb-1 md:mb-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-2 h-2 md:w-4 md:h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                                />
                            ))}
                        </div>
                        {product.reviews > 0 && (
                            <span className="text-xs md:text-sm text-gray-600 ml-1 md:ml-2">
                                ({product.reviews})
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                        <p className="text-sm md:text-xl font-bold text-gray-900">₹{product.price}</p>
                        {product.originalPrice > product.price && (
                            <p className="text-xs md:text-base text-gray-500 line-through">₹{product.originalPrice}</p>
                        )}
                    </div>
                </div>
            </motion.div>
        )
    }


    // Hero carousel navigation
    const nextHeroSlide = () => {
        setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevHeroSlide = () => {
        setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}


            {/* Hero Carousel */}
            <section className="relative min-h-[600px] md:h-[600px] lg:h-[700px] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentHeroSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentHeroSlide].theme}`}
                    >
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute -top-20 -right-20 w-96 h-96 bg-red-200/20 rounded-full blur-3xl"
                            />
                            <motion.div
                                animate={{
                                    rotate: [360, 0],
                                    scale: [1.2, 1, 1.2]
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"
                            />
                        </div>

                        <div className="container mx-auto px-4 md:px-8 h-full flex items-center relative z-10 py-8 md:py-0">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                                {/* Text Content */}
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                                    className="space-y-4 md:space-y-6 text-center lg:text-left"
                                >
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                    >
                                        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                                {heroSlides[currentHeroSlide].title}
                                            </span>
                                        </h1>
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                                            {heroSlides[currentHeroSlide].subtitle}
                                        </h2>
                                    </motion.div>

                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.6, duration: 0.6 }}
                                        className="text-sm md:text-base lg:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0"
                                    >
                                        {heroSlides[currentHeroSlide].description}
                                    </motion.p>

                                    {/* Trust Indicators */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1, duration: 0.6 }}
                                        className="flex flex-wrap gap-3 md:gap-6 justify-center lg:justify-start items-center text-xs md:text-sm text-gray-600 pt-2 md:pt-4"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-600">✓</span>
                                            <span>Free Shipping</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-600">✓</span>
                                            <span>Handcrafted Quality</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-600">✓</span>
                                            <span>100% Satisfaction</span>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Image Section - Now Responsive */}
                                <motion.div
                                    initial={{ x: 100, opacity: 0, rotateY: -20 }}
                                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                    className="flex justify-center items-center"
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,
                                            rotateY: 5,
                                            rotateX: -5,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="relative w-full max-w-lg h-[250px] md:h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        {/* Display Actual Image */}
                                        <img
                                            src={heroSlides[currentHeroSlide].image}
                                            alt={heroSlides[currentHeroSlide].title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Overlay gradient for text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                                        {/* Floating Elements */}
                                        <motion.div
                                            animate={{
                                                y: [-10, 10, -10],
                                                rotate: [0, 5, 0]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="absolute top-4 right-4 md:top-10 md:right-10 bg-white p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl z-10"
                                        >
                                            <Gift className="w-8 h-8 md:w-12 md:h-12 text-red-600" />
                                        </motion.div>

                                        <motion.div
                                            animate={{
                                                y: [10, -10, 10],
                                                rotate: [0, -5, 0]
                                            }}
                                            transition={{
                                                duration: 3.5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 0.5
                                            }}
                                            className="absolute bottom-4 left-4 md:bottom-10 md:left-10 bg-gradient-to-br from-red-600 to-pink-600 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl z-10"
                                        >
                                            <span className="text-white font-bold text-lg md:text-2xl">🎁</span>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <motion.button
                    whileHover={{ scale: 1.2, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevHeroSlide}
                    className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 group"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                        <ChevronLeft className="relative w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white drop-shadow-2xl stroke-[2.5]" />
                    </div>
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.2, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextHeroSlide}
                    className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 group"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-l from-red-600 to-pink-600 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                        <ChevronRight className="relative w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white drop-shadow-2xl stroke-[2.5]" />
                    </div>
                </motion.button>

                {/* Progress Indicators */}
                <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                    {heroSlides.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setCurrentHeroSlide(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative"
                        >
                            <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${currentHeroSlide === index
                                    ? 'bg-red-600 w-8 md:w-10'
                                    : 'bg-white/60 hover:bg-white/80'
                                }`} />
                            {currentHeroSlide === index && (
                                <motion.div
                                    layoutId="activeSlide"
                                    className="absolute inset-0 bg-red-600 rounded-full"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Auto-play Progress Bar */}
                <motion.div
                    key={currentHeroSlide}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-pink-600 origin-left z-20"
                    style={{ width: '100%' }}
                />
            </section>


            {/* Categories Carousel */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto scrollbar-hide"
                    >
                        <div className="flex space-x-4 pb-4 min-w-max md:justify-center">
                            {categories.map((category, index) => (
                                <Link key={index} href={category.path}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex flex-col items-center min-w-[90px] md:min-w-[100px] cursor-pointer group"
                                    >
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-red-50 transition-colors overflow-hidden">
                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-xs md:text-sm text-center font-medium text-gray-700 group-hover:text-red-600 transition-colors px-1">
                                            {category.name}
                                        </p>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>




            {/* Best Sellers Carousel */}
            {/* <section className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">BEST SELLERS</h2>
                        <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto"></div>
                    </motion.div>

                    <Carousel
                        items={bestSellers.length > 0 ? bestSellers : products}
                        renderItem={(product) => <ProductCard key={product.id} product={product} />}
                    />
                </div>

            </section> */}



            {/* Trending This Week Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-red-600" />
                            <h2 className="text-3xl md:text-4xl font-bold">TRENDING THIS WEEK</h2>
                        </div>
                        <div className="w-20 md:w-24 h-1 bg-red-600 mx-auto"></div>
                    </motion.div>

                    <Carousel
                        items={trendingProducts}
                        renderItem={(product) => <ProductCard key={product.id} product={product} />}
                    />
                </div>
            </section>



            {/* Mini Books Section */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4">
                            More Than a Book — It's Your Love in Pages.
                        </h2>
                    </motion.div>

                    <Carousel
                        items={miniBooks}
                        renderItem={(product) => <ProductCard key={product.id} product={product} />}
                    />
                </div>
                {/* <p>{product.id}</p> */}

            </section>





            <section>
                <GiftFinder />
            </section>


            <section>
                <ShopByCategory />
            </section>

            {/* Footer */}

        </div>
    );
};

export default HomePage;
