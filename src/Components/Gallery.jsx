import React from 'react';
import '../custom.css'; // Make sure your custom styles are imported here

const galleryData = [
  {
    id: 1,
    img: '/gallery/1.webp',
    label: 'Solar Projects',
  },
  {
    id: 2,
    img: '/gallery/4.webp',
    label: 'Windmill Station',
  },
  {
    id: 3,
    img: '/gallery/5.webp',
    label: 'Electricity Station',
  },
  {
    id: 4,
    img: '/gallery/15.webp',
    label: 'Renewable Energy Station',
  },
  {
    id: 5,
    img: '/gallery/2.webp',
    label: 'Solar Field',
    colSize: 'col-xl-6 col-md-6',
  },
  {
    id: 6,
    img: '/gallery/8.webp',
    label: 'Renewable Energy Station',
    colSize: 'col-xl-6 col-md-6',
  },
];

export default function GallerySection() {
  return (
    <section className="section main-gallery main-gallery--style-3 no-padding-bottom">
      <div className="container">
        <div className="row align-items-end mb-4">
          <div className="col-lg-9">
            <div className="heading primary-heading">
              <h3 className="title">Watch</h3>
              <h5 className="subtitle">
                <span>Our</span> <span>Gallery</span>
              </h5>
              <p>
                Our innovative technologies, clear focus on the needs of our clients, and 1,210 dedicated employees, we energize society. Let’s make tomorrow different today!
              </p>
            </div>
          </div>
          <div className="col-lg-3 text-end">
            <a className="button button--transparent" href="#">
              <span>Discover</span>
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery row gx-0">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className={`gallery-item ${
              item.wide ? 'col-xl-6 col-md-6' : 'col-xl-3 col-md-6'
            }`}
          >
            <a
              className="gallery-link"
              href={item.img}
              data-fancybox="main-gallery"
            >
              <div className="overlay"></div>
              <img className="img-bg" src={item.img} alt={item.title} />
            </a>
            <div className="description">
              <span>{item.title}</span>
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
    </section>
  );
}
