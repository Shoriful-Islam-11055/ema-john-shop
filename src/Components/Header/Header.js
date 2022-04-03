import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100"
              height="60"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#deets">Shop</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Order
              </Nav.Link>
              <Nav.Link eventKey={3} href="#memes">
                Inventory
              </Nav.Link>
              <Nav.Link eventKey={4} href="#memes">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
