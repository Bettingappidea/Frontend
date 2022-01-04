import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default LandingPage;