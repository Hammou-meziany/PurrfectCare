import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { INITIAL_BLOG_POSTS } from '../constants';
import { BlogPost as BlogPostType } from '../types';
import { CatImage } from './CatImage';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | undefined>(undefined);

  useEffect(() => {
    // In a real app, you'd fetch from an API. Here we find in static data.
    const foundPost = INITIAL_BLOG_POSTS.find(p => p.id === id);
    setPost(foundPost);
  }, [id]);

  useSEO({
    title: post ? post.title : 'Blog Post',
    description: post ? post.excerpt : 'Read our latest cat care article.',
    type: 'article',
    image: post?.imageUrl
  });

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h2>
        <button 
          onClick={() => navigate('/blog')}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          &larr; Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[400px] w-full">
        <CatImage 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 pb-12">
          <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Articles
          </Link>
          <div className="flex items-center gap-4 text-white/90 text-sm mb-4">
            <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {post.tags[0]}
            </span>
            <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
            <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight shadow-sm">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          
          {/* Main Text */}
          <div className="prose prose-lg prose-orange max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl font-medium text-gray-500 mb-8 border-l-4 border-primary-500 pl-4 italic">
              {post.excerpt}
            </p>
            {/* Simulating paragraphs for the detail view */}
            <p>{post.content}</p>
            <p>
              Cats communicate in subtle ways. Understanding these signals can strengthen your bond. 
              Always pay attention to tail position, ear movement, and vocalizations.
            </p>
            <h3>Key Takeaways</h3>
            <ul>
              <li>Observe daily habits.</li>
              <li>Consult a vet if behavior changes suddenly.</li>
              <li>Patience is key with feline friends.</li>
            </ul>
            <p>
              Remember, every cat is unique. What works for one might not work for another. 
              Stay curious and keep learning about your furry companion!
            </p>
          </div>

          {/* Engagement Footer */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">#{tag}</span>
              ))}
            </div>
            <button className="flex items-center text-gray-500 hover:text-primary-500 transition-colors">
              <Share2 size={20} className="mr-2" /> Share this article
            </button>
          </div>

          {/* Internal Linking (Pillar Strategy) */}
          <div className="mt-12 bg-primary-50 rounded-2xl p-8 border border-primary-100 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Want to keep your cat healthy?</h3>
            <p className="text-gray-600 mb-6">Check out our comprehensive guides on nutrition and care.</p>
            <div className="flex justify-center gap-4">
              <Link to="/food-guide" className="px-6 py-2 bg-white border border-primary-200 text-primary-600 font-bold rounded-full hover:bg-primary-100 transition-colors">
                Food Guide
              </Link>
              <Link to="/care-guide" className="px-6 py-2 bg-primary-500 text-white font-bold rounded-full hover:bg-primary-600 transition-colors">
                Care Tips
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};