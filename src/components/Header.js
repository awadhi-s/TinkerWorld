// src/components/Header.js
import React from 'react';
import './Header.css'; // Optional: For styling

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Tinker World</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#journey">Journey</a></li>
          <li className="nav-item"><a href="#games">Games</a></li>
          <li className="nav-item"><a href="#magic-tools">Magic Tools</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
