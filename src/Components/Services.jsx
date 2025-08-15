import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../services.css";

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
  );
}
