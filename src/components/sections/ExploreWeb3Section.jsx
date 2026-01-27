import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExploreWeb3Section = () => {
  const [productIndex, setProductIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const products = [
    {
      title: 'Spot Trading',
      description: 'Trade crypto with our comprehensive set of powerful tools to maximize your profits.',
      image: '/images/products/spot-trading.png',
    },
    {
      title: 'Margin Trading',
      description: 'Borrow, trade, and repay. Leverage your assets with margin trading.',
      image: '/images/products/margin-trade.png',
    },
    {
      title: 'Crypto Derivatives',
      description: 'We are the best crypto exchange for trading crypto futures.',
      image: '/images/products/derivative.png',
    },
    {
      title: 'QFSEarn',
      description: 'Invest and earn steady income with the help of a professional asset manager.',
      image: '/images/products/earn.png',
    },
    {
      title: 'Buy Crypto',
      description: 'Purchase crypto quickly and easily on our popular and industry-leading platform.',
      image: '/images/products/buy.png',
    },
    {
      title: 'Margin Trading',
      description: 'Borrow, trade, and repay. Leverage your assets with margin trading.',
      image: '/images/products/margin.png',
    },
  ];

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setIsVisible(true));
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('explore-web3-section');
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;
  const maxSlides = Math.ceil(products.length / itemsPerView);
  const visibleProducts = products.slice(
    productIndex * itemsPerView,
    productIndex * itemsPerView + itemsPerView
  );

  const nextProduct = () => setProductIndex((prev) => (prev + 1) % maxSlides);
  const prevProduct = () => setProductIndex((prev) => (prev - 1 + maxSlides) % maxSlides);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextProduct, 2500);
      return () => clearInterval(interval);
    }
  }, [productIndex, isPaused, isMobile]);

  return (
    <section
      id="explore-web3-section"
      className="py-12 md:py-32 px-3 md:px-4 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 md:mb-12 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-white">
              Explore <span className="text-blue-400 underline">Web3</span>
            </h2>
            <p className="text-base lg:text-xl font-medium text-gray-300">
              It is the easiest, safest, and fastest way to secure & backup crypto asset.
            </p>
          </div>
          <a
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 hidden md:block font-semibold shadow-lg hover:shadow-blue-500/50"
          >
            View More
          </a>
        </div>

        {/* Cards */}
        <div
          className="relative"
          onMouseEnter={() => (!isMobile ? setIsPaused(true) : null)}
          onMouseLeave={() => (!isMobile ? setIsPaused(false) : null)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {visibleProducts.map((product, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
                  border border-gray-700 rounded-xl p-6 md:p-8 text-center text-white
                  hover:border-blue-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
                  transition-all duration-300 group
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                `}
                style={{
                  transitionDelay: `${idx * 150 + 300}ms`,
                  transitionDuration: '700ms',
                }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-blue-500 bg-blue-600/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <img src={product.image} alt={product.title} className="w-12 h-12 md:w-14 md:h-14" />
                </div>

                <h4 className="font-bold mb-2 text-xl md:text-lg text-white group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h4>

                <p className="text-gray-300 text-xl md:text-base mb-4 leading-relaxed">
                  {product.description}
                </p>

                <a
                  href="#"
                  className="text-blue-400 font-bold hover:underline hover:text-blue-300 transition-colors"
                >
                  View Details →
                </a>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex gap-3 md:gap-4 items-center">
            <button
              onClick={() => {
                prevProduct();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-blue-500 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${((productIndex + 1) / maxSlides) * 100}%` }}
              />
            </div>

            <button
              onClick={() => {
                nextProduct();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-blue-500 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <p className="text-xs md:text-sm text-gray-400 font-medium">
              {isPaused ? '⏸ Paused' : '▶ Auto-playing'} • {!isMobile && 'Hover to pause'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreWeb3Section;
