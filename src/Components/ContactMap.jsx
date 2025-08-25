import React from "react";
import "../custom.css"; // Make sure this exists

export default function ContactMapSection() {
  return (
    <section className="section py-5 bg-light border-top">
      <div className="container">
        <div className="row align-items-stretch">
          {/* Contact Form */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="bg-white p-4 shadow-sm rounded h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="fw-bold mb-4">
                  Get in <span className="text-primary">Touch</span>
                  {/* akruti group */}
                </h3>
                <form className="contact-form">
                  <div className="row">
                    <div className="col-12 mb-4">
                      <input
                        type="text"
                        className="form-control underline-input"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <input
                        type="email"
                        className="form-control underline-input"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <textarea
                        className="form-control underline-input"
                        placeholder="Comment"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-outline-primary w-100"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="text-end mt-3">
                <a
                  href="https://www.google.com/maps/place/Akruti+Group/@23.5635342,72.9864002,17z/data=!3m1!4b1!4m6!3m5!1s0x395db95f1031f371:0x8767ebd1073f15ac!8m2!3d23.5635342!4d72.9864002!16s%2Fg%2F11mcb83p_x!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  className="text-primary text-decoration-none"
                  target="_blank"
                >
                  See Google Map
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          {/* Google Map */}
          <div className="col-md-6">
            <div className="h-100 rounded overflow-hidden shadow-sm" id="map">
              <div className="ratio ratio-4x3 h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991!2d72.9864002!3d23.5635342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db95f1031f371%3A0x8767ebd1073f15ac!2sAkruti+Group!5e0!3m2!1sen!2sin!4v1724660000!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}