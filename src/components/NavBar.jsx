import { Navbar as NavbarBS, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const cartItemCount = 5;
  return (
    <NavbarBS expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBS.Brand as={NavLink} to="/">
          Ditética Silvia
        </NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={"nav-link"} to="/">
              Inicio
            </NavLink>
            <NavLink className={"nav-link"} to="/alimentosAG">
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
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
    /* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="./index.html" className="navbar-brand">
        <img src="./img/logo-png.png" alt="Logo" height="120px" />
      </a>
      <h3 className="navbar-text">Dietética Silvia</h3>
      <CartWidget />
    </nav> */
  );
};

export default NavBar;
