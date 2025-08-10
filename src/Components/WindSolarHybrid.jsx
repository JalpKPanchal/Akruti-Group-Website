// src/components/WindSolarHybrid.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css'; // Your custom.css with shared styles

import promoImg from '/img/windfirst.jpg';
import detailsImg from '/img/windsecond.jpg';
import pdfBg from '/img/windfirst.jpg';

const WindSolarHybrid = () => {
  return (
    <>
    <main className="main">
      {/* Promo Section */}
      <section className="promo-primary">
        <div className="overlay"></div>
        <picture>
          <source srcSet={promoImg} media="(min-width: 992px)" />
          <img className="jarallax-img img-bg" src={promoImg} alt="Wind Solar Hybrid Banner" />
        </picture>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="align-container">
                <div className="align-item">
                  <h1 className="title">Wind Solar Hybrid</h1>
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
              <div className="col-xl-3 col-md-4">
                {/* Sidebar Title */}
                <div className="tabs-header">
                  <span className="tabs-header__title">Hybrid Energy Solutions</span>
                </div>

                {/* PDF Section */}
                <div
                  className="pdf-holder"
                  style={{ backgroundImage: `url(${pdfBg})` }}
                >
                  <h4 className="title">Wind & Solar Synergy</h4>
                  <p>
                    Combine the Power of the Wind and Sun.
                    <br />
                    Reliable. Efficient. Renewable.
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="col-xl-9 col-md-8">
                <div className="tabs-content">
                  <div className="tabs-content__item">
                    {/* Image */}
                    <div className="img-holder">
                      <div className="overlay"></div>
                      <picture>
                        <source srcSet={detailsImg} media="(min-width: 992px)" />
                        <img src={detailsImg} alt="Wind Solar Hybrid System" />
                      </picture>
                    </div>

                    {/* Text Content */}
                    <h2 className="title">Overview</h2>
                    <p>
                      Wind-Solar Hybrid systems integrate two of the most reliable sources of renewable energy into a single solution. By combining photovoltaic panels and wind turbines, these systems ensure power generation across varying weather conditions — sunny, cloudy, or windy.
                    </p>
                    <p>
                      These hybrid solutions are ideal for regions where solar energy alone may not suffice year-round. They reduce the need for battery storage and provide more consistent output, lowering overall cost of electricity and increasing reliability.
                    </p>
                    <p>
                      Akruti Group specializes in delivering custom-designed Wind-Solar Hybrid systems tailored to the site’s environmental profile and customer requirements. Our end-to-end services include feasibility study, design, procurement, installation, and maintenance support.
                    </p>
                  </div>
                </div>
              </div>
              {/* End of Content Row */}
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* text */}
    </>
  );
};

export default WindSolarHybrid;
