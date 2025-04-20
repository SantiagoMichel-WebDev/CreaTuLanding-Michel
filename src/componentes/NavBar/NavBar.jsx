import React from 'react';
import { Link, NavLink } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="navbar">
      
      <div className="navbar-container">
        <div className="logo-container">
        <Link to="/">
        <img className='navbar-logoIMG' src={"/img/Logo.png"} alt="Logo" />        
      </Link>
        </div>
        <h1 className="navbar-logo">Gamer Ecommerce</h1>
        <nav className="navbar-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/productos" className="nav-link">Todos los insumos</a>
            </li>
            <li className="nav-item">
              <NavLink to="categoria/VideoJuegos" className="nav-link"> Videojuegos </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink to="categoria/Accesorios" className="nav-link"> Accesorios </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink to="categoria/Consolas" className="nav-link"> Consolas </NavLink> 
            </li>
            <li className="nav-item">
              <a href="/Contactos" className="nav-link">Contacto</a>
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