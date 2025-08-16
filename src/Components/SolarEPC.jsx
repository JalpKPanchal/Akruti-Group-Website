// WindSolarHybrid.jsx
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import "../WindSolarHybrid.css"; // Adjusted to "./" assuming same directory; change if needed
import PageLayout from "./Layout/PageLayout";

export default function SolarEPC() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-in-out" });
  }, []);

  return (
    <>
    <PageLayout>

      <div className="hero-section" data-aos="fade-up">
        <div className="container">
          <h1 className="hero-title">Our Solar EPC Innovation</h1>
          <h2 className="hero-subtitle">for Enduring and</h2>
          <h2 className="hero-highlight">Renewable Energy Expansion</h2>
          <p className="hero-description">
            Akruti Green leads with top-tier solar EPC services, fostering
            renewable energy innovation from start to finish.
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
                Akruti delivers comprehensive Wind-Solar Hybrid EPC services,
                ensuring top-tier quality in every project. From in-depth
                project planning to flawless execution and continuous
                monitoring, our expert approach guarantees superior performance,
                reliability, and efficiency. Partner with Akruti for end-to-end
                renewable energy solutions that power sustainable success.
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
          <h2 className="process-title">Key Steps to</h2>
          <h1 className="process-title">Solar Energy</h1>
          <h1 className="process-title">Success</h1>

          <div className="row mt-4">
            <div className="col-md-4 mb-4">
              <h3 className="process-subtitle">Project Evaluation</h3>
              <p className="process-description">
                Analyzing economic and engineering feasibility with precise
                shadow analysis, detailed system loss projections, and optimal
                equipment choices.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3 className="process-subtitle">Technical Design</h3>
              <p className="process-description">
                Comprehensive plant modeling and simulation, including stability
                evaluation, mechanical structure design, and optimized parameter
                selection.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3 className="process-subtitle">Construction & Installation</h3>
              <p className="process-description">
                Complete project delivery, from mechanical installation to
                electrical integration, with a focus on quality and safety.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h3 className="process-subtitle">Testing & Commissioning</h3>
              <p className="process-description">
                Continuous validation and commissioning processes to achieve
                optimal efficiency and energy yield.
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
                Solar Project Evalution Services
              </h3>
              <p className="benefit-description">
                Our business development team analyzes clients’ energy
                requirements, evaluates optimal scenarios, and identifies the
                most suitable locations. Following the creation of a preliminary
                site plan, we propose capital investment options and support the
                drafting of comprehensive contracts upon onboarding.
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
              <h3 className="benefit-subtitle">Technical Design</h3>
              <p className="benefit-description">
                Through simulation-driven analysis, we optimize key system
                parameters to enhance plant output. After component
                finalization—covering modules, inverters, cables, etc.—we move
                into the procurement phase.
              </p>
            </div>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-md-5">
              <h3 className="benefit-subtitle">Construction & Installation</h3>
              <p className="benefit-description">
                The process begins with marking the site layout and setting up
                mounting structures for procured modules, followed by the
                systematic installation and interconnection of all plant
                components according to design specifications.
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
                Once installation is complete, we perform structural and
                earthing system checks, electrical testing, and final system
                validation. The process concludes with grid or off-grid
                connection and integration into the existing power system.
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
                Why Akruti the Ideal Partner for Solar EPC Solutions?
              </h2>
              <p className="Akruti-description">
                Akruti Green leverages its expertise in solar energy to deliver
                large-scale solar power solutions. To expand our solar energy
                portfolio across India, we have secured grid connectivity
                approvals for solar parks in multiple states. We have also
                initiated the process of identifying and evaluating suitable
                sites nationwide for the commissioning of new solar projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section py-5" data-aos="fade-up">
        <div className="container text-center">
          <p className="contact-text">Make the switch to solar today.</p>
          <p className="contact-text">
            Connect with Akruti Group for solutions built around your needs{" "}
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
