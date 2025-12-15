import React, { useState } from 'react';
import { INITIAL_BLOG_POSTS } from '../constants';
import { generateCatContent } from '../services/geminiService';
import { Sparkles, Loader2, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import { CatImage } from './CatImage';
import { Link, useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export const Blog: React.FC<{ limit?: number }> = ({ limit }) => {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_BLOG_POSTS);
  const [isGenerating, setIsGenerating] = useState(false);
  const [topic, setTopic] = useState('');
  const navigate = useNavigate();

  // Apply SEO only if this is the main blog page
  if (!limit) {
    useSEO({
      title: 'Cat Care Blog',
      description: 'Expert advice, fun facts, and health tips for your feline friends. Read our latest articles.',
    });
  }

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    const content = await generateCatContent(topic, 'blog');
    
    const randomCatIds = [
      'photo-1514888286974-6c03e2ca1dba', 
      'photo-1573865526739-10659fec78a5', 
      'photo-1495360019602-e001c276375f', 
      'photo-1526336024174-e58f5cdd8e13',
    ];
    const randomId = randomCatIds[Math.floor(Math.random() * randomCatIds.length)];
    const imageUrl = `https://images.unsplash.com/${randomId}?auto=format&fit=crop&w=800&q=80`;

    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: `AI Insight: ${topic}`,
      excerpt: content.substring(0, 100) + "...",
      content: content,
      author: 'Gemini AI',
      date: new Date().toLocaleDateString(),
      tags: ['AI Generated', 'Tips'],
      imageUrl: imageUrl
    };

    setPosts([newPost, ...posts]);
    setIsGenerating(false);
    setTopic('');
  };

  const displayedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${limit ? '' : 'py-12'}`}>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">The Cat Corner</h2>
          <p className="text-gray-600">Latest articles, tips, and meow-worthy news.</p>
        </div>

        {/* AI Generator Input - Only show on main blog page */}
        {!limit && (
          <div className="w-full md:w-auto bg-white p-2 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-2">
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Suggest a topic (e.g. Kidney Health)" 
              className="flex-1 px-4 py-2 text-sm focus:outline-none bg-transparent min-w-[200px]"
            />
            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !topic}
              className="bg-secondary-500 hover:bg-secondary-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
            >
              {isGenerating ? <Loader2 className="animate-spin w-4 h-4" /> : <Sparkles className="w-4 h-4 mr-2" />}
              {isGenerating ? 'Writing...' : 'AI Write'}
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post) => (
          <article 
            key={post.id} 
            onClick={() => navigate(`/blog/${post.id}`)}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full cursor-pointer group"
          >
            <div className="h-48 overflow-hidden relative">
              <CatImage 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                <span className="flex items-center"><User size={12} className="mr-1" /> {post.author}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">{post.content.substring(0, 150)}...</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700">
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-primary-500 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ArrowRight size={14} className="ml-1" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};