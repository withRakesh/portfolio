import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      className="navbar shadow-sm"
      sticky="top"
      bg="white"
      expand="lg"
      style={{ backdropFilter: "blur(10px)", background: "rgba(255,255,255,0.9)" }}
    >
      <Container>
        <Navbar.Brand href="#">
          <i className="fw-bold fs-4">
            Rake<span style={{ color: "red" }}>sH</span>
          </i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto d-flex gap-4">
            {["home", "about", "projects", "contact"].map((section) => (
              <Link
                key={section}
                className="navbar-link text-secondary fw-semibold text-decoration-none"
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </Nav>

          <Nav className="ms-auto d-flex flex-row gap-3">
            <Nav.Link href="https://github.com/withRakesh" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github social-icon"></i>
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/in/rakesh19052005" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin social-icon"></i>
            </Nav.Link>
            <Nav.Link href="https://wa.me/918072752955" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp social-icon"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
