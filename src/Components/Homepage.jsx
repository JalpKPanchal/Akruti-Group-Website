import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import StickyButtons from "./Sticky";
import "../homepage.css";
import AnnouncementBar from "./Announcement";
import logo from "/img/logo.png";
import CustomNavbar from "./Layout/Navbar";

const Homepage = () => {
  const [showServices, setShowServices] = useState(false);

  const slides = [
    {
      type: "video",
      src: "/img/home-bg-video.mp4",
      heading: "India’s Illuminating Solar EPC and C&I Company for Renewable Energy Solutions",
      text: "Redefining Power Landscapes with Innovative Solar Technologies And Shaping a Sustainable Future with Advanced Solar Systems",
    },
    
  ];

  return (
    <>
         <AnnouncementBar />
    <section className="homepage-wrapper">
  <div className="homepage-inner">    <div style={{ position: "relative" }}>
      {/* Navbar */}
   <CustomNavbar/>

      {/* Hero Carousel */}
      <section>
        <div
          id="homepageCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="6000"
        >
          <div className="carousel-inner" style={{  }}>
            {slides.map((slide, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
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
               {/* Left side content with animation */}
                  <div className="left-panel">
                    <div data-gsap="an4" className="heading-style-h1">
                      {/* <h1 className="fw-bold mb-3"> */}
                      {/* If you want to blue-accent a word, wrap it in <span className="hero-accent">word</span> */}
                      {slide.heading}
                      {/* </h1> */}
                      <p className="lead mb-4">{slide.text}</p>
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