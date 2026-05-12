import React from 'react';
import '../features.css';

const features = [
  {
    id: 1,
    icon: '/img/icon-hydro-power3.png',
    title: 'Save Your Money',
    desc: "Save money on utilities or elevate your home's value by investing in solar panels.",
  },
  {
    id: 2,
    icon: '/img/icon-biosphere.png',
    title: '5-Star Service',
    desc: 'Embrace the commitment to consistently outperforming customer expectations during every interaction.',
  },
  {
    id: 3,
    icon: '/img/icon-eco-house.png',
    title: 'Your Home Is Energy',
    desc: 'Every single day, the sun delivers to us an endless stream of free energy, ready for exploitation.',
  },
  {
    id: 4,
    icon: '/img/icon-energy2.png',
    title: 'Consult & Planning',
    desc: 'Our remote industrial solar systems are crafted to provide dependable power solutions.',
  },
  {
    id: 5,
    icon: '/img/icon-electric-car.png',
    title: 'Certified Engineers',
    desc: 'Our sales engineers possess the expertise to design any comprehensive solution.',
  },
  {
    id: 6,
    icon: '/img/icon-electric-car.png', 
    title: 'Awards & Milestones',
    desc: 'Benefiting from nearly 20 years of excellence in the renewable energy sector.',
  },
];

export default function FeatureSection() {
  return (
    <section className="features-section">
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="features-header">
              <h2 className="title">Why Choose Us</h2>
              <h3 className="subtitle">
                Explore Our Core Features
              </h3>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="feature-grid">
          {features.map((item) => (
            <div
              key={item.id}
              className="feature-item"
              data-aos="fade-up"
              data-aos-delay={item.id * 100}
            >
              <div className="feature-icon-wrapper">
                <img src={item.icon} alt={item.title} />
              </div>
              <h4 className="feature__title">{item.title}</h4>
              <p className="feature__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
