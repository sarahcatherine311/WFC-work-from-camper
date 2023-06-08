import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" alt="Work on Wheels logo"/>
        <h1>Work From Camper</h1>
      </Link>
    </header>
  );
};

export default Header;
