import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/">Employee Mangement System </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Employees{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/employee">
              Add Employee{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
