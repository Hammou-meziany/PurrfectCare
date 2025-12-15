import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FEATURES } from '../constants';
import { CatImage } from './CatImage';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  // Mapping feature titles to routes
  const getRoute = (title: string) => {
    switch(title) {
      case 'Food Guide': return '/food-guide';
      case 'Health Tips': return '/care-guide';
      case 'Safety First': return '/care-guide'; // Grouping under care
      case 'Play & Fun': return '/care-guide';
      default: return '/';
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-100 rounded-full opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Give Your Cat the <br/>
              <span className="text-primary-500">Purrfect Life</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              Your one-stop guide for nutrition, health, and happiness. 
              Find the best food, get vet-approved tips, and understand your feline friend better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => navigate('/food-guide')}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-500 hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Find Best Food
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </button>
              <button 
                onClick={() => navigate('/care-guide')}
                className="inline-flex items-center justify-center px-8 py-3 border border-primary-200 text-base font-medium rounded-full text-primary-600 bg-white hover:bg-primary-50 shadow-sm transition-colors"
              >
                Read Care Guides
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-white p-2">
              <CatImage 
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80" 
                alt="Happy cat in a garden" 
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-2 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Daily Status</p>
                <p className="text-sm font-bold text-gray-800">100% Loved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              onClick={() => navigate(getRoute(feature.title))}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};