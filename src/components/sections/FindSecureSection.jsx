// src/components/sections/FindSecureSection.jsx
import React, { useState, useEffect } from 'react';

const FindSecureSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      title: 'Connect to Dapps',
      description: 'Connect decentralized apps to mobile wallets and enable DAPP.',
      image: '/images/services/globe-2.png',
      rowSpan: true,
    },
    {
      title: 'Missing Funds',
      description: 'Lost access to funds or missing funds? Click here.',
      image: '/images/services/trade.png',
    },
    {
      title: 'High Fee',
      description: 'Transaction fees too high? Click here.',
      image: '/images/services/spot.png',
    },
    {
      title: '24/7 Support',
      description: 'Count on us for round-the-clock support, help whenever you need it.',
      image: '/images/services/support.png',
    },
    {
      title: 'Trusted & Secure',
      description: 'Your assets. On your terms. At your fingertips.',
      image: '/images/services/trusted.png',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && setIsVisible(true)),
      { threshold: 0.2 }
    );

    const section = document.getElementById('find-secure-section');
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section
      id="find-secure-section"
      className="py-12 md:py-32 px-3 md:px-4 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Find & Secure
              <span className="text-blue-400 underline"> crypto</span>
              <span className="block mt-1">Now!</span>
            </h2>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              Our comprehensive cybersecurity platform, driven by artificial intelligence,
              not only safeguards your organization.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`
                bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
                border border-gray-700 rounded-2xl
                p-5 md:p-8 flex flex-col text-white
                hover:border-blue-500 hover:scale-105
                hover:shadow-xl hover:shadow-blue-500/20
                transition-all duration-300 group
                ${service.rowSpan ? 'md:col-span-2 lg:row-span-2 lg:col-span-2' : ''}
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
              style={{
                transitionDelay: `${idx * 100 + 400}ms`,
                transitionDuration: '700ms',
              }}
            >
              <div className={service.rowSpan ? 'mb-auto' : ''}>
                <h3
                  className={`font-bold mb-3 group-hover:text-blue-400 transition-colors ${
                    service.rowSpan ? 'text-2xl md:text-4xl' : 'text-lg md:text-xl'
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-gray-300 ${
                    service.rowSpan ? 'text-base md:text-lg' : 'text-sm md:text-base'
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {service.image && (
                <div
                  className={`flex items-center justify-center ${
                    service.rowSpan ? 'mt-8 md:mt-12' : 'mt-6'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`object-contain group-hover:scale-110 transition-transform duration-300 ${
                      service.rowSpan
                        ? 'w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80'
                        : 'h-20 md:h-28 w-auto'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindSecureSection;
