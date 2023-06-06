import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img className="logo"/>
        <h1>Work From Camper</h1>
      </Link>
      <Link to="/favorites" style={{ textDecoration: 'none' }}>
        <h3>Favorites</h3>
      </Link>
    </header>
  );
}

export default Header;
