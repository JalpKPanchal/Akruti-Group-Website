// src/components/Layout/Footer.jsx
import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/img/logo.png';
import '../../custom.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <Container>
        <Row className="gy-4">
          {/* Logo & Description */}
          <Col md={4}>
            <img
              src={logo}
              alt="Akruti Logo"
              style={{ maxWidth: '180px' }}
              className="mb-3"
            />
            <p className="small">
              Akruti Group is India’s leading solar EPC & I&C service provider with over 200+ clients across the globe.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light fs-5">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-light fs-5">
                <FaInstagram />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h5 className="fw-semibold">Quick Links</h5>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
                            <li><Link to="/services" className="text-light text-decoration-none">Gallery</Link></li>

              <li><Link to="/career" className="text-light text-decoration-none">Careers</Link></li>
            </ul>
          </Col>

          {/* Services */}
          <Col md={3}>
            <h5 className="fw-semibold">Our Services</h5>
            <ul className="list-unstyled small">
              <li><Link to="/solarepc" className="text-light text-decoration-none">Solar EPC</Link></li>
              <li><Link to="/solaric" className="text-light text-decoration-none">Solar I&C</Link></li>
              <li><Link to="/windsolarhybrid" className="text-light text-decoration-none">Wind Solar Hybrid</Link></li>
              {/* <li><Link to="/consulting" className="text-light text-decoration-none">Consulting</Link></li> */}
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={3}>
            <h5 className="fw-semibold">Contact Us</h5>
            <p className="small mb-2">
              <FaMapMarkerAlt className="me-2" />
              Himmatnagar, Gujarat, India
            </p>
            <p className="small mb-2">
              <FaPhoneAlt className="me-2" />
              +91 83202 92904
            </p>
            <p className="small mb-2">
              <FaEnvelope className="me-2" />
              akrutiengineering72@gmail.com
            </p>
          </Col>
        </Row>

        <hr className="text-secondary my-4" />

        <div className="text-center pb-3">
          <small   style={{color:"white"}}>
            © {new Date().getFullYear()} <a href='/' style={{textDecoration:"none"}}>Akruti Group Pvt. Ltd.</a> All rights reserved.
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
