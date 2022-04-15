import { faGlobe,  faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/hr-line.PNG";
import "../Register/Register.css";

const Login = () => {
    return (
        <div className="register-container vh-100 fixed-top">
      <Form className="form-area shadow-lg">
        <h3 className="text-center">Sign In</h3>
        <p className='text-center fs-1 font-monospace'><FontAwesomeIcon  icon={ faUserCircle }></FontAwesomeIcon></p>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="secondary" size="lg">
            Sign In
          </Button>
        </div>
        <p className="text-center">
          Don't have account? <Link className='text-decoration-none' to="/register">Create a new account</Link>
        </p>
        <img className='img-or' src={logo} alt="" />
        <div className="d-grid gap-2">
          <Button variant="outline-dark" size="lg">
            <span className='p-2'><FontAwesomeIcon icon={ faGlobe }></FontAwesomeIcon></span>
            Continue with google
          </Button>
        </div>
      </Form>
    </div>
    );
};

export default Login;