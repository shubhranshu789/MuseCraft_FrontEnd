'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cards, type Product } from '@/lib/data/products';
import { Heart, Send, Sparkles } from 'lucide-react';
import Navbar from '@/components/navbar';

export default function CardsPage() {
  const router = useRouter();

  const gotoParticularProduct = (product: Product) => {
    const query = new URLSearchParams({
      id: product.id,
      image: product.image,
      image2: product.image,
      title: product.title,
      price: product.price.toString(),
      description: product.description,
    }).toString();

    router.push(`/Component/ParticularProduct3?${query}`);
  };

  return (
    <div className="min-h-screen bg-[#e8e4df]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#d4cfc7] to-[#e8e4df] py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Send Love with
                <span className="block text-gray-700">Handcrafted Cards</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Make every occasion memorable with our beautifully designed greeting cards. 
                Handcrafted with love, personalized with care.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Browse Cards
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Heart className="w-8 h-8 text-pink-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Heartfelt</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Unique</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Send className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Memorable</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={cards[0]?.image || 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trending5.JPG-trend5.jpeg'}
                alt="Handcrafted Cards Hero"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl"></div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Card Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover beautifully crafted greeting cards for every occasion and emotion
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((product) => (
              <div
                key={product.id}
                onClick={() => gotoParticularProduct(product)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {product.discount > 0 && (
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {product.discount}% OFF
                      </div>
                    )}
                    {product.trending && (
                      <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Trending</span>
                      </div>
                    )}
                    {product.bestseller && (
                      <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Bestseller
                      </div>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add wishlist logic here
                    }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors group/wishlist"
                  >
                    <Heart className="w-5 h-5 text-gray-700 group-hover/wishlist:text-pink-500 transition-colors" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-lg">
                          {i < product.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    {product.reviews > 0 && (
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    )}
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cards for Every Occasion</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect card that expresses your feelings perfectly
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-2">💝</div>
              <h3 className="font-semibold text-gray-900">Birthday</h3>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-2">💕</div>
              <h3 className="font-semibold text-gray-900">Anniversary</h3>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="font-semibold text-gray-900">Celebration</h3>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-2">🌸</div>
              <h3 className="font-semibold text-gray-900">Just Because</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Cards?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Handcrafted with Love</h3>
              <p className="text-gray-600">
                Each card is carefully designed and crafted with attention to detail
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalization Available</h3>
              <p className="text-gray-600">
                Add custom messages and names to make it truly special
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                High-quality materials ensuring your card becomes a keepsake
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Express Your Feelings Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Browse our beautiful collection and find the perfect card that speaks your heart
          </p>
          <button className="bg-gray-900 text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-semibold">
            Shop All Cards
          </button>
        </div>
      </section> */}
    </div>
  );
}
