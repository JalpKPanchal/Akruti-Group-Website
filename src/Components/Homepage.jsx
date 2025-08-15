import React from "react";
import StickyButtons from "./Sticky";
import "../homepage.css"; // <-- Import the dedicated impressive CSS
import { Link } from "react-router-dom";

const Homepage = () => {
  const slides = [
    {
      type: "video",
      src: "/img/home-bg-video.mp4",
      heading:
        "India’s Illuminating Solar EPC and C&I Company for Renewable Energy Solutions",
      text: "Redefining Power Landscapes with Innovative Solar Technologies And Shaping a Sustainable Future with Advanced Solar Systems",
    },
    // {
    //   type: "image",
    //   src: "/img/promo-2.jpg",
    //   heading: "Cutting-Edge Solar Energy Technologies",
    //   text: "Driving a Sustainable Future with Innovative Global Solutions",
    // },
    // {
    //   type: "image",
    //   src: "/img/promo-1.jpg",
    //   heading: "Integrating Business Excellence with Advanced Technology",
    //   text: "Spearheading the Global Green Energy Revolution for a Sustainable Tomorroww",
    // },
  ];

  return (
    <>
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
                <div className="position">
                  {/* Background video or image */}
                  {slide.type === "video" ? (
                    <video
                      className="w-100 h-100"
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ objectFit: "cover" }}
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
              </div>
            ))}
          </div>

          {/* Carousel indicators */}
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
    </>
  );
};

export default Homepage;
