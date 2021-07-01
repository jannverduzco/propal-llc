import React from "react";
import "../../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container>
      <style>
        {
          "body {background-image: url('https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'); background-repeat: no-repeat; background-size: cover;  height: 100vh;}"
        }
      </style>

      <Col className="page-container">
        <Row className="page-title"> About Us </Row>
        <Row>
          <Col className="page-content">
            <p>
              Propal, LLC has been in business for over 3 years with the main
              goal to provide quality service for our clients.
              <br></br>
              Our tax expert, Maximiliano Alvarado has a Bachelor’s degree in
              Accounting from University of Texas at San Antonio and is also an
              Enrolled Agent with over 5 years of experience.
            </p>
          </Col>
        </Row>
        <Row className="page-title">Propal, LLC Mission </Row>
        <Row>
          <Col className="page-content">
            Our Mission is to help clients reach their financial goals by
            implementing optimal tax saving strategies that will benefit both,
            in the present and future. We are dedicated to giving our clients
            guidance to better understand their tax situation, as well as give
            peace of mind when it comes to any business needs.
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default About;
