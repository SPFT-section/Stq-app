import React from 'react';
import { Icon } from '../common/Icon';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/favicon.svg"
              alt="STQ Logo"
              width="24"
              height="24"
            />
            <span>STQ</span>
          </div>
          <p className="footer-tagline">
            Standard To Quality — ยกระดับมาตรฐานสู่คุณภาพของผลงาน
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-links-group">
            <h4>Navigation</h4>
            <a href="/">Home</a>
            <a href="/library">Library</a>
            <a href="/history">History</a>
            <a href="/profile">Profile</a>
          </div>

          <div className="footer-links-group">
            <h4>Features</h4>
            <a href="/editor/new">Write Novel</a>
            <a href="/library">Browse Novels</a>
            <a href="/profile">Reading Settings</a>
          </div>

          <div className="footer-links-group">
            <h4>About</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <span>
            © {currentYear} STQ - Standard To Quality. All rights reserved.
          </span>
          <span className="footer-version">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
};
