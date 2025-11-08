'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Calendar, CheckCircle } from 'lucide-react';
import Navbar from "@/components/navbar"


export default function PrivacyPolicy() {
    const sections = [
        {
            icon: FileText,
            title: "Information We Collect",
            content: [
                {
                    subtitle: "Personal Information",
                    text: "We may collect personal information such as your name, email address, and other contact details when you voluntarily submit them through forms on our website."
                },
                {
                    subtitle: "Usage Data",
                    text: "We may collect information about your usage of the Site, including IP address, browser type, pages visited, and other analytics data."
                }
            ]
        },
        {
            icon: Eye,
            title: "Use of Information",
            content: [
                {
                    text: "We may use the collected information for the following purposes:",
                    list: [
                        "To provide and maintain our website.",
                        "To personalize your experience on the site.",
                        "To respond to your inquiries or requests.",
                        "To send periodic emails or newsletters."
                    ]
                }
            ]
        },
        {
            icon: Lock,
            title: "Cookies and Tracking Technologies",
            content: [
                {
                    text: "Our website may use cookies and similar tracking technologies to enhance your experience. You can adjust your browser settings to refuse cookies or to be notified when cookies are being sent."
                }
            ]
        },
        {
            icon: Shield,
            title: "Third-Party Links",
            content: [
                {
                    text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites."
                }
            ]
        },
        {
            icon: Lock,
            title: "Data Security",
            content: [
                {
                    text: "We implement reasonable security measures to protect your personal information; however, no method of transmission over the internet or electronic storage is 100% secure."
                }
            ]
        },
        {
            icon: CheckCircle,
            title: "Your Rights",
            content: [
                {
                    text: "You have the right to access, correct, or delete your personal information. If you have any questions or concerns about your privacy, please contact us at querrymusecrafts@gmail.com."
                }
            ]
        },
        {
            icon: FileText,
            title: "Changes to This Privacy Policy",
            content: [
                {
                    text: "We may update our Privacy Policy periodically. The latest version will be posted on this page with the effective date."
                }
            ]
        }
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
                            <div className="flex justify-center mb-6">
                                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                                    <Shield className="w-16 h-16" />
                                </div>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
                            <p className="text-xl text-white/90 mb-4">
                                Your Privacy is Our Priority
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
                            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12"
                        >
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Musecrafts ("we," "our," or "us") values your privacy and is committed to protecting your 
                                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                                your data when you visit our website or interact with us through our Instagram handle.
                            </p>
                        </motion.div>

                        {/* Policy Sections */}
                        <div className="space-y-8">
                            {sections.map((section, index) => {
                                const Icon = section.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                                    >
                                        <div className="p-8">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="bg-gradient-to-br from-red-600 to-pink-600 p-3 rounded-xl">
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                                    {section.title}
                                                </h2>
                                            </div>

                                            <div className="space-y-4">
                                                {section.content.map((item, itemIndex) => (
                                                    <div key={itemIndex}>
                                                        {item.subtitle && (
                                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                                                {item.subtitle}
                                                            </h3>
                                                        )}
                                                        {item.text && (
                                                            <p className="text-gray-700 leading-relaxed mb-3">
                                                                {item.text}
                                                            </p>
                                                        )}
                                                        {item.list && (
                                                            <ul className="space-y-2 ml-4">
                                                                {item.list.map((listItem, listIndex) => (
                                                                    <li key={listIndex} className="flex items-start gap-3">
                                                                        <div className="mt-1 flex-shrink-0">
                                                                            <div className="w-2 h-2 bg-red-600 rounded-full" />
                                                                        </div>
                                                                        <span className="text-gray-700">{listItem}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Contact Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mt-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <Mail className="w-12 h-12" />
                                <h2 className="text-3xl font-bold">Contact Us</h2>
                            </div>
                            <p className="text-lg text-white/90 mb-6">
                                If you have any questions or concerns regarding our Privacy Policy, please contact us at:
                            </p>
                            <motion.a
                                href="mailto:querrymusecrafts@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all"
                            >
                                <Mail className="w-6 h-6" />
                                querrymusecrafts@gmail.com
                            </motion.a>
                        </motion.div>

                        
                    </div>
                </section>

                {/* Trust Indicators */}
                <section className="py-16 px-4 bg-gray-900 text-white">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h3 className="text-3xl font-bold mb-8">Your Data is Safe With Us</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                                    <Shield className="w-12 h-12 mx-auto mb-4 text-green-400" />
                                    <h4 className="text-xl font-bold mb-2">Secure Storage</h4>
                                    <p className="text-white/80">
                                        Industry-standard encryption protects your data
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                                    <Lock className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                                    <h4 className="text-xl font-bold mb-2">No Data Sharing</h4>
                                    <p className="text-white/80">
                                        We never sell your information to third parties
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                                    <CheckCircle className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                                    <h4 className="text-xl font-bold mb-2">Full Control</h4>
                                    <p className="text-white/80">
                                        Access, update, or delete your data anytime
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>

    );
}
