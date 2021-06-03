import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header(props) {
  return (
    <Jumbotron>
      <h1>{props.children}</h1>
    </Jumbotron>
  );
}

export default Header;
