import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FOOD_DATA } from '../constants';
import { CatImage } from './CatImage';
import { ArrowLeft, CreditCard, Truck, ShieldCheck, CheckCircle, Mail, Phone, MapPin, User } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const Checkout: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = FOOD_DATA.find(p => p.id === id);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useSEO({
    title: product ? `Checkout: ${product.name}` : 'Checkout',
    description: 'Secure checkout page for your cat food order.',
  });

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl text-gray-600 mb-4">Product not found.</p>
        <button onClick={() => navigate('/food-guide')} className="text-primary-500 font-bold">Back to Guide</button>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setOrderPlaced(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-500 animate-bounce">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Thank you for your purchase. Your kitty is going to be so happy! We have sent a confirmation email to you.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-primary-500 text-white rounded-full font-bold hover:bg-primary-600 transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 font-medium transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Form */}
          <div className="space-y-8">
            
            {/* Shipping Details */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-4">
                <Truck className="text-primary-500 w-6 h-6" />
                <h2 className="text-xl font-bold text-gray-900">Shipping Details</h2>
              </div>
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-6">
                
                {/* Contact Information */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                    <User size={16} className="mr-2 text-gray-400" /> Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email Address</label>
                      <div className="relative">
                        <input required type="email" placeholder="you@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Phone Number</label>
                      <div className="relative">
                        <input required type="tel" placeholder="(555) 555-5555" className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                    <MapPin size={16} className="mr-2 text-gray-400" /> Shipping Address
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">First Name</label>
                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Last Name</label>
                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Address Line 1</label>
                      <input required type="text" placeholder="123 Cat Street" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Address Line 2 (Optional)</label>
                      <input type="text" placeholder="Apt, Suite, Unit" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="col-span-2 md:col-span-1">
                        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">City</label>
                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">State</label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none cursor-pointer">
                          <option value="">Select...</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                          <option value="WA">Washington</option>
                          <option value="IL">Illinois</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">ZIP Code</label>
                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                      </div>
                    </div>
                    
                    <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Country</label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all appearance-none cursor-pointer">
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                        </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Details */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-4">
                <CreditCard className="text-secondary-500 w-6 h-6" />
                <h2 className="text-xl font-bold text-gray-900">Payment Information</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Name on Card</label>
                  <input required form="checkout-form" type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Card Number</label>
                  <div className="relative">
                    <input required form="checkout-form" type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-12 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                    <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
                        {/* Simple dots representing card logos */}
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Expiration Date</label>
                    <input required form="checkout-form" type="text" placeholder="MM / YY" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Security Code (CVC)</label>
                    <div className="relative">
                        <input required form="checkout-form" type="text" placeholder="123" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                        <ShieldCheck className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center pt-2">
                    <input id="billing_same" type="checkbox" defaultChecked className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded cursor-pointer" />
                    <label htmlFor="billing_same" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                        Billing address same as shipping
                    </label>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-center text-xs text-gray-500 bg-gray-50 p-3 rounded-xl">
                <ShieldCheck size={16} className="mr-2 text-green-500" />
                <span>Your payment information is encrypted and secure via 256-bit SSL.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="h-64 relative">
                <CatImage src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <p className="text-sm opacity-90">{product.brand}</p>
                  <h1 className="text-2xl font-bold">{product.name}</h1>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3 mb-8">
                  {product.pros.map((pro, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 flex-shrink-0"></div>
                       {pro}
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-6 mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-500 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold text-gray-900 mt-4 pt-4 border-t border-dashed border-gray-200">
                    <span>Total</span>
                    <span>${product.price.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  type="submit"
                  form="checkout-form"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all flex justify-center items-center gap-2 group"
                >
                  <span>Confirm Order</span>
                  <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-gray-400 mt-4">30-Day Money-Back Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};