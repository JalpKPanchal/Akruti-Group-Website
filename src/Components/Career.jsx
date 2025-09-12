import React, { useRef } from "react";
import "../career.css";
import PageLayout from "./Layout/PageLayout";

const Careers = () => {
  const careersRef = useRef(null);

  // Scroll to careers section
  const handleExploreClick = () => {
    if (careersRef.current) {
      careersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mailtoLink =
    "mailto:akrutigroupacc@gmail.com?subject=Expression of Interest for Future Opportunities at Akruti Engineering&body=Dear Akruti Team,%0D%0A%0D%0AI am excited to express my interest in joining Akruti Engineering for future career opportunities that align with my expertise and passion for renewable energy. Please find my resume attached for your review.%0D%0A%0D%0AThank you for considering my application.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]";

  return (
    <PageLayout>
      <div>
        {/* Hero Section */}
        <section className="career-hero-bg">
          <div className="career-hero-content">
            <h1
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
            >
              Build a Sustainable <br />
              <span>Career with Akruti</span>
            </h1>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
              We are always on the lookout for talented individuals who share
              our passion for clean energy and sustainability.
              <br />
              Join our team and make an impact on the future of renewable
              energy.
            </p>
            <button
              className="career-hero-btn"
              onClick={handleExploreClick}
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              Discover Opportunities
            </button>
          </div>
        </section>

        {/* Careers Section */}
        <div className="careers-bg-soft" ref={careersRef}>
          <div className="careers-header">
            <h2
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Join Our <span>Visionary Network</span>
            </h2>
          </div>
          <div className="careers-main-card">
            <div className="careers-detail-side">
              <div className="careers-detail-content careers-detail-center-anim">
                <div className="careers-detail-center">
                  <p
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    <span
                      className="careers-bold"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      Currently No Open Roles
                    </span>
                    <br />

                    At this time, there are no open positions at Akruti
                    Group. However, we are eager to connect with visionary
                    professionals who share our commitment to advancing
                    renewable energy. Submit your resume to join our network,
                    and we will reach out when opportunities that match your
                    expertise become available.
                  </p>
                </div>
              </div>
            </div>
            <div className="careers-cta">
              <p
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                Take the first step toward a rewarding career with Akruti
                Group and help us drive the future of sustainable energy.
              </p>
              <a
                href={mailtoLink}
                className="apply-now-button"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
              >
                Share Your Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
