// WindSolarHybrid.jsx
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import "../WindSolarHybrid.css"; // Adjusted to "./" assuming same directory; change if needed

export default function WindSolarHybrid() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <div className="hero-section" data-aos="fade-up">
        <div className="container">
          <h1 className="hero-title">Wind Solar Hybrid Solutions</h1>
          <h2 className="hero-subtitle">for Maximizing</h2>
          <h2 className="hero-highlight">Renewable Energy Efficiency</h2>
          <p className="hero-description">
            Building hybrid solutions with Innovation & Collaboration
          </p>
        </div>
      </div>
      <div className="what-is-section py-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="section-title">
                What is Wind Solar Hybrid System?
              </h2>
              <p className="section-text">
                A Wind Solar Hybrid System combines both wind and solar power
                generation technologies to create a more efficient and reliable
                renewable energy solution. By integrating wind turbines and
                solar panels, this hybrid system optimizes energy production, as
                wind and solar resources often complement each other. At
                Akruti, we design and build custom hybrid systems that optimize
                energy production while reducing the impact of weather
                fluctuations.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="WSY/WSY1.jpg"
                alt="Wind Solar Hybrid System"
                className="img-fluid rounded-3 shadow"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="expert-epc-section py-5" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2 className="epc-title">Expert</h2>
              <h2 className="epc-title">Hybrid EPC</h2>
              <h2 className="epc-title">Solutions</h2>
              <p className="epc-description mt-4">
                Akruti provides a full range of Wind Solar Hybrid EPC services,
                ensuring exceptional quality in every project. From detailed
                project analysis to seamless construction and ongoing
                monitoring, our expert approach delivers high performance,
                reliability, and efficiency. Trust Akruti for end-to-end solar
                solutions that drive sustainable energy success.
              </p>
            </div>
            <div className="col-md-7 d-flex align-items-center">
              <div className="services-container w-100">
                <div className="row justify-content-between">
                  <div className="col-md-5">
                    <div className="service-item">
                      <div className="check-circle">&#10003;</div>
                      <span>Solar Parks</span>
                    </div>
                    <div className="service-item">
                      <div className="check-circle">&#10003;</div>
                      <span>Commercial & Industrial (C&I) Installations</span>
                    </div>
                    <div className="service-item">
                      <div className="check-circle">&#10003;</div>
                      <span>Wind & Solar Hybrid Systems</span>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="service-item">
                      <div className="check-circle">&#10003;</div>
                      <span>Turnkey Projects</span>
                    </div>
                    <div className="service-item">
                      <div className="check-circle">&#10003;</div>
                      <span>Captive and Group Captive Models</span>
                    </div>
                    <div className="service-item">
                      <div className="check-circle">&#10003;</div>
                      <span>Battery Energy Storage System (BESS)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="process-section py-5" data-aos="fade-up">
        <div className="container">
          <h1 className="process-title">Process for</h1>
          <h1 className="process-title">Hybrid System</h1>
          <div className="row mt-4">
            <div className="col-md-4 mb-4">
              <h3 className="process-subtitle">Site Assessment & Design</h3>
              <p className="process-description">
                Comprehensive site analysis to determine the optimal
                configuration of wind and solar components.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3 className="process-subtitle">Integrated Control Systems</h3>
              <p className="process-description">
                Control systems to seamlessly switch between wind and solar
                inputs, ensuring consistent energy supply.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3 className="process-subtitle">Customized Installations</h3>
              <p className="process-description">
                Tailored solutions for different environments, whether it&#39;s
                a solar farm augmented with wind turbines or vice versa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-hybrid-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="why-title">Why Wind Solar Hybrid?</h2>
          <div className="row align-items-center mb-5">
            <div className="col-md-5">
              <h3 className="benefit-subtitle">Increased Energy Yield</h3>
              <p className="benefit-description">
                Combines wind and solar to produce more energy than standalone
                systems.
              </p>
            </div>
            <div className="col-md-2 text-center number-col">
              <span className="benefit-number">01</span>
            </div>
            <div className="col-md-5">
              <img
                src="WSY/WSY2.webp"
                alt="Increased Energy Yield"
                className="img-fluid"
                data-aos="zoom-in"
              />
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-md-5">
              <img
                src="WSY/WSY3.webp"
                alt="Reduced Intermittency"
                className="img-fluid"
                data-aos="zoom-in"
              />
            </div>
            <div className="col-md-2 text-center number-col">
              <span className="benefit-number">02</span>
            </div>
            <div className="col-md-5">
              <h3 className="benefit-subtitle">Reduced Intermittency</h3>
              <p className="benefit-description">
                Balances energy production, providing a more stable power
                supply.
              </p>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-md-5">
              <h3 className="benefit-subtitle">Cost-Effective</h3>
              <p className="benefit-description">
                Maximizes the use of available land and resources, offering a
                higher return on investment.
              </p>
            </div>
            <div className="col-md-2 text-center number-col">
              <span className="benefit-number">03</span>
            </div>
            <div className="col-md-5">
              <img
                src="WSY/WSY4.webp"
                alt="Cost-Effective"
                className="img-fluid"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="why-Akruti-section py-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <img
                src="WSY/WSY5.jpg"
                alt="Wind Solar Hybrid"
                className="img-fluid rounded-4 shadow"
                data-aos="fade-right"
              />
            </div>
            <div className="col-md-7">
              <span className="Akruti-label">Why Akruti?</span>
              <h2 className="Akruti-title">
                What Makes Akruti the Ideal Partner for Wind Solar Hybrid
                Solutions?
              </h2>
              <p className="Akruti-description">
                Akruti Green combines expertise in wind and solar energy to
                deliver hybrid systems. To develop our hybrid energy business,
                we have secured grid connectivity approval for wind-solar hybrid
                parks in Gujarat. We have also initiated the process of scouting
                suitable sites for the commissioning of a wind-solar hybrid
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section py-5" data-aos="fade-up">
        <div className="container text-center">
          <p className="contact-text">
            Interested in maximizing renewable energy output?
          </p>
          <p className="contact-text">
            Contact Akruti Green for a customized Wind Solar Hybrid solution.
          </p>
          <Link to="/contact" className="btn contact-btn">
            Contact Now
          </Link>
        </div>
      </div>
    </>
  );
}
