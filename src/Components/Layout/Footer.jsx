import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p style={{ fontSize: "0.9rem" }}>
              We are committed to delivering quality services in design,
              architecture, and construction with passion and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled" style={{ fontSize: "0.9rem" }}>
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p style={{ fontSize: "0.9rem" }}>
              📍 Ahmedabad, Gujarat, India<br />
              📞 +91-9876543210<br />
              📧 contact@mywebsite.com
            </p>
          </div>

        </div>

        <hr className="border-secondary" />

        <p className="text-center mb-0" style={{ fontSize: "0.85rem" }}>
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
