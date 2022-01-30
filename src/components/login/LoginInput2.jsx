import { React, useState, useEffect } from "react";
import "./LoginInput.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { replace } from "lodash";
const LoginPage = () => {
  const [email, setEm] = useState("");
  const [password, setPass] = useState("");
  const [username, setuser] = useState("");
  const [all_usernames, setall_user] = useState(null);
  const [all_emails, setall_emails] = useState(null);
  const [regBlock, setregBlock] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    async function temp() {
      try {
        const { data: usernames } = await axios.get(
          `https://gazeboapi.herokuapp.com/users/usernames`
        );
        const { data: emails } = await axios.get(
          `https://gazeboapi.herokuapp.com/users/emails`
        );
        setall_user(usernames);
        setall_emails(emails);
      } catch (err) {
        console.log(err);
      }
    }
    if (!all_usernames || !all_emails) {
      temp();
    }
  });

  function signupHandler() {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
    document.getElementById("login_email").value = "";
    document.getElementById("login_password").value = "";
    setEm("");
    setPass("");
    setuser("");
  }

  function loginHandler() {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
    document.getElementById("registration_name").value = "";
    document.getElementById("registration_email").value = "";
    document.getElementById("registration_password").value = "";
    setEm("");
    setPass("");
    setuser("");
  }

  async function handleSignIn() {
    if (email === "" || username === "" || password === "")
      return alert("Please enter all necessary info");
    try {
      const { data: data } = await axios.post(
        `https://gazeboapi.herokuapp.com/users/register`,
        {
          email: email,
          username: username,
          password: password,
        }
      );

      if (!data) return alert("No token recieved");
      alert(`You have registered succesfully!`);
      window.localStorage.setItem("jwt_token", data.jwt_token);
      navigate("/home");
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLogin() {
    console.log("ram");
    if (email === "" || password === "") {
      return alert("Please enter all necessary info");
    }
    const loginError = document.getElementById("loginError");
    try {
      loginError.innerHTML = "";
      const { data: data } = await axios.post(
        `https://gazeboapi.herokuapp.com/users/login`,
        {
          email: email,
          password: password,
        }
      );
      if (!data) return alert("No token recieved");
      window.localStorage.setItem("jwt_token", data.jwt_token);
      alert("logged in successfully");
      navigate("/home");
      window.location.reload(false);
    } catch (err) {
      loginError.innerHTML = "Incorrect email/password combination";
    }
  }
  let setName = function (e) {
    const regNameAvail = document.getElementById("regNameAvail");
    if (e.target.value.split(" ").length > 1) {
      regNameAvail.innerHTML = "You can not have spaces in your username";
      setregBlock(true);
      return;
    }
    if (e.target.value.length < 5) {
      regNameAvail.innerHTML =
        "Please enter a username with atleast 5 characters";
      setregBlock(true);
    } else {
      const temp = all_usernames.find((ell) => {
        return ell === e.target.value;
      });
      if (temp) {
        regNameAvail.innerHTML = `Username ${e.target.value} is already in use`;
        setregBlock(true);
      } else {
        regNameAvail.innerHTML = `Username ${e.target.value} Available`;
        setregBlock(false);
        setuser(e.target.value);
      }
    }
  };
  function setPassword(e) {
    setPass(e.target.value);
  }

  let setEmail = function (e) {
    const regNameAvail = document.getElementById("regEmailAvail");
    const temp = all_emails.find((ell) => {
      return ell === e.target.value;
    });
    if (temp) {
      regNameAvail.innerHTML = `Email ${e.target.value} is already in use`;
      setregBlock(true);
    } else {
      regNameAvail.innerHTML = "";
      setEm(e.target.value);
      setregBlock(false);
    }
  };

  let setEmail2 = function (e) {
    setregBlock(false);
    setEm(e.target.value);
  };
  function onLoginFormSubmit(e) {
    e.preventDefault();
    handleLogin();
    // send to server with e.g. `window.fetch`
  }
  return (
    <div>
      <div className="inputLogin">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <br></br>
              <input
                id="registration_name"
                type="text"
                placeholder="Username"
                onChange={(e) => setName(e)}
              />
              <div id="regNameAvail" style={{ fontSize: "12px" }}>
                Please enter a username with atleast 5 characters
              </div>
              <input
                id="registration_email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e)}
              />
              <div id="regEmailAvail" style={{ fontSize: "12px" }}></div>
              <input
                id="registration_password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e)}
              />
              <button
                type="button"
                disabled={regBlock}
                onClick={() => handleSignIn()}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form>
              <h1>Log In</h1>
              <br></br>
              <input
                type="email"
                id="login_email"
                checked
                placeholder="Email"
                onChange={(e) => setEmail2(e)}
              />
              <input
                id="login_password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e)}
              />
              <div id="loginError" style={{ fontSize: "12px" }}></div>
              <a href="#">Forgot your password?</a>
              <button type="button" onClick={() => handleLogin()}>
                Log In
              </button>
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
                  onClick={() => loginHandler()}
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
                  onClick={() => signupHandler()}
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
};

export default LoginPage;
