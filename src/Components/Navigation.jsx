import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <Link className="navbar-brand" to="/">
          News App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/" className="nav-link ">
              Home
            </Link>
            <Link to="/business" className="nav-link">
              Business
            </Link>
            <Link to="/entertainment" className="nav-link">
              Entertainment
            </Link>
            <Link to="/general" className="nav-link">
              General
            </Link>
            <Link to="/health" className="nav-link">
              Health
            </Link>
            <Link to="/science" className="nav-link">
              Science
            </Link>
            <Link to="/sports" className="nav-link">
              Sports
            </Link>
            <Link to="/technology" className="nav-link">
              Technology
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
