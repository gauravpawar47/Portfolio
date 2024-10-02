import React from "react";
import "./Experience.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle">2</div>
        <span>Internship</span>
        <span style={{color : darkMode ? 'white' : ''}}>Experience</span>
      </div>

      <div className="achievement">
        <div className="circle">20+</div>
        <span>Projects</span>
        <span style={{color : darkMode ? 'white' : ''}}>Completed</span>
      </div>

      <div className="achievement">
        <div className="circle">200+</div>
        <span>LeetCode</span>
        <span style={{color : darkMode ? 'white' : ''}}>Questions</span>
      </div>
    </div>
  );
};

export default Experience;
