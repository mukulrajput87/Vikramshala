import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

const Footer = () =>{
   return(
      <>
       <Container fluid className="headerbg footerColor">
         <Row>
             <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link  as={NavLink} to="about-us">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="contact-us" >Contact Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="privacy" >Privacy Policy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                     <Nav.Link as={NavLink} to="terms">Terms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="media-kit">Media Kit</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="sitemap">SiteMap</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="bug">Report a Bug</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="FAQ">FAQ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="partners">Partners</Nav.Link>
                </Nav.Item>
            </Nav>
         </Row>


         <Row>
             <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="tutorials">Tutorials</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="Interview">Common Interview Questions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="stories">Stories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                     <Nav.Link as={NavLink} to="consultants">Consultants</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="ideas">Ideas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="certifications">Certifications</Nav.Link>
                </Nav.Item>
            </Nav>
         </Row>
         <Row>
            <p className="text-center">©2022 Vikramshala. All contents are copyright of their authors.</p>
         </Row>
       </Container>
      </>
   )
}

export default Footer;