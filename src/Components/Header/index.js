import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";
// import Image from "../../Assets/jumbotron-background.jpg";

function Header(props) {
  return (
    <Jumbotron>
      <h1>{props.children}</h1>
    </Jumbotron>
  );
}

export default Header;
