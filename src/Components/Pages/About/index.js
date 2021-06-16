import React from "react";
import Hero from "../../Hero";

function About() {
  return (
    <div style={{ textAlign: "center" }}>
      <Hero>
        <div>About Us</div>
      </Hero>

      <div className="page-container">
        <p>
          
          PROPAL, LLC has been in business for over 2 years with the main goal
          to provide quality service for our clients.
        </p>

        <p>
          Our, tax expert, Maximiliano Alvarado has a Bachelor’s degree in
          Accounting from University of Texas at San Antonio and is also an
          Enrolled Agent with over 5 years of experience.
        </p>
      </div>
    </div>
  );
}

export default About;
