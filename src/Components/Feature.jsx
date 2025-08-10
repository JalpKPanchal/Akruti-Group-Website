import React from 'react';
// import '../styles.min.css'; // Your uploaded global CSS
import '../custom.css'; // Your custom CSS

const features = [
  {
    id: 1,
    icon: '/img/icon-hydro-power3.png',
    title: 'Save Your Money',
    desc: 'Save money on utilities or elevate your home\'s value by investing in solar panels.',
  },
  {
    id: 2,
    icon: '/img/icon-biosphere.png',
    title: '5Stars Customer Service',
    desc: 'Embrace the commitment to consistently outperforming customer expectations during every interaction.',
  },
  {
    id: 3,
    icon: '/img/icon-eco-house.png',
    title: 'Your Home Is Energy',
    desc: 'Every single day, the sun delivers to us an endless stream of free energy, ready for exploitation through solar innovations.',
  },
  {
    id: 4,
    icon: '/img/icon-energy2.png',
    title: 'Consult & Planning',
    desc: 'Our remote industrial solar systems are crafted to provide dependable power solutions for our clients.',
  },
  {
    id: 5,
    icon: '/img/icon-electric-car.png',
    title: 'Certified Engineers',
    desc: 'Our sales engineers, equipped with extensive experience, possess the expertise to design any comprehensive solution.',
  },
  {
    id: 6,
    icon: '/img/icon-electric-car.png',
    title: 'Awards & \nMilestones',
    desc: 'Benefiting from nearly 20 years experience.',
  },
];

export default function FeatureSection() {
  return (
    <section className="py-5 features section bg-white">
      <div className="container">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="heading primary-heading text-center">
              <h2 className="title">Features</h2>
              <h5 className="subtitle">
                <span>Explore Our </span>
                <span>Features</span>
              </h5>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="feature_container d-flex flex-wrap justify-content-center gap-4">
          {features.map((item) => (
            <div
              key={item.id}
              className={`feature-item text-center p-3 ${item.iconClass ? 'feature-item-custom' : ''}`}
              style={{ maxWidth: '300px', flex: '1 1 250px' }}
            >
              <div className="feature__icon mb-3">
                {item.icon ? (
                  <img src={item.icon} alt={item.title} style={{ width: 60, height: 60 }} />
                ) : (
                  <i className={item.iconClass} style={{ fontSize: '3rem', color: '#007bff' }}></i>
                )}
              </div>
              <h4 className="feature__title mb-2">{item.title}</h4>
              <p className="feature__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
