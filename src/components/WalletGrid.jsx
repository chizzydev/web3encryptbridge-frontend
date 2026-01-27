// src/components/WalletGrid.jsx

import React, { useState } from 'react';
import { WALLETS } from '../data/wallets';
import WalletCard from './WalletCard';
import CategoryHeader from './CategoryHeader';

const WalletGrid = ({ category = 'secure', onWalletSelect }) => {
  const [showUninstalled, setShowUninstalled] = useState(false);

  const handleToggleUninstalled = () => {
    setShowUninstalled(!showUninstalled);
  };

  return (
    <div className="w-full max-w-3xl mx-auto pt-20 pb-12">
      {/* Category Header */}
      <CategoryHeader category={category} />

      {/* Filter & Toggle Section */}
      <div className="mb-6 px-4 sm:px-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span className="text-white text-sm font-medium">Choose wallet</span>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm">Show uninstalled</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showUninstalled}
              onChange={handleToggleUninstalled}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600" />
          </label>
        </div>
      </div>

      {/* Wallets List */}
      <div className="space-y-3 px-4 sm:px-0">
        {WALLETS.map((wallet) => (
          <WalletCard
            key={wallet.id}
            wallet={wallet}
            onClick={() => onWalletSelect(wallet)}
          />
        ))}
      </div>
    </div>
  );
};

export default WalletGrid;