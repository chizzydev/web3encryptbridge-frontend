// src/components/WalletCard.jsx

import React from 'react';

const WalletCard = ({ wallet, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gray-800/50 border-2 border-gray-700 hover:border-purple-500/50 rounded-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-700">
          <img
            src={wallet.icon}
            alt={wallet.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"%3E%3Crect fill="%23374151" width="40" height="40"/%3E%3C/svg%3E';
            }}
          />
        </div>
        <span className="text-white font-bold text-sm sm:text-base tracking-wide text-left truncate">
          {wallet.name}
        </span>
      </div>
    </button>
  );
};

export default WalletCard;