import React, { Component } from "react";
import "./LoginInput.css";
import LoginNavbar from "./LoginNavbar";
class LoginPage extends React.Component {
  signupHandler = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  loginHandler = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };

  render() {
    return (
      <div>
        <LoginNavbar className="LoginNavbar" />
        <div className="inputLogin">
          <div className="container" id="container">
            <div className="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                {/* <div className="social-container">
                  <a href="#" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div> */}
                {/* <span>or use your email for registration</span> */}
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
                <h1>Log In</h1>
                <br></br>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Log In</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p style={{ fontSize: "3vh", textAlign: "center" }}>Log In</p>
                  <button
                    className="ghost"
                    id="signIn"
                    onClick={() => this.loginHandler()}
                  >
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p style={{ fontSize: "3vh" }}>Join Us</p>
                  <button
                    className="ghost"
                    id="signUp"
                    onClick={() => this.signupHandler()}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
