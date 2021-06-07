import React from "react";
import "./style.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ReactBootStrap.Navbar className="navigationBar" bg="dark" expand="md"  variant="dark">
      <ReactBootStrap.Navbar.Brand>
        Janneth Alvarado Verduzco
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link>
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link>
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link>
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}

export default Navbar;
