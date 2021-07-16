import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "./style.css";
import TaxPrep from "../../../Assets/taxPrep.png";
import Bookkeeping from "../../../Assets/bookkeeping.png";
import BusinessPlanning from "../../../Assets/business-planning.png";

function Services() {
  return (
    <Container>
      <style>
        {
          "body {background-color: #c9e1d5; background-repeat: no-repeat; ;  height: 100vh;}"
        }
      </style>

      <Col className="services-container">
        <CardDeck>
          <Card>
            <Card.Img className="tax-prep" variant="top" src={TaxPrep} />
            <Card.Body>
              <Card.Title>
                <b>Income Tax Preparation and Planning</b>
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>
                    We provide tax preparation services for business and
                    individuals. A few common forms we prepare include:
                  </li>
                  <ul>
                    <li>1040 - Individual Income Tax Return</li>
                    <li>1040NR - Non-Resident Individual Income Tax Return</li>
                    <li>1120 - Corporate Income Tax Return</li>
                    <li>1120S - Subchapter S Corporate Income Tax Return</li>
                    <li>1065 - Partnership Income Tax Return</li>
                    <li>
                      7002 - Application for Individual Taxpayer Identification
                      Number (ITIN)
                    </li>
                  </ul>
                  <li>State returns, if needed</li>
                  <li>
                    Foreign reporting of income, assets, and other disclosures
                  </li>
                  <li>IRS Audits</li>
                  <li>IRS or State Notices</li>
                </ul>
              </Card.Text>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img className="bookkeeping" variant="top" src={Bookkeeping} />
            <Card.Body>
              <Card.Title>
                <b>Bookkeeping Services</b>
              </Card.Title>
              <Card.Text>
                We provide the following bookkeeping services:
                <ul>
                  <li>Preparation of Business Reports</li>
                  <li>Quickbooks Training</li>
                  <li>Payroll Tax preparation</li>
                  <li>Sales Tax preparations</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              className="business-planning"
              variant="top"
              src={BusinessPlanning}
            />
            <Card.Body>
              <Card.Title>
                <b>Business Planning</b>
              </Card.Title>
              <Card.Text>
                We want all of our clients to be fully aware of the many options
                one can take when it comes to financial planning. We can help
                with questions such as:
                <ul>
                <li> Should I start an LLC? </li>
                <li>What type of entity is best for me?</li>
                <li> What tax breaks can I take advantage of?</li>
                <li>
                  {" "}
                  How do I keep track of my records? How do I save money on
                  taxes?
                </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Col>
    </Container>
  );
}

export default Services;
