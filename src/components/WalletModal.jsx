// src/components/WalletModal.jsx
import React from 'react';
import { X } from 'lucide-react';

const WalletModal = ({ wallet, isOpen, onClose, onConnect }) => {
  if (!isOpen || !wallet) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-100 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-md shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-600 hover:rotate-180 hover:text-gray-900 transition z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="text-center p-6 sm:p-8 pt-12">
          {/* Wallet Icon */}
          <img
            src={wallet.icon}
            alt={wallet.name}
            className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"%3E%3Crect fill="%23D1D5DB" width="64" height="64" rx="32"/%3E%3C/svg%3E';
            }}
          />

          {/* Wallet Name */}
          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
            {wallet.name}
          </h4>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            A Web3 wallet is a versatile and significant piece of technology that is set to
            revolutionize the way our online identity is presented and accessed. {wallet.name} wallet
            can go here.
          </p>

          {/* Connect Button */}
          <button
            onClick={onConnect}
            className="w-full bg-white border-2 border-blue-400 text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;