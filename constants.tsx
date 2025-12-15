import { FoodItem, BlogPost, QuizQuestion, PageView, GuideDetails } from './types';
import React from 'react';
import { Cat, Heart, ShieldCheck, Smile } from 'lucide-react';

// Unsplash Image IDs for consistent, high-quality cat visuals
const IMAGES = {
  DRY_FOOD: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=400&q=80',
  WET_FOOD: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80',
  RAW_FOOD: 'https://images.unsplash.com/photo-1623366302587-bca021d6616e?auto=format&fit=crop&w=400&q=80',
  HOMEMADE_FOOD: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7ea?auto=format&fit=crop&w=400&q=80',
  FREEZE_DRIED: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=400&q=80',
  KNEADING: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80',
  PLANTS: 'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?auto=format&fit=crop&w=800&q=80',
  TAIL_LANGUAGE: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
  KIDNEY: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?auto=format&fit=crop&w=800&q=80',
  ADOPTION: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
  DENTAL: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=400&q=80',
  PROOFING: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400&q=80',
};

export const FOOD_DATA: FoodItem[] = [
  {
    id: '1',
    name: 'Salmon & Sweet Potato',
    brand: 'PurrfectHealth',
    type: 'Dry',
    priceRange: 'Medium',
    price: 34.99,
    description: 'A premium grain-free dry food formulated for adult cats. Rich in Omega-3 fatty acids from sustainably sourced salmon to support a shiny coat and healthy skin. Contains sweet potatoes for gentle digestion and essential vitamins.',
    protein: 32,
    fat: 15,
    rating: 4.8,
    pros: ['Grain-free', 'High Omega-3', 'Great for coat'],
    cons: ['Strong smell', 'Kibble size varies'],
    imageUrl: IMAGES.DRY_FOOD
  },
  {
    id: '2',
    name: 'Chicken Paté Feast',
    brand: 'MeowMixer',
    type: 'Wet',
    priceRange: 'Low',
    price: 24.50, // Case of 12
    description: 'A smooth, hydrating chicken paté that even picky eaters love. High moisture content helps prevent urinary tract issues. Fortified with taurine and essential minerals for daily vitality.',
    protein: 10, // Wet food is mostly water
    fat: 5,
    rating: 4.2,
    pros: ['Hydrating', 'Affordable', 'Cats love taste'],
    cons: ['Contains by-products', 'Lower protein density'],
    imageUrl: IMAGES.WET_FOOD
  },
  {
    id: '3',
    name: 'Raw Rabbit Medallions',
    brand: 'WildHunter',
    type: 'Raw',
    priceRange: 'High',
    price: 59.99,
    description: 'Biologically appropriate raw food mimicking a cat\'s ancestral diet. Rabbit is a novel protein, perfect for cats with chicken or beef allergies. Flash-frozen to preserve nutrients without artificial preservatives.',
    protein: 45,
    fat: 20,
    rating: 4.9,
    pros: ['Biologically appropriate', 'No fillers', 'High energy'],
    cons: ['Requires freezer', 'Expensive', 'Handling risks'],
    imageUrl: IMAGES.RAW_FOOD
  },
  {
    id: '4',
    name: 'Fresh Chef Turkey',
    brand: 'HomeBowl',
    type: 'Homemade',
    priceRange: 'High',
    price: 65.00,
    description: 'Human-grade turkey gently cooked to retain flavor and nutrition. Delivered fresh to your door. Includes a proprietary blend of superfoods like kale and blueberries for immune support.',
    protein: 18,
    fat: 8,
    rating: 4.7,
    pros: ['Human-grade ingredients', 'Highly digestible', 'No preservatives'],
    cons: ['Short shelf life', 'Subscription only'],
    imageUrl: IMAGES.HOMEMADE_FOOD
  },
  {
    id: '5',
    name: 'Freeze-Dried Minnows',
    brand: 'CrunchyCat',
    type: 'Freeze-Dried',
    priceRange: 'Medium',
    price: 18.99,
    description: 'Single-ingredient treat or meal topper made from 100% wild-caught minnows. Freeze-drying locks in the raw nutrition while providing a satisfying crunch. Rich in protein and completely grain-free.',
    protein: 60,
    fat: 12,
    rating: 4.9,
    pros: ['Single ingredient', 'Excellent topper', 'Lightweight'],
    cons: ['Very pricey', 'Not a complete meal alone'],
    imageUrl: IMAGES.FREEZE_DRIED
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Do Cats Knead?',
    excerpt: 'Discover the comforting science behind your cat\'s biscuit-making habits.',
    content: 'Kneading is an instinctive behavior that starts in kittenhood. Kittens knead their mothers to stimulate milk flow. As adults, they continue this behavior when they feel safe, happy, and comforted. It is a sign of affection and contentment, often accompanied by loud purring. Some cats also use it to mark their territory with scent glands in their paws.',
    author: 'Dr. Whiskers',
    date: 'Oct 10, 2023',
    tags: ['Behavior', 'Bonding'],
    imageUrl: IMAGES.KNEADING
  },
  {
    id: '2',
    title: 'Top 5 Indoor Plants Safe for Cats',
    excerpt: 'Make your home green without risking your feline friend\'s health.',
    content: 'Many common houseplants like Lilies are deadly to cats. However, there are plenty of safe options. Spider Plants, Boston Ferns, Calathea, and Polka Dot Plants are completely non-toxic. They add vibrancy to your home while keeping your curious kitty safe. Always check the ASPCA list before bringing a new plant home.',
    author: 'Sarah Paws',
    date: 'Oct 15, 2023',
    tags: ['Safety', 'Home'],
    imageUrl: IMAGES.PLANTS
  },
  {
    id: '3',
    title: 'Decoding Cat Tail Language',
    excerpt: 'From the "question mark" tail to the "puffy brush," learn what your cat is saying.',
    content: 'A cat\'s tail is a mood barometer. A high, upright tail with a curled tip (like a question mark) means a friendly greeting. A puffed-up tail indicates fear or aggression, an attempt to look larger. A slow swish usually means focus or annoyance, unlike a dog\'s happy wag. Understanding these signals helps you respect your cat\'s boundaries.',
    author: 'Behaviorist Ben',
    date: 'Oct 20, 2023',
    tags: ['Communication', 'Behavior'],
    imageUrl: IMAGES.TAIL_LANGUAGE
  },
  {
    id: '4',
    title: 'Early Signs of Kidney Disease',
    excerpt: 'Chronic Kidney Disease (CKD) is common in seniors. Here is what to watch for.',
    content: 'Kidney disease affects many older cats. Early detection is key to management. Watch for increased thirst (polydipsia) and increased urination. Weight loss, despite a good appetite, poor coat condition, and lethargy are also red flags. If you notice these signs, a vet visit for bloodwork is essential.',
    author: 'Dr. Whiskers',
    date: 'Oct 25, 2023',
    tags: ['Health', 'Senior Care'],
    imageUrl: IMAGES.KIDNEY
  },
  {
    id: '5',
    title: 'The 3-3-3 Rule of Adoption',
    excerpt: 'Adopting a rescue? Here is a timeline of how they settle in.',
    content: 'When bringing home a shelter cat, patience is crucial. In the first 3 days, they may hide and feel overwhelmed. By 3 weeks, they start to settle into a routine and show their personality. By 3 months, they finally feel at home and build trust. Don\'t rush the process!',
    author: 'Sarah Paws',
    date: 'Nov 01, 2023',
    tags: ['Adoption', 'New Owner'],
    imageUrl: IMAGES.ADOPTION
  }
];

