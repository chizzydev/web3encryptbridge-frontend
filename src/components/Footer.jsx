import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const footerLinks = [
    { label: 'IGO', category: 'igo' },
    { label: 'LAUNCHPAD', category: 'launchpad' },
    { label: 'STAKING', category: 'staking' },
    { label: 'FARMING', category: 'farming' },
    { label: 'CRYPTO', category: 'crypto' },
    { label: 'DEFI', category: 'defi' },
    { label: 'WEB3', category: 'web3' },
    { label: 'IEO', category: 'ieo' },
    { label: 'IDO', category: 'ido' },
    { label: 'TOKEN', category: 'token' },
    { label: 'GAMING', category: 'gaming' },
    { label: 'NFT', category: 'nft' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const footer = document.getElementById('footer-section');
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const handleNavLink = (category) => {
    window.location.href = `/wallet?category=${category}`;
  };

  return (
    <footer
      id="footer-section"
      className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 border-t-2 border-gray-700 py-12 md:py-20 px-3 md:px-4 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
        {/* Quick Links */}
        <div
          className={`bg-gray-900/60 backdrop-blur-md rounded-xl p-5 md:p-8 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="font-extrabold text-xl md:text-2xl mb-6 text-white">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {footerLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleNavLink(link.category)}
                className="text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 text-sm md:text-base text-left font-medium"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div
          className={`bg-gray-900/60 backdrop-blur-md rounded-xl p-5 md:p-8 text-center transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="font-extrabold text-xl md:text-2xl mb-6 text-white">Newsletter</h3>
          <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
            Welcome to Web3dApp, your gateway to the world of Web3 trading! Our user-friendly platform
          </p>
          <div className="flex items-center border-2 border-gray-700 rounded-full hover:border-blue-500 transition-all duration-300 group overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="flex-1 px-4 md:px-6 py-3 md:py-4 outline-none bg-transparent text-sm md:text-base text-white placeholder-gray-500"
            />
            <button className="bg-blue-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300 text-xl md:text-2xl font-bold shadow-lg hover:shadow-blue-500/50">
              →
            </button>
          </div>
        </div>

        {/* Logo Section */}
        <div
          className={`bg-gray-900/60 backdrop-blur-md rounded-xl p-5 md:p-8 text-center md:text-right transition-all duration-700 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex items-center justify-center md:justify-end gap-1 font-bold text-2xl md:text-3xl mb-4 hover:scale-105 transition-transform duration-300">
            <span className="text-yellow-400">W</span>
            <span className="text-blue-400">e</span>
            <span className="text-blue-400">b</span>
            <span className="text-yellow-400">3</span>
            <span className="text-blue-400">encryptbridge</span>
          </div>
          <p className="text-gray-300 text-base md:text-lg">
            Secure your crypto assets with the most trusted Web3 platform
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={`border-t border-gray-700 pt-8 text-center transition-all duration-700 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
      >
        <p className="text-gray-500 text-sm md:text-base font-medium">
          Copyright © {new Date().getFullYear()} Web3encryptbridge • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
