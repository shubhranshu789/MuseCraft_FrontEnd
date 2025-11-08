'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ShoppingCart, Package, CreditCard, Shield, AlertTriangle, Mail, Calendar, CheckCircle, XCircle } from 'lucide-react';
import Navbar from "@/components/navbar"


export default function TermsAndConditions() {
    const [activeSection, setActiveSection] = useState<number | null>(0);

    const sections = [
        {
            icon: FileText,
            title: "Acceptance of Terms",
            content: "By accessing and using the MuseCrafts website (\"Site\") and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our Site or services. These terms apply to all visitors, users, and customers of MuseCrafts."
        },
        {
            icon: ShoppingCart,
            title: "Use of Website",
            content: [
                "You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.",
                "You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.",
                "You are prohibited from using our website to transmit or send unsolicited commercial communications or to engage in any activity that could harm our business reputation."
            ]
        },
        {
            icon: Package,
            title: "Product Information & Customization",
            content: [
                "All products sold on MuseCrafts are customized and personalized according to customer specifications provided during the order process.",
                "We strive to display product images and descriptions as accurately as possible. However, actual products may vary slightly due to the handmade and customized nature of our items.",
                "Customers are responsible for providing accurate and complete information for personalization. MuseCrafts is not liable for errors resulting from incorrect customer inputs.",
                "A digital preview will be shared with customers for approval before final production. Once approved and production begins, no modifications can be made."
            ]
        },
        {
            icon: ShoppingCart,
            title: "Orders & Pricing",
            content: [
                "All prices listed on our website are in Indian Rupees (INR) unless otherwise specified and are subject to change without prior notice.",
                "Once an order is placed and payment is confirmed, it constitutes a binding contract between you and MuseCrafts.",
                "We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity.",
                "In case of order cancellation by MuseCrafts, a full refund will be processed within 7-10 business days."
            ]
        },
        {
            icon: CreditCard,
            title: "Payment Terms",
            content: [
                "We accept payments via credit/debit cards, net banking, UPI, and other payment methods as displayed during checkout.",
                "Payment must be made in full at the time of placing the order.",
                "All payment transactions are processed through secure third-party payment gateways. MuseCrafts does not store or have access to your complete payment information.",
                "In case of payment failure, your order will not be processed until successful payment is received."
            ]
        },
        {
            icon: XCircle,
            title: "Cancellation & Refund Policy",
            content: [
                "Once an order has been placed, it cannot be cancelled, modified, or refunded under any circumstances due to the personalized nature of our products.",
                "Customers are encouraged to carefully review all details before completing their purchase.",
                "For detailed information, please refer to our complete Refund and Cancellation Policy."
            ]
        },
        {
            icon: Package,
            title: "Shipping & Delivery",
            content: [
                "Delivery timelines vary based on product type and location. Personalized products take 5-7 business days for creation, followed by 3-4 business days for printing and dispatch after approval.",
                "Standard shipping within India takes 4-9 working days after dispatch. Express shipping to metro cities takes 2-4 working days.",
                "International shipping takes 10-12 working days after dispatch.",
                "MuseCrafts is not liable for delays caused by courier services, customs clearance, incorrect shipping addresses, or force majeure events.",
                "Risk of loss and title for items purchased pass to you upon delivery to the carrier."
            ]
        },
        {
            icon: Shield,
            title: "Intellectual Property Rights",
            content: [
                "All content on the MuseCrafts website, including but not limited to text, graphics, logos, images, designs, and software, is the property of MuseCrafts or its content suppliers and is protected by Indian and international copyright laws.",
                "You may not reproduce, distribute, modify, or create derivative works from any content on our website without express written permission from MuseCrafts.",
                "Customer-provided content for personalization remains the property of the customer. By submitting content, you grant MuseCrafts a license to use it solely for the purpose of creating your customized product.",
                "MuseCrafts retains the right to showcase completed products (with customer consent) for marketing and promotional purposes."
            ]
        },
        {
            icon: Shield,
            title: "Privacy & Data Protection",
            content: [
                "Your privacy is important to us. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal information.",
                "By using our website, you consent to the collection and use of your information as outlined in our Privacy Policy.",
                "We implement reasonable security measures to protect your personal data, but cannot guarantee absolute security of information transmitted over the internet."
            ]
        },
        {
            icon: AlertTriangle,
            title: "Limitation of Liability",
            content: [
                "MuseCrafts shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or products.",
                "Our total liability to you for any claims arising from your use of our services shall not exceed the amount you paid for the product giving rise to the claim.",
                "MuseCrafts is not responsible for delays, damages, or losses caused by events beyond our reasonable control, including but not limited to natural disasters, strikes, or government actions.",
                "Products are sold \"as is\" after customer approval of the digital preview. MuseCrafts is not liable for customer satisfaction once the preview has been approved."
            ]
        },
        {
            icon: CheckCircle,
            title: "Dispute Resolution",
            content: [
                "Any disputes arising from these Terms and Conditions or your use of our services shall first be attempted to be resolved through good faith negotiations.",
                "If a dispute cannot be resolved amicably, it shall be subject to the exclusive jurisdiction of the courts in Delhi, India.",
                "These Terms and Conditions shall be governed by and construed in accordance with the laws of India."
            ]
        },
        {
            icon: FileText,
            title: "Modifications to Terms",
            content: [
                "MuseCrafts reserves the right to modify these Terms and Conditions at any time without prior notice.",
                "Changes will be effective immediately upon posting on our website with an updated effective date.",
                "Your continued use of our website after changes are posted constitutes your acceptance of the modified terms.",
                "We encourage you to review these Terms and Conditions periodically."
            ]
        },
        {
            icon: Mail,
            title: "Contact Information",
            content: [
                "If you have any questions, concerns, or complaints regarding these Terms and Conditions, please contact us at:",
                "Email: querrymusecrafts@gmail.com",
                "We aim to respond to all inquiries within 24-48 business hours."
            ]
        }
    ];

    const toggleSection = (index: number) => {
        setActiveSection(activeSection === index ? null : index);
    };

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
                            <div className="flex justify-center mb-6">
                                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                                    <FileText className="w-16 h-16" />
                                </div>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                Terms & Conditions
                            </h1>
                            <p className="text-xl text-white/90 mb-4">
                                Please read these terms carefully before using our services
                            </p>
                            <div className="flex items-center justify-center gap-2 text-white/80">
                                <Calendar className="w-5 h-5" />
                                <span>Effective Date: 16th December, 2024</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Introduction */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-red-100"
                        >
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Welcome to MuseCrafts</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                These Terms and Conditions govern your use of our website and the purchase of our products. 
                                By accessing our website and placing orders, you acknowledge that you have read, understood, 
                                and agree to be bound by these terms. Please take a moment to review them carefully.
                            </p>
                        </motion.div>

                        {/* Accordion Sections */}
                        <div className="space-y-4">
                            {sections.map((section, index) => {
                                const Icon = section.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                                    >
                                        <button
                                            onClick={() => toggleSection(index)}
                                            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="bg-gradient-to-br from-red-600 to-pink-600 p-3 rounded-xl">
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900">
                                                    {section.title}
                                                </h3>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: activeSection === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="ml-4"
                                            >
                                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {activeSection === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 pt-2">
                                                        <div className="pl-4 border-l-4 border-red-600">
                                                            {typeof section.content === 'string' ? (
                                                                <p className="text-gray-700 leading-relaxed">
                                                                    {section.content}
                                                                </p>
                                                            ) : (
                                                                <ul className="space-y-3">
                                                                    {section.content.map((item, itemIndex) => (
                                                                        <li key={itemIndex} className="flex items-start gap-3">
                                                                            <div className="mt-2 flex-shrink-0">
                                                                                <div className="w-2 h-2 bg-red-600 rounded-full" />
                                                                            </div>
                                                                            <span className="text-gray-700 leading-relaxed">{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Acknowledgment */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mt-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Acknowledgment</h3>
                                    <p className="text-white/90 leading-relaxed mb-4">
                                        By using our website and services, you acknowledge that you have read these Terms and 
                                        Conditions in their entirety and agree to be bound by them. If you do not agree with 
                                        any part of these terms, you must discontinue use of our website immediately.
                                    </p>
                                    <p className="text-white/90 leading-relaxed mb-6">
                                        These terms constitute the entire agreement between you and MuseCrafts and supersede 
                                        all prior agreements or understandings.
                                    </p>
                                    {/* <motion.a
                                        href="mailto:querrymusecrafts@gmail.com"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all"
                                    >
                                        <Mail className="w-6 h-6" />
                                        Contact Us for Questions
                                    </motion.a> */}
                                </div>
                            </div>
                        </motion.div>

                        
                        
                    </div>
                </section>
            </div>
        </div>

    );
}
