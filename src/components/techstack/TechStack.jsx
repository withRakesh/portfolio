import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import html from "/src/assets/images/html.png";
import css from "/src/assets/images/css3.png";
import javascript from "/src/assets/images/javascript.png";
import bootstrap from "/src/assets/images/bootstrap.png";
import react from "/src/assets/images/react.png";
import framer from "/src/assets/images/framer.png";
import node from "/src/assets/images/node.png";
import express from "/src/assets/images/express.png";
import mongodb from "/src/assets/images/mongodb.png";
import git from "/src/assets/images/git.png";
import github from "/src/assets/images/github.png";

const TechStack = () => {
  const techLogos = [
    { name: "HTML5", src: html },
    { name: "CSS3", src: css },
    { name: "JavaScript", src: javascript },
    { name: "React", src: react },
    { name: "Bootstrap", src: bootstrap },
    { name: "Framer Motion", src: framer },
    { name: "Node js", src: node },
    { name: "Express js", src: express },
    { name: "Mongo db", src: mongodb },
    { name: "Git", src: git },
    { name: "GitHub", src: github },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-4"
    >
      <section className="py-3 mt-3 text-center">
        <Container>
          <h4 className="fw-bold text-dark mb-2">My Tech Stack</h4>
          <p className="text-muted mb-5">
            Technologies I’ve been working with recently
          </p>
          <Row className="justify-content-center g-4 mb-5">
            {techLogos.map((tech, idx) => (
              <Col key={idx} xs={4} sm={3} md={2} lg={3}>
                <img
                  className="text-center mb-2"
                  src={tech.src}
                  alt={tech.name}
                  title={tech.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
                <h6>{tech.name}</h6>
              </Col>
            ))}
          </Row>
          <hr />
        </Container>
      </section>
    </motion.div>
  );
};

export default TechStack;
