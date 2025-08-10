import React from "react";
import StickyButtons from "./Sticky";
import "../custom.css"; // <-- Import custom animations
import { Link } from "react-router-dom";

const Homepage = () => {
  const slides = [
    {
      type: "video",
      src: "/img/home-bg-video.mp4",
      heading:
        "India’s Emerging Solar EPC & IPP Company for Decarbonization & Renewable Energy Solutions",
      text: "Transforming Energy Landscapes with Intelligent Solar Power Solutions & Battery Energy Storage Systems (BESS)",
    },
    {
      type: "image",
      src: "/img/promo-2.jpg",
      heading: "Modern Technology in Sun Energy",
      text: "Empowering the future with sustainable innovation",
    },
    {
      type: "image",
      src: "/img/promo-1.jpg",
      heading: "Business Hand in Hand with New Technology",
      text: "Leading the green energy revolution for tomorrow",
    },
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
        <div className="carousel-inner" >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="position-relative"
                style={{ height: "100vh", overflow: "hidden" }}
              >
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
                <div
                  className="left-panel d-flex align-items-center"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "50%",
                    
                    padding: "50px",
                  }}
                >
                  <div className="text-white"  style={{background: "rgba(0, 0, 0, 0.12)",padding:"5px"}}>
                    <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                      {slide.heading}
                    </h1>
                    <p className="lead mb-4">{slide.text}</p>
                    <div>
                      <Link to="/about"
                        
                        className="btn btn-primary btn-lg me-3"
                        style={{
                          backgroundColor: "#007bff",
                          border: "none",
                          padding: "10px 25px",
                          borderRadius: "30px",
                        }}
                      >
                        Know More
                      </Link>
                      <Link to = "/contact"
                        
                        className="btn btn-outline-light btn-lg"
                        style={{
                          padding: "10px 25px",
                          borderRadius: "30px",
                        }}
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
