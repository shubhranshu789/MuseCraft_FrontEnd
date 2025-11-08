'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { hampers, type Product } from '@/lib/data/products';
import { Heart, Gift, Sparkles, Package } from 'lucide-react';
import Navbar from '@/components/navbar';

export default function HampersPage() {
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
                Curated Gift
                <span className="block text-gray-700">Hampers with Love</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore our thoughtfully curated gift hampers filled with handpicked treasures. 
                Perfect for every celebration, each hamper is designed to create lasting memories 
                and bring smiles to your loved ones.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Explore Hampers
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Gift className="w-8 h-8 text-purple-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Curated</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Package className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Premium</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <Sparkles className="w-8 h-8 text-amber-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Delightful</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={hampers[0]?.image || 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trending5.JPG-trend5.jpeg'}
                alt="Gift Hampers Hero"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl"></div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hamper Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beautifully packaged gift hampers filled with carefully selected items for every occasion
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hampers.map((product) => (
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
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Trending</span>
                      </div>
                    )}
                    {product.bestseller && (
                      <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                    <Heart className="w-5 h-5 text-gray-700 group-hover/wishlist:text-purple-500 group-hover/wishlist:fill-purple-500 transition-all" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hampers for Every Occasion</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect curated hamper tailored for your special moments
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-2">🎂</div>
              <h3 className="font-semibold text-gray-900">Birthday</h3>
              <p className="text-xs text-gray-600 mt-1">Celebration hampers</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-2">💝</div>
              <h3 className="font-semibold text-gray-900">Anniversary</h3>
              <p className="text-xs text-gray-600 mt-1">Romantic collections</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="font-semibold text-gray-900">Corporate</h3>
              <p className="text-xs text-gray-600 mt-1">Professional gifts</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-2">🎄</div>
              <h3 className="font-semibold text-gray-900">Festivals</h3>
              <p className="text-xs text-gray-600 mt-1">Festive specials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Hampers?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Thoughtfully Curated</h3>
              <p className="text-gray-600">
                Each hamper is carefully assembled with handpicked items that complement each other perfectly
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Packaging</h3>
              <p className="text-gray-600">
                Beautiful presentation with elegant packaging that makes your gift extra special
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Products</h3>
              <p className="text-gray-600">
                Only the finest quality items make it into our hampers—guaranteed satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Inside Our Hampers?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Each hamper is a delightful mix of carefully selected items
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl mb-2">🍫</div>
              <p className="font-medium text-gray-900">Premium Chocolates</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl mb-2">🌸</div>
              <p className="font-medium text-gray-900">Handcrafted Items</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl mb-2">🕯️</div>
              <p className="font-medium text-gray-900">Aromatic Candles</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl mb-2">💌</div>
              <p className="font-medium text-gray-900">Personal Notes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Gift Joy in a Box
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Browse our curated hampers and make every occasion unforgettable with the perfect gift
          </p>
          <button className="bg-gray-900 text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-semibold">
            Shop All Hampers
          </button>
        </div>
      </section> */}
    </div>
  );
}
