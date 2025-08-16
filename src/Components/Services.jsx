import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../services.css";
import "../aboutus.css";


const servicesData = [
  {
    id: 1,
    img: "/img/1.webp",
    category: "Solar EPC",
    title: "Sun Energy",
    desc: "End-to-End Design and Construction of Utility-Scale Solar Plants",
    link: "/solarepc",
  },
  {
    id: 2,
    img: "/img/serv-in-bg-2.jpg",
    category: "Wind Power",
    title: "Wind Energy",
    desc: "Specialized Consulting Services for All Phases of Wind Energy",
    link: "/windsolarhybrid",
  },
  {
    id: 3,
    img: "/img/serv-in-bg-3.jpg",
    category: "Solar C & I",
    title: "Solar C & I",
    desc: "Comprehensive Project Management Delivering On-Time, On-Budget",
    link: "/solarepc",
  },
  {
    id: 4,
    img: "/SR/SR1.jpg",
    category: "Solar Rooftop",
    title: "Solar Rooftop",
    desc: "Complete Solar Rooftop Solutions — From Design to Installation",
    link: "/solareooftop",
  },
];

export default function ServicesSection() {
  const servicesRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollToServices = () => {
    const element = servicesRef.current;
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
    <section className="services-section">
      <div className="container">
        {/* Header */}
        <div className="row align-items-center mb-5 services-header">
          <div className="col-lg-7 d-flex align-items-center">
            <div className="me-md-4">
              <h1 className="h1 mb-3">Our Services</h1>
              {/* <p>
                Welcome to Great <br /> Akruti Group
              </p> */}
            </div>
            {/* <img
              src="/img/logo_short.png"
              alt="Akruti Logo"
              className="ms-3"
              style={{ maxWidth: "130px", height: "90px" }}
            /> */}
          </div>
          <div className="col-lg-4 text-lg-end">
            <p>
              <b>
                Our mission is to drive the global transition to sustainable
                energy systems through innovative solutions and unparalleled
                expertise.
              </b>
            </p>
            <button
              onClick={scrollToServices}
              className="btn btn-outline-primary"
            >
              All Services
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <div className="services-subtitle">
          World-Class Renewable Energy Solutions for Businesses and Homes
          Worldwide
        </div>

        {/* Cards */}
        <div className="services-grid" ref={servicesRef}>
          {servicesData.map((service, index) => (
            <div
              className="service-card"
              key={service.id}
              style={{ animationDelay: `${index * 0.2}s` }}
              data-aos="fade-up"
            >
              <div className="service-img-wrapper">
                <img
                  src={service.img}
                  alt={service.category}
                  className="service-img"
                />
                <span className="service-tag">{service.category}</span>
              </div>
              <div className="p-4 d-flex flex-column">
                <h4>
                  <a
                    href={service.link}
                    className="text-dark text-decoration-none"
                  >
                    {service.title} <i className="bi bi-arrow-right"></i>
                  </a>
                </h4>
                <p>{service.desc}</p>
                <a
                  href={service.link}
                  className="btn btn-primary mt-3 align-self-start"
                >
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <main className="aboutus-page">
      {/* HERO */}
      <section className="au-hero" data-aos="fade-up" data-aos-delay="80">
        <div className="container au-hero-content text-center">
          <h1 className="au-title" data-aos="fade-up" data-aos-delay="140">
            About{" "}
            <span className="au-title-highlight">Akruti Green Energy</span>
          </h1>
          <p className="au-hero-desc" data-aos="fade-up" data-aos-delay="200">
            Building a Sustainable Legacy with Advanced Energy Solutions For
            Empowering Future Fuel
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      {/* WHO WE ARE */}
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
              energy, committed to delivering innovative solar, wind, and hybrid
              solutions worldwide. Driven by sustainability and technological
              excellence, we enable industries, communities, and governments to
              achieve a clean, reliable, and cost-efficient energy future.
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
                style={{ width: "150px",marginLeft: "200px" }}
              />
              {/* <div className="who-img-overlay"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section
        className="container au-section"
        data-aos="fade-up"
        data-aos-delay="140"
      >
        <div className="row g-4">
          <div className="col-md-6">
            <div className="au-card mission-card">
              <h3 className="au-card-title">Our Mission</h3>
              <p id="mission">
                <b>
                  Driving global renewable energy adoption through innovative,
                  reliable, and scalable solutions that deliver enduring value
                  for clients, partners, and the planet.
                </b>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="au-card vision-card">
              <h3 className="au-card-title">Our Vision</h3>
              <p id="vision">
                <b>
                  To be the world’s most trusted, reliable energy partner,
                  leading the global transition to a sustainable, net-zero
                  future.
                </b>
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
                Pioneering cutting-edge, efficient energy technologies to drive
                the global renewable energy revolution.
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
        <h2 data-aos="fade-up">Our Journey</h2>
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
              <div className="timeline-year">{item.year}</div>
              <p>{item.desc}</p>
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
                Priya leads the technical team, developing advanced solutions
                for India's evolving energy needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
