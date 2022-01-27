import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
const Navbar = () => {
  const [click, setClicker] = useState(false);
  const [button, setButton] = useState(true);

  const [details, setDetails] = useState({ name: "", email: "" });
  const [loggedin, setLoggedIn] = useState(false);
  const [jwttoken, setjwttoken] = useState(null);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      setjwttoken(token);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  useEffect(async () => {
    if (jwttoken) {
      try {
        console.log("idhar");
        axios.defaults.headers.common.Authorization = `Bearer ${jwttoken}`;
        const { data: data } = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/users/details`
        );
        console.log(data);
        setDetails({ name: data.username, email: data.email });
        setLoggedIn(true);
      } catch (err) {
        console.log(err);
      }
    }
  }, [jwttoken]);

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  const closeMobileMenu = () => setClicker(false);
  let login_logout;
  if (loggedin) {
    login_logout = (
      <li className="nav-item">
        <Link to="/account" className="nav-links" onClick={closeMobileMenu}>
          {details.name}
        </Link>
      </li>
    );
  } else {
    login_logout = (
      <li>
        <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
          Login
        </Link>
      </li>
    );
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Gazebo
          </Link>
          <div className="menu-icon" onClick={() => setClicker(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bet" className="nav-links" onClick={closeMobileMenu}>
                Bet
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/yo" className="nav-links" onClick={closeMobileMenu}>
                Become a Bookie
              </Link>
            </li>
            {login_logout}
            {/* <li>
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li> */}
          </ul>
          {/* {button && (
            <Button buttonStyle="btn--outline" link="/contact">
              Contact
            </Button>
          )} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
