import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css'; // Keep your CSS here

const AboutSection = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    employees: 0,
    established: 0,
  });

  // Animate counting on load
  useEffect(() => {
    const targets = { projects: 650, employees: 100, established: 2001 };
    const duration = 2000; // ms
    const steps = 60;
    const intervalTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setCounts({
        projects: Math.min(
          Math.floor((targets.projects / steps) * currentStep),
          targets.projects
        ),
        employees: Math.min(
          Math.floor((targets.employees / steps) * currentStep),
          targets.employees
        ),
        established: Math.min(
          Math.floor((targets.established / steps) * currentStep),
          targets.established
        ),
      });
      if (currentStep >= steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 bg-white about-welcome about-welcome--style-3">
      <div className="container">
        <div className="row">
          {/* Left heading section */}
          <div className="col-xl-4 mb-4 mb-xl-0">
            <div className="heading primary-heading">
              <h2 className="title" style={{fontSize:"50px",fontWeight:"700"}}>About</h2>
              <h5 className="subtitle">
                <span>Welcome to Our</span> <br />
                <span>Akruti Group</span>
              </h5>
            </div>
          </div>

          {/* Right description */}
          <div className="col-xl-7 offset-xl-1">
            <div className="description" style={{fontSize:"18px",fontWeight:"500"}}>
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
          <div className="row text-center g-4">
            <div className="col-sm-4">
              <div className="counter-card">
                <span className="display-4 fw-bold">{counts.projects}+</span>
                <p className="description mt-2">Mega Projects Completed In Last 5 Years</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="counter-card">
                <span className="display-4 fw-bold">{counts.employees}+</span>
                <p className="description mt-2">Qualified Employees & Workers With Us</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="counter-card">
                <span className="display-4 fw-bold">{counts.established}</span>
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
