export interface Product {
    id: string;
    title: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviews: number;
    image: string;
    description: string;
    description2: string;
    description3: string;
    description4: string;
    inside1: string;
    inside2: string;
    inside3: string;
    inside4: string;
    loveit1: string;
    loveit2: string;
    loveit3: string;
    loveit4: string;
    bestseller?: boolean;
    trending?: boolean;
}




export const gratitudeReminder: Product[] = [
    {
        id: 'gr1',
        title: 'GRATITUDE REMINDERS',
        price: 549,
        originalPrice: 549,
        discount: 0,
        rating: 4,
        reviews: 22,
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trending5.JPG-trend5.jpeg',
        description: 'Size: Each card is 4 x 4 inches, compact and easy to display on your desk, nightstand, or workspace.',
        description2: 'Quantity: 65 unique affirmation cards to inspire and encourage you every day. Each card features a different affirmation to keep your spirits lifted.',
        description3: 'Quality: Crafted with supersmooth, 250gsm paper for a durable, premium feel. The sturdy material ensures the cards last through daily use while providing a pleasant touch.',
        description4: '',
        trending: true,
        inside1: '	65 Daily Gratitude Cards – A fresh card for each day, offering inspiring messages that promote positivity and self-reflection.', 
        inside2: '	Compact & Handy – Easy to place on your desk, workspace, or bedside table for easy access to your daily reminder.', 
        inside3: '	Uplifting Quotes & Affirmations – Thoughtful, encouraging words to keep you motivated and energized throughout the day.', 
        inside4: '	Perfect for Mental Wellness – A quick and simple way to keep track of your mental health and emotional well-being with gratitude-focused moments.', 
        loveit1 : '• Keep your mental health on track with daily reminders of the positive things in your life.',
        loveit2 : '• Easy to use and integrate into your daily routine for consistent motivation and positivity.',
        loveit3 : '• Perfect as a gift for loved ones—show them you care by gifting them a tool to stay uplifted and energized.',
        loveit4 : '',
    }
]



