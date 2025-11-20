'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, Users, Baby, Dog, Sparkles, User, Star, BookOpen } from 'lucide-react';
// Import your product data
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
    Journal,      // Add this import
    Fragrance,   // Add this import
    Magnets         // Add this import
} from '@/lib/data/products';

// Your existing Product interface (unchanged)
export interface Product {
    id: string;
    title: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviews: number;
    image: string;
    image2: string;
    image3: string;
    description: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
    inside1: string;
    inside2: string;
    inside3: string;
    inside4: string;
    inside5: string;
    inside6: string;
    loveit1: string;
    loveit2: string;
    loveit3: string;
    loveit4: string;
    bestseller?: boolean;
    trending?: boolean;
    category?: string;
    subcategory?: string;
}

interface Category {
    id: string;
    name: string;
    icon: any;
    color: string;
    subcategories: string[];
}

// Updated Category configuration
const categories: Category[] = [
    {
        id: 'boyfriend',
        name: 'For Boyfriend',
        icon: Heart,
        color: 'from-red-500 to-pink-500',
        subcategories: ['Gratitude Reminders', 'Personalized Novels', 'Personalized Magazines', 
                        'Personalized Desk Calendar', 'Wallet Card', 'White Book', 
                        'Personalized Frames', 'Personalized Caricature', 'Fragrances', 'Fridge Magnets']
    },
    {
        id: 'girlfriend',
        name: 'For Girlfriend',
        icon: Heart,
        color: 'from-pink-500 to-purple-500',
        subcategories: ['Gratitude Reminders', 'Personalized Novels', 'Personalized Magazines', 
                        'Personalized Desk Calendar', 'Wallet Card', 'White Book', 
                        'Personalized Frames', 'Personalized Caricature', 'Fragrances', 'Fridge Magnets']
    },
    {
        id: 'parents',
        name: 'For Parents',
        icon: Users,
        color: 'from-blue-500 to-cyan-500',
        subcategories: ['Gratitude Reminders', 'Personalized Novels', 'Personalized Magazines',
                        'Personalized Desk Calendar', 'White Book', 'Personalized Frames', 
                        'Personalized Caricature', 'Fridge Magnets']
    },
    {
        id: 'grandparents',
        name: 'For Grandparents',
        icon: Users,
        color: 'from-amber-500 to-orange-500',
        subcategories: ['Personalized Novels', 'Personalized Desk Calendar', 'White Book', 
                        'Personalized Caricature']
    },
    {
        id: 'siblings',
        name: 'For Siblings',
        icon: Baby,
        color: 'from-green-500 to-emerald-500',
        subcategories: ['Gratitude Journal & Diaries', 'Gratitude Reminders', 'Personalized Novels',
                        'Personalized Desk Calendar', 'White Book', 'Personalized Frames', 
                        'Personalized Caricature', 'Fridge Magnets']
    },
    {
        id: 'friends',
        name: 'For Friends',
        icon: User,
        color: 'from-yellow-500 to-amber-500',
        subcategories: ['Journal & Diaries', 'Gratitude Reminders', 'Personalized Novels',
                        'Personalized Magazines', 'Personalized Desk Calendar', 'White Book', 
                        'Personalized Frames', 'Personalized Caricature', 'Fridge Magnets']
    },
    {
        id: 'pet',
        name: 'For Your Pet',
        icon: Dog,
        color: 'from-purple-500 to-pink-500',
        subcategories: ['Personalized Novels', 'Personalized Magazines', 'White Book', 
                        'Personalized Frames']
    },
    {
        id: 'others',
        name: 'Others',
        icon: Sparkles,
        color: 'from-gray-500 to-slate-500',
        subcategories: ['Fragrances']
    }
];

