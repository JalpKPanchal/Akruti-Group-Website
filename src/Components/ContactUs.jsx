import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../contact.css";
import PageLayout from "./Layout/PageLayout";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    capacity: "",
    unit: "KW",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.capacity.trim()) newErrors.capacity = "Capacity is required";
    else if (isNaN(formData.capacity) || parseFloat(formData.capacity) <= 0)
      newErrors.capacity = "Enter a valid positive number for Capacity";
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
      emailjs
        .send(
          "service_7dy56rd", // Service ID
          "template_233p0tc", // Template ID
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            capacity: formData.capacity,
            unit: formData.unit,
            message: formData.message,
            time: new Date().toLocaleString(),
          },
          "c7E-2hfAeswJzixzc" // User/Public Key
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
            setSubmittedData({ ...formData });
            setSubmitted(true);

            setTimeout(() => {
              setFormData({
                name: "",
                phone: "",
                email: "",
                capacity: "",
                unit: "KW",
                message: "",
              });
              setSubmitted(false);
              setSubmittedData(null);
            }, 2000);
          },
          (error) => {
            console.error("EmailJS error:", error.text);
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <PageLayout>
      <div className="contact-page">
        <section className="contact-hero-dark d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="contact-hero-title">
            Get in <span className="contact-hero-title-blue">Touch</span>
          </h1>
          <p className="contact-hero-desc">
            We are always on the lookout to work with passionate individuals and
            companies.
            <br />
            Fill out the form or connect with us directly!
          </p>
        </section>

        <Container className="py-5">
          <Row className="gy-5">
            <Col md={6}>
              <div className="glass-card p-4 shadow-lg animate-fade">
                <h4 className="fw-bold mb-4">Send Us a Message</h4>
                <Form noValidate onSubmit={handleSubmit}>
                  {/* Name */}
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

                  {/* Phone */}
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

                  {/* Capacity */}
                  <Form.Group className="mb-3">
                    <Form.Label>Capacity</Form.Label>
                    <div className="d-flex">
                      <Form.Control
                        type="number"
                        name="capacity"
                        placeholder="Enter Capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        isInvalid={!!errors.capacity}
                      />
                      <Form.Select
                        name="unit"
                        value={formData.unit}
                        onChange={handleChange}
                        className="ms-2"
                        style={{ maxWidth: "100px" }}
                      >
                        <option value="KW">kW</option>
                        <option value="MW">MW</option>
                      </Form.Select>
                    </div>
                    <Form.Control.Feedback type="invalid">
                      {errors.capacity}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Email */}
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

                  {/* Message */}
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

                  {submitted && submittedData && (
                    <div className="success-popup mt-3">
                      <p className="fw-semibold">
                        ✅ Form submitted successfully!
                      </p>
                      <p>
                        Capacity: {submittedData.capacity} {submittedData.unit}
                      </p>
                    </div>
                  )}
                </Form>
              </div>
            </Col>
            <Col md={6}>
              <div className="glass-card p-4 shadow-lg animate-fade delay-1">
                <h4 className="fw-bold mb-4">Our Office</h4>
                <p>
                  <strong>Address:</strong> 110,111, Jeevan Dhara Complex,
                  Hadiyol Rd, opposite Nayra Petroleum, Himatnagar, Gujarat
                  383001
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+918320292904"
                    className="text-decoration-underline text-dark"
                  >
                    +91 83202 92904
                  </a>
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:akrutigroupacc@gmail.com"
                    className="text-decoration-underline text-dark"
                  >
                    akrutigroupacc@gmail.com
                  </a>
                </p>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991!2d72.9864002!3d23.5635342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db95f1031f371%3A0x8767ebd1073f15ac!2sAkruti+Group!5e0!3m2!1sen!2sin!4v1724660000!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
