import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import '../custom.css';

const brands = Array.from({ length: 14 }, (_, i) => ({
  img: `/Partners/brand-${i + 1}.webp`,
  alt: `brand-${i + 1}`,
}));

export default function PartnersSection() {
  return (
    <section className="section brands brands--with-heading py-5 bg-light">
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

        {/* Brand logos slider */}
        <div className="row">
          <div className="col-12">
            <div className="brands-holder">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  576: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  992: { slidesPerView: 5 },
                  1200: { slidesPerView: 6 },
                }}
                className="brands-slider"
              >
                {brands.map((brand, index) => (
                  <SwiperSlide key={index} className="slider-item text-center">
                    <img src={brand.img} alt={brand.alt} className="img-fluid brand-img" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Dots/pagination below */}
            <div className="brands-dots swiper-pagination text-center mt-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
