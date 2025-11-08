'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const giftSlides = [
  {
    id: 1,
    title: "Perfect Gifts for Every Occasion",
    description: "Discover thoughtfully curated gift collections that bring joy to your loved ones",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800",
    buttonText: "Explore Gifts",
    buttonLink: "/shop"
  },
  {
    id: 2,
    title: "Personalized Gift Hampers",
    description: "Create custom gift boxes filled with premium selections tailored to your taste",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800",
    buttonText: "Customize Now",
    buttonLink: "/customize"
  },
  {
    id: 3,
    title: "Corporate Gifting Solutions",
    description: "Impress clients and employees with elegant corporate gift packages",
    image: "https://images.unsplash.com/photo-1464142344401-c2f914bb1d1e?w=800",
    buttonText: "View Corporate",
    buttonLink: "/corporate"
  },
  {
    id: 4,
    title: "Festive Gift Collections",
    description: "Celebrate special moments with our exclusive festive gift assortments",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800",
    buttonText: "Shop Festive",
    buttonLink: "/festive"
  }
]

export default function Hero() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section style={{padding : "10px" , borderRadius : "30px"}} className="relative w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {giftSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[600px] md:h-[700px] w-full">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center h-full">
                    <div className="max-w-2xl space-y-6 text-white">
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight animate-fade-in">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl text-gray-200 animate-fade-in-delay">
                        {slide.description}
                      </p>
                      <Button 
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-6 text-lg font-semibold transition-transform hover:scale-105 animate-fade-in-delay-2"
                      >
                        {slide.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 h-12 w-12 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20" />
        <CarouselNext className="right-4 md:right-8 h-12 w-12 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20" />

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {giftSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`transition-all rounded-full ${
                current === index
                  ? "w-12 h-3 bg-accent"
                  : "w-3 h-3 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s both;
        }
      `}</style>
    </section>
  )
}
