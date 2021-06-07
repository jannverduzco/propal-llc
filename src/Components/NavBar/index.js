import React from "react";
import "./style.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to='/' className="navbar-logo">

          </Link>
          <div className="manu-icon"></div>

        </div>
      </div>
    </>
  );
}

export default Navbar;
