import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
// import * as ReactBootStrap from "react-bootstrap";
// import Logo from "../../Assets/propal.png";
import "./style.css";

function Navbar() {
  // Setting initial valie of click to false
  const [click, setClick] = useState(false);
  // Creating a function to hanlde the click instance (Setting click to oppisite valie of click to toggle)
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <h3>PROPAL LLC</h3>

            
            {/* <img className="logo" src={Logo} alt="logo"></img> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaRegWindowClose /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faqs" className="nav-links">
                FAQ'S
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
