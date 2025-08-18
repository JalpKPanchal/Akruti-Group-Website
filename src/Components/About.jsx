import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../aboutus.css";
import PageLayout from "./Layout/PageLayout";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <PageLayout>
        <main className="aboutus-page">
          {/* HERO */}
          <section className="au-hero" data-aos="fade-up" data-aos-delay="80">
            <div className="container au-hero-content text-center">
              <h1 className="au-title" data-aos="fade-up" data-aos-delay="140">
                About{" "}
                <span className="au-title-highlight">Akruti Green Energy</span>
              </h1>
              <p
                className="au-hero-desc"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Building a Sustainable Legacy with Advanced Energy Solutions For
                Empowering Future Fuel
              </p>
            </div>
          </section>

          <section
            className="container au-section who-we-are"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="au-heading">Who We Are?</h2>
                <p className="au-desc">
                  Akruti Green Energy Limited is a global leader in renewable
                  energy, committed to delivering innovative solar, wind, and
                  hybrid solutions worldwide. Driven by sustainability and
                  technological excellence, we enable industries, communities,
                  and governments to achieve a clean, reliable, and
                  cost-efficient energy future.
                </p>
              </div>
              <div className="col-lg-6">
                <div
                // className="who-img-container"
                // data-aos="zoom-in"
                // data-aos-delay="200"
                >
                  <img
                    src="/img/logo_short.png"
                    alt="Akruti Green Energy"
                    className="who-img"
                    style={{ width: "150px", marginLeft: "200px" }}
                  />
                  {/* <div className="who-img-overlay"></div> */}
                </div>
              </div>
            </div>
          </section>

          {/* MISSION & VISION */}
          <section
            className="container au-section"
            id="mission-vision"
            data-aos="fade-up"
            data-aos-delay="140"
          >
            <div className="row g-4 text-center align-items-stretch">
              <div className="col-md-6 d-flex">
                <div
                  className="au-card mission-card flex-fill"
                  data-aos="zoom-in"
                  data-aos-delay="180"
                >
                  <h3 className="au-card-heading">🚀 Our Mission</h3>
                  <p className="au-card-text">
                    Driving global renewable energy adoption through{" "}
                    <span className="highlight">innovative</span>,
                    <span className="highlight"> reliable</span>, and{" "}
                    <span className="highlight">scalable </span>
                    solutions that deliver lasting value for clients, partners,
                    and the planet. We focus on sustainable practices,
                    cutting-edge technology, and customer-centric solutions that
                    empower industries and communities worldwide.
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div
                  className="au-card vision-card flex-fill"
                  data-aos="zoom-in"
                  data-aos-delay="220"
                >
                  <h3 className="au-card-heading">🌍 Our Vision</h3>
                  <p className="au-card-text">
                    To be the world’s most{" "}
                    <span className="highlight">trusted</span> and
                    <span className="highlight"> reliable</span> energy partner,
                    leading the transition to a{" "}
                    <span className="highlight">sustainable</span>, net-zero
                    future. We envision a world powered by clean energy where
                    communities thrive, industries innovate, and our planet
                    remains protected for future generations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CORE VALUES */}
          <section
            className="container au-section"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            <h2 className="au-heading text-center mb-5">Our Core Values</h2>
            <div className="row justify-content-center g-4">
              <div className="col-md-4">
                <div className="au-value-card">
                  <div className="au-value-icon bg-primary">🌱</div>
                  <h4 className="au-value-title">Sustainability</h4>
                  <p>
                    Dedicated to eco-friendly solutions and sustainable business
                    practices that support global environmental goals.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="au-value-card">
                  <div className="au-value-icon bg-success">💡</div>
                  <h4 className="au-value-title">Innovation</h4>
                  <p>
                    Pioneering cutting-edge, efficient energy technologies to
                    drive the global renewable energy revolution.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="au-value-card">
                  <div className="au-value-icon bg-warning">🤝</div>
                  <h4 className="au-value-title">Integrity</h4>
                  <p>
                    Fostering trust through transparency, reliability, and the
                    highest ethical standards in all global operations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* JOURNEY */}
          <section className="journey-section">
            <h2 data-aos="fade-up">
              <b>OUR JOURNEY</b>
            </h2>
            <div className="timeline">
              {[
                {
                  year: "2013",
                  desc: "Akruti Green Energy is founded with a vision to transform India’s energy landscape",
                },
                {
                  year: "2016",
                  desc: "Commissioned our first large-scale solar park in Charanka, Gujarat",
                },
                {
                  year: "2020",
                  desc: "Launched hybrid wind-solar solutions for industrial and commercial clients",
                },
                {
                  year: "2023",
                  desc: "Reached 3 GW in total renewable energy installations across India",
                },
                {
                  year: "2025",
                  desc: "Actively Powering Across India with 500 MW of Clean Energy",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`timeline-item ${
                    i % 2 === 0 ? "fade-right" : "fade-left"
                  }`}
                  data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div className="timeline-year">
                    <b>{item.year}</b>
                  </div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* LEADERSHIP */}
          <section
            className="container au-section"
            data-aos="fade-up"
            data-aos-delay="260"
          >
            <h2 className="au-heading text-center mb-5">Leadership Team</h2>
            <div className="row justify-content-center g-4">
              <div className="col-md-4">
                <div className="au-leader-card text-center">
                  <img
                    className="au-leader-img"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="CEO"
                  />
                  <h5 className="au-leader-name">Rahul Sharma</h5>
                  <p className="au-leader-role">CEO & Co-Founder</p>
                  <p className="au-leader-bio">
                    Rahul brings 15+ years of renewable energy expertise,
                    spearheading Akruti’s growth and innovative strategy.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="au-leader-card text-center">
                  <img
                    className="au-leader-img"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="CTO"
                  />
                  <h5 className="au-leader-name">Priya Nair</h5>
                  <p className="au-leader-role">CTO & Co-Founder</p>
                  <p className="au-leader-bio">
                    Priya leads the technical team, developing advanced
                    solutions for India's evolving energy needs.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageLayout>
    </>
  );
}
