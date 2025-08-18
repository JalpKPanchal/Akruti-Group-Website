import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "../PartnersSection.css"; // Custom CSS

// Added 2 new brands at the end
const brands = [
  ...Array.from({ length: 14 }, (_, i) => ({
    img: `/Partners/brand-${i + 1}.webp`,
    alt: `brand-${i + 1}`,
  })),
  { img: "/img/bondada.jpg", alt: "bondada" },
  { img: "/img/mahajenco.png", alt: "mahajenco" },
];

export default function PartnersSection() {
  const swiperRef = useRef(null);
  const speed = 0.8; // pixels per frame

  useEffect(() => {
    let pos = 0;
    let rafId;

    const animate = () => {
      const swiper = swiperRef.current?.swiper;
      if (swiper) {
        const slideWidth =
          swiper.slides[0].clientWidth + swiper.params.spaceBetween;
        const totalWidth = slideWidth * (brands.length * 3); // tripled for loop

        pos += speed;
        if (pos >= totalWidth / 3) pos = 0;

        swiper.setTranslate(-pos);
      }
      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Tripled for seamless loop
  const tripledBrands = [...brands, ...brands, ...brands];

  return (
    <section className="partners-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h3 className="title">
            <b>Our Clients</b>
          </h3>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[FreeMode]}
          slidesPerView="auto"
          spaceBetween={30}
          freeMode
          loop={false}
          allowTouchMove={false}
          speed={0}
          className="partners-swiper"
        >
          {tripledBrands.map((brand, idx) => (
            <SwiperSlide key={idx} style={{ width: "auto" }}>
              <img src={brand.img} alt={brand.alt} className="brand-logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
