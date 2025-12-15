import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-primary-100 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">PurrfectCare</h3>
            <p className="text-gray-500 text-sm">
              Helping you be the best cat parent possible. Trusted advice, cute designs, and a whole lot of purrs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary-500">Food Comparison</a></li>
              <li><a href="#" className="hover:text-primary-500">Care Guides</a></li>
              <li><a href="#" className="hover:text-primary-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Join the Cat Club</h4>
            <p className="text-sm text-gray-600 mb-4">Get weekly tips and cute cat photos!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-r-lg font-medium transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} PurrfectCare. Made with ♥ for cats.
        </div>
      </div>
    </footer>
  );
};