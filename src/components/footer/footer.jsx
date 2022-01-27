import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./footer.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">Betting for the people</p>
          <p className="footer-subscription-text">
            Must be 18+ and in New Hampshire to place wagers. If you or someone
            you know has a gambling problem and wants help, call or text
            1-800-522-4700 or 603-724-1605. Please visit
            www.nhproblemgambling.org. Subject to regulatory requirements.
          </p>
        </section>
        <div class="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Company</h2>
              <Link to="/about">About Gazebo</Link>
              <a href="" target="_blank">
                Careers
              </a>
              <a href="" target="_blank">
                Mobile Apps
              </a>
              <a href="" target="_blank">
                Refer a friend
              </a>
              <a href="" target="_blank">
                Terms of Use
              </a>
            </div>
            <div className="footer-link-items">
              <h2>Betting Guides</h2>
              <Link to="/Howtobet">How To Bet</Link>
              <Link to="/contact">Betting Guide</Link>

              <a href="" target="_blank">
                Daily Fantasy Sports
              </a>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <a href="" target="_blank">
                Twitter
              </a>
              <a href="" className="social-icon-link linkedin" target="_blank">
                Facebook
              </a>

              <a href="" className="social-icon-link instagram" target="_blank">
                Instagram
              </a>

              <a href="" className="social-icon-link youtube" target="_blank">
                Youtube
              </a>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                Gazebo
              </Link>
            </div>
            <small className="website-rights">Gazebo © 2022</small>
            <div className="social-icons">
              <a href="" className="social-icon-link facebook" target="_blank">
                {" "}
                <i className="fab fa-facebook-f" />
              </a>

              <a href="" className="social-icon-link instagram" target="_blank">
                {" "}
                <i className="fab fa-instagram" />
              </a>

              <a href="" className="social-icon-link youtube" target="_blank">
                {" "}
                <i className="fab fa-youtube" />
              </a>

              <a href="" className="social-icon-link twitter" target="_blank">
                {" "}
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
