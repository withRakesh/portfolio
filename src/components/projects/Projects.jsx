import React from "react";
import { Card, CardImg, CardTitle, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
 
const Projects = () => {
  const projects = [
    {
      Img: "/src/assets/images/weather.png",
      title: "Weather App",
      description:"A simple and responsive weather app where users can check real-time weather details like temperature, humidity, and wind for any city.",
      link: "https://weatherdashboardnm1.netlify.app/",
      githubLink: "https://github.com/withRakesh/weatherDashboard",
    },
    {
      Img: "/src/assets/images/ecommerce.webp",
      title: "E-commerce website",
      description:
        "Built a MERN-based eCommerce site with user login, product browsing, secure checkout, and real-time admin management.",
      link: " ",
      githubLink: " ",
    },
    {
      Img: "/src/assets/images/ecommerce.webp",
      title: "Personal Finance Tracker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et.",
      link: " ",
      githubLink: " ",
    },
  ];
  return (
    <div>
      <Container>
        <h2 className="fw-bold text-dark mb-2 text-center" id="projects">Projects</h2>
        <Row className="p-4">
          {projects.map((project, index) => (
            <Col key={index} md={4} xs={12}>
              <Card className="overflow-hidden  mb-4 "  >
                <motion.img initial={{scale:1.05}}  whileHover={{scale:1.10, }}  src={project.Img} style={{height:"200px"}}>
                    
                </motion.img>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted">{project.description}</Card.Text>
                  <Row>
                    <Col  className="mb-3">
                     <a href={project.link} className="fs-6 text-dark"><i className=" fas fa-arrow-up-right-from-square mx-1"></i>Live Demo</a>
                    </Col>
                    <Col   className="text-center">
                     <a href={project.githubLink} className="text-dark"><i className="fab fa-github fs-3"></i></a>
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
