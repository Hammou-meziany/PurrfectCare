import React, { useState } from 'react';
import { generateCatContent } from '../services/geminiService';
import { CARE_GUIDES } from '../constants';
import { GuideDetails } from '../types';
import { MessageCircle, Send, Loader2, BookOpen, X, Download } from 'lucide-react';
import { CatImage } from './CatImage';
import { jsPDF } from 'jspdf';

export const CareGuide: React.FC = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<GuideDetails | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    setLoading(true);
    setChatResponse('');
    const answer = await generateCatContent(chatInput, 'advice');
    setChatResponse(answer);
    setLoading(false);
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFillColor(249, 115, 22); // Orange primary-500
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text("PurrfectCare Vaccination Guide", 20, 25);
    
    // Content
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(16);
    doc.text("Core Vaccines (Essential)", 20, 60);
    
    doc.setFontSize(12);
    const core = [
        "1. FVRCP (Feline Distemper)",
        "   - 6-8 weeks: First shot",
        "   - 10-12 weeks: Second shot",
        "   - 14-16 weeks: Third shot",
        "   - 1 year: Booster",
        "   - Every 3 years: Booster",
        "",
        "2. Rabies",
        "   - 12-16 weeks: First shot",
        "   - 1 year: Booster",
        "   - Every 1-3 years: Booster (depending on vaccine type)"
    ];
    
    let y = 70;
    core.forEach(line => {
        doc.text(line, 20, y);
        y += 7;
    });

    doc.setFontSize(16);
    doc.text("Non-Core (Lifestyle Dependent)", 20, y + 20);
    doc.setFontSize(12);
    doc.text("- FeLV (Leukemia): Recommended for outdoor cats", 20, y + 30);
    doc.text("- Bordetella: For cats in shelters/boarding", 20, y + 40);

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Consult your veterinarian for a personalized schedule.", 20, 280);

    doc.save("PurrfectCare_Vaccination_Schedule.pdf");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Static Guides - Left Side */}
        <div className="lg:col-span-2 space-y-8">
          <div>
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Cat Care</h2>
             <p className="text-gray-600 mb-8">Master the art of feline ownership with our expert-curated guides covering health, safety, and happiness.</p>
          </div>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CARE_GUIDES.map((guide, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-primary-200 transition-all overflow-hidden group flex flex-col h-full">
                <div className="h-32 w-full overflow-hidden">
                   <CatImage src={guide.img} alt={guide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{guide.desc}</p>
                  <button 
                    onClick={() => setSelectedGuide(guide)}
                    className="text-sm font-semibold text-primary-500 hover:text-primary-600 flex items-center mt-auto"
                  >
                    Read More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 flex items-center">
             {/* Fixed Image Container */}
             <div className="absolute inset-0">
               <CatImage 
                  src="https://images.unsplash.com/photo-1585675208703-99b8026118b6?auto=format&fit=crop&w=1200&q=80"
                  alt="Vet visit"
                  className="w-full h-full object-cover"
               />
             </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-500/80"></div>
            <div className="relative z-10 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 w-full">
               <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Vaccination Schedule</h3>
                  <p className="opacity-90 max-w-md">Keep your kitty safe from common diseases like FVRCP and Rabies. Get our simple monthly planner.</p>
               </div>
              <button 
                onClick={handleDownloadPdf}
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2"
              >
                <Download size={16} />
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* AI Chat Bot - Right Side (Sticky) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-secondary-100 p-3 rounded-full">
                <MessageCircle className="text-secondary-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Ask the AI Vet Assistant</h3>
                <p className="text-xs text-gray-500">Quick answers for non-emergencies</p>
              </div>
            </div>

            <div className="space-y-4">
              {chatResponse && (
                <div className="bg-secondary-50 p-4 rounded-xl rounded-tl-none animate-fade-in text-sm text-gray-700 border border-secondary-100">
                  <span className="font-bold block text-secondary-600 mb-1 text-xs">Assistant says:</span>
                  {chatResponse}
                </div>
              )}
              
              <form onSubmit={handleAsk} className="relative">
                <textarea
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="e.g. Is chocolate bad for cats?"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 resize-none h-32"
                />
                <button 
                  type="submit"
                  disabled={loading || !chatInput}
                  className="absolute bottom-3 right-3 p-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 disabled:bg-gray-300 transition-colors"
                >
                  {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
              <p className="text-xs text-gray-400 text-center">
                AI can make mistakes. Always consult a real vet for emergencies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative animate-scale-in">
            <div className="h-48 w-full relative">
              <img 
                src={selectedGuide.img} 
                alt={selectedGuide.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h3 className="text-2xl font-bold text-white p-6">{selectedGuide.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedGuide(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur text-white p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {selectedGuide.fullContent}
              </p>
              <button 
                onClick={() => setSelectedGuide(null)}
                className="w-full bg-primary-500 text-white font-bold py-3 rounded-xl hover:bg-primary-600 transition-colors"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};