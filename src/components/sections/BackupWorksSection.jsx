// src/components/sections/BackupWorksSection.jsx
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const BackupWorksSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('critox');
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.getElementById('backup-works-section');
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
      {/* Section with Hero-like gradient background */}
      <section
        id="backup-works-section"
        className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 md:py-32 px-3 md:px-4 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <img 
              src="/images/get-started-recovery-phrase-lg@2x.png" 
              alt="Backup" 
              className="max-w-full w-full hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              How does wallet backup and recovery work?
            </h2>

            {/* Card with glassy, Hero-consistent background */}
            <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700/60 rounded-2xl md:rounded-3xl p-5 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 group">
              <div className="flex-1">
                <h3 className="font-bold mb-3 text-lg md:text-xl group-hover:text-blue-400 transition-colors duration-300">
                  Secure
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  First, we need to talk a little bit about how crypto wallets work. Crypto wallets work by holding cryptographic keys that are used to prove you have control over cryptoassets on a blockchain.
                </p>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-600 text-white px-5 md:px-8 py-3 md:py-4 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm md:text-lg font-bold shadow-lg hover:shadow-blue-500/50"
              >
                Connect Wallet
              </button>
            </div>
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

export default BackupWorksSection;
