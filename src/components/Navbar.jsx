// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('critox');

  const navLinks = [
    { label: 'IGO', category: 'igo' },
    { label: 'LAUNCHPAD', category: 'launchpad' },
    { label: 'STAKING', category: 'staking' },
    { label: 'FARMING', category: 'farming' },
    { label: 'CRYPTO', category: 'crypto' },
    { label: 'DEFI', category: 'defi' },
    { label: 'WEB3', category: 'web3' },
    { label: 'IDO', category: 'ido' },
    { label: 'TOKEN', category: 'token' },
    { label: 'NFT', category: 'nft' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLink = (category) => {
    window.location.href = `/wallet?category=${category}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-5 border-b border-gray-800 transition-all duration-300 ${
          scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-0.5 font-bold text-xl md:text-2xl tracking-tight">
            <span className="text-yellow-400">W</span>
            <span className="text-blue-400">e</span>
            <span className="text-blue-400">b</span>
            <span className="text-yellow-400">3</span>
            <span className="text-blue-400">dApp</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavLink(link.category)}
                    className="text-white font-medium text-base xl:text-lg tracking-wide hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side - Connect Wallet & Mobile Menu */}
          <div className="flex gap-3 md:gap-4 items-center">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-blue-600 text-white px-4 md:px-7 py-2.5 md:py-3 text-sm md:text-base rounded-full hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-blue-500/50"
            >
              Connect Wallet
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl lg:hidden text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800 shadow-xl">
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      handleNavLink(link.category);
                      setMobileMenuOpen(false);
                    }}
                    className="block py-3 px-4 hover:bg-gray-800 rounded-lg w-full text-left text-white font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

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

export default Navbar;