import React, { useContext } from "react";
import { Navbar as NavbarBS, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import { AuthContext } from "../AuthContext";

const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      const response = await fetch(
        "https://dietetica-silvia.onrender.com/api/session/logout",
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("jwtToken");
        window.location.href = "/";
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Error during logout:", err);
    }
  };
  return (
    <NavbarBS expand="lg" className="navbar">
      <Container>
        <NavbarBS.Brand as={NavLink} to="/">
          <img src="../img/logo-png.png" alt="logo" height={100} />
        </NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={"nav-link"} to="/">
              Inicio
            </NavLink>
            <NavLink className={"nav-link"} to="/productos/Carbohidratos">
              Carbohidrato
            </NavLink>
            <NavLink className={"nav-link"} to="/productos/Grasas Saludables">
              Grasas Saludables
            </NavLink>
            <NavLink className={"nav-link"} to="/productos/Proteínas">
              Proteínas
            </NavLink>
            <NavLink className={"nav-link"} to="/contact">
              Contacto
            </NavLink>
          </Nav>
          <div className="navbar-right">
            {!isAuthenticated ? (
              <>
                <NavLink className="btn btn-register" to="/register">
                  Register
                </NavLink>
                <NavLink className="btn btn-login" to="/login">
                  Login
                </NavLink>
              </>
            ) : (
              <button className="btn btn-logout" onClick={handleLogout}>
                Logout
              </button>
            )}
            <CartWidget />
          </div>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default NavBar;
