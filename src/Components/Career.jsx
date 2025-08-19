import React, { useState, useRef } from "react";
import "../career.css";
import PageLayout from "./Layout/PageLayout";

const jobOpenings = [
  {
    title: "Projects Manager",
    location: "Multiple Locations",
    overview:
      "The Projects Manager will oversee solar project execution, coordinate teams, and ensure timely delivery and quality.",
    responsibilities: [
      "Lead project planning and coordination.",
      "Manage project teams and contractors.",
      "Ensure projects are delivered on time and within budget.",
      "Maintain client relationships and project documentation.",
    ],
    qualifications: [
      "Bachelor’s degree in Engineering or related field.",
      "5+ years of project management experience.",
      "Excellent leadership and communication skills.",
    ],
  },
  {
    title: "Solar Design Engineers",
    location: "Multiple Locations",
    overview:
      "The Solar Design Engineer will be responsible for designing solar power systems, including rooftop and ground-mounted installations. The role includes feasibility studies, system sizing, and working closely with the procurement and construction teams.",
    responsibilities: [
      "Design and develop solar power systems, including PV layouts and electrical schematics.",
      "Perform system sizing calculations and generate bill of materials.",
      "Prepare technical drawings and designs using AutoCAD or similar software.",
      "Conduct feasibility studies and technical site assessments.",
      "Collaborate with procurement, project management, and installation teams.",
    ],
    qualifications: [
      "Bachelor’s degree in Electrical Engineering or related field.",
      "2+ years of experience in solar design.",
      "Proficiency in AutoCAD, PVSyst, and other design tools.",
    ],
  },
  {
    title: "Business Development Manager",
    location: "Multiple Locations",
    overview:
      "Responsible for driving business growth, building client relationships, and identifying new opportunities in the renewable energy sector.",
    responsibilities: [
      "Identify new business opportunities and potential clients.",
      "Develop and maintain client relationships.",
      "Prepare proposals and presentations for stakeholders.",
      "Collaborate with technical and project teams.",
    ],
    qualifications: [
      "Bachelor’s degree in Business, Engineering, or related field.",
      "3+ years in business development or sales.",
      "Strong communication and negotiation skills.",
    ],
  },
  {
    title: "Procurement Manager",
    location: "Multiple Locations",
    overview:
      "Manages procurement processes, vendor relationships, and ensures timely delivery of materials for solar projects.",
    responsibilities: [
      "Develop and implement procurement strategies.",
      "Manage vendor relationships and negotiations.",
      "Ensure timely delivery of project materials.",
      "Monitor inventory and coordinate with project teams.",
    ],
    qualifications: [
      "Bachelor’s degree in Supply Chain, Business, or related field.",
      "4+ years of procurement experience.",
      "Strong negotiation and organizational skills.",
    ],
  },
];

const Careers = () => {
  const [openIndex, setOpenIndex] = useState(0); // default open first job
  const jobsRef = useRef(null);

  const mailtoLink =
    openIndex !== null
      ? `mailto:akrutiengineering72@gmail.com?subject=Application for ${encodeURIComponent(
          jobOpenings[openIndex].title
        )}&body=Dear Akruti Team,%0D%0A%0D%0AI am writing to express my interest in the position of ${encodeURIComponent(
          jobOpenings[openIndex].title
        )} at Akruti Engineering.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`
      : "mailto:akrutiengineering72@gmail.com?subject=Application for Open Position at Akruti Engineering&body=Dear Akruti Team,%0D%0A%0D%0AI am writing to express my interest in an open position at Akruti Engineering.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]";

  // Scroll to job section
  const handleExploreClick = () => {
    if (jobsRef.current) {
      jobsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <PageLayout>
        <div>
          {/* Hero Section */}
          <section className="career-hero-bg">
            <div className="career-hero-content">
              <h1>
                Build a Sustainable <br />
                <span>Career with Akruti</span>
              </h1>
              <p>
                We are always on the lookout for talented individuals who share
                our passion for clean energy and sustainability.
                <br />
                Join our team and make an impact on the future of renewable
                energy.
              </p>
              <button className="career-hero-btn" onClick={handleExploreClick}>
                Explore Open Positions
              </button>
            </div>
          </section>

          {/* Careers List Section */}
          <div className="careers-bg-soft" ref={jobsRef}>
            <div className="careers-header">
              <h2>
                Explore Our <span>Open Positions</span>
              </h2>
            </div>
            <div className="careers-main-card">
              <div className="careers-list-side">
                {jobOpenings.map((job, idx) => (
                  <div
                    key={job.title}
                    className={`careers-list-title${
                      openIndex === idx ? " active" : ""
                    }`}
                    onClick={() => setOpenIndex(idx)}
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") setOpenIndex(idx);
                    }}
                  >
                    {job.title}
                  </div>
                ))}
              </div>
              <div className="careers-detail-side">
                <div className="careers-detail-content careers-detail-center-anim">
                  <div className="careers-detail-center">
                    <div>
                      <p>
                        <span className="careers-bold">Location:</span>
                        <br />
                        {jobOpenings[openIndex].location}
                      </p>
                      <p>
                        <span className="careers-bold">Job Overview:</span>
                        <br />
                        {jobOpenings[openIndex].overview}
                      </p>
                    </div>
                  </div>
                  <div className="careers-detail-right">
                    <div>
                      <p className="careers-bold">Key Responsibilities:</p>
                      <ul>
                        {jobOpenings[openIndex].responsibilities.map(
                          (item, i) => (
                            <li key={i}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>
                    <div>
                      <p className="careers-bold">Qualifications:</p>
                      <ul>
                        {jobOpenings[openIndex].qualifications.map(
                          (item, i) => (
                            <li key={i}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>
                    {/* <a
                  href={`mailto:akrutiengineering72@gmail.com?subject=Application for ${encodeURIComponent(
                    jobOpenings[openIndex].title
                  )}&body=Dear Akruti Team,%0D%0A%0D%0AI am writing to express my interest in the position of ${encodeURIComponent(
                    jobOpenings[openIndex].title
                  )} at Akruti Engineering.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
                  className="apply-now-button details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="careers-cta">
              <p>
                Explore our open roles and take the first step towards building
                a sustainable future with Akruti Group.
              </p>
              <a
                href={mailtoLink}
                className="apply-now-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Careers;
