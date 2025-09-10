import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import logo from "/img/logo.png";
import "../../footer.css"; // Updated CSS file for footer styles
import { Link } from "react-router-dom";

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
              className="mb-3 img-fluid"
              style={{ maxWidth: "180px" }}
            />
            <p className="small mb-1">
              <a
                href="mailto:akrutigroupacc@gmail.com"
                className="text-light text-decoration-none"
              >
                akrutigroupacc@gmail.com
              </a>
            </p>
            <p className="small mb-0">
              <a
                href="tel:+918320292904"
                className="text-light text-decoration-none"
              >
                +91 83202 92904
              </a>
            </p>
          </Col>

          {/* Visit Links */}
          <Col xxl={3} xl={3} lg={3} md={6} sm={12} xs={12}>
            <h6 className="fw-bold mb-3">Visit</h6>
            <ul className="list-unstyled small">
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/solarepc"
                  className="text-light text-decoration-none"
                >
                  Solar EPC And C & I
                </Link>
              </li>
              <li>
                <Link
                  to="/windsolarhybrid"
                  className="text-light text-decoration-none"
                >
                  Wind Solar Hybrid
                </Link>
              </li>
              <li>
                <Link
                  to="/solarrooftop"
                  className="text-light text-decoration-none"
                >
                  Solar Rooftop
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-light text-decoration-none">
                  Careers
                </Link>
              </li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col xxl={3} xl={3} lg={3} md={6} sm={12} xs={12}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <Link
                  to="/projects"
                  className="text-light text-decoration-none"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          {/* Offices */}
          <Col xxl={3} xl={3} lg={3} md={6} sm={12} xs={12}>
            <div className="mb-3">
              <h6 className="fw-bold mb-3">Corporate Office</h6>
              <p className="small mb-1">
                <a
                  href="https://maps.app.goo.gl/tMPbgKPtiKNo47Te9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  110,111, Jeevan Dhara Complex, Hadiyol Rd, opposite Nayra
                  Petroleum, Himatnagar, Gujarat 383001
                </a>
              </p>

              <p className="small mb-0">
                Ph:{" "}
                <a
                  href="tel:+918320292904"
                  className="text-light text-decoration-none"
                >
                  +91 83202 92904
                </a>
              </p>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <Row className="align-items-center">
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <p className="small mb-1">
              Copyright © {new Date().getFullYear()} Akruti Group Pvt. Ltd. All
              rights reserved.
            </p>
            <p className="small mb-0">
              Website Developed by{" "}
              <a
                href="https://www.linkedin.com/in/jalp-panchal-8b619631a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none fw-bold"
              >
                Jalp Panchal
              </a>{" "}
              &{" "}
              <a
                href="https://www.linkedin.com/in/ruchit-patel-0206ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none fw-bold"
              >
                Ruchit Patel
              </a>
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
