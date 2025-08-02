// src/Components/layout/Navbar.jsx
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/img/logo.png'; // Put your logo in /public/img/logo.png

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      style={{
        background: 'rgba(0,0,0,0.6)',
        padding: '0.7rem 1rem',
        backdropFilter: 'blur(8px)',
        zIndex: '999',
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: '50px', objectFit: 'contain' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto text-uppercase fw-semibold">
            <Nav.Link as={Link} to="/" className="text-white px-3">
              Home
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="services-dropdown"
              className="text-white px-3"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/solar">
                Solar EPC
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ev">
                EV Charging
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/infrastructure">
                Infrastructure
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/projects" className="text-white px-3">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white px-3">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white px-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
