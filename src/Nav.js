import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import CSS file for styling


function Nav() {
  return (
  <>
   
    <nav className="navbar"> {/* Add a class name for styling */}
    
       
      <ul className="navbar-nav"> {/* Add a class name for styling */}
        <li className="nav-item"><Link to="/" >Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/menu">Menu</Link></li>
        <li className="nav-item"><Link to="/reservation">Reservation</Link></li>
        <li className="nav-item"><Link to="/order-online">Order Online</Link></li>
        <li className="nav-item"><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default Nav;
