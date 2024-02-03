import React from 'react';
import img1 from './images/little-lemon-logo.png'
import './App.css';

function Header() {
  return (
    <header>
       <img src={img1} alt="banner_logo" />
    </header>
  );
}

export default Header;
