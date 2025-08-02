import React from 'react';
import '../custom.css'; // Make sure this exists

export default function ContactMapSection() {
  return (
    <section className="section py-5 bg-light border-top">
      <div className="container">
        <div className="row align-items-stretch">
          {/* Contact Form */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="bg-white p-4 shadow-sm rounded h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="fw-bold mb-4">Get in <span className="text-primary">Touch</span></h3>
                <form className="contact-form">
                  <div className="row">
                    <div className="col-12 mb-4">
                      <input type="text" className="form-control underline-input" placeholder="Name" required />
                    </div>
                    <div className="col-12 mb-4">
                      <input type="email" className="form-control underline-input" placeholder="Email" required />
                    </div>
                    <div className="col-12 mb-4">
                      <textarea className="form-control underline-input" placeholder="Comment" rows="4" required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-outline-primary w-100">Send</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="text-end mt-3">
                <a href="#map" className="text-primary text-decoration-none">See Google Map</a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="col-md-6">
            <div className="h-100 rounded overflow-hidden shadow-sm" id="map">
              <div className="ratio ratio-4x3 h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58495.65093218678!2d72.92685875205358!3d23.605115364798905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaced117d82f50da7%3A0x2a923bc5f5f5e387!2sAkruti%20Group!5e0!3m2!1sen!2sin!4v1754135155595!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
