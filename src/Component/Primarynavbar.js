import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import {Container} from 'react-bootstrap';
import { Facebook , Twitter , Youtube ,Linkedin} from 'react-bootstrap-icons';

const Primarynavbar = () =>{
    return(
        <Container fluid className="headerbg">
        <div className="container" >
             <Nav defaultActiveKey="/home" as="ul">
                
                <Nav.Item as="li">
                    <Nav.Link as={NavLink} to="/home"><Facebook color="White" size={30}/></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={NavLink} to="/home"><Twitter color="White" size={30} /></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={NavLink} to="/home"><Youtube color="White" size={30} /></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link as={NavLink} to="/home"><Linkedin color="White" size={30} /></Nav.Link>
                </Nav.Item>
                <div className="ms-auto">
                   <Button  variant="outline-success">Signin</Button>
                   <Button variant="outline-success">SignUp</Button>
                </div>
                </Nav>
               
       </div>
     </Container>
    )
}

export default Primarynavbar;
