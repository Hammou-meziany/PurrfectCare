export interface FoodItem {
  id: string;
  name: string;
  brand: string;
  type: 'Dry' | 'Wet' | 'Raw' | 'Homemade' | 'Freeze-Dried';
  priceRange: 'Low' | 'Medium' | 'High';
  price: number;
  description: string;
  protein: number;
  fat: number;
  rating: number;
  pros: string[];
  cons: string[];
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  imageUrl: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
  }[];
}

export interface GuideDetails {
  title: string;
  desc: string;
  img: string;
  fullContent: string;
}

// SEO Structured Data Interface
export interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  image?: string;
  path?: string;
}

export enum PageView {
  FOOD_COMPARE = 'food-compare',
  CARE_GUIDE = 'care-guide',
  BLOG = 'blog'
}