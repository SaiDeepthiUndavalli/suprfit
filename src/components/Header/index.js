// components/Header.js
import React from 'react';
import './index.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#" className='spur'>Spur.fit</a>
        <a href="find-clients" className='items'>Find Clients</a>
        <a href="motivation"className='items'>Motivation</a>
        <a href="Tools"className='items'>Tools</a>
        <a href="Trainers"className='items'>Trainers</a>
     
     
        <button className="login">Log In</button>
        <button className='signup'>Sign Up</button>
      </div>
    </nav>
  );
}

export default Header;
