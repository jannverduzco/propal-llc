import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import "./style.css";
import { IconContext } from "react-icons/lib";
// import Logo from "../../Assets/propal.png";
// import * as ReactBootStrap from "react-bootstrap";

function Navbar() {
  // Setting initial valie of click to false
  const [click, setClick] = useState(false);
  // Creating a function to hanlde the click instance (Setting click to oppisite valie of click to toggle)
  const handleClick = () => setClick(!click);
  return (
    <>
    {/* Wrapping everything in one color using IconContext */}
    <IconContext.Provider value={{ color: '#fff'}}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <h4>PROPAL LLC</h4>

            
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
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
