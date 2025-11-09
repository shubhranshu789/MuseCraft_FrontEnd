'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Magnets, type Product } from '@/lib/data/products';
import { Heart, Send, Sparkles, BookOpen, PenTool } from 'lucide-react';
import Navbar from '@/components/navbar';

export default function CardsPage() {
  const router = useRouter();

  const gotoParticularProduct = (product: Product) => {
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

    router.push(`/Component/ParticularProduct7?${query}`);
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
                Your Thoughts
                <span className="block text-gray-700">Deserve a Beautiful Canvas</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Premium personalized notebooks and journals with custom covers. Perfect for capturing ideas, dreams, and daily reflections in style.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Design Your Notebook
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Premium Pages</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Custom Cover</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <PenTool className="w-8 h-8 text-amber-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Versatile</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/LogoPics/magnet.jpg"
                alt="Personalized Custom Notebook"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-slate-300/20 rounded-full blur-3xl"></div>
      </section>


      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Notebook Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium personalized notebooks and journals for capturing your thoughts in style
            </p>
          </div>


          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Magnets.map((product) => (
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
                  {/* <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add wishlist logic here
                    }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors group/wishlist"
                  >
                    <Heart className="w-5 h-5 text-gray-700 group-hover/wishlist:text-pink-500 transition-colors" />
                  </button> */}
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


    </div>
  );
}
