// src/components/CategoryHeader.jsx

import React from 'react';
import { WALLET_CATEGORIES } from '../data/wallets';

const CategoryHeader = ({ category = 'secure' }) => {
  const categoryData = WALLET_CATEGORIES[category] || WALLET_CATEGORIES.secure;

  return (
    <div className="mb-8 px-4 sm:px-0">
      <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 capitalize">
        {category}
      </h2>
      <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-3 sm:p-4 md:p-6">
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed tracking-wide">
          {categoryData.description}
        </p>
      </div>
    </div>
  );
};

export default CategoryHeader;