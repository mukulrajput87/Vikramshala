import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


const Navigationbar = () => {
  
   return(
    <Navbar  className="headerbg" collapseOnSelect expand="lg" variant="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">Vikramshala</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="about-us">ABOUT FOUNDATION</Nav.Link>
          <Nav.Link as={NavLink} to="services">SERVICES</Nav.Link>
          <Nav.Link as={NavLink} to="technology">TECHNOLOGY</Nav.Link>
          <Nav.Link as={NavLink} to="interview">INTERVIEW PREP</Nav.Link>
          <Nav.Link as={NavLink} to="news">NEWS</Nav.Link>
          <Nav.Link as={NavLink} to="contact-us">CONTACT US</Nav.Link>

         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   )
}

export default Navigationbar;