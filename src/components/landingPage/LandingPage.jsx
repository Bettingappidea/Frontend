import React, { Component } from "react";
import { Link } from "react-router-dom";
import LPNavbar from "./LandingPageNavbar";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <LPNavbar />
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default LandingPage;
