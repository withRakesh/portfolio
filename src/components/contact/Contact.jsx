import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  FormControl,
  Alert,
} from "react-bootstrap";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vilrxt2", "template_si0nf9m", form.current, {
        publicKey: "_nhmAJ_iKdWzL13Oh",
      })
      .then(() => {
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  return (
    <div>
      <Container className="h-100 py-5" id="contact">
        <Row className="p-5">
             <h3 className=" text-center fw-bold mb-4">Contact</h3>
          <Container>
            <Col xs={12} md={12} className="h-100 py-3">
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Control
                      type="text"
                      name="from_name"
                      placeholder="Name:"
                      required
                      className="mb-3 p-3 rounded-0"
                      style={{ backgroundColor: "#FFFFFF" }}
                    />
                    <Form.Control
                      type="email"
                      name="from_email"
                      placeholder="Email:"
                      required
                      className="mb-3 p-3 rounded-0"
                      style={{ backgroundColor: "#FFFFFF" }}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Control
                      type="tel"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      name="from_mobile"
                      placeholder="mobile:"
                      required
                      className="mb-3 p-3 rounded-0"
                      style={{ backgroundColor: "#FFFFFF" }}
                    />
                    <Form.Control
                      type="text"
                      name="from_subject"
                      placeholder="subject:"
                      required
                      className="mb-3 p-3 rounded-0"
                      style={{ backgroundColor: "#FFFFFF" }}
                    />
                  </Col>
                </Row>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message..."
                  className="mb-3"
                  name="message"
                  required
                />
                <div className="d-flex justify-content-center">
                  <Form.Control
                    type="submit"
                    value="Send Message"
                    className=" d-flex border-dark  rounded-4  "
                    style={{ backgroundColor: "#FFFFFF", color: "#000000", borderWidth:"2px", width:"200px" }}
                  />
                </div>
              </form>
              {status === "success" && (
                <Alert variant="success" className="mt-3">
                  ✅ Message sent successfully!
                </Alert>
              )}
              {status === "error" && (
                <Alert variant="danger" className="mt-3">
                  ❌ Failed to send message. Please try again.
                </Alert>
              )}
            </Col>
          </Container>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
