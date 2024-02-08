import React from 'react';
import img1 from './images/little-lemon-logo.png'
import './App.css';


function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <img src={img1} alt="banner_logo" />
        </div>
      </div>
    </header>
  );
}


export default Header;
