import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css"
import { CartContext } from "../CartContext/CartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const {cantidadEnCarrito} = useContext(CartContext)
  return (
    <div>
      <NavLink className="nav-link" to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge bg-dark">{cantidadEnCarrito()}</span>
      </NavLink>
    </div>
  );
};

export default CartWidget;
