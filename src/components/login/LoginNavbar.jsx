import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginNavbar.css";
const LoginNavbar = () => {
  return (
    <div className="loginNavBar">
      <nav id="global-nav" className="nav">
        <div className="container">
          <div className="pull-left">
            <h1 style={{ paddingLeft: "5vh" }} className="site-title">
              Betting App
            </h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LoginNavbar;
