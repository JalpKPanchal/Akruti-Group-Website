import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles.min.css'; // Assuming your uploaded CSS is here

const AboutSection = () => {
  return (
    <section className="py-5 bg-white about-welcome about-welcome--style-3">
      <div className="container">
        <div className="row">
          {/* Left heading section */}
          <div className="col-xl-4 mb-4 mb-xl-0">
            <div className="heading primary-heading">
              <h3 className="title">About</h3>
              <h5 className="subtitle">
                <span>Welcome to Our</span> <br />
                <span>Akruti Group</span>
              </h5>
            </div>
          </div>

          {/* Right description */}
          <div className="col-xl-7 offset-xl-1">
            <div className="description">
              <p>
                The increasing growth of Solar energy has underscored the need
                for additional capacity across the solar value chain in recent years.
                However, the substantial financial investment needed to initiate and scale
                up Mega projects for potential growth for a better tomorrow.
              </p>
              <p>
                Taken together, these elements present significant challenges to
                sustainable EPC projects and expansion plans for the green revolution.
              </p>
              <a href="#" className="btn btn-outline-primary">
                More about
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="counter-block counter--text-lower counter--is-blue py-5 mt-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-4 mb-4 mb-sm-0">
              <div className="statistics-item">
                <span className="counter display-4 fw-bold">650</span>
                <p className="description mt-2">Mega Projects Completed In Last 5 Years</p>
              </div>
            </div>
            <div className="col-sm-4 mb-4 mb-sm-0">
              <div className="statistics-item">
                <span className="counter display-4 fw-bold">100</span>
                <p className="description mt-2">Qualified Employees & Workers With Us</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="statistics-item">
                <span className="counter display-4 fw-bold">2001</span>
                <p className="description mt-2">Company Established</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
