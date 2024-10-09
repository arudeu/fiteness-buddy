import { Button, Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="hero-text">
            <h1>Transform Your Body & Mind</h1>
            <p>
              Join us today and take the first step towards a healthier, fitter
              you. Our personalized fitness programs are designed to help you
              achieve your goals.
            </p>
            <Button variant="light" size="lg" className="hero-button">
              Get Started
            </Button>
          </Col>
          <Col md={6} className="hero-image"></Col>
        </Row>
      </Container>
    </div>
  );
}
