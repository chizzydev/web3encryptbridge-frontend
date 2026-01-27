// src/components/sections/BrandsCarouselSection.jsx
import React, { useState, useEffect } from 'react';

const BrandsCarouselSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const brands = Array.from({ length: 13 }, (_, i) => `item-${i + 1}`);
  
  // Split brands into two rows
  const firstRowBrands = brands.slice(0, 7);
  const secondRowBrands = brands.slice(7, 13);

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

    const section = document.getElementById('brands-section');
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
    <section id="brands-section" className="bg-gray-900 py-12 md:py-32 px-3 md:px-4 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
          Trusted by
        </h2>

        <div className="relative">
          {/* First Row - Scrolling Right to Left */}
          <div className={`mb-8 overflow-hidden transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="flex animate-scroll-left">
              {/* Duplicate the brands array for seamless infinite scroll */}
              {[...firstRowBrands, ...firstRowBrands, ...firstRowBrands].map((brand, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 mx-5 md:mx-8 w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center group"
                >
                  <img
                    src={`/images/brands/${brand}.png`}
                    alt={`brand-${idx}`}
                    className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left to Right */}
          <div className={`overflow-hidden transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="flex animate-scroll-right">
              {/* Duplicate the brands array for seamless infinite scroll */}
              {[...secondRowBrands, ...secondRowBrands, ...secondRowBrands].map((brand, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 mx-5 md:mx-8 w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center group"
                >
                  <img
                    src={`/images/brands/${brand}.png`}
                    alt={`brand-${idx}`}
                    className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }

          .animate-scroll-right {
            animation: scroll-right 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandsCarouselSection;