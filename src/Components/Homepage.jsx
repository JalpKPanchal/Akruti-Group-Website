import React, { useState } from "react";
import { Link } from "react-router-dom";
import StickyButtons from "./Sticky";
import "../homepage.css";
import AnnouncementBar from "./Announcement";
import CustomNavbar from "./Layout/Navbar";
import { Helmet } from "react-helmet-async"; // ✅ SEO Import

const Homepage = () => {
  const [showServices, setShowServices] = useState(false);

  const slides = [
    {
      type: "video",
      src: "/img/home-bg-video.mp4",
      heading:
        "India’s Illuminating Solar EPC and C&I Company for Renewable Energy Solutions",
      text: "Redefining Power Landscapes with Innovative Solar Technologies And Shaping a Sustainable Future with Advanced Solar Systems",
    },
  ];

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Akruti Group | Solar EPC & Renewable Energy Solutions</title>
        <meta
          name="description"
          content="Akruti Group is India’s leading Solar EPC and C&I company, providing innovative renewable energy solutions for a sustainable future."
        />
        <meta
          name="keywords"
          content="Akruti, Solar EPC, Renewable Energy, Green Power, Construction, India"
        />
        <meta
          property="og:title"
          content="Akruti Group - Solar EPC & Renewable Energy"
        />
        <meta
          property="og:description"
          content="Redefining power landscapes with innovative solar technologies. Partner with Akruti Group for sustainable energy solutions."
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <AnnouncementBar />
      <section className="homepage-wrapper">
        <div className="homepage-inner">
          <div style={{ position: "relative" }}>
            {/* Navbar */}
            <CustomNavbar />

            {/* Hero Carousel */}
            <section>
              <div
                id="homepageCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="6000"
              >
                <div className="carousel-inner">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      {slide.type === "video" ? (
                        <video
                          className="w-100 h-100"
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{ objectFit: "cover", height: "100vh" }}
                        >
                          <source src={slide.src} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={slide.src}
                          className="d-block w-100"
                          alt={`Slide ${index + 1}`}
                          style={{ height: "100vh", objectFit: "cover" }}
                        />
                      )}

                      {/* Overlay */}
                      <div className="left-panel">
                        <div data-gsap="an4" className="heading-style-h1">
                          {slide.heading}
                          <p className="lead mb-4" id="textsld">
                            {slide.text}
                          </p>
                          <div>
                            <Link
                              to="/about"
                              className="btn btn-primary btn-lg me-3"
                            >
                              Know More
                            </Link>
                            <Link
                              to="/contact"
                              className="btn btn-outline-light btn-lg"
                            >
                              Contact Us
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Indicators */}
                <div className="carousel-indicators">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#homepageCarousel"
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                    />
                  ))}
                </div>
              </div>

              <StickyButtons />
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
