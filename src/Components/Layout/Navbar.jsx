import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/img/logo.png";
import "../../navbar.css";

function CustomNavbar() {
  const [showServices, setShowServices] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="solar-navbar position-absolute top-2 start-50 translate-middle-x"
      style={{
        width: "95%",
        zIndex: 999,
        borderRadius: "50px",
        marginTop: "9px",
      }}
    >
      <Container
        fluid
        className="d-flex align-items-center justify-content-between"
      >
        {/* Left: Logo */}
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{ height: "55px", objectFit: "contain" }}
          />
        </Link>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-center">
          {/* Center: Nav Links */}
          <Nav className="custom-nav fw-semibold align-items-center">
            <Nav.Link as={Link} to="/about" className="px-3">
              About Us
            </Nav.Link>

            {/* Dropdown */}
            <div
              className="nav-item dropdown"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <NavDropdown
                title="Our Services"
                id="services-dropdown"
                className="px-3"
                menuVariant="light"
                show={showServices}
                renderMenuOnMount={true}
              >
                <NavDropdown.Item as={Link} to="/solarepc">
                  Solar EPC and C&I
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/windsolarhybrid">
                  Wind Solar Hybrid
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/solarrooftop">
                  Solar Rooftop
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <Nav.Link as={Link} to="/projects" className="px-3">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/gallerypage" className="px-3">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/career" className="px-3">
              Career
            </Nav.Link>

            {/* Contact Us button (always visible, inside collapse for mobile) */}
            <div className="d-lg-none mt-2">
              <Link to="/contact" className="navbar-contact-btn">
                Contact Us
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>

        {/* Right: Contact Us button (desktop only) */}
        <div className="d-none d-lg-block">
          <Link to="/contact" className="btn contact-btn">
            Contact Us
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
