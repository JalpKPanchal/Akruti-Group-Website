// WindSolarHybrid.jsx
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import "../WindSolarHybrid.css"; // Adjusted to "./" assuming same directory; change if needed

export default function SolarEPC() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <div className="hero-section" data-aos="fade-up">
        <div className="container">
          <h1 className="hero-title">Our Solar EPC Solutions</h1>
          <h2 className="hero-subtitle">for Sustainable and</h2>
          <h2 className="hero-highlight">Renewable Energy Growth</h2>
          <p className="hero-description">
            Akruti Green delivers advanced solar EPC solutions, from ideation to
            commissioning, driving renewable energy innovation.
          </p>
        </div>
      </div>
  
      <div className="expert-epc-section py-5" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2 className="epc-title">Our Solar</h2>
              <h2 className="epc-title">EPC Services</h2>

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
          <h2 className="process-title">Key Steps to</h2>
          <h1 className="process-title">Solar Energy</h1>
          <h1 className="process-title">Success</h1>

          <div className="row mt-4">
            <div className="col-md-4 mb-4">
              <h3 className="process-subtitle">Project Analysis</h3>
              <p className="process-description">
                Estimating the economic and engineering viability using shadow
                analysis, system loss predictions, and equipment selection.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3 className="process-subtitle">System Design</h3>
              <p className="process-description">
                Plant design simulation with stability analysis, mechanical
                structure creation, and detailed parameter selection.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3 className="process-subtitle">Construction & Installation</h3>
              <p className="process-description">
                End-to-end project execution, from mechanical installation to
                electrical setup, ensuring quality and safety.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3 className="process-subtitle">Testing & Commissioning</h3>
              <p className="process-description">
                Continuous testing and commissioning to ensure optimal
                performance and maximum energy yield.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-hybrid-section py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="why-title">EPC Approach</h2>
          <div className="row align-items-center mb-5">
            <div className="col-md-5">
              <h3 className="benefit-subtitle">
                Solar Project Analysis Services
              </h3>
              <p className="benefit-description">
                We analyze clients energy needs, assess optimal scenarios, and
                identify suitable locations through our expert business
                development team. After creating a preliminary site plan, we
                propose capital investment solutions and assist in drafting
                comprehensive contracts upon onboarding.
              </p>
            </div>
            <div className="col-md-2 text-center number-col">
              <span className="benefit-number">01</span>
            </div>
            <div className="col-md-5">
              <img
                src="EPC/EPC1.webp"
                alt="Solar Project Analysis Services"
                className="img-fluid"
                data-aos="zoom-in"
              />
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-md-5">
              <img
                src="EPC/EPC2.webp"
                alt="Reduced Intermittency"
                className="img-fluid"
                data-aos="zoom-in"
              />
            </div>
            <div className="col-md-2 text-center number-col">
              <span className="benefit-number">02</span>
            </div>
            <div className="col-md-5">
              <h3 className="benefit-subtitle">System Design</h3>
              <p className="benefit-description">
                We utilize software simulation to optimize system parameters and
                enhance plant performance. Subsequently, we finalize components
                such as modules, inverters, cables, etc. and initiate our
                procurement process.
              </p>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-md-5">
              <h3 className="benefit-subtitle">Construction</h3>
              <p className="benefit-description">
                We mark the site layout and prepare the mounting structures for
                procured modules. Subsequently, we lay and interconnect all
                plant components as per the design specifications.
              </p>
            </div>
            <div className="col-md-2 text-center number-col">
              <span className="benefit-number">03</span>
            </div>
            <div className="col-md-5">
              <img
                src="EPC/EPC3.webp"
                alt="Cost-Effective"
                className="img-fluid"
                data-aos="zoom-in"
              />
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-md-5">
              <img
                src="EPC/EPC4.webp"
                alt="Reduced Intermittency"
                className="img-fluid"
                data-aos="zoom-in"
              />
            </div>
            <div className="col-md-2 text-center number-col">
              <span className="benefit-number">04</span>
            </div>
            <div className="col-md-5">
              <h3 className="benefit-subtitle">Testing and Commissioning</h3>
              <p className="benefit-description">
                Following installation, we conduct mechanical testing of
                structural and earthing components as well as electrical testing
                of the system. Subsequently, we proceed with grid or off-grid
                connectivity and integrate the infrastructure with existing
                power supply.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-Akruti-section py-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <img
                src="EPC/EPC5.jpg"
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
          <p className="contact-text">Ready to harness the power of the sun?</p>
          <p className="contact-text">
            Contact Akruti Green today for a tailored solar solution.{" "}
          </p>
          <Link to="/contact" className="btn contact-btn">
            Contact Now
          </Link>
        </div>
      </div>
    </>
  );
}
