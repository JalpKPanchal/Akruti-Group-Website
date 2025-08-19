import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import logo from "/img/logo.png";
import "../../footer.css"; // Updated CSS file for footer styles

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="gy-4 justify-content-between">
          {/* Logo, Email, Phone */}
          <Col
            xxl={3}
            xl={3}
            lg={3}
            md={6}
            sm={12}
            xs={12}
            className="footer-logo-section"
          >
            <img
              src={logo}
              alt="Akruti Group"
              className="mb-3 img-fluid" // Added img-fluid for responsive image scaling
              style={{ maxWidth: "180px" }}
            />
            <p className="small mb-1">
              <a
                href="mailto:akrutiengineering72@gmail.com"
                className="text-light text-decoration-none"
              >
                akrutiengineering72@gmail.com
              </a>
            </p>
            <p className="small mb-0">+91 83202 92904</p>
          </Col>

          {/* Visit Links */}
          <Col xxl={3} xl={3} lg={3} md={6} sm={12} xs={12}>
            <h6 className="fw-bold mb-3">Visit</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/solarepc" className="text-light text-decoration-none">
                  Solar EPC And C & I
                </a>
              </li>
              <li>
                <a
                  href="/windsolarhybrid"
                  className="text-light text-decoration-none"
                >
                  Wind Solar Hybrid
                </a>
              </li>
              <li>
                <a
                  href="/solarrooftop"
                  className="text-light text-decoration-none"
                >
                  Solar Rooftop
                </a>
              </li>
              <li>
                <a href="/career" className="text-light text-decoration-none">
                  Careers
                </a>
              </li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col xxl={3} xl={3} lg={3} md={6} sm={12} xs={12}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="/projects" className="text-light text-decoration-none">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>

          {/* Offices */}
          <Col xxl={3} xl={3} lg={3} md={6} sm={12} xs={12}>
            <div className="mb-3">
              <h6 className="fw-bold mb-3">Corporate Office</h6>
              <p className="small mb-1">Himmatnagar, Gujarat, India</p>
              <p className="small mb-0">Ph: +91 83202 92904</p>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <Row className="align-items-center">
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <p className="small mb-0">
              Copyright © {new Date().getFullYear()} Akruti Group Pvt. Ltd. All
              rights reserved.
            </p>
          </Col>
          <Col
            xxl={6}
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="text-xxl-end text-xl-end text-lg-end text-md-end text-sm-center text-center mt-sm-3 mt-3"
          >
            <a
              href="https://www.linkedin.com/company/akrutigroup1/"
              className="text-light mx-2 fs-5 social-icon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/akrutigroup_hmt?igsh=MWxxcnQ3Yms0ZzFubw=="
              className="text-light mx-2 fs-5 social-icon"
            >
              <FaInstagram />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
