import React from 'react';
import Homeslider from './Homeslider';
import {Container,Row,Col} from 'react-bootstrap';
import icn1 from '../images/icn1.png';
import image1 from '../images/people44.jpg'

const Home = () =>{
  const pad45 = {
    padding: "45px 0 45px 0"
  }
  const pad15 = {
    padding: "15px 0 15px 0"
  }
  const pad20 = {
    padding: "20px 0 20px 0"
  }
  return(
   <div >
    <Homeslider />
    <Container style={pad45}>
        <Row className="text-center" style={pad15}>
          <Col xs={12} sm={12} md={3}>
          <img src={icn1} width="126" height="126" />
          <h6 className="padTop20">ABOUT US</h6>
             <p>VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
          </Col>
          <Col xs={12} sm={12} md={3}>
               <img src={icn1} width="126" height="126" />
                <h6 className="padTop20">ABOUT US</h6>
                 <p>VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
          </Col>
        
          <Col xs={12} sm={12} md={3}>
          <img src={icn1} width="126" height="126" />
          <h6 className="padTop20">ABOUT US</h6>
             <p>VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
          </Col>
          <Col xs={12} sm={12} md={3}>
          <img src={icn1} width="126" height="126" />
          <h6 className="padTop20">ABOUT US</h6>
             <p>VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
          </Col>
        </Row>
       
    </Container>

        <Container style={pad45}>
            <Row style={pad15}>
              <Col>
                  <h3 className="text-center">SERVICES WE OFFER</h3>
              </Col>
            </Row>
            <Row>
               <Col xs={12} sm={12} md={6} style={pad20}>
               <p> <img src={icn1} width="126" height="126" style={{float:"left",marginRight:"15px"}} />
                  VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
                </Col>
                <Col xs={12} sm={12} md={6} style={pad20}>
                <p> <img src={icn1} width="126" height="126" style={{float:"left",marginRight:"15px"}} />
                  VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
                </Col>
                <Col xs={12} sm={12} md={6} style={pad20}>
                <p> <img src={icn1} width="126" height="126" style={{float:"left",marginRight:"15px"}} />
                  VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
                  </Col>
                <Col xs={12} sm={12} md={6} style={pad20}>
                <p> <img src={icn1} width="126" height="126" style={{float:"left",marginRight:"15px"}} />
                  VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
                  </Col>
                <Col xs={12} sm={12} md={6} style={pad20}>
                <p> <img src={icn1} width="126" height="126" style={{float:"left",marginRight:"15px"}} />
                  VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
                 </Col>
                <Col xs={12} sm={12} md={6} style={pad20}>
                <p> <img src={icn1} width="126" height="126" style={{float:"left",marginRight:"15px"}} />
                  VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
                  </Col>
            </Row>
        </Container>

        <Container style={pad45}>
        <Row style={pad15}>
              <Col>
                  <h3 className="text-center">Our Team</h3>
              </Col>
            </Row>
        <Row className="text-center">
          <Col xs={12} sm={12} md={4}>
         
          <img src={image1} width="300" height="300" />
          <h6>ABOUT US</h6>
             <p>VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
          </Col>
          <Col xs={12} sm={12} md={4}>
               <img src={image1} width="300" height="300"  />
                <h6>ABOUT US</h6>
                 <p>VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
          </Col>
        
          <Col xs={12} sm={12} md={4}>
          <img src={image1} width="300" height="300"  />
          <h6>ABOUT US</h6>
             <p>VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
          </Col>
          
        </Row> 
        <Row className="text-center">
        <Col xs={12} sm={12} md={4}>
          <img src={image1} width="300" height="300"  />
          <h6>ABOUT US</h6>
             <p>VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
          </Col>
          <Col xs={12} sm={12} md={4}>
          <img src={image1} width="300" height="300"  />
          <h6>ABOUT US</h6>
             <p>VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
          </Col>
          <Col xs={12} sm={12} md={4}>
          <img src={image1} width="300" height="300"  />
          <h6>ABOUT US</h6>
             <p>VikramShila Foundation brings the most advanced and latest technologies running under the most impressive methodologies, competent...</p>
          </Col>
        </Row>
    </Container>

        
    </div>

  )
}

export default Home;