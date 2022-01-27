import React, { Component } from "react";
import "./LoginInput.css";
import axios from "axios";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      all_usernames: "",
      all_emails: "",
      register_blocked: true,
    };
  }

  async componentDidMount() {
    try {
      const { data: usernames } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/usernames`
      );
      const { data: emails } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/users/emails`
      );
      this.setState({ all_usernames: usernames, all_emails: emails });
    } catch (err) {
      console.log(err);
    }
  }

  signupHandler = () => {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
    document.getElementById("login_email").value = "";
    document.getElementById("login_password").value = "";
    this.setState({ email: "", password: "", username: "" });
  };

  loginHandler = () => {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
    document.getElementById("registration_name").value = "";
    document.getElementById("registration_email").value = "";
    document.getElementById("registration_password").value = "";
    this.setState({ email: "", password: "", username: "" });
  };

  async handleSignIn() {
    if (
      this.state.email === "" ||
      this.state.username === "" ||
      this.state.password === ""
    )
      return alert("Please enter all necessary info");
    const temp = null;
    try {
      const { data: data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/register`,
        {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
        }
      );

      if (!data) return alert("No token recieved");
      alert(`You have registered succesfully!`);
      window.localStorage.setItem("jwt_token", data.jwt_token);
    } catch (err) {
      console.log(err);
    }
  }

  async handleLogin() {
    if (this.state.email === "" || this.state.password === "") {
      return alert("Please enter all necessary info");
    }
    try {
      console.log(this.state);
      const { data: data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/login`,
        {
          email: this.state.email,
          password: this.state.password,
        }
      );
      if (!data) return alert("No token recieved");
      window.localStorage.setItem("jwt_token", data.jwt_token);
      alert("logged in successfully");
    } catch (err) {
      const loginError = document.getElementById("loginError");
      loginError.innerHTML = "Incorrect email/password combination";
    }
  }
  setName = function (e) {
    const regNameAvail = document.getElementById("regNameAvail");
    if (e.target.value.split(" ").length > 1) {
      regNameAvail.innerHTML = "You can not have spaces in your username";
      this.setState({ register_blocked: true });
      return;
    }
    if (e.target.value.length < 5) {
      regNameAvail.innerHTML =
        "Please enter a username with atleast 5 characters";
      this.setState({ register_blocked: true });
    } else {
      const temp = this.state.all_usernames.find((ell) => {
        return ell === e.target.value;
      });
      if (temp) {
        regNameAvail.innerHTML = `Username ${e.target.value} is already in use`;
        this.setState({ register_blocked: true });
      } else {
        regNameAvail.innerHTML = `Username ${e.target.value} Available`;
        this.setState({ register_blocked: true, username: e.target.value });
      }
    }
  };
  setPassword = function (e) {
    this.setState({
      password: e.target.value,
    });
  };

  setEmail = function (e) {
    const regNameAvail = document.getElementById("regEmailAvail");
    const temp = this.state.all_emails.find((ell) => {
      return ell === e.target.value;
    });
    if (temp) {
      regNameAvail.innerHTML = `Username ${e.target.value} is already in use`;
      this.setState({ register_blocked: true });
    } else {
      regNameAvail.innerHTML = "";
      this.setState({
        email: e.target.value,
        register_blocked: false,
      });
    }
  };

  setEmail2 = function (e) {
    this.setState({ register_blocked: false, email: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="inputLogin">
          <div className="container" id="container">
            <div className="form-container sign-up-container">
              <form>
                <h1>Create Account</h1>
                <br></br>
                <input
                  id="registration_name"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => this.setName(e)}
                />
                <div id="regNameAvail" style={{ fontSize: "12px" }}>
                  Please enter a username with atleast 5 characters
                </div>
                <input
                  id="registration_email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => this.setEmail(e)}
                />
                <div id="regEmailAvail" style={{ fontSize: "12px" }}></div>
                <input
                  id="registration_password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => this.setPassword(e)}
                />
                <button
                  disabled={this.state.register_blocked}
                  onClick={() => this.handleSignIn()}
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
                <h1>Log In</h1>
                <br></br>
                <input
                  type="email"
                  id="login_email"
                  checked
                  placeholder="Email"
                  onChange={(e) => this.setEmail2(e)}
                />
                <input
                  id="login_password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => this.setPassword(e)}
                />
                <div id="loginError" style={{ fontSize: "12px" }}></div>
                <a href="#">Forgot your password?</a>
                <button onClick={() => this.handleLogin()}>Log In</button>
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
