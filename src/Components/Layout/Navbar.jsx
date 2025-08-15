import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "/img/logo.png";
import "../../custom.css";

function CustomNavbar() {
  const [theme, setTheme] = useState("dark");
  const [showServices, setShowServices] = useState(false); // For hover

  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };
    setTheme(matchDark.matches ? "dark" : "light");
    matchDark.addEventListener("change", handleThemeChange);
    return () => matchDark.removeEventListener("change", handleThemeChange);
  }, []);

  return (
    <>
      <Navbar expand="lg" sticky="top" className="solar-navbar">
        <Container>
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "55px", objectFit: "contain" }}
            />
          </a>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto text-uppercase fw-semibold">
              <Nav.Link as={Link} to="/" className="px-3">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="px-3">
                About Us
              </Nav.Link>

              {/* Dropdown with hover behavior */}
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
                    Solar EPC
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/windsolarhybrid">
                    Wind Solar Hybrid
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/solaric">
                    Solar I & C
                  </NavDropdown.Item>
                </NavDropdown>
              </div>

              <Nav.Link as={Link} to="/projects" className="px-3">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/gallerypage" className="px-3">
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
    </>
  );
}

export default CustomNavbar;
