import React, { useState, useEffect } from 'react';
import { Copy, Download, RotateCcw, Shield, Home, CheckCircle } from 'lucide-react';

const SuccessPage = () => {
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const generateUID = () => {
    const prefix = 'WU';
    const timestamp = Date.now().toString(36);
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let random = '';
    for (let i = 0; i < 8; i++) {
      random += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return prefix + timestamp + random;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newUID = generateUID();
      setUid(newUID);
      localStorage.setItem('backup_uid', newUID);
      localStorage.setItem('backup_timestamp', new Date().toISOString());
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const copyUID = async () => {
    if (!uid) return;

    try {
      await navigator.clipboard.writeText(uid);
      setCopied(true);
      showToastMessage('UID copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      showToastMessage('Failed to copy UID');
    }
  };

  const downloadUID = () => {
    if (!uid) return;

    const timestamp = new Date().toISOString();
    const content = `Bigt3 Connect Vault - Backup Information
        
Generated: ${timestamp}
UID: ${uid}

IMPORTANT: Keep this UID safe and secure. You will need it to restore your wallet.

Security Notice:
- Never share this UID with anyone
- Store it in a secure location
- Make multiple backup copies
- This UID is required for wallet recovery

Bigt3 Connect Vault - Secure Crypto Storage`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wallet-backup-${uid}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    showToastMessage('Backup file downloaded!');
  };

  const regenerateUID = () => {
    if (!window.confirm('Are you sure? The current UID will be lost forever.')) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const newUID = generateUID();
      setUid(newUID);
      localStorage.setItem('backup_uid', newUID);
      localStorage.setItem('backup_timestamp', new Date().toISOString());
      setLoading(false);
      showToastMessage('New UID generated!');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 animate-fade-in">
          <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <CheckCircle size={18} />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center p-4 md:p-8 relative z-10">
        {/* Success Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 max-w-2xl w-full p-8 md:p-12 relative overflow-hidden">
          {/* Top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />

          {/* Security Badge */}
          <div className="absolute top-6 right-6 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center animate-pulse">
            <Shield size={24} />
          </div>

          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-white border-4 border-green-500 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle size={64} className="text-green-500" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Backup Successful!
          </h1>

          {/* UID Container */}
          <div className="bg-gradient-to-br from-blue-50/50 to-white border-2 border-blue-600 rounded-2xl p-6 md:p-8 my-8 transition-transform hover:translate-y-[-2px] hover:shadow-xl">
            <div className="text-sm text-gray-600 font-semibold mb-2 uppercase tracking-widest">
              🔐 Unique Identifier
            </div>

            {loading ? (
              <div className="flex justify-center py-4">
                <div className="w-8 h-8 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
              </div>
            ) : (
              <div className="bg-white/70 rounded-lg p-3 mb-6 font-mono text-lg font-semibold text-blue-600 break-all">
                {uid}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={copyUID}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-white transition-all ${
                  copied
                    ? 'bg-green-500'
                    : 'bg-blue-600 hover:bg-blue-700 active:translate-y-0.5'
                }`}
              >
                <Copy size={18} />
                {copied ? 'Copied!' : 'Copy UID'}
              </button>

              <button
                onClick={downloadUID}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all active:translate-y-0.5"
              >
                <Download size={18} />
                Download
              </button>

              <button
                onClick={regenerateUID}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all active:translate-y-0.5"
              >
                <RotateCcw size={18} />
                Regenerate
              </button>
            </div>
          </div>

          {/* Success Message */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Your wallet data has been successfully backed up! 
            We've securely stored your information, ensuring your assets
             remain protected. Feel free to continue managing your
              wallet or explore additional features.
            
          </p>

          {/* Return Button */}
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:shadow-lg transition-all active:translate-y-0.5"
          >
            <Home size={20} />
            Return to Dashboard
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SuccessPage;