import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicesData = [
  {
    id: 1,
    img: '/img/1.jpg',
    category: 'Solar EPC',
    title: 'Sun Energy',
    desc: 'Comprehensive design and construction of utility-scale solar plants using advanced thin-film and civil engineering solutions.',
    link: '/services/solar-epc',
  },
  {
    id: 2,
    img: '/img/serv-in-bg-2.jpg',
    category: 'Wind Power',
    title: 'Wind Energy',
    desc: 'Expert advisory services across all stages of wind energy planning and project lifecycle execution.',
    link: '/services/wind-power',
  },
  {
    id: 3,
    img: '/img/serv-in-bg-3.jpg',
    category: 'Solar I & C',
    title: 'Solar I & C',
    desc: 'End‑to‑end project management ensuring on‑time, on‑budget delivery with high standards.',
    link: '/services/solar-ic',
  },
];

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-7">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <div className="me-md-4">
                <h3 className="h3 fw-bold mb-2">Services</h3>
                <p className="fs-4 m-0">
                  Welcome to Great <br /> Akruti Group
                </p>
              </div>
              <div className="mt-3 mt-md-0">
                <img
                  src="/img/logo_short.png"
                  alt="Akruti Logo"
                  style={{ maxWidth: '130px', height: '90px' }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end mt-2 mt-lg-1">
            <p>
              Our mission is to lead the shift towards sustainable, dependable, and cost-effective energy systems.
            </p>
            <a href="/services" className="btn btn-outline-primary">All Services</a>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-4">
          <span className="text-uppercase fw-semibold text-secondary">
            Awesome Services for your business and home
          </span>
        </div>

        {/* Service Cards */}
        <div className="row g-4">
          {servicesData.map((service) => (
            <div className="col-md-6 col-lg-4" key={service.id}>
              <div className="card h-100 shadow-sm">
                <img src={service.img} className="card-img-top" alt={service.category} />
                <div className="card-body d-flex flex-column">
                  <h6 className="text-muted">{service.category}</h6>
                  <h4 className="card-title mt-2">
                    <a href={service.link} className="text-decoration-none text-dark">
                      {service.title} <i className="bi bi-chevron-right ms-1"></i>
                    </a>
                  </h4>

                  {/* Animated section */}
                  <div data-aos="fade-up" data-aos-delay="300">
                    <p className="card-text mt-2">{service.desc}</p>
                    <div className="mt-3">
                      <a href={service.link} className="btn btn-primary btn-sm">
                        Explore more
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
