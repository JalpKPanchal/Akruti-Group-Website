import React, { useState } from 'react';
import '../custom.css';
import { Link } from 'react-router-dom';

const galleryData = [
  { id: 1, img: '/gallery/1.webp', label: 'Solar Projects' },
  { id: 2, img: '/gallery/4.webp', label: 'Windmill Station' },
  { id: 3, img: '/gallery/5.webp', label: 'Electricity Station' },
  { id: 4, img: '/gallery/15.webp', label: 'Renewable Energy Station' },
  { id: 5, img: '/gallery/2.webp', label: 'Solar Field', wide: true },
  { id: 6, img: '/gallery/8.webp', label: 'Renewable Energy Station', wide: true },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>    <section className="section main-gallery main-gallery--style-3 no-padding-bottom">
      <div className="container">
        {/* Heading Row */}
        <div className="row align-items-center mb-4">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="heading primary-heading">
              <h2 className="title">Watch</h2>
              <h5 className="subtitle">
                <span>Our</span> <span>Gallery</span>
              </h5>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 text-lg-start">
            <p className="description">
              Our innovative technologies, clear focus on the needs of our clients,
              and 1,210 dedicated employees energize society. Let’s make tomorrow
              different today!
            </p>
            <Link to="/gallery" className="button button--transparent">
           <button className="discover-btn">Discover</button>
           </Link>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery row gx-0">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className={`gallery-item ${item.wide ? 'col-xl-6 col-md-6' : 'col-xl-3 col-md-6'}`}
            onClick={() => setSelectedImage(item.img)}
          >
            <div className="gallery-link">
              <div className="overlay"></div>
              <img className="img-bg" src={item.img} alt={item.label} />
            </div>
            <div className="description">
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="container d-lg-none mt-4">
        <div className="row">
          <div className="col-12 text-center">
            <a className="button button--transparent" href="#">
              <span>Discover</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
   {selectedImage && (
  <div className="lightbox" onClick={() => setSelectedImage(null)}>
    <div
      className="lightbox-content"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
    >
      <span
        className="lightbox-close"
        onClick={() => setSelectedImage(null)}
      >
        &times;
      </span>
      <img src={selectedImage} alt="Enlarged view" />
    </div>
  </div>
)}

    </section>
    </>

  );
}
