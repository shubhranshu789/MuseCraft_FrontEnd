'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Mail, MessageCircle, Phone } from 'lucide-react';
import Navbar from "@/components/navbar"

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqData: FAQItem[] = [
        {
            question: "How can I place an Order?",
            answer: "Placing an order is simple! Just browse our website, select the product you want, fill in the required details for personalization, and proceed to checkout.",
            category: "Orders"
        },
        {
            question: "What details do I need to provide for personalization?",
            answer: "The details depend on the product. As we deal in variety of products in customization after the placing of your orders for the books, whether story books, or poetry books or thank you books, white book etc. You will be provided with a questionnaire via E-mail address, or WhatsApp, where you have to answer the required fields/each question. Or you can also send us your story or idea to our team over WhatsApp via text/audio message. After the confirmation from the author of MuseCrafts, we'll further proceed to customize your story!",
            category: "Personalization"
        },
        {
            question: "Can I preview the product before it's finalized?",
            answer: "Yes, we provide a digital preview of most of the products before production to ensure that it is as per your imagination or ideas.",
            category: "Production"
        },
        {
            question: "How long does it take to create and deliver a gift?",
            answer: "Creation time depends on the product. Personalized items usually take 5–7 business days to create. However, would take 10-12 days to deliver vary based on your location.",
            category: "Delivery"
        },
        {
            question: "Can I track my Order?",
            answer: "Yes, once the order is dispatched, you'll receive a tracking number to monitor its journey.",
            category: "Orders"
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept payments via credit/debit cards, net banking, and UPI.",
            category: "Payment"
        },
        {
            question: "Do you offer refunds or replacements for personalized products?",
            answer: "Since our products are custom-made, refunds and replacements are not possible. However, at the time of reviewing your product in digital format, you can tell author to make your suggested changes. Once it is finalized and product is published, you can't cancel the order or demand refund or replacement of the product. For further read our 'refunds and replacements policy'.",
            category: "Refunds & Returns"
        },
        {
            question: "Do you offer bulk orders for corporate or special events?",
            answer: "Yes, we accommodate bulk orders for events, corporate gifting, or special occasions. Contact us for bulk pricing and customizations.",
            category: "Bulk Orders"
        },
        {
            question: "How do I contact customer support if I have more questions?",
            answer: "You can reach us via WhatsApp, email, or call. Visit our 'Contact Us' page for detailed information.",
            category: "Support"
        }
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="bg-gradient-to-r from-red-600 to-pink-600 p-4 rounded-full">
                                <HelpCircle className="w-12 h-12 text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Everything you need to know about MuseCrafts
                        </p>
                    </motion.div>

                    {/* FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        {faqData.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-start gap-4 flex-1">
                                        <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full mt-1">
                                            {faq.category}
                                        </span>
                                        <h3 className="text-lg font-semibold text-gray-900 flex-1">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="ml-4"
                                    >
                                        {activeIndex === index ? (
                                            <Minus className="w-6 h-6 text-red-600" />
                                        ) : (
                                            <Plus className="w-6 h-6 text-gray-400" />
                                        )}
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-2">
                                                <div className="pl-4 border-l-4 border-red-600">
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Still Have Questions Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                        <p className="text-white/90 mb-8 text-lg">
                            Can't find the answer you're looking for? Our friendly team is here to help!
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.a
                                href="https://wa.me/919511382448"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-6 transition-all"
                            >
                                <MessageCircle className="w-12 h-12 mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                                <p className="text-white/80 text-sm">Chat with us instantly</p>
                            </motion.a>

                            <motion.a
                                href="mailto:support@musecrafts.com"
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-6 transition-all"
                            >
                                <Mail className="w-12 h-12 mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                                <p className="text-white/80 text-sm">support@musecrafts.com</p>
                            </motion.a>

                            <motion.a
                                href="tel:+911234567890"
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-6 transition-all"
                            >
                                <Phone className="w-12 h-12 mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                                <p className="text-white/80 text-sm">+91 9511382448</p>
                            </motion.a>
                        </div>
                    </motion.div>

                
                </div>
            </div>
        </div>

    );
}
