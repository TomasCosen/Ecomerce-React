import { Navbar as NavbarBS, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
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
            <CartWidget/>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default NavBar;
