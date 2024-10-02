import React, { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar"; // Ensure the path is correct
import Intro from "./Components/Intro/Intro";
import "./App.css";
import Service from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
