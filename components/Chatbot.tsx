'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Send, X, MessageCircle, Sparkles } from 'lucide-react'
import { Product } from '@/lib/data/products'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  products?: Product[]
  timestamp: Date
}

interface ChatbotProps {
  allProducts: Product[]
}

export default function Chatbot({ allProducts }: ChatbotProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! 👋 I'm your Musecraft assistant. I can help you find the perfect personalized gift! What are you looking for today?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Navigation functions based on product ID
  const handleProductClick = (product: Product) => {
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
      inside6: product.inside6,
      loveit1: product.loveit1,
      loveit2: product.loveit2,
      loveit3: product.loveit3,
      loveit4: product.loveit4,
    }).toString()

    router.push(`/Component/ParticularProduct2?${query}`)
  }

  const handleProductClick3 = (product: Product) => {
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
      inside6: product.inside6,
      loveit1: product.loveit1,
      loveit2: product.loveit2,
      loveit3: product.loveit3,
      loveit4: product.loveit4,
    }).toString()

    router.push(`/Component/ParticularProduct3?${query}`)
  }

  const handleProductClick4 = (product: Product) => {
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
      inside6: product.inside6,
      loveit1: product.loveit1,
      loveit2: product.loveit2,
      loveit3: product.loveit3,
      loveit4: product.loveit4,
    }).toString()

    router.push(`/Component/ParticularProduct4?${query}`)
  }

  const handleProductClick5 = (product: Product) => {
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
      inside6: product.inside6,
      loveit1: product.loveit1,
      loveit2: product.loveit2,
      loveit3: product.loveit3,
      loveit4: product.loveit4,
    }).toString()

    router.push(`/Component/ParticularProduct5?${query}`)
  }

  const handleProductClick6 = (product: Product) => {
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
      inside6: product.inside6,
      loveit1: product.loveit1,
      loveit2: product.loveit2,
      loveit3: product.loveit3,
      loveit4: product.loveit4,
    }).toString()

    router.push(`/Component/ParticularProduct6?${query}`)
  }

  const handleProductClick7 = (product: Product) => {
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
      inside6: product.inside6,
      loveit1: product.loveit1,
      loveit2: product.loveit2,
      loveit3: product.loveit3,
      loveit4: product.loveit4,
    }).toString()

    router.push(`/Component/ParticularProduct7?${query}`)
  }

  // Main navigation router based on product ID
  const handleCardClick = (product: Product) => {
    const productId = product.id.toLowerCase()
    
    if (productId.startsWith('m')) {
      handleProductClick(product)
    } else if (productId.startsWith('pm')) {
      handleProductClick4(product)
    } else if (productId.startsWith('pf')) {
      handleProductClick5(product)
    } else if (productId.startsWith('wb')) {
      handleProductClick6(product)
    } else if (productId.startsWith('mag')) {
      handleProductClick7(product)
    } else {
      handleProductClick3(product)
    }
  }

  // Product search and recommendation logic
  const findProducts = (query: string): Product[] => {
    const lowerQuery = query.toLowerCase()
    
    return allProducts.filter(product => {
      const searchableText = `
        ${product.title} 
        ${product.description} 
        ${product.description2} 
        ${product.description3}
        ${product.loveit1} 
        ${product.loveit2}
      `.toLowerCase()
      
      return searchableText.includes(lowerQuery)
    }).slice(0, 3)
  }

  // Intent detection
  const detectIntent = (message: string): string => {
    const lowerMsg = message.toLowerCase()
    
    if (/(hi|hello|hey|greetings)/i.test(lowerMsg)) return 'greeting'
    if (/(price|cost|how much|budget|cheap|expensive)/i.test(lowerMsg)) return 'price'
    if (/(journal|gratitude|diary)/i.test(lowerMsg)) return 'journal'
    if (/(novel|book|story)/i.test(lowerMsg)) return 'novel'
    if (/(fragrance|candle|scent)/i.test(lowerMsg)) return 'fragrance'
    if (/(frame|photo|picture)/i.test(lowerMsg)) return 'frame'
    if (/(calendar|desk)/i.test(lowerMsg)) return 'calendar'
    if (/(wallet|card)/i.test(lowerMsg)) return 'wallet'
    if (/(magnet|fridge)/i.test(lowerMsg)) return 'magnet'
    if (/(caricature|cartoon)/i.test(lowerMsg)) return 'caricature'
    if (/(magazine|mag)/i.test(lowerMsg)) return 'magazine'
    if (/(white book|blank)/i.test(lowerMsg)) return 'whitebook'
    if (/(birthday|anniversary|valentine|wedding|mother|father)/i.test(lowerMsg)) return 'occasion'
    if (/(gift|present)/i.test(lowerMsg)) return 'gift'
    if (/(bestseller|popular|trending|top)/i.test(lowerMsg)) return 'bestseller'
    
    return 'general'
  }

  // Generate bot response
  const generateResponse = (userMessage: string): { text: string; products?: Product[] } => {
    const intent = detectIntent(userMessage)
    const lowerMsg = userMessage.toLowerCase()
    
    switch (intent) {
      case 'greeting':
        return {
          text: "Hello! 😊 I'm here to help you find the perfect personalized gift. We have journals, novels, fragrances, frames, and more! What catches your interest?"
        }
      
      case 'price':
        const priceRange = lowerMsg.match(/\d+/)
        if (priceRange) {
          const budget = parseInt(priceRange[0])
          const affordableProducts = allProducts
            .filter(p => p.price <= budget)
            .slice(0, 3)
          
          return {
            text: `Here are some amazing products under ₹${budget}:`,
            products: affordableProducts
          }
        }
        return {
          text: "Our products range from ₹199 to ₹2999. What's your budget? I can show you the best options!"
        }
      
      case 'journal':
        const journals = allProducts.filter(p => 
          p.id.toLowerCase().startsWith('j') ||
          p.title.toLowerCase().includes('journal') || 
          p.title.toLowerCase().includes('gratitude')
        )
        return {
          text: "Our journals are perfect for mindfulness and self-reflection! Here are our popular options:",
          products: journals.slice(0, 3)
        }
      
      case 'novel':
        const novels = allProducts.filter(p => 
          p.id.toLowerCase().startsWith('m') || 
          p.description?.toLowerCase().includes('story')
        )
        return {
          text: "Personalized novels where you become the main character! Check these out:",
          products: novels.slice(0, 3)
        }
      
      case 'fragrance':
        const fragrances = allProducts.filter(p => p.id.toLowerCase().startsWith('fa'))
        return {
          text: "Our handcrafted scented candles create the perfect ambiance. Here are my top picks:",
          products: fragrances.slice(0, 3)
        }
      
      case 'frame':
        const frames = allProducts.filter(p => p.id.toLowerCase().startsWith('pf'))
        return {
          text: "Personalized photo frames to cherish your memories! Take a look:",
          products: frames.slice(0, 3)
        }

      case 'calendar':
        const calendars = allProducts.filter(p => p.id.toLowerCase().startsWith('dc'))
        return {
          text: "Personalized desk calendars to organize your year in style:",
          products: calendars.slice(0, 3)
        }

      case 'wallet':
        const wallets = allProducts.filter(p => p.id.toLowerCase().startsWith('wc'))
        return {
          text: "Custom wallet cards - compact and meaningful:",
          products: wallets.slice(0, 3)
        }

      case 'magnet':
        const magnets = allProducts.filter(p => p.id.toLowerCase().startsWith('mag'))
        return {
          text: "Custom fridge magnets to brighten your kitchen:",
          products: magnets.slice(0, 3)
        }

      case 'caricature':
        const caricatures = allProducts.filter(p => p.id.toLowerCase().startsWith('c'))
        return {
          text: "Fun personalized caricatures that capture personalities:",
          products: caricatures.slice(0, 3)
        }

      case 'magazine':
        const magazines = allProducts.filter(p => p.id.toLowerCase().startsWith('pm'))
        return {
          text: "Personalized magazines with your story:",
          products: magazines.slice(0, 3)
        }

      case 'whitebook':
        const whiteBooks = allProducts.filter(p => p.id.toLowerCase().startsWith('wb'))
        return {
          text: "Elegant white books - blank canvas for your creativity:",
          products: whiteBooks.slice(0, 3)
        }
      
      case 'bestseller':
        const bestsellers = allProducts
          .filter(p => p.bestseller || p.trending)
          .slice(0, 3)
        return {
          text: "Here are our bestselling and trending products loved by our customers:",
          products: bestsellers
        }
      
      case 'occasion':
        let occasionProducts: Product[] = []
        if (/birthday/i.test(lowerMsg)) {
          occasionProducts = allProducts.filter(p => 
            p.description?.toLowerCase().includes('birthday')
          )
        } else if (/anniversary|valentine/i.test(lowerMsg)) {
          occasionProducts = allProducts.filter(p => 
            p.description?.toLowerCase().includes('anniversary') ||
            p.description?.toLowerCase().includes('valentine')
          )
        }
        
        return {
          text: "Perfect gifts for your special occasion:",
          products: occasionProducts.length > 0 ? occasionProducts.slice(0, 3) : allProducts.slice(0, 3)
        }
      
      default:
        const searchResults = findProducts(userMessage)
        if (searchResults.length > 0) {
          return {
            text: "I found these products for you:",
            products: searchResults
          }
        }
        return {
          text: "I'd love to help! Try asking about journals, novels, fragrances, frames, calendars, magnets, or tell me the occasion you're shopping for! 🎁"
        }
    }
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const response = generateResponse(inputValue)
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.text,
        products: response.products,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-25 right-9 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 z-50 group "
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-25 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Musecraft Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id}>
                <div
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>

                {/* Product Cards with Navigation */}
                {message.products && message.products.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {message.products.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleCardClick(product)}
                        className="bg-white border border-gray-200 rounded-xl p-3 hover:shadow-lg hover:border-purple-300 transition-all cursor-pointer group"
                      >
                        <div className="flex gap-3">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm text-gray-900 line-clamp-1 group-hover:text-purple-600 transition">
                              {product.title}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                              {product.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="font-bold text-purple-600">₹{product.price}</span>
                              {product.discount > 0 && (
                                <>
                                  <span className="text-xs text-gray-400 line-through">
                                    ₹{product.originalPrice}
                                  </span>
                                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                    {product.discount}% OFF
                                  </span>
                                </>
                              )}
                            </div>
                            <p className="text-xs text-purple-600 mt-1 opacity-0 group-hover:opacity-100 transition">
                              Click to view details →
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-full hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
