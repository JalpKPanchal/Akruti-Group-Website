import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../gallery.css";

const galleryData = [
  { id: 1, img: "/gallery/1.webp", label: "Solar Projects" },
  { id: 2, img: "/gallery/4.webp", label: "Windmill Station" },
  { id: 3, img: "/gallery/5.webp", label: "Electricity Station" },
  { id: 4, img: "/gallery/15.webp", label: "Renewable Energy Station" },
  { id: 5, img: "/gallery/2.webp", label: "Solar Field" },
  { id: 6, img: "/gallery/8.webp", label: "Energy Innovation Hub" },
];

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? galleryData.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === galleryData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="section main-gallery">
      <div className="container">
        <div className="gallery-header">
          <div>
            <h2 className="gallery-title">Our Gallery</h2>
            <p className="gallery-subtitle">
              Explore our renewable energy projects that are powering a
              sustainable future.
            </p>
          </div>
          <Link to="/gallerypage">
            <button className="gallery-btn">Discover More</button>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryData.map((item, index) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => openLightbox(index)}
            >
              <img src={item.img} alt={item.label} />
              <div className="gallery-info">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>
          <span className="lightbox-prev" onClick={showPrev}>
            &#10094;
          </span>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={galleryData[selectedIndex].img} alt="Enlarged view" />
            <p className="lightbox-caption">
              {galleryData[selectedIndex].label}
            </p>
          </div>
          <span className="lightbox-next" onClick={showNext}>
            &#10095;
          </span>
        </div>
      )}
    </section>
  );
}
