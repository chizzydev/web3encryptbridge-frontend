// src/components/sections/GetStartedSection.jsx
import React, { useState, useEffect } from 'react';

const GetStartedSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'Connect wallet',
      description: 'Click connect wallet button.',
      primary: true,
    },
    {
      num: '02',
      title: 'Select Wallet',
      description: 'Choose your prefered wallet to backup and click on connect.',
    },
    {
      num: '03',
      title: 'Backup your wallet',
      description:
        'Your wallet backup may also be referred to as a: backup, recovery seed, seed, seed phrase, BIP-39 seed phrase, mnemonic, recovery phrase.',
    },
    {
      num: '04',
      title: 'Start your journey',
      description:
        'Having a safe wallet backup means you can recover your Bitcoin in case of hardware failure or loss.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && setIsVisible(true)),
      { threshold: 0.2 }
    );

    const section = document.getElementById('get-started-section');
    if (section) observer.observe(section);

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section
      id="get-started-section"
      className="py-12 md:py-32 px-3 md:px-4 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className={`text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          How To Get <span className="text-blue-400 underline">Started</span>
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`
                bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900
                border ${step.primary ? 'border-blue-500' : 'border-gray-700'}
                rounded-xl p-4 md:p-6 text-center flex flex-col items-center
                text-white transition-all duration-700
                hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
                group
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
              `}
              style={{ transitionDelay: `${idx * 150 + 200}ms` }}
            >
              {/* Step number */}
              <div
                className={`
                  w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center
                  mb-3 md:mb-4 transition-all duration-300
                  group-hover:scale-110 group-hover:rotate-12
                  ${
                    step.primary
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600/10 border border-blue-500 text-blue-400'
                  }
                `}
              >
                <span className="font-bold text-2xl md:text-2xl">{step.num}</span>
              </div>

              <h4 className="font-bold mb-2 text-2xl md:text-2xl group-hover:text-blue-400 transition-colors">
                {step.title}
              </h4>

              <p
                className={`text-base md:text-base ${
                  step.primary ? 'text-blue-100' : 'text-gray-300'
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connection Lines */}
        <div className="hidden lg:block relative -mt-48 mb-48 pointer-events-none">
          <svg className="w-full h-24" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {[0, 1, 2].map((idx) => (
              <line
                key={idx}
                x1={`${idx * 25 + 12.5}%`}
                y1="50%"
                x2={`${(idx + 1) * 25 + 12.5}%`}
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150 + 500}ms` }}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
