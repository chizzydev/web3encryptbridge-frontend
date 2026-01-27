// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WalletSelection from './pages/WalletSelection';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Wallet Selection Page */}
        <Route path="/wallet" element={<WalletSelection />} />

        {/* Success Page */}
        <Route path="/success" element={<Success />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;