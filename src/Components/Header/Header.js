import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
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
              className="d-inline-block align-top me-2"
            />{" "}
            <img
              alt=""
              src="/public/logo192.png"
              width="50"
              height="50"
              className="d-inline-block align-top rounded-circle"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-5">
              <div className="navbar-nav fw-bold">
                <Link className="nav-link active" aria-current="page" to="/">
                  SHOP
                </Link>
                <Link className="nav-link" to="/order">
                  ORDER
                </Link>
                <Link className="nav-link" to="/inventory">
                  INVENTORY
                </Link>
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
                {/* <Link className="nav-link" to="/about">
                  {user && <p>{user?.email}</p>}
                </Link> */}
              </div>
            </Nav>
            <Nav className="ms-auto">
              <div className="navbar-nav">
                <Link className="nav-link" to="/register">
                  <Button variant="outline-info">SIGN UP</Button>
                </Link>
                <Link className="nav-link" to="/login">
                  {user ? (
                    <Button onClick={handleSignOut} variant="outline-info">
                      LOGIN OUT
                    </Button>
                  ) : (
                    <Button variant="outline-info">LOGIN</Button>
                  )}
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
