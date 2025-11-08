// import { MemoryBook } from './types'; // adjust path as needed

interface MemoryBook {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  image2: string;
}

export const memoryBooks: MemoryBook[] = [
  {
    id: 'mb1',
    title: 'Vintage Love Story',
    price: '899',
    description: 'Capture your beautiful moments in this elegant vintage-style memory book with premium paper quality',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
    image2: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
  },
  {
    id: 'mb2',
    title: 'Adventure Chronicles',
    price: '1099',
    description: 'Document your travel adventures with this rugged and durable memory book featuring waterproof pages',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
    image2: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
  },
  {
    id: 'mb3',
    title: 'Baby Milestones',
    price: '799',
    description: 'Preserve precious baby moments with themed sections for first words, steps, and memorable milestones',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
    image2: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
  },
  {
    id: 'mb4',
    title: 'Wedding Memories',
    price: '1299',
    description: 'Luxurious wedding memory book with gold foil accents and silk ribbon bookmark',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
    image2: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
  },
  {
    id: 'mb5',
    title: 'Friendship Forever',
    price: '699',
    description: 'Celebrate your friendships with this colorful and fun memory book perfect for group photos',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
    image2: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.JPG-0armChhKLJsiMd0Ulzuy1i1DS5sIa8.jpeg',
  },
];
