import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv"; // Adjusted path
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import ThumbUp from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import GlassesEmoji from "../../img/glassesimoji.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "black" }}>Hey! I Am</span>
          <span>Gaurav Pawar</span>
          <span>
            Software Developer with high-level Programming and Development
            Skills, Producing Efficient Work
          </span>
        </div>

        <a href="mailto:gauravpawaroff@gmail.com" target="_blank">
          <button className="button i-button ">Hire Me!</button>
        </a>

        <div className="i-icons">
          <a
            href="https://github.com/gauravpawar47/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="GitHub" />
          </a>
          <a
            href="https://linkedin.com/in/gaurav-pawar-519b5b245"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/_.student._47/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={Boy} alt="Boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={GlassesEmoji}
          alt="GlassesEmoji"
        />

        <motion.div 
        initial={{top: "-4%", left: "74%"}}
        whileInView={{left: "65%"}}
        transition={transition}
        style={{ top: "-4%", left: "74%" }} className="floating-div">
          <FloatingDiv image={Crown} txt1="Java" txt2="Developer" />
        </motion.div>

        <motion.div
        initial={{top: "18.5rem", left: "1rem"}}
        whileInView={{left: "3rem"}}
        transition={transition}
        style={{ top: "18.5rem", left: "1rem" }} className="floating-div">
          <FloatingDiv
            image={ThumbUp}
            txt1="Software"
            txt2="Developer"
            className="SpecialDiv"
          />
        </motion.div>

        {/* Blur Divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>

        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
