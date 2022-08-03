import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
const AppBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      style={{ color: "#000", fontWeight: 600 }}
      id="nav"
    >
      <Container>
        <Navbar.Brand href="#home">
          <span>E </span> - Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              href="#features"
              style={{ color: "#000", fontWeight: 600 }}
            >
              Men
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{ color: "#000", fontWeight: 600 }}
            >
              Women
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              style={{ color: "#000", fontWeight: 600 }}
            >
              Kids
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <AiOutlineSearch
                size={20}
                style={{ color: "#000", fontWeight: 600 }}
              />
            </Nav.Link>
            <Nav.Link href="#deets">
              <AiOutlineShoppingCart
                size={20}
                style={{ color: "#000", fontWeight: 600 }}
              />
            </Nav.Link>
            <Nav.Link href="#deets">
              <BsPerson size={20} style={{ color: "#000", fontWeight: 600 }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
