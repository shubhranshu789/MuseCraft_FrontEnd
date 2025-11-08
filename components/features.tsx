'use client'

import { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Product data matching your image
const products = [
  {
    id: 'p1',
    title: 'Happy Birthday Vintage Letter',
    price: 1250,
    originalPrice: 1500,
    discount: 15,
    rating: 4,
    reviews: 0,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
    description: 'Handwritten vintage birthday letter with personalized message'
  },
  {
    id: 'p2',
    title: 'Perfect Match Hamper',
    price: 2099,
    originalPrice: 3500,
    discount: 40,
    rating: 5,
    reviews: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
    description: 'Premium gift hamper with customized elements'
  },
  {
    id: 'p3',
    title: 'Moon And Back Thread Card',
    price: 450,
    originalPrice: 450,
    discount: 40,
    rating: 3,
    reviews: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
    description: 'Handmade thread art card with love quote',
    bestseller: false
  },
  {
    id: 'p4',
    title: 'TV Scroll Photo Frame',
    price: 499,
    originalPrice: 1250,
    discount: 60,
    rating: 5,
    reviews: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
    description: 'Retro TV-shaped photo frame with custom picture',
    bestseller: true
  },
  {
    id: 'p4',
    title: 'TV Scroll Photo Frame',
    price: 499,
    originalPrice: 1250,
    discount: 60,
    rating: 5,
    reviews: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
    description: 'Retro TV-shaped photo frame with custom picture',
    bestseller: true
  },
]

export default function BestSellers() {
  const router = useRouter()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const handleProductClick = (product: { id: string; title: string; price: number; originalPrice: number; discount: number; rating: number; reviews: number; image: string; description: string; bestseller?: undefined } | { id: string; title: string; price: number; originalPrice: number; discount: number; rating: number; reviews: number; image: string; description: string; bestseller: boolean }) => {
    const query = new URLSearchParams({
      id: product.id,
      image: product.image,
      image2: product.image,
      title: product.title,
      price: product.price.toString(),
      description: product.description
    }).toString()
    
    router.push(`/Component/ParticularProduct2?${query}`)
  }

  return (
    <section className="py-10 md:py-20 bg-gradient-to-b from-white to-green-50/30" style={{display : "flex" , justifyContent : "center" , alignItems : "center"}}>
      <div  className="max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
            BEST SELLERS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative" >
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hidden md:flex items-center justify-center"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hidden md:flex items-center justify-center"
            aria-label="Next products"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] xl:flex-[0_0_calc(25%-18px)]"
                >
                  <div
                    onClick={() => handleProductClick(product)}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gray-100 aspect-square">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.bestseller && (
                        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Bestseller
                        </span>
                      )}
                      {product.discount > 0 && (
                        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                          {product.discount}%
                        </span>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">
                        {product.title}
                      </h3>

                      {/* Price Section */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl font-bold text-gray-900">
                          ₹ {product.price.toLocaleString()}
                        </span>
                        {product.discount > 0 && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹ {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Rating */}
                      {/* {product.reviews > 0 && (
                        <div className="flex items-center gap-1 mt-auto">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < product.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'fill-gray-200 text-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            {product.reviews} review{product.reviews !== 1 ? 's' : ''}
                          </span>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {products.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-primary transition-colors"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA or Info */}
        {/* <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Handcrafted with love • Premium quality • Fast delivery
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg">
            View All Products
          </button>
        </div> */}
      </div>
    </section>
  )
}
