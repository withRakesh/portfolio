import React from "react";
import "./Hero.css"
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from "framer-motion";
import profile from "/src/assets/images/Rakeshprofile.png"
 

export const Hero = () => {
  return (
    <motion.div 
    initial={{opacity:0,}}
    whileInView={{opacity:1,}}
    transition={{duration:2.5}}
    viewport={{once:true, amount:0.3}}
    >
      <section className="HeroSection py-5 bg-white" id='home'> 
        <Container >
          <Row className="align-items-center">
            {/* Left Side: Content */}
            <Col
              xs={12}
              md={6}
              className="text-center  text-md-start mb-5 mb-md-0">
              <h1 className="fw-bold">Hi,  <span style={{color:"red"}}>I'm</span></h1>
               <h1 className="fw-bold display-5">RAKESH</h1>
              <p className="lead text-secondary">
                A passionate MERN Stack Developer focused on building beautiful and functional full-stack web applications with seamless user experiences.
              </p>
            </Col>

            {/* Right Side: Image */}
            <Col xs={12} md={6} className="text-center">
              <img
                src={profile}
                alt="Hero"
                className="img-fluid  rounded-circle shadow border"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </motion.div>
  );
};
