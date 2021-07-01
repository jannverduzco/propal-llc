import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Services() {
  return (
    <Container>
      <style>
        {
          "body {background-color: #c9e1d5; background-repeat: no-repeat; ;  height: 100vh;}"
        }
      </style>

      <Col className="page-container">
        <Row className="page-title"> Our Services </Row>
        <Row>
          <Col className="page-content">
            <ul>
              <li>
                <b>Income Tax</b>
              </li>
              *** Detailed Explanation Here ***
              <li>
                <b>Bookkeeping</b>
              </li>
              *** Detailed Explanation Here ***
            </ul>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Services;
