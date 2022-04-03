import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/shop">
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
              <Link to ='/shop'><Nav.Link href="/shop">Shop</Nav.Link></Link>
              <Nav.Link eventKey={2} href="/order">
                Order
              </Nav.Link>
              <Nav.Link eventKey={3} href="/inventory">
                Inventory
              </Nav.Link>
              <Nav.Link eventKey={4} href="/about">
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
