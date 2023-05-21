import React from "react";
import '../index.css'
import NavBar from "../components/navBar";

const About = () => {
  return (
    <div style={{position:'relative',top:'13vh'}}>
      <NavBar />
      <div
        style={{
          position: "relative",
          height: "90vh",

          display: "flex",
        }}
      >
        <div className="nikediv">
          <div>Developement</div>
        </div>
        <div className="nikediv">Illustration</div>
      </div>
    </div>
  );
};
export default About;
