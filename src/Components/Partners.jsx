import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import '../custom.css';

const brands = Array.from({ length: 14 }, (_, i) => ({
  img: `/Partners/brand-${i + 1}.webp`,
  alt: `brand-${i + 1}`,
}));

const splitArray = (arr) => {
  const mid = Math.ceil(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
};

export default function PartnersSection() {
  const [topRow, bottomRow] = splitArray(brands);

  const topSwiperRef = useRef(null);
  const bottomSwiperRef = useRef(null);

  const speed = 0.5; // pixels per frame, tweak to speed up/down

  useEffect(() => {
    let topPos = 0;
    let bottomPos = 0;
    let rafId;

    const animate = () => {
      const topSwiper = topSwiperRef.current?.swiper;
      const bottomSwiper = bottomSwiperRef.current?.swiper;

      if (topSwiper && bottomSwiper) {
        const slideWidth = topSwiper.slides[0].clientWidth + topSwiper.params.spaceBetween;
        const totalWidth = slideWidth * (topRow.length * 3); // tripled slides

        topPos += speed;
        bottomPos += speed;

        if (topPos >= totalWidth / 3) topPos = 0;
        if (bottomPos >= totalWidth / 3) bottomPos = 0;

        // Top slider moves left (images move left)
       topSwiper.setTranslate(-topPos);
bottomSwiper.setTranslate(-bottomPos); // use negative for reverse

      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(rafId);
  }, [topRow.length]);

  // Triple duplication for smooth continuous loop
  const tripledTopRow = [...topRow, ...topRow, ...topRow];
  const tripledBottomRow = [...bottomRow, ...bottomRow, ...bottomRow];

  return (
    <section className="section brands py-5 bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <div className="heading primary-heading">
              <h3 className="title">Partners</h3>
              <h5 className="subtitle">
                <span>Akruti Group</span> <span>Brands</span>
              </h5>
            </div>
          </div>
        </div>

        {/* Top Row */}
        <Swiper
          ref={topSwiperRef}
          modules={[FreeMode]}
          slidesPerView="auto"
          spaceBetween={30}
          freeMode
          loop={false}
          allowTouchMove={false}
          speed={0}
          style={{ willChange: 'transform' }}
          className="mb-3"
        >
          {tripledTopRow.map((brand, idx) => (
            <SwiperSlide key={`top-${idx}`} style={{ width: 'auto' }}>
              <img src={brand.img} alt={brand.alt} className="img-fluid brand-img" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Row */}
        <Swiper
          ref={bottomSwiperRef}
          modules={[FreeMode]}
          slidesPerView="auto"
          spaceBetween={30}
          freeMode
          loop={false}
          allowTouchMove={false}
          speed={0}
          style={{ willChange: 'transform' }}
        >
          {tripledBottomRow.map((brand, idx) => (
            <SwiperSlide key={`bottom-${idx}`} style={{ width: 'auto' }}>
              <img src={brand.img} alt={brand.alt} className="img-fluid brand-img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
