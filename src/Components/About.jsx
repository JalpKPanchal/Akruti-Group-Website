import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../aboutus.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 120, easing: "ease-in-out" });
  }, []);

  return (
    <main className="aboutus-page">
      {/* HERO */}
      <section className="au-hero" data-aos="fade-up" data-aos-delay="80">
        <div className="container au-hero-content">
          <h1 className="au-title" data-aos="fade-up" data-aos-delay="140">
            About{" "}
            <span className="au-title-highlight">Akruti Green Energy</span>
          </h1>
          <p className="au-hero-desc" data-aos="fade-up" data-aos-delay="200">
            Empowering a sustainable future through innovative renewable energy
            solutions.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        className="container au-section"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              className="au-img"
              src="https://cdn.prod.website-files.com/64dbc131328758d2f8cb2f35/677e447ad95eaf411325e7fb_What%20Makes%20Prozeal%20the%20Ideal%20Partner%20for%20Wind%20Solar%20Hybrid%20Solutions.jpg"
              alt="Prozeal Team"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="au-heading">Who We Are</h2>
            <p className="au-desc">
              Prozeal Green Energy Limited is a leading renewable energy
              company, dedicated to delivering cutting-edge solar, wind, and
              hybrid solutions across India. With a passion for sustainability
              and innovation, we empower industries, communities, and
              governments to transition toward clean, reliable, and
              cost-effective energy.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section
        className="container au-section"
        data-aos="fade-up"
        data-aos-delay="140"
      >
        <div className="row align-items-stretch">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="au-card mission-card">
              <h3 className="au-card-title">Our Mission</h3>
              <p>
                To accelerate the adoption of renewable energy and enable a
                greener planet by providing innovative, reliable, and integrated
                solutions that deliver exceptional value to our clients and
                partners.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="au-card vision-card">
              <h3 className="au-card-title">Our Vision</h3>
              <p>
                To be the most trusted energy partner in propelling India’s
                transition to a sustainable and carbon-neutral future.
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
        <h2 className="au-heading text-center mb-4">Our Core Values</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="au-value-card">
              <div className="au-value-icon bg-primary">🌱</div>
              <h4 className="au-value-title">Sustainability</h4>
              <p>
                Committed to environment-friendly solutions and responsible
                business practices.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="au-value-card">
              <div className="au-value-icon bg-success">💡</div>
              <h4 className="au-value-title">Innovation</h4>
              <p>
                Constantly pushing boundaries to develop advanced and efficient
                energy technologies.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="au-value-card">
              <div className="au-value-icon bg-warning">🤝</div>
              <h4 className="au-value-title">Integrity</h4>
              <p>
                Building trust through transparency, dependability, and ethical
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        className="container au-section"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <h2 className="au-heading mb-4">Our Journey</h2>
        <div className="au-timeline">
          <div className="au-timeline-item">
            <div className="au-timeline-dot"></div>
            <div>
              <strong>2015</strong> – Prozeal Green Energy is founded with a
              vision to transform India’s energy landscape.
            </div>
          </div>
          <div className="au-timeline-item">
            <div className="au-timeline-dot"></div>
            <div>
              <strong>2017</strong> – Commissioned our first large-scale solar
              park in Gujarat.
            </div>
          </div>
          <div className="au-timeline-item">
            <div className="au-timeline-dot"></div>
            <div>
              <strong>2020</strong> – Launched hybrid wind-solar solutions for
              industrial and commercial clients.
            </div>
          </div>
          <div className="au-timeline-item">
            <div className="au-timeline-dot"></div>
            <div>
              <strong>2024</strong> – Reached 1 GW in total renewable energy
              installations across India.
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section
        className="container au-section"
        data-aos="fade-up"
        data-aos-delay="260"
      >
        <h2 className="au-heading text-center mb-4">Leadership Team</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
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
                spearheading Prozeal’s growth and innovative strategy.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
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
  );
}
