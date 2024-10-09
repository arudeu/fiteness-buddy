import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Notyf } from "notyf";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notyf = new Notyf();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://fitnessapp-api-ln8u.onrender.com/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.access !== undefined) {
          console.log(data.access);

          // Stores the token of the authenticated user in the local storage
          // Syntax: localStorage.setItem('propertyName', value)
          localStorage.setItem("token", data.access);
          retrieveUserDetails(data.access);

          // Clear input fields after submission
          setEmail("");
          setPassword("");

          notyf.success(`You are now logged in`);
        }
      });
  };
  function retrieveUserDetails(token) {
    fetch(`https://fitnessapp-api-ln8u.onrender.com/users/details`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        //Changes the global "user" state to store the "id" and the "isAdmin" property of the user which will be used for validation across the whole application
        setUser({
          id: data._id,
          isAdmin: data.isAdmin,
        });
      });
  }
  return (
    <Container className="login-container w-50">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="dark"
              type="submit"
              className="d-flex mt-4 mx-auto"
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
