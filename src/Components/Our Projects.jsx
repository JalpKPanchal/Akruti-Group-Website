import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../project.css";
import PageLayout from "./Layout/PageLayout";

const projects = [
  {
    title: "Arcelor Mittal Solar Project",
    client: "Arcelor Mittal",
    capacity: "332 MWp",
    location: "Kurnool, Andhra Pradesh",
    imgSrc: "/projects/1.webp",
    details: `
      <p>This large-scale solar power plant generates clean energy for industrial operations, 
      reducing carbon footprint significantly.</p>
      <ul>
        <li>Completed: 2023</li>
        <li>Modules used: Bifacial solar panels</li>
        <li>Expected annual generation: 500 GWh</li>
      </ul>
    `,
  },
  {
    title: "Renewable Energy Park",
    client: "Adani Green Energy",
    capacity: "150 MWp",
    location: "Jaisalmer, Rajasthan",
    imgSrc: "/projects/2.webp",
    details: `
      <p>This hybrid wind-solar project maximizes land usage for renewable energy generation.</p>
    `,
  },
  {
    title: "BESS Solar Storage",
    client: "NTPC Limited",
    capacity: "10 MW + 40 MWh",
    location: "Leh, Ladakh",
    imgSrc: "/projects/3.png",
    details: `
      <p>This project integrates battery energy storage with solar power to ensure round-the-clock supply.</p>
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
