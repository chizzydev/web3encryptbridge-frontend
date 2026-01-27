// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WalletSelection from './pages/WalletSelection';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import './styles/globals.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wallet" element={<WalletSelection />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;