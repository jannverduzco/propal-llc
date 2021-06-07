import React from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
// import { FaBars } from "react-icons/fa";
// import * as ReactBootStrap from "react-bootstrap";
import "./style.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <MdFingerprint className="navbar-icon" />
          </Link>
          <div className="menu-icon"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
