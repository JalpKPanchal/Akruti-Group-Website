import React from "react";

const Homepage = () => {
  return (
    <section>
      <div
        id="homepageCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="6000"
      >
        <div className="carousel-inner">
          {/* Slide 1: Video */}
          <div className="carousel-item active">
            <div className="position-relative" style={{ height: "100vh", overflow: "hidden" }}>
              <video
                className="w-100 h-100"
                autoPlay
                muted
                loop
                playsInline
                style={{ objectFit: "cover" }}
              >
                <source src="/img/home-bg-video.mp4" type="video/mp4" />
              </video>
              <div className="carousel-caption text-start">
                <h1>Your Renewable Energy Solutions Partner</h1>
                <p>India’s Leading Solar EPC & I&C Company for Sustainable Energy</p>
              </div>
            </div>
          </div>

          {/* Slide 2: Image */}
          <div className="carousel-item">
            <img
              src="/img/promo-2.jpg"
              className="d-block w-100"
              alt="Slide 2"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <h1>Modern Technology in <span>Sun Energy</span></h1>
              <p>Empowering the future with sustainable innovation</p>
            </div>
          </div>

          {/* Slide 3: Image */}
          <div className="carousel-item">
            <img
              src="/img/promo-1.jpg"
              className="d-block w-100"
              alt="Slide 3"
              style={{ height: "100vh", objectFit: "cover" }}
            />
            <div className="carousel-caption text-start">
              <h1>Business Hand in Hand with New Technology</h1>
              <p>Leading the green energy revolution for tomorrow</p>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="0" className="active" />
          <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="1" />
          <button type="button" data-bs-target="#homepageCarousel" data-bs-slide-to="2" />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
