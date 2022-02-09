import React from "react";
import lodo from "../lodo.jpg";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-container">
        <Link to="title" spy={true} smooth={true} offset={50} duration={500}>
          <img src={lodo} id="logo" />
        </Link>

        <ul>
          <li className="lio">
            <Link
              to="title"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="lio">
            <Link
              to="title2"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Abous Us
            </Link>
          </li>
          <li className="lio">
            <Link to="av3" spy={true} smooth={true} offset={50} duration={500}>
              Services
            </Link>
          </li>
          <li className="lio">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li className="contact">
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
