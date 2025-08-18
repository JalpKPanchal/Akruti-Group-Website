import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../project.css";
import PageLayout from "./Layout/PageLayout";

const projects = [
  {
    title: "Rewa Solar Power Project",
    client: "L&T, Belectric Photovoltaic, ReNew Power, Solpower",
    capacity: "225 MW",
    location: "Rewa District, Madhya Pradesh",
    imgSrc: "/projects/1.webp",
    details: `
      <p>This large-scale solar power plant generates clean energy for industrial operations, 
      reducing carbon footprint significantly.</p>
     
    `,
  },
  {
    title: "Torrent Solar Power Project",
    client: "Torrent Power",
    capacity: "200 MW",
    location: "Surel, Gujarat",
    imgSrc: "/projects/2.webp",
    details: `
      <p>Torrent Solar Power Project – A landmark 200 MW solar installation at Surel, Gujarat, developed for Torrent Power. Harnessing clean and sustainable energy, this project strengthens India’s renewable energy landscape and contributes to a greener future.</p>
    `,
  },
  {
    title: "Torrent Solar Power Project",
    client: "Torrent Power",
    capacity: "200 MW",
    location: "Babra, Gujarat",
    imgSrc: "/projects/3.png",
    details: `
      <p>Torrent Solar Power Project – A 200 MW solar installation at Babra, Gujarat, developed for Torrent Power. This large-scale project demonstrates our commitment to delivering clean, reliable, and sustainable energy solutions for India’s growing power needs.</p>
    `,
  },
  {
    title: "Ayaana Solar Power Project",
    client: "Ayaana Power",
    capacity: "185 MW",
    location: "Bhuj(Village: Nirona), Gujarat",
    imgSrc: "/projects/3.png",
    details: `
      <p>Torrent Solar Power Project – A 200 MW solar installation at Babra, Gujarat, developed for Torrent Power. This large-scale project demonstrates our commitment to delivering clean, reliable, and sustainable energy solutions for India’s growing power needs.</p>
    `,
  },
  {
    title: "GSECL Solar Power Project",
    client: "Gujarat State Electricity Corporation Limited (GSECL)",
    capacity: "67 MW",
    location: "Wankaner, Gujarat",
    imgSrc: "/projects/3.png",
    details: `
      <p>Torrent Solar Power Project – A 200 MW solar installation at Babra, Gujarat, developed for Torrent Power. This large-scale project demonstrates our commitment to delivering clean, reliable, and sustainable energy solutions for India’s growing power needs.</p>
    `,
  },
  {
    title: "Renew Solar Power Project",
    client: "ReNew Power",
    capacity: "40 MW",
    location: "Telangana",
    imgSrc: "/projects/3.png",
    details: `
      <p>Torrent Solar Power Project – A 200 MW solar installation at Babra, Gujarat, developed for Torrent Power. This large-scale project demonstrates our commitment to delivering clean, reliable, and sustainable energy solutions for India’s growing power needs.</p>
    `,
  },
  {
    title: "Belectric Photovoltaic Solar Power Project",
    client: "Belectric Photovoltaic",
    capacity: "52 MW",
    location: "Nataram, Madhya Pradesh",
    imgSrc: "/projects/3.png",
    details: `
      <p>Torrent Solar Power Project – A 200 MW solar installation at Babra, Gujarat, developed for Torrent Power. This large-scale project demonstrates our commitment to delivering clean, reliable, and sustainable energy solutions for India’s growing power needs.</p>
    `,
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <PageLayout>
        {/* Hero Section */}
        <section className="projects-hero">
          <video autoPlay loop muted playsInline>
            <source src="/img/home-bg-video.mp4" type="video/mp4" />
          </video>
          <div className="overlay"></div>
          <div className="hero-text">
            <h1 className="fade-up">Discover Our Renewable Energy Projects</h1>
            <p className="fade-up delay-1">
              Explore our end-to-end Solar EPC, Wind-Solar hybrid, EV & BESS
              infrastructure projects that drive sustainability and innovation.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary btn-lg fade-up delay-2"
            >
              Get In Touch
            </Link>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section container py-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card-container mb-5 fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="row g-0 align-items-center">
                {/* Left - Text */}
                <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
                  <h3 className="project-title">{project.title}</h3>
                  <hr />
                  <p>
                    <strong>Client:</strong> {project.client}
                  </p>
                  <p>
                    <strong>Capacity:</strong> {project.capacity}
                  </p>
                  <p>
                    <strong>Location:</strong> {project.location}
                  </p>

                  <div
                    className={`expandable-content ${
                      expandedIndex === index ? "expanded" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: project.details }}
                  />

                  <button
                    className="btn read-more-btn mt-3 fw-semibold"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                </div>

                {/* Right - Image */}
                <div className="col-md-6 img-container">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="img-fluid project-card-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </PageLayout>
    </>
  );
};

export default Projects;
