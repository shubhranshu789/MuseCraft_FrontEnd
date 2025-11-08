'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, RefreshCw, Package, Truck, Clock, AlertTriangle, Globe, Mail, Calendar, ChevronRight } from 'lucide-react';
import Navbar from "@/components/navbar"

export default function RefundCancellationPolicy() {
    const [activeTab, setActiveTab] = useState('cancellation');

    const tabs = [
        { id: 'cancellation', label: 'Cancellation', icon: XCircle },
        { id: 'replacements', label: 'Replacements', icon: RefreshCw },
        { id: 'shipping', label: 'Shipping', icon: Truck },
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
                                    <Package className="w-16 h-16" />
                                </div>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                Refund & Cancellation Policy
                            </h1>
                            <p className="text-xl text-white/90 mb-4">
                                We are here to assist you if you have any concerns about your purchase.
                            </p>
                            <div className="flex items-center justify-center gap-2 text-white/80">
                                <Calendar className="w-5 h-5" />
                                <span>Effective Date: 16th December, 2024</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Tabs Navigation */}
                <section className="py-8 px-4 bg-white shadow-md sticky top-0 z-40">
                    <div className="container mx-auto max-w-4xl">
                        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <motion.button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                                            activeTab === tab.id
                                                ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        <Icon className="w-5 h-5" />
                                        {tab.label}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="py-16 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <AnimatePresence mode="wait">
                            {/* Cancellation Policy */}
                            {activeTab === 'cancellation' && (
                                <motion.div
                                    key="cancellation"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="bg-gradient-to-br from-red-600 to-pink-600 p-3 rounded-xl">
                                                <XCircle className="w-8 h-8 text-white" />
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                                Cancellation Policy
                                            </h2>
                                        </div>

                                        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-6">
                                            <div className="flex items-start gap-3">
                                                <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-bold text-lg text-red-900 mb-2">
                                                        Cancellation of Orders
                                                    </h3>
                                                    <p className="text-red-800 leading-relaxed">
                                                        Once an order has been placed, it cannot be cancelled, modified, or refunded 
                                                        under any circumstances. We encourage you to carefully review your order before 
                                                        completing the purchase.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Replacements Policy */}
                            {activeTab === 'replacements' && (
                                <motion.div
                                    key="replacements"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="bg-gradient-to-br from-red-600 to-pink-600 p-3 rounded-xl">
                                                <RefreshCw className="w-8 h-8 text-white" />
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                                Replacements
                                            </h2>
                                        </div>

                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                                    Exchange requests will be considered solely for products that are received by 
                                                    the customer in a <strong>damaged or incorrect condition</strong>.
                                                </p>
                                            </div>

                                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                                                <h3 className="font-bold text-lg text-blue-900 mb-3">
                                                    Reporting Timeline
                                                </h3>
                                                <p className="text-blue-800 leading-relaxed">
                                                    The buyer or recipient must notify us of any damaged or incorrect products 
                                                    <strong> within 2 days</strong> of receiving the goods.
                                                </p>
                                            </div>

                                            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                                                <h3 className="font-bold text-lg text-yellow-900 mb-3">
                                                    Evidence Required
                                                </h3>
                                                <p className="text-yellow-800 leading-relaxed mb-3">
                                                    For customers claiming missing items or damaged products, we require an 
                                                    <strong> unedited unboxing video</strong> as evidence.
                                                </p>
                                                <p className="text-yellow-800 leading-relaxed">
                                                    The customer is required to share the complete video with us via email at{' '}
                                                    <a 
                                                        href="mailto:querrymusecrafts@gmail.com"
                                                        className="text-red-600 font-semibold hover:underline"
                                                    >
                                                        querrymusecrafts@gmail.com
                                                    </a>
                                                </p>
                                            </div>

                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900 mb-3">
                                                    Replacement Process
                                                </h3>
                                                <ul className="space-y-3">
                                                    <li className="flex items-start gap-3">
                                                        <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                                        <span className="text-gray-700">
                                                            Once the photos/videos are received and inspected, we will notify you 
                                                            regarding the verification of the damaged product.
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                                        <span className="text-gray-700">
                                                            We will inform you of the approval or rejection of your replacement request.
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                                        <span className="text-gray-700">
                                                            In certain situations replacement may be provided, contingent upon the 
                                                            circumstances. This applies to items that are not in their original condition, 
                                                            damaged, or missing parts for reasons unrelated to our error.
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                                        <span className="text-gray-700">
                                                            If your request is approved, it will be processed from our end within 
                                                            <strong> 24 to 48 hours</strong>.
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                                        <span className="text-gray-700">
                                                            In the event that we are unable to provide a replacement, we will issue 
                                                            MuseCrafts credit, which can be applied toward your next order.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Shipping Policy */}
                            {activeTab === 'shipping' && (
                                <motion.div
                                    key="shipping"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="space-y-6">
                                        {/* Process Time */}
                                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="bg-gradient-to-br from-red-600 to-pink-600 p-3 rounded-xl">
                                                    <Clock className="w-8 h-8 text-white" />
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                                    Process Time
                                                </h2>
                                            </div>

                                            <p className="text-gray-700 mb-6">
                                                Given the customised and handmade nature of the products, kindly allow us:
                                            </p>

                                            <div className="space-y-6">
                                                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                                                    <h3 className="font-bold text-lg text-purple-900 mb-3">
                                                        For Personalized Products (Novels, Magazines, Calendars, Whitebook)
                                                    </h3>
                                                    <ul className="space-y-2 text-purple-800">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-purple-600 mt-1">•</span>
                                                            <span>Each order is carefully designed and crafted within <strong>5–7 business days</strong>.</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-purple-600 mt-1">•</span>
                                                            <span>Once the draft is ready, a PDF version will be shared with the customer via WhatsApp or email for approval.</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-purple-600 mt-1">•</span>
                                                            <span>Upon receiving the customer's final confirmation, the product will be published, printed, and dispatched within <strong>3–4 business days</strong>.</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                                    <h3 className="font-bold text-lg text-green-900 mb-3">
                                                        For All Other Products
                                                    </h3>
                                                    <p className="text-green-800">
                                                        Orders will be processed and crafted within <strong>5–7 business days</strong> before dispatch.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Shipping Timelines */}
                                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="bg-gradient-to-br from-red-600 to-pink-600 p-3 rounded-xl">
                                                    <Truck className="w-8 h-8 text-white" />
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                                    Shipping Timelines
                                                </h2>
                                            </div>

                                            <p className="text-gray-700 mb-6">
                                                After dispatch, delivery timelines are as follows:
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                                                    <div className="text-3xl font-bold text-blue-600 mb-2">2-4</div>
                                                    <div className="text-sm text-blue-900 font-semibold mb-1">working days</div>
                                                    <div className="text-sm text-blue-800">Express Shipping (Metro & Tier-1 Cities)</div>
                                                </div>
                                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                                                    <div className="text-3xl font-bold text-green-600 mb-2">4-9</div>
                                                    <div className="text-sm text-green-900 font-semibold mb-1">working days</div>
                                                    <div className="text-sm text-green-800">Standard Shipping (PAN India)</div>
                                                </div>
                                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                                                    <div className="text-3xl font-bold text-purple-600 mb-2">10-12</div>
                                                    <div className="text-sm text-purple-900 font-semibold mb-1">working days</div>
                                                    <div className="text-sm text-purple-800">International Shipping</div>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <p className="text-sm text-gray-600 italic">
                                                    Delivery timelines are estimates and may vary due to unforeseen circumstances such as 
                                                    logistics delays, customs clearance (for international orders), or force majeure events.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Dispatch & Tracking */}
                                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                Dispatch & Tracking
                                            </h3>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-3">
                                                    <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">
                                                        Customers will be notified once the order has been dispatched.
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">
                                                        A tracking ID will be shared via WhatsApp or email to enable real-time tracking.
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <ChevronRight className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">
                                                        The Company shall not be held liable for delays caused by third-party courier 
                                                        services or incorrect shipping details provided by the customer.
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* International Orders */}
                                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                                            <div className="flex items-center gap-4 mb-4">
                                                <Globe className="w-8 h-8 text-red-600" />
                                                <h3 className="text-2xl font-bold text-gray-900">
                                                    International Orders
                                                </h3>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">
                                                For international deliveries, additional customs duties, taxes, or import fees 
                                                (if applicable) shall be borne by the customer. The Company shall not be responsible 
                                                for delays arising from customs procedures or local regulations.
                                            </p>
                                        </div>

                                        {/* Important Notes */}
                                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                Important Notes
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                                                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                                                    <p className="text-orange-800">
                                                        Orders are not shipped or delivered on weekends or holidays.
                                                    </p>
                                                </div>
                                                <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                                                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                                                    <p className="text-orange-800">
                                                        During periods of high order volume or unforeseen circumstances, the production 
                                                        and shipment of personalised items may experience delays of 2 to 3 days beyond 
                                                        the estimated delivery date.
                                                    </p>
                                                </div>
                                                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                                                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                                    <div>
                                                        <h4 className="font-bold text-red-900 mb-1">Non-Refundable Logistics Delay</h4>
                                                        <p className="text-red-800">
                                                            MuseCrafts is not liable for delays in product delivery due to logistics issues, 
                                                            including carrier delays, customs clearance, or other unforeseen logistics 
                                                            circumstances. Therefore, refunds will not be provided for delays caused by 
                                                            such logistical factors.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Customs */}
                                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                Customs, Duties and Taxes
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                MuseCrafts holds no responsibility for any customs fees or taxes incurred on your order. 
                                                Any charges imposed during or after shipping, including tariffs and taxes, are the sole 
                                                responsibility of the customer.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Footer Note */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl shadow-2xl p-8 text-white"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <AlertTriangle className="w-8 h-8 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Please Note</h3>
                                    <p className="text-white/90 mb-4">
                                        By placing an order, you acknowledge and agree to adhere to this cancellation policy. 
                                        For any further queries or clarifications regarding our cancellation policy, kindly 
                                        contact our customer service team.
                                    </p>
                                    <p className="text-sm text-white/80 italic">
                                        This policy is subject to change without prior notice. Please review the latest version 
                                        before placing an order.
                                    </p>
                                </div>
                            </div>
                            <motion.a
                                href="mailto:querrymusecrafts@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:shadow-2xl transition-all"
                            >
                                <Mail className="w-5 h-5" />
                                Contact Us
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
            </div>
        </div>

    );
}
