import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import html from "/src/assets/images/html.png"

const TechStack = () => {
  const techLogos = [
    { name: "HTML5", src: html },
    { name: "CSS3", src: "/src/assets/images/css3.png" },
    { name: "JavaScript", src: "/src/assets/images/javascript.png" },
    { name: "React", src: "/src/assets/images/react.png" },
    { name: "Bootstrap", src: "/src/assets/images/bootstrap.png" },
    { name: "Framer Motion", src: "/src/assets/images/framer.png" },
    { name: "Node js", src: "/src/assets/images/node.png" },
    { name: "Express js", src: "/src/assets/images/express.png" },
    { name: "Mongo db", src: "/src/assets/images/mongodb.png" },
    { name: "Git", src: "/src/assets/images/git.png" },
    { name: "GitHub", src: "/src/assets/images/github.png" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <section className="py-5 text-center">
        <Container>
          <h2 className="fw-bold text-dark mb-2">My Tech Stack</h2>
          <p className="text-muted mb-5">
            Technologies I’ve been working with recently
          </p>
          <Row className="justify-content-center g-4">
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

            <col />
          </Row>
          <hr />
        </Container>
      </section>
    </motion.div>
  );
};

export default TechStack;
