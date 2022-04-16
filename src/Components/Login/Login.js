import { faGlobe, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/hr-line.PNG";
import "../Register/Register.css";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitSignIn = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    signInWithEmailAndPassword(email, password);
    setValidated(true);
  };
 
  if(user){
    navigate('/');
    console.log('hello')
  }

  return (
    <div className="register-container vh-100 fixed-top">
      <Form
        onSubmit={handleSubmitSignIn}
        noValidate
        validated={validated}
        className="form-area shadow-lg"
      >
        <h3 className="text-center">Sign In</h3>
        <p className="text-center fs-1 font-monospace">
          <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
        </p>
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            required
            type="email"
            placeholder="Enter email"
            defaultValue="hello@gmail.com"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            required
            type="password"
            placeholder="Enter password"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        <p style={{color : 'red'}}>{error}</p>
        <div className="d-grid gap-2">
          <Button type="submit" variant="secondary" size="lg">
            Sign In
          </Button>
        </div>
        <p className="text-center">
          Don't have account?{" "}
          <Link className="text-decoration-none" to="/register">
            Create a new account
          </Link>
        </p>
        {
          loading && <p>Loading....</p> 
        }
        <img className="img-or" src={logo} alt="" />

        <div className="d-grid gap-2">
          <Button variant="outline-dark" size="lg">
            <span className="p-2">
              <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
            </span>
            Continue with google
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
