// src/components/sections/FAQSection.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('critox');
  const [isVisible, setIsVisible] = useState(false);

  const faqs = [
    {
      q: 'How can I secure my wallet?',
      a: 'Set a unique passcode for your wallet.\n\nAlso, make sure the numbers are random. Birthdays, anniversaries, house addresses, and the last digits of your phone number are all popular combinations and are crackable codes to a resourceful criminal.',
    },
    {
      q: 'How to backup a crypto wallet?',
      a: '1. Export Private Keys/Seed Phrase: Go to your wallet\'s settings and select the "backup wallet" or "export keys" option.\n\n2. Secure Your Backup: Store backups in multiple secure locations like USB drives, paper copies in fireproof safes, and safety deposit boxes.',
    },
    {
      q: 'How to keep bitcoin wallet safe?',
      a: 'Securing Your Bitcoin: Choosing a Reputable Exchange.',
    },
    {
      q: 'How do I trust a safe wallet?',
      a: 'Back up your wallet.\n\nBe cautious of phishing scams.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('faq-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      {/* Section with gradient background */}
      <section
        id="faq-section"
        className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 md:py-32 px-3 md:px-4 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Info Card */}
          <div
            className={`bg-gray-900/60 backdrop-blur-md border border-gray-700/60 rounded-xl p-5 md:p-8 hover:border-blue-500 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
            style={{ transitionDuration: '700ms' }}
          >
            <p className="text-sm md:text-base font-bold text-blue-400 mb-3 tracking-wide">FAQ</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
              Your questions <span className="text-blue-400 underline">answered.</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              Let's do our best to answer your most frequently asked questions.
            </p>
            <div className="bg-gray-900/50 backdrop-blur-md p-5 rounded-xl hover:bg-gray-800/60 transition-all duration-300 group">
              <div className="flex gap-4 items-start md:items-center mb-5 flex-col md:flex-row">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 border-gray-600 flex items-center justify-center bg-gray-800/50 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white text-2xl md:text-3xl font-bold">?</span>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-base md:text-lg">Still have questions?</h5>
                  <p className="text-sm md:text-base text-gray-400">
                    Can't find the answer you're looking for? Please chat to our friendly team!
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full md:w-auto md:px-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-base md:text-lg font-bold shadow-lg hover:shadow-blue-500/50"
              >
                Connect Wallet
              </button>
            </div>
          </div>

          {/* Right FAQ list */}
          <div className="space-y-4 md:space-y-5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border-2 border-gray-700 rounded-xl p-5 cursor-pointer transition-all duration-500 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 group ${
                  openFAQ === idx ? 'bg-gray-700/60 border-blue-500' : 'bg-gray-900/50'
                } ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100 + 300}ms` }}
                onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
              >
                <div className="flex justify-between items-start gap-3">
                  <p className="font-bold text-base md:text-lg group-hover:text-blue-400 transition-colors duration-300">
                    {faq.q}
                  </p>
                  <ChevronDown
                    size={24}
                    className={`transition-all duration-300 flex-shrink-0 text-blue-400 ${openFAQ === idx ? 'rotate-180 scale-110' : ''}`}
                  />
                </div>
                {openFAQ === idx && (
                  <p className="text-gray-300 text-sm md:text-base pt-4 whitespace-pre-line leading-relaxed animate-fade-in">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Wallet Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-10 max-w-lg w-full relative shadow-2xl border border-gray-700">
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:rotate-180 hover:text-gray-300 transition"
            >
              <X size={28} />
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Connect Wallet</h2>
              <p className="text-gray-400 text-base md:text-lg">Gateway to Web3</p>
            </div>

            {/* Tab */}
            <div className="border-b border-yellow-500 mb-8">
              <button
                onClick={() => setActiveTab('critox')}
                className={`py-3 px-0 text-lg md:text-xl font-semibold transition ${
                  activeTab === 'critox'
                    ? 'border-b-2 border-yellow-500 text-white'
                    : 'text-gray-500'
                }`}
              >
                Backup Wallet
              </button>
            </div>

            {/* Content */}
            {activeTab === 'critox' && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="/images/icons/icon.png" 
                    alt="Backup Icon" 
                    className="w-12 h-12 md:w-14 md:h-14"
                  />
                  <h4 className="font-semibold text-lg md:text-xl text-white">
                    Automatic/Manual backup
                  </h4>
                </div>
                
                <button
                  onClick={() => {
                    setModalOpen(false);
                    window.location.href = '/wallet?category=secure';
                  }}
                  className="w-full bg-blue-500 text-white font-bold text-base md:text-lg py-4 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FAQSection;