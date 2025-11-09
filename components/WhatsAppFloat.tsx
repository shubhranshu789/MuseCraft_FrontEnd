'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  // Replace with your WhatsApp number (include country code without + or -)
  const phoneNumber = '919511382448'; // Example: India number
  const defaultMessage = 'Hi! I have a question about your products.';

  const handleSendMessage = () => {
    const text = message || defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 w-80 md:w-96 bg-white rounded-lg shadow-2xl z-[999] animate-slideUp">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <FaWhatsapp className="text-[#25D366] text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold">Chat with us</h3>
                <p className="text-xs text-gray-200">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-[#064e45] p-1 rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-gray-50">
            <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
              <p className="text-sm text-gray-700">
                👋 Hi there! How can we help you today?
              </p>
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366] resize-none"
              rows={3}
            />

            <button
              onClick={handleSendMessage}
              className="w-full mt-3 bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={20} />
              Send Message
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all hover:scale-110 z-[999] flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X size={28} className="md:w-8 md:h-8" />
        ) : (
          <FaWhatsapp size={32} className="md:w-9 md:h-9 animate-pulse" />
        )}
        
        {/* Ripple effect */}
        {/* <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span> */}
      </button>

      {/* Add animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