// Updated getCategoryProducts function
const getCategoryProducts = (categoryId: string): Product[] => {
    switch(categoryId) {
        case 'boyfriend':
            return [
                ...gratitudeReminder.map(p => ({ ...p, category: 'boyfriend', subcategory: 'Gratitude Reminders' })),
                ...miniBooks.filter(book => ['Love Book', 'Take me to YOU', 'Story of Our Life', '365 Days Ago', 'You & Me', 'How We Met', 'Her & Him', 'Thank You Book'].includes(book.title)).map(p => ({ ...p, category: 'boyfriend', subcategory: 'Personalized Novels' })),
                ...magzine.filter(m => m.title.includes('Our love Story')).map(p => ({ ...p, category: 'boyfriend', subcategory: 'Personalized Magazines' })),
                ...deskCalender.map(p => ({ ...p, category: 'boyfriend', subcategory: 'Personalized Desk Calendar' })),
                ...walletCard.map(p => ({ ...p, category: 'boyfriend', subcategory: 'Wallet Card' })),
                ...whiteBook.map(p => ({ ...p, category: 'boyfriend', subcategory: 'White Book' })),
                ...photoFrame.map(p => ({ ...p, category: 'boyfriend', subcategory: 'Personalized Frames' })),
                ...Fragrance.map((p: any) => ({ ...p, category: 'boyfriend', subcategory: 'Fragrances' })),
                ...Magnets.map((p: any) => ({ ...p, category: 'boyfriend', subcategory: 'Fridge Magnets' })),
            ];
        case 'girlfriend':
            return [
                ...gratitudeReminder.map(p => ({ ...p, category: 'girlfriend', subcategory: 'Gratitude Reminders' })),
                ...miniBooks.filter(book => ['Love Book', 'Take me to YOU', 'Story of Our Life', '365 Days Ago', 'You & Me', 'How We Met', 'Her & Him', 'Thank You Book'].includes(book.title)).map(p => ({ ...p, category: 'girlfriend', subcategory: 'Personalized Novels' })),
                ...magzine.filter(m => m.title.includes('Our love Story')).map(p => ({ ...p, category: 'girlfriend', subcategory: 'Personalized Magazines' })),
                ...deskCalender.map(p => ({ ...p, category: 'girlfriend', subcategory: 'Personalized Desk Calendar' })),
                ...walletCard.map(p => ({ ...p, category: 'girlfriend', subcategory: 'Wallet Card' })),
                ...whiteBook.map(p => ({ ...p, category: 'girlfriend', subcategory: 'White Book' })),
                ...photoFrame.map(p => ({ ...p, category: 'girlfriend', subcategory: 'Personalized Frames' })),
                ...Fragrance.map((p: any) => ({ ...p, category: 'girlfriend', subcategory: 'Fragrances' })),
                ...Magnets.map((p: any) => ({ ...p, category: 'girlfriend', subcategory: 'Fridge Magnets' })),
            ];
        case 'parents':
            return [
                ...gratitudeReminder.map(p => ({ ...p, category: 'parents', subcategory: 'Gratitude Reminders' })),
                ...miniBooks.filter(book => ['Genius MOM', 'Story of their Life', 'Housewife', 'Thankyou Book'].includes(book.title)).map(p => ({ ...p, category: 'parents', subcategory: 'Personalized Novels' })),
                ...magzine.filter(m => m.title.includes('Our Love Story')).map(p => ({ ...p, category: 'parents', subcategory: 'Personalized Magazines' })),
                ...deskCalender.map(p => ({ ...p, category: 'parents', subcategory: 'Personalized Desk Calendar' })),
                ...whiteBook.map(p => ({ ...p, category: 'parents', subcategory: 'White Book' })),
                ...photoFrame.map(p => ({ ...p, category: 'parents', subcategory: 'Personalized Frames' })),
                ...Magnets.map((p: any) => ({ ...p, category: 'parents', subcategory: 'Fridge Magnets' })),
            ];
        case 'grandparents':
            return [
                ...miniBooks.filter(book => ['Story of their Life', 'My beloved Nani', 'To Nana', 'Thankyou Book'].includes(book.title)).map(p => ({ ...p, category: 'grandparents', subcategory: 'Personalized Novels' })),
                ...deskCalender.map(p => ({ ...p, category: 'grandparents', subcategory: 'Personalized Desk Calendar' })),
                ...whiteBook.map(p => ({ ...p, category: 'grandparents', subcategory: 'White Book' })),
            ];
        case 'siblings':
            return [
                ...Journal.map((p: any) => ({ ...p, category: 'siblings', subcategory: 'Gratitude Journal & Diaries' })),
                ...gratitudeReminder.map(p => ({ ...p, category: 'siblings', subcategory: 'Gratitude Reminders' })),
                ...miniBooks.filter(book => ['Tales of Trouble', 'Story of Our Life', 'BFFs'].includes(book.title)).map(p => ({ ...p, category: 'siblings', subcategory: 'Personalized Novels' })),
                ...deskCalender.map(p => ({ ...p, category: 'siblings', subcategory: 'Personalized Desk Calendar' })),
                ...whiteBook.map(p => ({ ...p, category: 'siblings', subcategory: 'White Book' })),
                ...photoFrame.map(p => ({ ...p, category: 'siblings', subcategory: 'Personalized Frames' })),
                ...Magnets.map((p: any) => ({ ...p, category: 'siblings', subcategory: 'Fridge Magnets' })),
            ];
        case 'friends':
            return [
                ...Journal.map((p: any) => ({ ...p, category: 'friends', subcategory: 'Journal & Diaries' })),
                ...gratitudeReminder.map(p => ({ ...p, category: 'friends', subcategory: 'Gratitude Reminders' })),
                ...miniBooks.filter(book => ['Story of our Friendship', 'BFFs', 'Thank You Book'].includes(book.title)).map(p => ({ ...p, category: 'friends', subcategory: 'Personalized Novels' })),
                ...magzine.filter(m => m.title.includes('Oh My DOG')).map(p => ({ ...p, category: 'friends', subcategory: 'Personalized Magazines' })),
                ...deskCalender.map(p => ({ ...p, category: 'friends', subcategory: 'Personalized Desk Calendar' })),
                ...whiteBook.map(p => ({ ...p, category: 'friends', subcategory: 'White Book' })),
                ...photoFrame.map(p => ({ ...p, category: 'friends', subcategory: 'Personalized Frames' })),
                ...Magnets.map((p: any) => ({ ...p, category: 'friends', subcategory: 'Fridge Magnets' })),
            ];
        case 'pet':
            return [
                ...miniBooks.filter(book => ['Confessions of a Cat Mom'].includes(book.title)).map(p => ({ ...p, category: 'pet', subcategory: 'Personalized Novels' })),
                ...magzine.filter(m => m.title.includes('Oh My DOG')).map(p => ({ ...p, category: 'pet', subcategory: 'Personalized Magazines' })),
                ...whiteBook.map(p => ({ ...p, category: 'pet', subcategory: 'White Book' })),
                ...photoFrame.map(p => ({ ...p, category: 'pet', subcategory: 'Personalized Frames' })),
            ];
        case 'others':
            return [
                ...Fragrance.map((p: any) => ({ ...p, category: 'others', subcategory: 'Fragrances' })),
            ];
        default:
            return [];
    }
};

