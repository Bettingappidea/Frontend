import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    let styleLandingPage = {
      // paddingTop: "10vh",
      height: "100vh",
      width: "100%",
      background: "white",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    };
    return (
      <div style={styleLandingPage}>
        <h1 style={{ fontSize: "50vh", color: "sandybrown" }}>Gazebo!</h1>
      </div>
    );
  }
}

export default LandingPage;
