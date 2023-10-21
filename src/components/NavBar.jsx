import { Navbar as NavbarBS, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const cartItemCount = 5;
  return (
    <NavbarBS expand="lg" className="navbar">
      <Container>
        <NavbarBS.Brand as={NavLink} to="/">
          <img src="../img/logo-png.png" alt="logo" height={100}/>
        </NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={"nav-link"} to="/">
              Inicio
            </NavLink>
            <NavLink className={"nav-link"} to="/alimentos">
              A Granel
            </NavLink>
            <NavLink className={"nav-link"} to="/contact">
              Contacto
            </NavLink>
          </Nav>
          <Nav>
            <NavLink as={NavLink} to="/cart">
              <FaShoppingCart />{" "}
              <span className="badge-dark">{cartItemCount}</span>
            </NavLink>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default NavBar;
