import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FoodComparison } from './components/FoodComparison';
import { Quiz } from './components/Quiz';
import { Blog } from './components/Blog';
import { BlogPost } from './components/BlogPost';
import { CareGuide } from './components/CareGuide';
import { Checkout } from './components/Checkout';
import { useSEO } from './hooks/useSEO';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrapper for Home Page to include Hero + Featured Blog
const Home = () => {
  useSEO({
    title: 'Home',
    description: 'PurrfectCare is your ultimate guide for cat owners. Compare cat food, learn care tips, and get personalized advice for your furry friend.'
  });

  return (
    <>
      <Hero />
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Latest from the Blog</h2>
          </div>
          <Blog limit={3} />
        </div>
      </div>
    </>
  );
};

const FoodPage = () => {
  useSEO({
    title: 'Cat Food Comparison',
    description: 'Compare dry, wet, and raw cat food brands. Find the best nutrition for your cat with our detailed charts.'
  });
  return <FoodComparison />;
};

const CarePage = () => {
  useSEO({
    title: 'Cat Care Guides',
    description: 'Expert tips on grooming, litter training, health checks, and vaccinations for cats.'
  });
  return <CareGuide />;
};

const QuizPage = () => {
  useSEO({
    title: 'Best Food Quiz',
    description: 'Take our interactive quiz to find the perfect food match for your cat based on age and activity.'
  });
  return <Quiz />;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-primary-50 font-sans">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food-guide" element={<FoodPage />} />
            <Route path="/care-guide" element={<CarePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/checkout/:id" element={<Checkout />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;