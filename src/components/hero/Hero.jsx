import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import profile from "/src/assets/images/profile.webp";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <section className="HeroSection bg-light " id="home" >
        <Container style={{paddingTop:'60px'}} >
          <Row className="align-items-center">
            <Col
              xs={12}
              md={6}
              className="text-center  text-md-start mb-5 mb-md-0"
            >
              <h1 className="fw-bold">
                Hi, <span style={{ color: "red" }}>I'm</span>
              </h1>
              <h1 className="fw-bold display-5">RAKESH</h1>
              <p className="lead text-secondary">
                A passionate{" "}
                <span className="fw-bold fs-5">MERN Stack Developer</span>{" "}
                focused on building beautiful and functional full-stack web
                applications with seamless user experiences.
              </p>
            </Col>
            <Col xs={12} md={6} >
              <div className="bg-white rounded">
                <img
                  src={profile}
                  alt="Hero"
                  className="img-fluid "
                   
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};
