import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.css";
import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PageLayout from "./Layout/PageLayout";

// Single flat array for all images
const galleryImages = [
  "/gallery/1.webp",
  "/gallery/2.webp",
  "/gallery/3.webp",
  "/gallery/4.webp",
  "/gallery/5.webp",
  "/gallery/8.webp",
  "/gallery/15.webp",
  "/gallery/16.webp",
  "/gallery/18.webp",
  "/gallery/20.webp",
  "/gallery/23.jpg",
  "/gallery/23.webp",
  "/gallery/30MW gsec.jpg",
  "/gallery/30MW gsec.webp",
  "/gallery/ACDC 30MW gsec.webp",
  "/gallery/ACDC 30MW gsec.jpg",
  "/gallery/civil-1.webp",
  "/gallery/lan-1.webp",
  "/gallery/lan-2.webp",
  "/gallery/lan-3.webp",
  "/gallery/lan-4.webp",
  "/gallery/lan-5.webp",
  "/gallery/piling-1.webp",
  "/gallery/piling-2.webp",
  "/gallery/piling-3.webp",
  "/gallery/piling-4.webp",
  "/gallery/piling-5.webp",
  "/gallery/piling-6.webp",
  "/gallery/piling-8.webp",
  "/gallery/piling-9.webp",
  "/gallery/piling-10.webp",
  "/gallery/piling-12.webp",
  "/gallery/piling-13.webp",
  "/gallery/piling-14.webp",
  "/gallery/piling-15.webp",
  "/gallery/prozeal-11MW.webp",
  "/gallery/prozeal-11MW.jpg",
  "/gallery/structure-1.webp",
  "/gallery/structure-2.webp",
  "/gallery/title-image.webp",
];

export default function GalleryPage() {
  const [currentImgIndex, setCurrentImgIndex] = useState(null);
  const imgRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Set actual image source
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "100px" } // Start loading a bit before it’s in view
    );

    imgRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  const openModal = (index) => setCurrentImgIndex(index);
  const closeModal = () => setCurrentImgIndex(null);
  const prevImage = () =>
    setCurrentImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  return (
    <>
     <PageLayout>
    <div className="gallery-page py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold" id="gallery">Our Project Gallery</h2>
        <p className="text-center text-muted mb-5">
          Explore our latest solar installations and innovative project work.
        </p>

        <div className="row g-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="gallery-card position-relative overflow-hidden rounded shadow-sm"
                onClick={() => openModal(i)}
              >
                <img
                  ref={(el) => (imgRefs.current[i] = el)}
                  data-src={img} // Store actual source here
                  src="/placeholder.webp" // Tiny placeholder
                  alt={`Project ${i + 1}`}
                  className="img-fluid gallery-img"
                />
                <div className="gallery-overlay">
                  <FaSearchPlus size={24} color="#fff" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentImgIndex !== null && (
        <div className="gallery-modal">
          <button className="close-btn" onClick={closeModal}>
            <FaTimes size={24} />
          </button>
          <button className="nav-btn left" onClick={prevImage}>
            <FaChevronLeft size={30} />
          </button>
          <img
            src={galleryImages[currentImgIndex]}
            alt="Large view"
            className="modal-image"
          />
          <button className="nav-btn right" onClick={nextImage}>
            <FaChevronRight size={30} />
          </button>
        </div>
      )}
    </div>
    </PageLayout>
    </>
  );
}
