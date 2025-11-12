import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/img/logo.png";
import "../../navbar.css";

function CustomNavbar() {
  const [showServices, setShowServices] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size - changed breakpoint to 1200px
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      expand="xl" // Changed from "lg" to "xl" for 1200px breakpoint
      className="solar-navbar position-absolute top-2 start-50 translate-middle-x"
      style={{
        width: "95%",
        maxWidth: "1400px", // Added max-width for very large screens
        zIndex: 999,
        borderRadius: "50px",
        marginTop: "9px",
      }}
    >
      <Container
        fluid
        className="d-flex align-items-center justify-content-between px-3 px-xl-4"
      >
        {/* Left: Logo */}
        <Link to="/" className="navbar-brand mb-0">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{ height: "50px", objectFit: "contain" }}
          />
        </Link>

        {/* Hamburger */}
        <Navbar.Toggle
          aria-controls="main-navbar"
          className="shadow-none border-0 bg-transparent"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar" className="justify-content-center">
          {/* Center: Nav Links */}
          <Nav className="custom-nav fw-semibold align-items-center">
            <Nav.Link as={Link} to="/about" className="px-2 px-xl-3">
              About Us
            </Nav.Link>

            {/* Dropdown */}
            <div
              className="nav-item dropdown"
              onMouseEnter={() => !isMobile && setShowServices(true)}
              onMouseLeave={() => !isMobile && setShowServices(false)}
              onClick={() => isMobile && setShowServices(!showServices)}
            >
              <NavDropdown
                title="Our Services"
                id="services-dropdown"
                className="px-2 px-xl-3"
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

            <Nav.Link as={Link} to="/projects" className="px-2 px-xl-3">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/gallerypage" className="px-2 px-xl-3">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/career" className="px-2 px-xl-3">
              Career
            </Nav.Link>

            {/* Contact Us button (mobile only) */}
            <div className="d-xl-none mt-2">
              <Link to="/contact" className="navbar-contact-btn">
                Contact Us
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>

        {/* Right: Contact Us button (desktop only) */}
        <div className="d-none d-xl-block ms-2">
          <Link to="/contact" className="btn contact-btn">
            Contact Us
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
