import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../../custom.css'; // If needed for additional styling

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light pt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-md-4">
            <img src="/img/logo.png" alt="Prozeal Logo" style={{ maxWidth: '200px' }} className="mb-3" />
            <p>
              Akruti Green is India’s leading solar EPC & I&C service provider with more than 200+ clients across the globe.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light"><FaFacebookF /></a>
              <a href="#" className="text-light"><FaLinkedinIn /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/careers" className="text-light text-decoration-none">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3">
            <h5 className="fw-bold">Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="/solar-epc" className="text-light text-decoration-none">Solar EPC</a></li>
              <li><a href="/solar-ic" className="text-light text-decoration-none">Solar I&C</a></li>
              <li><a href="/wind" className="text-light text-decoration-none">Wind Energy</a></li>
              <li><a href="/consulting" className="text-light text-decoration-none">Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-2"><FaMapMarkerAlt className="me-2" />Himmatnagar, Gujarat, India</p>
            <p className="mb-2"><FaPhoneAlt className="me-2" />+91 83202 92904</p>
            <p className="mb-2"><FaEnvelope className="me-2" />akrutiengineering72@gmail.com</p>
          </div>
        </div>

        <hr className="text-secondary my-4" />

        <div className="text-center pb-3">
          <small>© {new Date().getFullYear()} Akruti Group Pvt. Ltd. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
