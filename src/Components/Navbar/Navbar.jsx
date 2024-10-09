import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <span onClick={() => window.location.reload()} style={{ cursor: 'pointer' }}>
            Gaurav
          </span>
        </div>
        <Toggle />
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to={"Navbar"}
              smooth={true}
              activeClass="activeClass"
            >
              {" "}
              <li className="navbar-items">Home</li>{" "}
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              {" "}
              <li className="navbar-items">Services</li>{" "}
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              {" "}
              <li className="navbar-items">Experience</li>{" "}
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              {" "}
              <li className="navbar-items">Portfolio</li>{" "}
            </Link>
          </ul>
        </div>

        <a href="mailto:gauravpawaroff@gmail.com" target="_blank" rel="noopener">
          <button className="button n-button">Contact</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
