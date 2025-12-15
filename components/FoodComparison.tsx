import React, { useState } from 'react';
import { FOOD_DATA } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Check, X, Filter, ShoppingCart } from 'lucide-react';
import { CatImage } from './CatImage';
import { useNavigate } from 'react-router-dom';

export const FoodComparison: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');
  const navigate = useNavigate();

  const filteredData = filterType === 'All' 
    ? FOOD_DATA 
    : FOOD_DATA.filter(item => item.type === filterType);

  const chartData = filteredData.map(item => ({
    name: item.name.split(' ')[0], // Short name
    protein: item.protein,
    fat: item.fat
  }));

  const handleCheckPrice = (id: string) => {
    navigate(`/checkout/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Cat Food Comparison</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Not all kibble is created equal. Compare protein content, ingredients, and nutritional value to make the best choice for your kitty.
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-center mb-8 gap-2 flex-wrap">
        {['All', 'Dry', 'Wet', 'Raw', 'Homemade', 'Freeze-Dried'].map(type => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filterType === type 
                ? 'bg-primary-500 text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredData.map(item => (
          <div key={item.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="h-48 relative group overflow-hidden">
              <CatImage 
                src={item.imageUrl} 
                alt={`${item.name} - ${item.type} cat food`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm z-20">
                ⭐ {item.rating}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold text-primary-500 uppercase tracking-wide">{item.brand}</span>
                  <span className="font-bold text-lg text-gray-900">${item.price}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                <span className="inline-block mt-2 px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">{item.type} Food</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary-50 rounded-xl p-3 text-center">
                  <span className="block text-2xl font-bold text-primary-600">{item.protein}%</span>
                  <span className="text-xs text-gray-500">Protein</span>
                </div>
                <div className="bg-secondary-50 rounded-xl p-3 text-center">
                  <span className="block text-2xl font-bold text-secondary-600">{item.fat}%</span>
                  <span className="text-xs text-gray-500">Fat</span>
                </div>
              </div>

              <div className="space-y-2 mb-6 flex-1">
                <p className="text-xs font-semibold text-gray-400 uppercase">Pros</p>
                {item.pros.map((pro, i) => (
                  <div key={i} className="flex items-start text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    {pro}
                  </div>
                ))}
                <div className="mt-4"></div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Cons</p>
                 {item.cons.map((con, i) => (
                  <div key={i} className="flex items-start text-sm text-gray-600">
                    <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                    {con}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleCheckPrice(item.id)}
                className="w-full py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                Buy Now <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Macronutrient Analysis</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={{ fill: '#f9fafb' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
              <Bar dataKey="protein" name="Protein %" fill="#fb923c" radius={[4, 4, 0, 0]} />
              <Bar dataKey="fat" name="Fat %" fill="#14b8a6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};