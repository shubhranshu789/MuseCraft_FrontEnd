'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { miniBooks, type Product } from '@/lib/data/products';
import { Heart, BookOpen, Gift } from 'lucide-react';
import Navbar from '@/components/navbar';

export default function MemoryBooksPage() {
  const router = useRouter();

  const gotoParticularProduct = (book: Product) => {
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
                Preserve Your
                <span className="block text-gray-700">Precious Moments</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Create timeless memories with our handcrafted memory books. 
                Each page tells a story, each moment becomes eternal.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/LogoPics/Novel.jpg"
                alt="Memory Books Hero"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of beautifully crafted memory books designed for every special occasion
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miniBooks.map((book) => (
              <div
                key={book.id}
                onClick={() => gotoParticularProduct(book)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Discount Badge */}
                  {book.discount > 0 && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {book.discount}% OFF
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {book.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {book.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < book.rating ? '★' : '☆'}>
                          {i < book.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    {book.reviews > 0 && (
                      <span className="text-sm text-gray-500">({book.reviews})</span>
                    )}
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{book.price}
                      </span>
                      {book.originalPrice > book.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{book.originalPrice}
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
