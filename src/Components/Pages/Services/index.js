import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "./style.css";
import TaxPrep from "../../../Assets/taxPrep.png";

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
                    <li>1065 - Partnership Income Tax ReturnFAQ’s</li>
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
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Col>
    </Container>
  );
}

export default Services;
