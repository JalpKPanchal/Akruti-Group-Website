import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "../PartnersSection.css";

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
  const [paused, setPaused] = useState(false);
  const speed = 2.5;

  useEffect(() => {
    let pos = 0;
    let rafId;

    const animate = () => {
      const swiper = swiperRef.current?.swiper;
      if (swiper && !paused) {
        const slideWidth =
          swiper.slides[0].clientWidth + swiper.params.spaceBetween;
        const totalWidth = slideWidth * (brands.length * 3);

        pos += speed;
        if (pos >= totalWidth / 3) pos = 0;

        swiper.setTranslate(-pos);
      }
      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  const tripledBrands = [...brands, ...brands, ...brands];

  return (
    <section className="partners-section py-5">
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
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
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
