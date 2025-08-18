import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../contact.css";
import PageLayout from "./Layout/PageLayout";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    kw: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log("ContactUs component mounted");
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.kw.trim()) newErrors.kw = "Kilo Watt is required";
    else if (isNaN(formData.kw) || parseFloat(formData.kw) <= 0)
      newErrors.kw = "Enter a valid positive number for Kilo Watt";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      alert("Form submitted successfully!");
      setFormData({ name: "", phone: "", email: "", kw: "", message: "" });
      setSubmitted(false);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <PageLayout>
        <div
          className="contact-page"
          style={{ display: "block", opacity: 1, visibility: "visible" }}
        >
          <section className="contact-hero-dark d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="contact-hero-title">
              Get in <span className="contact-hero-title-blue">Touch</span>
            </h1>
            <p className="contact-hero-desc">
              We are always on the lookout to work with passionate individuals
              and companies.
              <br />
              Fill out the form or connect with us directly!
            </p>
          </section>

          <Container
            className="py-5"
            style={{ display: "block", opacity: 1, visibility: "visible" }}
          >
            <Row className="gy-5">
              <Col md={6}>
                <div
                  className="glass-card p-4 shadow-lg animate-fade"
                  style={{
                    display: "block",
                    opacity: 1,
                    visibility: "visible",
                  }}
                >
                  <h4 className="fw-bold mb-4">Send Us a Message</h4>
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Kilo Watt (KW)</Form.Label>
                      <Form.Control
                        type="number"
                        name="kw"
                        placeholder="Enter Kilo Watt"
                        value={formData.kw}
                        onChange={handleChange}
                        isInvalid={!!errors.kw}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.kw}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        placeholder="Type your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      variant="outline-light"
                      type="submit"
                      className="rounded-pill px-4 contact-hero-btn"
                    >
                      Submit
                    </Button>

                    {submitted && (
                      <p className="mt-3 text-success fw-semibold">
                        Thank you for contacting us!
                      </p>
                    )}
                  </Form>
                </div>
              </Col>

              <Col md={6}>
                <div
                  className="glass-card p-4 shadow-lg animate-fade delay-1"
                  style={{
                    display: "block",
                    opacity: 1,
                    visibility: "visible",
                  }}
                >
                  <h4 className="fw-bold mb-4">Our Office</h4>
                  <p>
                    <strong>Address:</strong> B-1201, Titanium City Center,
                    Satellite, Ahmedabad, Gujarat, India
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 8320292904
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:akrutiengineering72@gmail.com"
                      className="text-decoration-underline text-dark"
                    >
                      akrutiengineering72@gmail.com
                    </a>
                  </p>
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.128121388862!2d72.50802421545412!3d23.085084720397735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5ef7bb7b0f%3A0xf0f51b8c6e5f9e52!2sTitanium%20City%20Center!5e0!3m2!1sen!2sin!4v1662726457861!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: "0", borderRadius: "12px" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageLayout>
    </>
  );
};

export default ContactUs;
