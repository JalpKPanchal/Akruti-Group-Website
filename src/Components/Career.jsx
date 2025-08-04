// src/components/Careers.jsx
import React, { useState } from 'react';
import '../custom.css';
import { Container, Row, Col, Card, Collapse } from 'react-bootstrap';

const jobOpenings = [
  {
    title: 'Business Development Executive',
    location: 'Ahmedabad, Gujarat',
    experience: '1–3 years',
    responsibilities: [
      'Identify potential clients and new business opportunities.',
      'Develop and maintain strong client relationships.',
      'Prepare proposals and presentations for potential clients.',
    ],
    skills: [
      'Strong communication & negotiation skills',
      'Lead generation & CRM knowledge',
      'Team player with strategic thinking',
    ],
  },
  {
    title: 'Electrical Engineer',
    location: 'Ahmedabad, Gujarat',
    experience: '2–5 years',
    responsibilities: [
      'Design, develop, and test electrical systems.',
      'Supervise site installations and maintenance.',
      'Ensure compliance with safety and quality standards.',
    ],
    skills: [
      'AutoCAD, MATLAB, or similar tools',
      'Strong problem-solving ability',
      'Knowledge of industrial safety standards',
    ],
  },
   {
    title: 'Programmer Engineer',
    location: 'Ahmedabad, Gujarat',
    experience: '2–10 years',
    responsibilities: [
      'Design, develop, and test electrical systems.',
      'Supervise site installations and maintenance.',
      'Ensure compliance with safety and quality standards.',
    ],
    skills: [
      'HTML,CSS,JS,REACTsimilar tools',
      'Strong problem-solving ability',
      'Knowledge of industrial safety standards',
    ],
  },
  // Add more positions here...
];

const Careers = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div className="careers-page text-white">
      {/* Hero Section */}
      <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center px-3 py-5 bg-dark">
        <h1 className="display-4 fw-bold">
          Build a <span className="text-white">Sustainable</span><br />
          <span className="highlight text-success">Career with Akruti</span>
        </h1>
        <p className="lead mt-3">
          We are always on the lookout for talented individuals who share our passion for innovation and engineering excellence. <br />
          Join our team and grow with us.
        </p>
        <a href="#open-positions" className="btn btn-outline-light rounded-pill px-4 py-2 mt-4">
          Explore Open Positions
        </a>
      </div>

      {/* Open Positions Section */}
      <section id="open-positions" className="bg-white text-dark py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Explore Our Open Positions</h2>
          <Row className="g-4">
            {jobOpenings.map((job, index) => (
              <Col key={index} md={6}>
                <Card className="position-card h-100 border-0 shadow-sm p-3">
                  <Card.Body>
                    <h5 className="fw-semibold mb-2">{job.title}</h5>
                    <p className="mb-1"><strong>Location:</strong> {job.location}</p>
                    <p className="mb-3"><strong>Experience:</strong> {job.experience}</p>

                    {/* Buttons Row */}
                    <div className="d-flex flex-column flex-md-row align-items-start gap-2 mb-3">
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => toggleDescription(index)}
                      >
                        {openIndex === index ? 'Hide Description' : 'View Description'}
                      </button>
                      <a
                        href={`mailto:akrutiengineering72@gmail.com?subject=Application for ${encodeURIComponent(job.title)}&body=Dear Akruti Team,%0D%0A%0D%0AI am writing to express my interest in the position of ${encodeURIComponent(job.title)} at Akruti Engineering.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
                        className="btn btn-outline-success btn-sm"
                      >
                        Apply Now
                      </a>
                    </div>

                    {/* Collapse Section */}
                    <Collapse in={openIndex === index}>
                      <div>
                        <p className="fw-semibold mb-1">Key Responsibilities:</p>
                        <ul className="mb-3 ps-3">
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                        <p className="fw-semibold mb-1">Key Skills:</p>
                        <ul className="ps-3">
                          {job.skills.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    </Collapse>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
    </>
  );
};

export default Careers;
