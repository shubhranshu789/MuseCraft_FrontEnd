'use client';

import { motion } from 'framer-motion';
import { Gift, Heart, Sparkles, CheckCircle, Book, Calendar, Image as ImageIcon, Palette } from 'lucide-react';

import Navbar from "@/components/navbar"

export default function AboutUs() {
    const features = [
        { icon: CheckCircle, text: 'Handcrafted with care' },
        { icon: Heart, text: 'Personalized for you' },
        { icon: Sparkles, text: 'Unique designs' },
        { icon: Gift, text: 'Perfect for every occasion' },
    ];

    const products = [
        { icon: Book, name: 'Gratitude Journal & Diaries' },
        { icon: Sparkles, name: 'Gratitude Reminders' },
        { icon: Book, name: 'Personalized Novels' },
        { icon: ImageIcon, name: 'Personalized Magazines' },
        { icon: Calendar, name: 'Personalized Desk Calendar' },
        { icon: Gift, name: 'Wallet card' },
        { icon: Book, name: 'White Book' },
        { icon: ImageIcon, name: 'Personalized Frames' },
        { icon: Palette, name: 'Personalized Caricatures' },
        { icon: Sparkles, name: 'Fragrances' },
        { icon: Gift, name: 'Fridge Magnets' },
    ];

    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-r from-red-600 to-pink-600 text-white py-20 overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full"
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">About MuseCrafts</h1>
                            <p className="text-xl md:text-2xl text-white/90">
                                A Haven for Creativity and Personalization
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Welcome Section */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <Gift className="w-12 h-12 text-red-600" />
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome to MuseCrafts</h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We are a team of passionate storytellers, designers, and creators dedicated to turning your memories, 
                                stories, and ideas into beautifully crafted books, magazines, journals, candles and more.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We believe everyone has a story to tell, and those stories deserve to be celebrated in a unique, 
                                meaningful way. Whether it's a heartfelt gift for a loved one, a keepsake of your life's moments, 
                                or a creative project that's close to your heart, we're here to bring your vision to life.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Let's Wrap Your Thoughts Section */}
                <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                                Let's Wrap Your Thoughts in Art
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                                Welcome to MuseCrafts, where we craft emotions into treasures and turn memories into masterpieces. 
                                From bespoke storybooks that we weave your tales to personalized sketches that capture your essence, 
                                every creation is a celebration of individuality.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                                Whether it's Your story in a Novel, timeless Whitebook, or one-of-a-kind keepsakes, we transform your 
                                thoughts into art. Perfect for every bond and occasion, our gifts don't just tell a story, they become 
                                the story. Let's wrap your imagination into something extraordinary!
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Your Every Occasion Section */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
                        >
                            <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
                                Your Every Occasion, Our Perfect Gift
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                                These personalized gifts at MuseCrafts are crafted to make every occasion unforgettable. 
                                Whether it's birthday, anniversary, or just a special moment, our unique creations add a personal 
                                touch that makes any celebration extraordinary. Perfect for family, friends, loved ones or even yourself, 
                                because every moment deserves something meaningful.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-xl transition-all"
                                        >
                                            <Icon className="w-12 h-12 text-red-600 mb-3" />
                                            <p className="font-semibold text-gray-800">{feature.text}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Our Promise Section */}
                <section className="py-16 px-4 bg-gray-900 text-white">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Promise</h2>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
                                At MuseCrafts, we are dedicated to providing you with personalized gifts that truly resonate with 
                                your unique stories and special moments. We promise to deliver nothing less than excellence in every 
                                product we create, with careful attention to detail, creativity, and craftsmanship.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                                Whether it's a heartfelt poem, a custom storybook, or a timeless sketch, our creations are designed 
                                to make your memories last forever. We are committed to turning your emotions into tangible, beautiful 
                                keepsakes that you and your loved ones will cherish for years to come. Every gift we offer is a promise 
                                to make every occasion unforgettable and meaningful.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 rounded-3xl shadow-2xl p-8 md:p-12"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
                                Why Choose Us?
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                At MuseCrafts, we understand that a gift is more than just an object—it's an expression of love, 
                                appreciation, and sentiment. That's why we offer a wide range of personalized products, each designed 
                                to capture the essence of the occasion and the relationship.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Our team works tirelessly to create high-quality, bespoke items that are as unique as the people 
                                they're made for. From custom storybooks to personalized sketches, every product is meticulously 
                                crafted with your needs in mind.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                By choosing us, you're not just choosing a product; you're choosing a heartfelt experience that tells 
                                your story. Our dedication to quality, customer satisfaction, and creativity ensures that you'll always 
                                find the perfect gift, no matter the occasion. Choose us because your memories deserve to be celebrated 
                                in the most special way possible.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Our Products Section */}
                <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-100">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
                                We Specialize in Creating Customized
                            </h2>
                            <p className="text-center text-gray-600 mb-12 text-lg">
                                Unique gifts crafted with love and attention to detail
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product, index) => {
                                    const Icon = product.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05, duration: 0.5 }}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all border-2 border-transparent hover:border-red-200"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="bg-gradient-to-br from-red-600 to-pink-600 p-3 rounded-xl">
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <h3 className="font-semibold text-gray-800 text-lg">{product.name}</h3>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                {/* <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-pink-600 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Create Your Story?
                            </h2>
                            <p className="text-xl mb-8 text-white/90">
                                Let's turn your memories into beautiful, personalized gifts
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                            >
                                Explore Our Collection
                            </motion.button>
                        </motion.div>
                    </div>
                </section> */}
            </div>
        </div>

    );
}
