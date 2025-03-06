import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav>
      {/* Add NavBar content here if needed */}
    </nav>
  );
};
const Header = () => {
  return (
    <Navbar className="bg-secondary" variant="light">
    <Container>
      <Navbar.Brand>Dashboard</Navbar.Brand>
    </Container>
  </Navbar>
  
  );
};

export default Header;
