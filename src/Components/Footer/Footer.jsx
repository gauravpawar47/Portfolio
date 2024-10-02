import React from "react";
import "./Footer.css";
import GitHub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIN from "@iconscout/react-unicons/icons/uil-linkedin";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Wave from "../../img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>gauravpawaroff@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://github.com/gauravpawar47/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub color="white" size="3rem" />
          </a>

          <a
            href="https://linkedin.com/in/gaurav-pawar-519b5b245"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIN color="white" size="3rem" />
          </a>

          <a
            href="https://www.instagram.com/_.student._47/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
