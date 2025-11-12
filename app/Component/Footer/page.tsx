'use client';

import { motion } from 'framer-motion';
import { Gift, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';
import Link from 'next/link';

// import "../../Component/FooterComponents/TermsNCondition"

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const Pinterest = (props: any) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
    )

    const footerLinks = {
        company: [
            { name: 'About Us', href: '/Component/FooterComponents/About' },
            // { name: 'Contact Us', href: '/contact' },
            // { name: 'Our Story', href: '/our-story' },
            // { name: 'Careers', href: '/careers' },
        ],
        policies: [
            { name: 'Privacy Policy', href: '/Component/FooterComponents/Policy' },
            { name: 'Refund & Cancellation', href: '/Component/FooterComponents/Refund' },
            { name: 'Terms & Conditions', href: '/Component/FooterComponents/TermsNCondition' },
            // { name: 'Shipping Policy', href: '/shipping' },
        ],
        support: [
            { name: 'FAQs', href: '/Component/FooterComponents/FAQs' },
            // { name: 'Track Order', href: '/track-order' },
            // { name: 'Size Guide', href: '/size-guide' },
            // { name: 'How to Order', href: '/how-to-order' },
        ],
        // shop: [
        //     { name: 'For Boyfriend', href: '/category/boyfriend' },
        //     { name: 'For Girlfriend', href: '/category/girlfriend' },
        //     { name: 'For Parents', href: '/category/parents' },
        //     { name: 'View All', href: '/products' },
        // ],
    };

    const socialLinks = [
        // { icon: Facebook, href: 'https://facebook.com/musecrafts', color: 'hover:text-blue-600' },
        { icon: Instagram, href: 'https://www.instagram.com/himusecrafts?igsh=MWdqYW8wYzhneHpwdQ==', color: 'hover:text-pink-600' },
        // { icon: Twitter, href: 'https://twitter.com/musecrafts', color: 'hover:text-sky-500' },
        { icon: Pinterest, href: 'https://pin.it/72HUrRFZO', color: 'hover:text-[#E60023]' }

    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Newsletter Section */}
            {/* <div className="bg-gradient-to-r from-red-600 to-pink-600">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                Stay Updated with MuseCrafts
                            </h3>
                            <p className="text-white/90">
                                Subscribe to get special offers, free giveaways, and exclusive deals
                            </p>
                        </div>
                        <div className="w-full md:w-auto">
                            <div className="flex gap-2 max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Gift className="w-8 h-8 text-red-600" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                                MuseCrafts
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Creating memorable moments through personalized gifts. Every piece is crafted with love,
                            care, and attention to detail to make your celebrations truly special.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-red-600" />
                                <a href="mailto:support@musecrafts.com">querymusecrafts@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-red-600" />
                                <a href="mailto:himusecrafts@gmail.com">himusecrafts@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-red-600" />
                                <a href="tel:+911234567890">+91 7428326159</a>
                            </div>
                            <div className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-red-600 mt-1" />
                                <span>Delhi, India</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all ${social.color}`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policies Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Policies</h4>
                        <ul className="space-y-3">
                            {footerLinks.policies.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Customer Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>






                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © 2024 MuseCrafts. All rights reserved.{' '}
                        </p>

                    </div>
                    <p className="text-gray-400 text-sm text-center md:text-left mt-2">
                        Made By Shubh
                        <Heart className="inline w-4 h-4 text-red-600 fill-red-600" />
                    </p>
                </div>
            </div>
        </footer>
    );
}
