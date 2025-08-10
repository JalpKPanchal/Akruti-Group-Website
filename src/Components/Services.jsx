import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../custom.css';

const servicesData = [
  {
    id: 1,
    img: '/img/1.webp',
    category: 'Solar EPC',
    title: 'Sun Energy',
    desc: 'Comprehensive design and construction of utility-scale solar plants using advanced thin-film and civil engineering solutions.',
    link: '/solarepc',
  },
  {
    id: 2,
    img: '/img/serv-in-bg-2.jpg',
    category: 'Wind Power',
    title: 'Wind Energy',
    desc: 'Expert advisory services across all stages of wind energy planning and project lifecycle execution.',
    link: '/windsolarhybrid',
  },
  {
    id: 3,
    img: '/img/serv-in-bg-3.jpg',
    category: 'Solar I & C',
    title: 'Solar I & C',
    desc: 'End-to-end project management ensuring on-time, on-budget delivery with high standards.',
    link: '/solaric',
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
      const yOffset = -80; // space from top
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
    <section className="py-5 bg-light">
      <div className="container">

        {/* Header */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-7 d-flex align-items-center">
            <div className="me-md-4">
              <h1 className="h3 fw-bold mb-2" style={{ fontSize: '50px' }}>Services</h1>
              <p className="fs-4 m-0">Welcome to Great <br /> Akruti Group</p>
            </div>
            <img
              src="/img/logo_short.png"
              alt="Akruti Logo"
              className="ms-3"
              style={{ maxWidth: '130px', height: '90px' }}
            />
          </div>
          <div className="col-lg-4 text-lg-end">
            <p>
              Our mission is to lead the shift towards sustainable, dependable, and cost-effective energy systems.
            </p>
            <button onClick={scrollToServices} className="btn btn-outline-primary">
              All Services
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-4">
          <span className="text-uppercase fw-semibold text-secondary">
            Awesome Services for your business and home
          </span>
        </div>

        {/* Cards */}
        <div className="row g-4" ref={servicesRef}>
          {servicesData.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.id} data-aos="fade-up">
              <div className="service-card h-100">
                <div className="service-img-wrapper">
                  <img src={service.img} alt={service.category} className="service-img" />
                  <span className="service-tag">{service.category}</span>
                </div>
                <div className="p-4 d-flex flex-column">
                  <h4 className="fw-bold mb-2">
                    <a href={service.link} className="text-dark text-decoration-none hover-primary">
                      {service.title} <i className="bi bi-arrow-right"></i>
                    </a>
                  </h4>
                  <p className="text-muted flex-grow-1">{service.desc}</p>
                  <a href={service.link} className="btn btn-primary mt-3 align-self-start">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}
