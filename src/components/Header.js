import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav-list">
        <li className="nav-list__item nav-list__item--left nav-list__item--logo"><Link to='/'>NewsHub</Link></li>
        <li className="nav-list__item"><Link to='/'>Home</Link></li>
        <li className="nav-list__item"><Link to='/sources'>Sources</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;