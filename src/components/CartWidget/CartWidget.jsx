import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css"
import { CartContext } from "../CartContext/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const {cantidadEnCarrito} = useContext(CartContext)
  return (
    <div className="cart-widget">
      <NavLink className="nav-link" to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        <span className="badge bg-dark cart-number">{cantidadEnCarrito()}</span>
      </NavLink>
    </div>
  );
};

export default CartWidget;
