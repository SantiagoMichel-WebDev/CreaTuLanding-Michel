import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Gamer Ecommerce</h1>
        <nav className="navbar-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="/productos" className="nav-link">Productos</a>
            </li>
            <li className="nav-item">
              <a href="/contactos" className="nav-link">Contactos</a>
            </li>
          </ul>
        </nav>
        <div className="cart-widget-container">
          <CartWidget />
        </div>
      </div>
    </header>
  );
};

export default NavBar;