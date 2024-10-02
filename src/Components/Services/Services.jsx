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
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          aspernatur blanditiis dicta
          <br />
          quidem rem consequatur eveniet rerum ipsa? Aperiam omnis voluptatum
        </span>

        <a
          href="https://drive.usercontent.google.com/u/0/uc?id=1E510jC6KhGlAuQaHNr11j64gqmXoIJPo&export=download"
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
            heading={"Design"}
            detail={
              "Figma, Sketch, Photoshop, Adobe, Adobe XD, Java, Advance Java, C++, DSA, NodeJS, ReactJs"
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
            heading={"Developer"}
            detail={"HTML, CSS, JS, C++, Java, LINUX< UNIX, ReactJS, Fullstack"}
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
            heading={"UI/UX"}
            detail={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati minima dolores ea, amet mollitia iste sapiente repudiandae facere?"
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
