import React from "react";
import lodo from "../lodo.jpg";
import "./Services.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="left-side">
          <img src={lodo} />
          <p>
            AVANTIS NETWORK is a team of experienced mobile and web developers
          </p>
        </div>
        <div className="links">
          <ul>
            <h3>LINKS</h3>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
