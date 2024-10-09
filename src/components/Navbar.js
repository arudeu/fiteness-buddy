import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="acrylic-navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          Workout Buddy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#workouts" className="nav-link">
              Workouts
            </Nav.Link>
            <Nav.Link href="/login" className="nav-link">
              Login
            </Nav.Link>
            <Nav.Link href="/register" className="nav-link">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