export default function CategoryProducts() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState('boyfriend');
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

    // Get current category
    const currentCategory = categories.find(cat => cat.id === selectedCategory);

    // Get products for selected category
    const categoryProducts = getCategoryProducts(selectedCategory);

    // Filter products based on subcategory selection
    const filteredProducts = selectedSubcategory 
        ? categoryProducts.filter(p => p.subcategory === selectedSubcategory)
        : categoryProducts;

    // Navigation functions (keep all your existing navigation functions)
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
        }).toString();

        router.push(`/Component/ParticularProduct2?${query}`);
    };

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
        }).toString();

        router.push(`/Component/ParticularProduct3?${query}`);
    };

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
        }).toString();

        router.push(`/Component/ParticularProduct4?${query}`);
    };

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
        }).toString();

        router.push(`/Component/ParticularProduct5?${query}`);
    };

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
        }).toString();

        router.push(`/Component/ParticularProduct6?${query}`);
    };

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
        }).toString();

        router.push(`/Component/ParticularProduct7?${query}`);
    };

    // Add handlers for new product types
    const handleProductClick8 = (product: Product) => {
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
        }).toString();

        router.push(`/Component/ParticularProduct8?${query}`);
    };

    const handleProductClick9 = (product: Product) => {
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
        }).toString();

        router.push(`/Component/ParticularProduct9?${query}`);
    };

    const handleProductClick10 = (product: Product) => {
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
        }).toString();

        router.push(`/Component/ParticularProduct10?${query}`);
    };

    const handleCardClick = (product: Product) => {
        const productId = product.id.toLowerCase();
        
        // Check product ID prefix to route to correct page
        if (productId.startsWith('m')) {
            handleProductClick(product);
        } else if (productId.startsWith('pm')) {
            handleProductClick4(product);
        } else if (productId.startsWith('pf')) {
            handleProductClick3(product);
        } else if (productId.startsWith('wb')) {
            handleProductClick6(product);
        } else if (productId.startsWith('f')) {  // Fragrances
            handleProductClick3(product);
        } else if (productId.startsWith('fm')) {  // Fridge Magnets
            handleProductClick9(product);
        } else if (productId.startsWith('j')) {  // Journals
            handleProductClick3(product);
        }
        else if (productId.startsWith('z1')) {  // Journals
            handleProductClick7(product);
        }
         else {
            handleProductClick3(product);
        }
    };

    return (
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        Shop by Category
                    </h2>
                    <p className="text-gray-600 text-lg">Find the perfect gift for your loved ones</p>
                </motion.div>

                {/* Main Category Tabs */}
                <div className="mb-8 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex gap-3 min-w-max md:justify-center px-4">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <motion.button
                                    key={category.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setSelectedCategory(category.id);
                                        setSelectedSubcategory(null);
                                    }}
                                    className={`relative px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 min-w-fit ${
                                        selectedCategory === category.id
                                            ? 'text-white shadow-xl'
                                            : 'bg-white text-gray-700 hover:shadow-lg border border-gray-200'
                                    }`}
                                >
                                    {selectedCategory === category.id && (
                                        <motion.div
                                            layoutId="activeCategory"
                                            className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl`}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <Icon className="w-5 h-5 relative z-10" />
                                    <span className="relative z-10">{category.name}</span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* Subcategory Filter */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mb-8"
                    >
                        <div className="flex flex-wrap gap-2 justify-center px-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedSubcategory(null)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                    selectedSubcategory === null
                                        ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                All Products ({categoryProducts.length})
                            </motion.button>
                            {currentCategory?.subcategories.map((sub) => {
                                const count = categoryProducts.filter(p => p.subcategory === sub).length;
                                if (count === 0) return null;
                                return (
                                    <motion.button
                                        key={sub}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedSubcategory(sub)}
                                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                            selectedSubcategory === sub
                                                ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {sub} ({count})
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Products Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${selectedCategory}-${selectedSubcategory}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -8 }}
                                    onClick={() => handleCardClick(product)}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative cursor-pointer"
                                >
                                    {/* Badges */}
                                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                                        {product.bestseller && (
                                            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                Bestseller
                                            </span>
                                        )}
                                        {product.trending && (
                                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                Trending
                                            </span>
                                        )}
                                        {product.discount > 0 && (
                                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                {product.discount}% OFF
                                            </span>
                                        )}
                                    </div>

                                    {/* Product Image */}
                                    <div className="relative h-64 overflow-hidden bg-gray-100">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                                            {product.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {product.description}
                                        </p>

                                        {/* Price */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-2xl font-bold text-red-600">
                                                ₹{product.price}
                                            </span>
                                            {product.originalPrice > product.price && (
                                                <span className="text-gray-400 line-through text-sm">
                                                    ₹{product.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-16">
                                <Gift className="w-20 h-20 mx-auto text-gray-300 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-400 mb-2">
                                    No Products Found
                                </h3>
                                <p className="text-gray-500">
                                    Check out other categories for amazing gifts!
                                </p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
