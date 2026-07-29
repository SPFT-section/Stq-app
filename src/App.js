import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import { Router } from './Router';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app" style={{ minHeight: '100vh' }}>
      <Header onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      <main className="main-content">
        <Router />
      </main>
      <Footer />
    </div>
  );
};
