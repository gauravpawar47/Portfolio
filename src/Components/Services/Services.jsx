import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Service = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <span>
        A versatile software developer skilled in Core Software Developement Languages
        <br/> With the Experience in the Popular Web-Based Frameworks.
        <br/> Proficient in database management using MongoDB and MySQL.
        </span>

        <a
          href="https://drive.google.com/file/d/1RAR4TOGUUnEEihzi9P91cQ_7Q1tES-xZ/view?usp=sharing" rel="noreferrer"
          target="_blank" 
          download
        >
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right Side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "16rem" }}
          initial={{ left: "20rem" }}
          transition={transition}
          style={{ left: "20rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Technologies"}
            detail={
              "C, C++, Java, SQL, HTML, CSS, JavaScript, Bash, C#, Android"
            }
          />
        </motion.div>

        <motion.div
          whileInView={{ left: "-3rem" }}
          initial={{ top: "12rem", left: "-5rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-5rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Frameworks & Tools"}
            detail={"MongoDB, ExpressJS, ReactJS, NodeJs, Spring, SpringBoot, Maven, SQLDeveloper, MySQL, Git"}
          />
        </motion.div>

        <motion.div
          whileInView={{ top: "19rem", left: "13rem" }}
          initial={{ left: "21rem" }}
          transition={transition}
          style={{ top: "19rem", left: "21rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Development"}
            detail={
              "Full Stack, Java Full Stack , Java, Frontend, Backend"
            }
          />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Service;
