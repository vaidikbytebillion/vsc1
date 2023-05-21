import React from "react";
import "../index.css";
import image from "../09c161e0-9500-43d2-8b24-19fab1a7a329.png";
import NavBar from "../components/navBar";
import { alignProperty } from "@mui/material/styles/cssUtils";
const Home = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          top: "10vh",
          height: "90vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="intro">Welcome </div>
        <div style={{display:'flex',flexDirection:'column',marginTop:'13px',padding:'0'}}>
          <div>to my portfolio ,</div>
          <div>I fuck you</div>
        </div>
      </div>
    </>
  );
};
export default Home;
