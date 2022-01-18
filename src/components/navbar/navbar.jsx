import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
const Navbar = () => {
  const [click, setClicker] = useState(false);
  const [button, setButton] = useState(true);
  const token = localStorage.getItem("jwt_string");
  const [details, setDetails] = useState({ name: "", email: "" });

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(async () => {
    console.log("abhi login dabaya or yeh idhar aya");
    console.log(token);
    if (token) {
      try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const { data: data } = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/users/details`
        );
        setDetails({ name: data.username, email: data.email });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  const closeMobileMenu = () => setClicker(false);
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
            {token && (
              <li className="nav-item">
                <Link
                  to="/Account"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {details.username}
                </Link>
              </li>
            )}
            {!token && (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
            )}

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
