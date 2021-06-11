import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";
// import Image from "../../Assets/jumbotron-background.jpg";

function Header(props) {
  return (
    <Jumbotron>
      <div className="page-title">{props.children}</div>
    </Jumbotron>
  );
}

export default Header;
