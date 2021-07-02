import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function Services() {
  return (
    <Container>
      <style>
        {
          "body {background-color: #c9e1d5; background-repeat: no-repeat; ;  height: 100vh;}"
        }
      </style>

      <Col className="services-container">
        <Row className="page-title"> Our Services </Row>
        <Row>
          <Col className="page-content">
            <ol type="1">
              <b>
                <li>Income Tax Preparation and Planning</li>
              </b>
              <ol type="a">
                <li>
                  We provide tax preparation services for <b>businesses</b> and{" "}
                  <b>individuals</b>. A few common forms we prepare include:
                </li>
                <li>State returns, If needed.</li>
                <li>
                  Foreign reporting of income, assets, and other disclosures.
                </li>
                <li>IRS Audits</li>
                <li>IRS or State Notices</li>
              </ol>
              <b>
                <li>Bookkeeping Services</li>
              </b>
              <b></b><li>Business Planning</li>
            </ol>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Services;
