import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <section id="projects">
        <Container className="py-3">
          <h1
            className="fs-2 fw-bold mb-5 text-center"
            style={{ color: "#42446E" }}
          >
            Projects
          </h1>
          <Row className="g-4 p-5">
            {/* Card 1 */}
            <Col lg={4} md={6} sm={12}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Img
                alt="Ecommerce"
                  variant="top"
                  src="/src/assets/images/ecommerce.webp"
                  className="rounded-top-4"
                />
                <Card.Body>
                  <Card.Title>Ecommerce</Card.Title>
                  <Card.Text
                    className="text-secondary"
                    style={{ fontSize: "16px" }}
                  >
                    A modern eCommerce website using React and Bootstrap with
                    responsive layout and shopping features.
                  </Card.Text>
                  <Card.Text
                    className="text-secondary mb-4"
                    style={{ fontSize: "14px" }}
                  >
                    Html Css Javascript React
                  </Card.Text>
                  <Row style={{ fontSize: "12px" }}>
                    <Col className="text-center">
                      <a href="#" className="text-dark">
                        <i className="fas fa-link"></i> Live Preview
                      </a>
                    </Col>
                    <Col className="text-center">
                      <a href="#" className="text-dark">
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 1 */}
            <Col lg={4} md={6} sm={12}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Img
                 alt="Ecommerce"
                  variant="top"
                  src="/src/assets/images/ecommerce.webp"
                  className="rounded-top-4"
                />
                <Card.Body>
                  <Card.Title>Ecommerce</Card.Title>
                  <Card.Text
                    className="text-secondary"
                    style={{ fontSize: "16px" }}
                  >
                    A modern eCommerce website using React and Bootstrap with
                    responsive layout and shopping features.
                  </Card.Text>
                  <Card.Text
                    className="text-secondary mb-4"
                    style={{ fontSize: "14px" }}
                  >
                    Html Css Javascript React
                  </Card.Text>
                  <Row style={{ fontSize: "12px" }}>
                    <Col className="text-center">
                      <a href="#" className="text-dark">
                        <i className="fas fa-link"></i> Live Preview
                      </a>
                    </Col>
                    <Col className="text-center">
                      <a href="#" className="text-dark">
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 1 */}
            <Col lg={4} md={6} sm={12}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Img
                 alt="Ecommerce"
                  variant="top"
                  src="/src/assets/images/ecommerce.webp"
                  className="rounded-top-4"
                />
                <Card.Body>
                  <Card.Title>Ecommerce</Card.Title>
                  <Card.Text
                    className="text-secondary"
                    style={{ fontSize: "16px" }}
                  >
                    A modern eCommerce website using React and Bootstrap with
                    responsive layout and shopping features.
                  </Card.Text>
                  <Card.Text
                    className="text-secondary mb-4"
                    style={{ fontSize: "14px" }}
                  >
                    Html Css Javascript React
                  </Card.Text>
                  <Row style={{ fontSize: "12px" }}>
                    <Col className="text-center">
                      <a href="#" className="text-dark">
                        <i className="fas fa-link"></i> Live Preview
                      </a>
                    </Col>
                    <Col className="text-center">
                      <a href="#" className="text-dark">
                        <i className="fab fa-github"></i> View Code
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};

export default Projects;
