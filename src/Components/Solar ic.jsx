// src/components/SolarIC.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css'; // Your custom CSS

import promoImg from '/img/solar-ic-bg.jpg';
import detailsImg from '/img/solar-ic-detail.jpg';
import pdfBg from '/img/solar-ic-bg.jpg';

const SolarIC = () => {
  return (
    <>
    <main className="main">
      {/* Banner Section */}
      <section className="promo-primary">
        <div className="overlay"></div>
        <picture>
          <source srcSet={promoImg} media="(min-width: 992px)" />
          <img className="jarallax-img img-bg" src={promoImg} alt="Solar IC Banner" />
        </picture>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="align-container">
                <div className="align-item">
                  <h1 className="title">Solar IC</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section services-details">
        <div className="tabs-holder details-tabs">
          <div className="container">
            <div className="row">
              {/* Sidebar */}
              <div className="col-xl-3 col-md-4">
                <div className="tabs-header">
                  <span className="tabs-header__title">Intelligent Solar Control</span>
                </div>

                <div
                  className="pdf-holder"
                  style={{ backgroundImage: `url(${pdfBg})` }}
                >
                  <h4 className="title">Optimized Energy with Solar IC</h4>
                  <p>
                    Smart Integration for Maximum Output.
                    <br />
                    Reliable. Adaptive. Efficient.
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="col-xl-9 col-md-8">
                <div className="tabs-content">
                  <div className="tabs-content__item">
                    {/* Image */}
                    <div className="img-holder">
                      <div className="overlay"></div>
                      <picture>
                        <source srcSet={detailsImg} media="(min-width: 992px)" />
                        <img src={detailsImg} alt="Solar IC System" />
                      </picture>
                    </div>

                    {/* Content */}
                    <h2 className="title">Overview</h2>
                    <p>
                      Solar IC (Intelligent Control) systems integrate cutting-edge technology into traditional solar setups.
                      These systems use sensors, data analytics, and smart algorithms to monitor, manage, and optimize solar power generation and usage.
                    </p>
                    <p>
                      Akruti Group’s Solar IC offerings include remote monitoring, auto-cleaning mechanisms, energy output predictions, and adaptive load management to help clients maximize ROI and operational efficiency.
                    </p>
                    <p>
                      With intelligent automation and data-driven insights, Solar IC ensures a sustainable, scalable, and smart energy solution that evolves with your energy demands and environmental changes.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Row */}
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default SolarIC;
