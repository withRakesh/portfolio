import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import weatherImg from "/src/assets/images/weather.png";
import ecommerceImg from "/src/assets/images/ecom.png";
import financeImg from "/src/assets/images/task.png";

const Projects = () => {
  const projects = [
    {
      Img: weatherImg,
      title: "Weather App",
      description:
        "A simple and responsive weather app where users can check real-time weather details like temperature, humidity, and wind for any city.",
      link: "https://weatherdashboardnm1.netlify.app/",
      githubLink: "https://github.com/withRakesh/weatherDashboard",
    },
    {
      Img: ecommerceImg,
      title: "ElectroKart",
      description:
        "Developed a responsive e-commerce website for electronics laptops, watches, headphone.",
      link: "https://electrolart.netlify.app/",
      githubLink: "https://github.com/withRakesh/Ecommerce",
    },
    {
      Img: financeImg,
      title: "Task Manager",
      description:
        "A lightweight, responsive Task Manager web application built using HTML, CSS, JavaScript, and Bootstrap. It allows users to Create, Read, Update, and Delete (CRUD) tasks, with persistent storage using browser Local Storage.",
      link: "https://taskmanger-app.netlify.app/",
      githubLink: "https://github.com/withRakesh/Task-Manager-CRUD",
    },
  ];

  return (
    <div>
      <Container className="my-2">
        <h4 className="fw-bold text-dark mb-2 text-center mb-4" id="projects">
          Projects
        </h4>
        <Row className="g-4 p-3" xs={1} md={3}>
          {projects.map((project, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4 d-flex">
              <Card className="h-100  d-flex flex-column justify-content-between overflow-hidden">
                <motion.img
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ height: "200px", objectFit: "cover" }}
                  src={project.Img}
                  alt={project.title}
                  variants={top}
                />
                <Card.Body className="d-flex flex-column flex-grow-1">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <Row>
                    <Col className="mb-2 ">
                      <a
                        href={project.link}
                        className="fs-6 text-dark "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-arrow-up-right-from-square mx-1"></i>
                        Live Demo
                      </a>
                    </Col>
                    <Col className="text-end">
                      <a
                        href={project.githubLink}
                        className="text-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github fs-3"></i>
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
