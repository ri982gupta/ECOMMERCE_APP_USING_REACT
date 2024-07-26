// Header.tsx
import React from 'react';
import './Header.scss'

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="title-container">
        <h1>E-commerce Website</h1>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
