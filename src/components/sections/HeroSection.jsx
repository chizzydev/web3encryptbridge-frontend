// src/components/sections/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('critox');
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [hasCountedStats, setHasCountedStats] = useState(false);
  
  // Counter animation states
  const [countries, setCountries] = useState(0);
  const [investors, setInvestors] = useState(0);
  const [wallets, setWallets] = useState(0);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    // Trigger initial animations on mount
    setIsVisible(true);

    // Observer for stats section
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCountedStats) {
            setStatsVisible(true);
            setHasCountedStats(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of stats section is visible
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      statsObserver.observe(statsElement);
    }

    return () => {
      if (statsElement) {
        statsObserver.unobserve(statsElement);
      }
    };
  }, [hasCountedStats]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    // Countries counter (0 to 200)
    let countryCount = 0;
    const countryTimer = setInterval(() => {
      countryCount += 200 / steps;
      if (countryCount >= 200) {
        setCountries(200);
        clearInterval(countryTimer);
      } else {
        setCountries(Math.floor(countryCount));
      }
    }, interval);

    // Investors counter (0 to 30)
    let investorCount = 0;
    const investorTimer = setInterval(() => {
      investorCount += 30 / steps;
      if (investorCount >= 30) {
        setInvestors(30);
        clearInterval(investorTimer);
      } else {
        setInvestors(Math.floor(investorCount));
      }
    }, interval);

    // Wallets counter (0 to 700)
    let walletCount = 0;
    const walletTimer = setInterval(() => {
      walletCount += 700 / steps;
      if (walletCount >= 700) {
        setWallets(700);
        clearInterval(walletTimer);
      } else {
        setWallets(Math.floor(walletCount));
      }
    }, interval);

    // Volume counter (0 to 1.36)
    let volumeCount = 0;
    const volumeTimer = setInterval(() => {
      volumeCount += 1.36 / steps;
      if (volumeCount >= 1.36) {
        setVolume(1.36);
        clearInterval(volumeTimer);
      } else {
        setVolume(volumeCount);
      }
    }, interval);
  };

  return (
    <>
      <section className="relative overflow-hidden pt-12 md:pt-32 pb-12 md:pb-32 px-3 md:px-4 lg:px-8">
        <img className="hidden xl:block absolute left-0 top-8 w-1/4 max-w-xs opacity-20" src="/images/hero/ellipse-1.png" alt="" />
        <img className="hidden lg:block absolute right-0 bottom-16 w-1/4 max-w-xs opacity-20" src="/images/hero/ellipse-2.png" alt="" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Gateway to Encrypt, back up, and
              <span className="text-blue-400 underline"> secure</span>
              <span className="text-yellow-300 underline"> your assets</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
              The easiest, safest, and fastest way to secure & back up crypto asset.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-semibold text-sm md:text-base transform"
              >
                Connect Wallet
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="border-2 border-gray-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 font-semibold text-sm md:text-base transform"
              >
                Explore Now
              </button>
            </div>
          </div>

          <div className={`flex justify-center transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
            <img src="/images/Web3-removebg-preview.png" alt="Web3" className="max-w-xs md:max-w-sm w-full animate-float" />
          </div>
        </div>

        {/* Stats */}
        <div id="stats-section" className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-16 pt-8 md:pt-16 border-t border-gray-700">
          <div className={`transition-all duration-700 delay-300 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold">{countries}+</h3>
            <p className="text-sm md:text-base text-gray-400">Countries Covered</p>
          </div>
          <div className={`transition-all duration-700 delay-500 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold">{investors} Million</h3>
            <p className="text-sm md:text-base text-gray-400">Global Investors</p>
          </div>
          <div className={`transition-all duration-700 delay-700 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold">{wallets}+</h3>
            <p className="text-sm md:text-base text-gray-400">Secured Wallet</p>
          </div>
          <div className={`transition-all duration-700 delay-[900ms] ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold">${volume.toFixed(2)}B</h3>
            <p className="text-sm md:text-base text-gray-400">Secured Volume</p>
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
      
export default HeroSection;