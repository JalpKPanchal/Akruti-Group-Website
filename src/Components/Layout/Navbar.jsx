import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/img/logo.png';
import "../../custom.css"; // Ensure this path is correct

function CustomNavbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    // Initial check
    setTheme(matchDark.matches ? 'dark' : 'light');

    // Listen for changes
    matchDark.addEventListener('change', handleThemeChange);

    return () => matchDark.removeEventListener('change', handleThemeChange);
  }, []);

  const isDark = theme === 'dark';

  return (
    <Navbar
      expand="lg"
      bg={isDark ? 'dark' : 'light'}
      variant={isDark ? 'dark' : 'light'}
      sticky="top"
      style={{
        background: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.8)',
        padding: '0.7rem 1rem',
        backdropFilter: 'blur(8px)',
        zIndex: '999',
        transition: 'background 0.3s ease-in-out',
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
            <Nav.Link as={Link} to="/" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="px-3">
              About Us
            </Nav.Link>
            <NavDropdown
              title="Our Services"
              id="services-dropdown"
              className="px-3"
              menuVariant={isDark ? 'dark' : 'light'}
            >
              <NavDropdown.Item as={Link} to="/solarepc">
                Solar EPC
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/windsolarhybrid">
               Wind Solar Hybrid
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/solaric">
                Solar I & C
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/projects" className="px-3">
              Our Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="px-3">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="px-3">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/career" className="px-3">
              Career
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
