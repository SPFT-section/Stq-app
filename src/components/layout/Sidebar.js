import React from 'react';
import { Icon } from '../common/Icon';
import './Sidebar.css';

const navLinks = [
  { href: '/', icon: 'home', label: 'Home' },
  { href: '/library', icon: 'library', label: 'Library' },
  { href: '/history', icon: 'history', label: 'History' },
  { href: '/profile', icon: 'user', label: 'Profile' },
];

export const Sidebar = ({ currentPath = '/' }) => {
  return (
    <aside className="sidebar">
      <a href="/" className="sidebar-logo">
        <img src="/favicon.svg" alt="STQ Logo" width="28" height="28" />
        <span>STQ</span>
      </a>

      <nav className="sidebar-nav" aria-label="Sidebar navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`sidebar-link ${currentPath === link.href ? 'active' : ''}`}
          >
            <Icon name={link.icon} size={20} />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <a href="/editor/new" className="sidebar-link">
          <Icon name="plus" size={20} />
          <span>New Novel</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
