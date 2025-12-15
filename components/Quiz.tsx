import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { ChevronRight, RotateCcw, PartyPopper } from 'lucide-react';

export const Quiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [finished, setFinished] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value });
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setFinished(false);
  };

  const getRecommendation = () => {
    // Simple logic for demo purposes
    const age = answers[0];
    const activity = answers[1];
    
    if (age === 'kitten') return "High-Protein Growth Formula";
    if (activity === 'low') return "Weight Management & Fiber Rich";
    if (age === 'senior') return "Senior Support Soft Paté";
    return "Balanced Adult Maintenance Kibble";
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[500px] flex flex-col relative">
        {/* Progress Bar */}
        {!finished && (
          <div className="w-full bg-gray-100 h-2">
            <div 
              className="bg-primary-500 h-2 transition-all duration-500"
              style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            ></div>
          </div>
        )}

        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center text-center">
          {!finished ? (
            <div className="w-full max-w-lg animate-fade-in">
              <span className="text-primary-500 font-bold tracking-wider text-sm uppercase mb-4 block">
                Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {QUIZ_QUESTIONS[currentStep].question}
              </h2>
              
              <div className="space-y-4">
                {QUIZ_QUESTIONS[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full p-4 rounded-xl border-2 border-gray-100 hover:border-primary-500 hover:bg-primary-50 text-gray-700 font-medium transition-all duration-200 flex justify-between items-center group"
                  >
                    {option.text}
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary-500" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full max-w-lg animate-fade-in">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-500">
                <PartyPopper size={40} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz Complete!</h2>
              <p className="text-gray-500 mb-8">Based on your answers, we think your kitty would love:</p>
              
              <div className="bg-primary-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">{getRecommendation()}</h3>
                <p className="text-sm text-gray-600">
                  This option balances your cat's age ({answers[0]}) and activity level ({answers[1]}) perfectly.
                </p>
              </div>

              <button 
                onClick={resetQuiz}
                className="inline-flex items-center text-gray-500 hover:text-gray-800 transition-colors"
              >
                <RotateCcw size={16} className="mr-2" />
                Start Over
              </button>
            </div>
          )}
        </div>
        
        {/* Decor */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 to-secondary-500"></div>
      </div>
    </div>
  );
};