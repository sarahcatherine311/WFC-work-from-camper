import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img className="logo"/>
      <h1>Work From Camper</h1>
      <Link to="/favorites">
        <h3>Favorites</h3>
      </Link>
    </header>
  );
}

export default Header;
