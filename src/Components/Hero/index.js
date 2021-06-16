import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HeroSection({
  lightBg,
  toLine,
  lightText,
  lightTectDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
}) {
  return <>
  <div className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}>
    <div className="container">
      <div className="row home__hero-row"
      style={{ display:"flex", flexDirection: imgStart === "start" ? "row-reverse" : "row"}}>
        <div className="col">
          <div className="home__hero-rext-wrapper">
            <div className="top-line">

            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  </>
  ;
}

export default HeroSection;
