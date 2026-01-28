// src/pages/Home.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WalletModal from '../components/WalletModal';
import HeroSection from '../components/sections/HeroSection';
import FindSecureSection from '../components/sections/FindSecureSection';
import ExploreWeb3Section from '../components/sections/ExploreWeb3Section';
import GetStartedSection from '../components/sections/GetStartedSection';
import BackupWorksSection from '../components/sections/BackupWorksSection';
import FAQSection from '../components/sections/FAQSection';
import BrandsCarouselSection from '../components/sections/BrandsCarouselSection';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden w-full">
      <Navbar onConnectWallet={() => setModalOpen(true)} />
      
      <main className="mt-[60px] md:mt-[82px] w-full overflow-x-hidden">
        <HeroSection onConnectWallet={() => setModalOpen(true)} />
        <FindSecureSection />
        <ExploreWeb3Section />
        <GetStartedSection onConnectWallet={() => setModalOpen(true)} />
        <BackupWorksSection onConnectWallet={() => setModalOpen(true)} />
        <FAQSection onConnectWallet={() => setModalOpen(true)} />
        <BrandsCarouselSection />
      </main>

      <Footer />
      
      {modalOpen && <WalletModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
      
      {showGoToTop && (
        <button onClick={goToTop} className="fixed bottom-5 right-5 z-30 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition animate-bounce">
          ↑
        </button>
      )}
    </div>
  );
}