// SolarRooftop.jsx
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Added for icons
import AOS from "aos";
import "aos/dist/aos.css";
import PageLayout from "./Layout/PageLayout";
import { Link } from "react-router-dom";
import "./SolarRooftop.css";

export default function SolarRooftop() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-in-out" });
  }, []);

  const projects = [
    // {
    //   image: "path/to/asahi-glass.jpg", // Replace with your actual image path
    //   caption: "Asahi Glass - 4.26 MW",
    // },
    // {
    //   image: "path/to/supreme-petrochem.jpg", // Replace with your actual image path
    //   caption: "Supreme Petrochem - 1.3 MW",
    // },
    // {
    //   image: "path/to/reliance.jpg", // Replace with your actual image path
    //   caption: "Reliance - 700 KW Flexible module",
    // },
  ];

  return (
    <PageLayout>
      <div className="hero-section" data-aos="fade-up">
        <div className="container">
          <h1 className="hero-title">Solar Rooftop Solutions</h1>
          <h2 className="hero-subtitle">for Maximizing</h2>
          <h2 className="hero-highlight">Clean Energy Efficiency</h2>
          <p className="hero-description">
            Empowering homes and businesses with next-generation rooftop solar
            innovations.
          </p>
        </div>
      </div>
      <section className="content-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto text-center">
              <h2 className="fw-bold mb-4" data-aos="fade-up">
                Solar Rooftop Solutions
              </h2>
              <p
                className="lead text-muted"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Embrace the power of solar and take control of your energy
                future. Waaree’s end-to-end rooftop solar solutions transform
                unused spaces — rooftops, warehouses, parking lots, and more —
                into sustainable, cost-saving power plants. With over{" "}
                <strong>1,000,000 successful rooftop installations</strong>{" "}
                across India, we deliver tailored solutions that lower
                electricity costs, reduce carbon footprints, and empower
                businesses and homes alike.
              </p>
              <p
                className="lead text-muted"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <center id="cta-text">
                  Let’s turn your idle roof into a powerhouse of clean energy.
                </center>
              </p>
              <Link
                to="/contact"
                className="btn btn-primary btn-lg mt-4 shadow-sm"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div
                className="feature-block bg-dark text-white p-4 text-center rounded"
                data-aos="fade-up"
              >
                <i className="bi bi-people fs-1 mb-3"></i>
                <h5>Technical Execution & Expertise</h5>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="feature-block bg-success text-white p-4 text-center rounded"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-files fs-1 mb-3"></i>
                <h5>Seamless Operations & Maintenance</h5>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="feature-block bg-primary text-white p-4 text-center rounded"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-rocket-takeoff fs-1 mb-3"></i>
                <h5>Fastest Project Execution Speed</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section py-5">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">
            Glimpse of Some of Our Rooftop Mounted Solar Projects
          </h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div
                  className="project-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <img
                    src={project.image}
                    alt={project.caption}
                    className="img-fluid rounded mb-3"
                  />
                  <p className="text-center">{project.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
