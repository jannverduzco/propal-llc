import React from "react";
import "./style.css";
import FooterLogo from "../../Assets/propalFooterLogo.ico";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img className="footerLogo" src={FooterLogo} alt="logo"></img>
            <h2>Propal LLC</h2>
          </div>
          {/* Column2 */}
          <div className="col">
            <h3>Office</h3>
            <ul className="list-unstyled">
              <li>4203 Gardendale St. Ste C253</li>
              <li>San Antonio, Texas, 78229-3833</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h3>Contact Us</h3>
            <ul className="list-unstyled">
              <li>Phone: 210-328-6478</li>
              <li>Fax: 210-920-2350</li>
              <li>malvarado@propalllc.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
