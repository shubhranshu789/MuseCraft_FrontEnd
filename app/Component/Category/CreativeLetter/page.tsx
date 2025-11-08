'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { creativeLetter, type Product } from '@/lib/data/products';
import { Heart, Mail, Sparkles } from 'lucide-react';
import Navbar from '@/components/navbar';

export default function CreativeLetterPage() {
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
                Express Your
                <span className="block text-gray-700">Heartfelt Emotions</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover unique handcrafted creative letters and personalized gifts 
                that speak from the heart. Make every message memorable.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Explore Collection
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Mail className="w-8 h-8 text-gray-900" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Handcrafted</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Heart className="w-8 h-8 text-gray-900" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Personalized</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Sparkles className="w-8 h-8 text-gray-900" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Unique</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={creativeLetter[0]?.image || 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trending5.JPG-trend5.jpeg'}
                alt="Creative Letters Hero"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Creative Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked creative letters and gifts to express your feelings in the most artistic way
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeLetter.map((product) => (
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
                      <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Trending
                      </div>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add wishlist logic here
                    }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart className="w-5 h-5 text-gray-700" />
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

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Creative Letters?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Handmade</h3>
              <p className="text-gray-600">
                Each piece is carefully crafted by skilled artisans with attention to detail
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Touch</h3>
              <p className="text-gray-600">
                Customize your letters with names, messages, and special requests
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Using high-quality materials to ensure lasting memories
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
