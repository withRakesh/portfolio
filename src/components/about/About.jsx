import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:-50}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:0.8}}
    viewport={{once:true, amount:0.3}}
    >
      <section className="py-5" id="about">
        <Container className="bg-light p-5">
          <Row className="gap-5">
            <Col xs="12" md="6">
              <h1 className="fs-2 fw-bold mb-3" style={{ color: "#42446E" }}>
                About Me
              </h1>
              <p className="lead text-secondary">
             I’m a passionate MERN Stack Developer with hands-on experience in building full-stack web applications. I specialize in creating scalable, responsive, and user-friendly solutions using MongoDB, Express.js, React.js, and Node.js.
              </p>
              <button className="border-0 bg-danger text-white p-2 rounded">
                Download CV
              </button>
            </Col>
            <Col>
              <Row>
                <h1 className="fs-2 fw-bold mb-3" style={{ color: "#42446E" }}>
                  Education
                </h1>
                <Col md="10">
                  <h4 >Bachelor in Computer Science</h4>
                  <p
                    className="lead text-secondary "
                    style={{ fontSize: "16px" }}
                  >
                    The Madurai Diraviyum Thayumanavar Hindu College
                  </p>
                </Col>
                <Col md="2" className="text-start">
                  <p> <span className="text-dark" style={{fontSize:"16px"}}>Tirunelveli</span></p>
                  <p
                    className="lead text-secondary"
                    style={{ fontSize: "12px" }}
                  >
                    2022 - 2025
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};

export default About;