export const CARE_GUIDES: GuideDetails[] = [
  { 
    title: 'Grooming Basics', 
    desc: 'Brushing, bathing (if you dare), and nail trimming.', 
    img: 'https://images.unsplash.com/photo-1511044568932-338cba0fb803?auto=format&fit=crop&w=400&q=80', // Cat licking paw
    fullContent: 'Regular grooming is essential for your cat\'s health. Brushing removes loose hair, preventing hairballs and matting. Short-haired cats need brushing once a week, while long-haired breeds may require daily care. Nail trimming should be done every 2-3 weeks. Bathing is rarely needed unless your cat gets into something messy, as they are excellent self-groomers.'
  },
  { 
    title: 'Litter Training', 
    desc: 'Setting up the box and preventing accidents.', 
    img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80', // Cat in basket/box context
    fullContent: 'Cats naturally prefer burying their waste, making litter training usually straightforward. Place the litter box in a quiet, accessible location away from their food. Show your kitten the box after meals and naps. Keep it clean by scooping daily and changing the litter weekly. If accidents happen, check for medical issues or stress before assuming it is behavioral.'
  },
  { 
    title: 'Playtime & Enrichment', 
    desc: 'Toys, cat trees, and preventing boredom.', 
    img: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=400&q=80', // Playful/Exploring cat
    fullContent: 'Play is vital for a cat\'s physical and mental health. Interactive play with wand toys mimics hunting and burns energy. Solo toys like balls and mice provide entertainment when you are away. Vertical space like cat trees and shelves allows them to survey their territory, reducing anxiety and boredom.'
  },
  { 
    title: 'Health Checks', 
    desc: 'Signs of illness and when to see a vet.', 
    img: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=400&q=80', // Cat close up / health context
    fullContent: 'Cats are masters at hiding pain. Watch for subtle changes like appetite loss, hiding more than usual, changes in litter box habits, or aggression. Regular vet check-ups (at least once a year) are crucial. Keep an eye on their weight, dental health, and coat condition to catch issues early.'
  },
  {
    title: 'Dental Care',
    desc: 'Preventing tooth resorption and gum disease.',
    img: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=400&q=80', // Yawning cat (teeth)
    fullContent: 'Dental disease is one of the most common health issues in cats over age 3. Daily brushing with cat-safe toothpaste is the gold standard. If your cat resists, look for VOHC-approved dental treats and water additives. Red gums, bad breath, and dropping food are signs of pain that need immediate veterinary attention.'
  },
  {
    title: 'Cat Proofing',
    desc: 'Making your home safe for curious explorers.',
    img: 'https://images.unsplash.com/photo-1478098711619-5ab0b4d5dc75?auto=format&fit=crop&w=400&q=80', // Cat climbing/exploring
    fullContent: 'Curiosity can be dangerous! Secure loose cords and wires to prevent chewing. Ensure windows have sturdy screens. Keep toilet lids down and washing machines closed. Hide medications, cleaning supplies, and toxic foods (like onions, garlic, and chocolate) in secure cabinets. A safe home is a happy home.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How old is your cat?",
    options: [
      { text: "Kitten (0-1 year)", value: "kitten" },
      { text: "Adult (1-7 years)", value: "adult" },
      { text: "Senior (7+ years)", value: "senior" }
    ]
  },
  {
    id: 2,
    question: "What is your cat's activity level?",
    options: [
      { text: "Zoomies all day!", value: "high" },
      { text: "Chill potato", value: "low" },
      { text: "Average hunter", value: "medium" }
    ]
  },
  {
    id: 3,
    question: "Does your cat have any sensitivities?",
    options: [
      { text: "Tummy issues", value: "sensitive" },
      { text: "Picky eater", value: "picky" },
      { text: "None, eats everything", value: "none" }
    ]
  }
];

export const FEATURES = [
  { icon: <Cat className="w-8 h-8 text-primary-500" />, title: 'Food Guide', desc: 'Detailed nutritional comparisons', page: PageView.FOOD_COMPARE },
  { icon: <Heart className="w-8 h-8 text-red-400" />, title: 'Health Tips', desc: 'Expert veterinary advice', page: PageView.CARE_GUIDE },
  { icon: <ShieldCheck className="w-8 h-8 text-secondary-500" />, title: 'Safety First', desc: 'Toxic plant & food warnings', page: PageView.BLOG },
  { icon: <Smile className="w-8 h-8 text-yellow-500" />, title: 'Play & Fun', desc: 'Enrichment ideas for happy cats', page: PageView.CARE_GUIDE },
];