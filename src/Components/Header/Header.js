import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <img className="logo" src="https://i.ibb.co/mhjZqTd/Untitled-Artwork-7.png" alt="Work on Wheels logo"/>
      <Link to="/">
        <img className='logo-title' src='https://i.ibb.co/hLxhx4Q/Untitled-Artwork-8.png' alt='Work on Wheels'/>
      </Link>
    </header>
  );
};

export default Header;
