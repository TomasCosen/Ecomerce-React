import React from "react";
import CartWidget from "./CartWidget/CartWidget.jsx";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="./index.html" className="navbar-brand">
        <img src="./img/logo-png.png" alt="Logo" height="120px" />
      </a>
      <h3 className="navbar-text">Dietética Silvia</h3>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Alimentos
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Cosmeticos
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
