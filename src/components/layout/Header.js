import React, { useState } from 'react';
import { Icon } from '../common/Icon';
import { Button } from '../common/Button';
import { ThemeToggle } from '../settings/ThemeToggle';
import './Header.css';

export const Header = ({ onMenuToggle, isMenuOpen }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button
            className="header-menu-btn"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            <Icon name="menu" size={24} />
          </button>

          <a href="/" className="header-logo">
            <img
              src="/favicon.svg"
              alt="STQ Logo"
              className="header-logo-icon"
              width="32"
              height="32"
            />
            <span className="header-logo-text">STQ</span>
            <span className="header-logo-sub">Standard To Quality</span>
          </a>
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          <a href="/" className="header-nav-link active">
            <Icon name="home" size={20} />
            <span>Home</span>
          </a>
          <a href="/library" className="header-nav-link">
            <Icon name="library" size={20} />
            <span>Library</span>
          </a>
          <a href="/history" className="header-nav-link">
            <Icon name="history" size={20} />
            <span>History</span>
          </a>
          <a href="/profile" className="header-nav-link">
            <Icon name="user" size={20} />
            <span>Profile</span>
          </a>
        </nav>

        <div className="header-right">
          <button
            className="header-search-btn"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <Icon name="search" size={20} />
          </button>

          <ThemeToggle />

          <Button
            variant="primary"
            size="sm"
            icon={<Icon name="plus" size={16} />}
            onClick={() => window.location.href = '/editor/new'}
          >
            New Novel
          </Button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="header-search-overlay">
          <div className="header-search-container">
            <Icon name="search" size={20} className="header-search-icon" />
            <input
              type="text"
              className="header-search-input"
              placeholder="Search novels..."
              autoFocus
            />
            <button
              className="header-search-close"
              onClick={() => setIsSearchOpen(false)}
            >
              <Icon name="close" size={20} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
