'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import {
  products,
  trendingProducts,
  miniBooks,
  gratitudeReminder,
  magzine,
  deskCalender,
  walletCard,
  whiteBook,
  photoFrame,
  Caricurate,

  cards,
  // matchBox,
  flowers,
  hampers,
  creativeLetter,
  type Product
} from '@/lib/data/products'

export default function GiftFinder() {
  const router = useRouter()
  const [selectedOccasion, setSelectedOccasion] = useState('')
  const [selectedRecipient, setSelectedRecipient] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const occasions = ['Birthday', 'Anniversary', 'Valentine', 'Wedding', 'Congratulations', 'Just Because']
  const recipients = ['Him', 'Her', 'Friend', 'Family', 'Colleague']
  const types = ['Personalized Novels', 'Gratitude Reminder', 'Magzine', 'Desk Calender','Wallet Card','White Book', 'Photo Frame' ,'Caricurate']

//  const handleProductClick = (product: Product) => {
//         const query = new URLSearchParams({
//             id: product.id,
//             image: product.image,
//             image2: product.image,
//             title: product.title,
//             price: product.price.toString(),
//             description: product.description
//         }).toString();

//         router.push(`/Component/ParticularProduct2?${query}`);
//     };

    const handleProductClick = (book: Product) => {
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
    


    const handleProductClick3 = (product: Product) => {
        const query = new URLSearchParams({
            id: product.id,
          image: product.image,
          image2: product.image2, // Since your Product interface only has one image
          image3: product.image3, // Since your Product interface only has one image
          title: product.title,
          price: product.price.toString(), // Convert number to string
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
        }).toString();

        router.push(`/Component/ParticularProduct3?${query}`);
    };


    const handleProductClick4 = (product: Product) => {
        const query = new URLSearchParams({
            id: product.id,
          image: product.image,
          image2: product.image2, // Since your Product interface only has one image
          image3: product.image3, // Since your Product interface only has one image
          title: product.title,
          price: product.price.toString(), // Convert number to string
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
        }).toString();

        router.push(`/Component/ParticularProduct4?${query}`);
    };


    const handleProductClick5 = (product: Product) => {
        const query = new URLSearchParams({
            id: product.id,
          image: product.image,
          image2: product.image2, // Since your Product interface only has one image
          image3: product.image3, // Since your Product interface only has one image
          title: product.title,
          price: product.price.toString(), // Convert number to string
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
        }).toString();

        router.push(`/Component/ParticularProduct5?${query}`);
    };

    const handleCardClick = (product: Product) => {
        // Check if product ID starts with 'm'
        if (product.id.toLowerCase().startsWith('m')) {
            handleProductClick(product)
        }else if(product.id.toLowerCase().startsWith('pm')){
          handleProductClick4(product)
        } 
        else if(product.id.toLowerCase().startsWith('pf')){
          handleProductClick5(product)
        } 
        
        else {
            handleProductClick3(product)
        }
    }

  const handleFindGifts = () => {
    if (!selectedType) return

    let categoryProducts: Product[] = []

    if (selectedType === 'Personalized Novels') {
      categoryProducts = miniBooks
    } else if (selectedType === 'Gratitude Reminder') {
      categoryProducts = gratitudeReminder
    } else if (selectedType === 'Magzine') {
      categoryProducts = magzine
    } else if (selectedType === 'Desk Calender') {
      categoryProducts = deskCalender
    }
    else if (selectedType === 'Wallet Card') {
      categoryProducts = walletCard
    }
    else if (selectedType === 'White Book') {
      categoryProducts = whiteBook
    }
    else if (selectedType === 'Photo Frame') {
      categoryProducts = photoFrame
    }
    else if (selectedType === 'Caricurate') {
      categoryProducts = Caricurate
    }
   

    const shuffled = [...categoryProducts].sort(() => 0.5 - Math.random())
    const randomProducts = shuffled.slice(0, Math.min(8, categoryProducts.length))

    setFilteredProducts(randomProducts)
  }

  return (
    <div className="w-full py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Didn't find the Perfect Gift yet? No Problem
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12">
        <Dropdown
          label="Select Occasion"
          options={occasions}
          value={selectedOccasion}
          onChange={setSelectedOccasion}
        />

        <Dropdown
          label="Select For Whom"
          options={recipients}
          value={selectedRecipient}
          onChange={setSelectedRecipient}
        />

        <Dropdown
          label="Select Type"
          options={types}
          value={selectedType}
          onChange={setSelectedType}
        />

        <button
          onClick={handleFindGifts}
          disabled={!selectedType}
          className="px-8 py-4 bg-[#6B7B5E] text-white rounded-lg font-medium hover:bg-[#5a6a4d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 whitespace-nowrap"
        >
          Find Gifts
          <span className="text-xl">→</span>
        </button>
      </div>

      {filteredProducts.length > 0 && (
        <div className="mt-16 max-w-7xl mx-auto">
          <h3 className="text-3xl font-serif text-center mb-8">
            Recommended {selectedType} for You
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleCardClick(product)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

interface DropdownProps {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

function Dropdown({ label, options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full md:w-72">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between hover:border-gray-300 transition-colors text-left"
      >
        <span className={value ? 'text-gray-900' : 'text-gray-500'}>
          {value || label}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option)
                  setIsOpen(false)
                }}
                className="w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

interface ProductCardProps {
  product: Product
  onClick: () => void
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        {product.discount > 0 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            {product.discount}% OFF
          </span>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-2">{product.title}</h4>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}
