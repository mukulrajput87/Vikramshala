import React from 'react';
import {Container,Row,Col,Carousel} from 'react-bootstrap';
import Banner1 from '../images/banner-web-development.png'


const Homeslider = () =>{
   return(
     <>
        <Container fluid>
            <Row>
                   <Col xs={12} sm={12} md={12}>

                    
                <Carousel>
                            <Carousel.Item>

                                <img
                                className="d-block w-100"
                                src={Banner1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={Banner1}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={Banner1}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                    </Carousel>

                </Col>
            </Row>
            
        </Container>
     </>
   )
}

export default Homeslider;