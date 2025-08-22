// WindSolarHybrid.jsx
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import "../WindSolarHybrid.css"; // Adjusted to "./" assuming same directory; change if needed
import PageLayout from "./Layout/PageLayout";

export default function WindSolarHybrid() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <PageLayout>
        <div className="hero-section" data-aos="fade-up">
          <div className="container">
            <h1 className="hero-title">Wind Solar Hybrid Services</h1>
            <h2 className="hero-subtitle">for Enhancing</h2>
            <h2 className="hero-highlight">Renewable Energy Capability</h2>
            <p className="hero-description">
              Innovating together to build next-generation hybrid solutions.
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
                  A Wind–Solar Hybrid System integrates wind and solar power
                  generation technologies to deliver a more efficient and
                  reliable renewable energy solution. By combining wind turbines
                  with solar panels, these systems maximize energy output, as
                  wind and solar resources typically complement each other. At
                  Akruti, we specialize in designing and building customized
                  hybrid solutions that enhance energy production while
                  minimizing the impact of weather variability.
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
                <h2 className="epc-title">Specialized Hybrid EPC Services</h2>

                <p className="epc-description mt-4">
                  Akruti delivers comprehensive Wind–Solar Hybrid EPC services
                  with an unwavering focus on quality. From in-depth project
                  analysis to seamless construction and continuous performance
                  monitoring, our expertise ensures high efficiency,
                  reliability, and long-term performance. Count on Akruti for
                  end-to-end solar solutions that power sustainable energy
                  success.
                </p>
              </div>
              <div className="col-md-7 d-flex align-items-center">
                <div className="services-container w-100">
                  <div className="row justify-content-between">
                    <div className="col-md-5">
                      <div className="service-item">
                        <span>Solar Parks</span>
                      </div>
                      <div className="service-item">
                        <span>Commercial & Industrial (C&I) Installations</span>
                      </div>
                      <div className="service-item">
                        <span>Wind & Solar Hybrid Systems</span>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="service-item">
                        <span>Turnkey Projects</span>
                      </div>
                      <div className="service-item">
                        <span>Captive and Group Captive Models</span>
                      </div>
                      {/* <div className="service-item">
                      <div className="check-circle">&#10003;</div>
                      <span>Battery Energy Storage System (BESS)</span>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="process-section py-5" data-aos="fade-up">
          <div className="container">
            <h1 className="process-title">Process for Hybrid System</h1>
          
            <div className="row mt-4">
              <div className="col-md-4 mb-4">
                <h3 className="process-subtitle">Site Analysis & Planning</h3>
                <p className="process-description">
                  In-depth site study to determine the ideal setup for wind and
                  solar infrastructure
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <h3 className="process-subtitle">Central Control Solutions</h3>
                <p className="process-description">
                  Advanced control systems enabling smooth transition between
                  wind and solar sources for consistent power delivery.
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <h3 className="process-subtitle">Specialized Setups</h3>
                <p className="process-description">
                  Custom solutions designed for varied settings, from solar
                  farms integrated with wind power to wind projects supported by
                  solar generation.
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
                <h3 className="benefit-subtitle">
                  Improved Energy Performance
                </h3>
                <p className="benefit-description">
                  Utilizes wind and solar synergy to achieve greater energy
                  yield than single-source systems.
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
                <h3 className="benefit-subtitle">Enhanced Supply Stability</h3>
                <p className="benefit-description">
                  Maintains balanced generation, resulting in a more stable
                  power output
                </p>
              </div>
            </div>
            <div className="row align-items-center mb-5">
              <div className="col-md-5">
                <h3 className="benefit-subtitle">Budget-Friendly</h3>
                <p className="benefit-description">
                  Enhances land and resource efficiency for greater investment
                  returns
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
                  Why Akruti the Ideal Partner for Wind Solar Hybrid Services?
                </h2>
                <p className="Akruti-description">
                  Akruti Green leverages its expertise in wind and solar energy
                  to deliver advanced hybrid power solutions worldwide. As part
                  of our commitment to expanding the hybrid energy sector, we
                  have secured grid connectivity approvals for wind–solar hybrid
                  parks in Gujarat and are actively identifying prime locations
                  across diverse regions for future project commissioning.
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
      </PageLayout>
    </>
  );
}
