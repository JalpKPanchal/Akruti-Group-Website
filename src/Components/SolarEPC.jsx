// src/components/SolarEPC.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css'; // Correct path

// Correct image paths (adjust if yours differ)
import promoImg from '/img/cases.jpg';
import detailsImg from '/img/details-img.jpg';
import pdfBg from '/img/cases.jpg';

const SolarEPC = () => {
  return (
    <>
    <main className="main">
      {/* Promo Primary test */}
      <section className="promo-primary">
        <div className="overlay"></div>
        <picture>
          <source srcSet={promoImg} media="(min-width: 992px)" />
          <img className="jarallax-img img-bg" src={promoImg} alt="Promo" />
        </picture>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="align-container">
                <div className="align-item">
                  <h1 className="title">Solar EPC</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="section services-details">
        <div className="tabs-holder details-tabs">
          <div className="container">
            <div className="row">
              {/* Sidebar */}
              <div className="col-xl-3 col-md-4">
                <div className="tabs-header">
                  <span className="tabs-header__title">Solar Panel Installation</span>
                </div>

                <div
                  className="pdf-holder"
                  style={{ backgroundImage: `url(${pdfBg})` }}
                >
                  <h4 className="title">Clean Energy without CO₂</h4>
                  <p>
                    Harness the Power of the Sun with Akruti Group
                    <br />
                    Sustainable. Scalable. Smart.
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-xl-9 col-md-8">
                <div className="tabs-content">
                  <div className="tabs-content__item">
                    {/* Image */}
                    <div className="img-holder">
                      <div className="overlay"></div>
                      <picture>
                        <source srcSet={detailsImg} media="(min-width: 992px)" />
                        <img src={detailsImg} alt="Details" />
                      </picture>
                    </div>

                    {/* Content */}
                    <h2 className="title">Overview</h2>
                    <p>
                      A solar energy park is a dedicated facility that harnesses the abundant energy
                      of the sun to generate electricity. These parks typically consist of large arrays
                      of solar panels, strategically positioned to capture sunlight efficiently. The panels
                      contain photovoltaic cells that convert solar radiation into electricity through
                      the photovoltaic effect. Some solar energy parks may also utilize solar thermal
                      technology, where sunlight is concentrated to heat a fluid, producing steam that
                      drives turbines to generate electricity. These parks are often located in areas with
                      ample sunlight and ample space, such as open fields, deserts, or on the rooftops of buildings.
                    </p>
                    <p>
                      Solar energy parks play a crucial role in transitioning towards renewable energy
                      sources and reducing carbon emissions. They provide a sustainable alternative to
                      fossil fuels, helping to mitigate climate change and reduce reliance on non-renewable
                      energy sources. Additionally, solar parks contribute to local economies by creating
                      jobs during construction and maintenance phases and providing clean energy to power
                      homes, businesses, and industries. Overall, solar energy parks represent a key
                      component of the global effort to combat climate change and achieve a more
                      sustainable future.
                    </p>
                  </div>
                </div>
              </div>
              {/* End of Row */}
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default SolarEPC;
