import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Notyf } from "notyf";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notyf = new Notyf();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    fetch(`https://fitnessapp-api-ln8u.onrender.com/users/register`, {
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
        setEmail("");
        setPassword("");
        notyf.success("Registered Successfully");
      });
  };

  return (
    <Container className="register-container w-50">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Register</h2>
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
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
