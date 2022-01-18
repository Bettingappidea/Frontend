import React, { Component } from "react";
class LPNavbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light" id="nav">
          <a class="navbar-brand" href="#">
            <img
              src=""
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            Bet-Z
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse ml-auto"
            id="navbarTogglerDemo02"
          >
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            &nbsp;&nbsp;
            <form class="form-inline">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Download App
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Get ready to Bet in Z-style!
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body d-flex justify-content-center">
                      <button type="button" class="btn btn-info">
                        App Store
                      </button>
                      &nbsp;&nbsp;
                      <button type="button" class="btn btn-success">
                        Google Play Store
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default LPNavbar;
