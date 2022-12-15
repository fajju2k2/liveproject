import React from 'react';
import { Link } from 'react-router-dom';

import './Style.css';

const Navbar = () => {
  return (
    <header id="header">
      <div className="container">
        {/* // <!-- partial:partials/_navbar.html --> */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="d-flex justify-content-between align-items-center navbar-top">
            <ul className="navbar-left">
              <li> December , 2022</li>
              <li> Karachi , Pakistan</li>
            </ul>
            <div>
              <a className="navbar-brand" href="/">
                {/* logo image Link */}
                <img src="assets/images/loge.svg" alt="LOGO MGD" />
                {/* logo image Link */}
              </a>
            </div>
            <div className="d-flex">
              <ul className="navbar-right">
                <li>
                  <a href="/">ENGLISH</a>
                </li>
                <li>
                  <a href="/">URDU</a>
                </li>
              </ul>
              <ul className="social-media">
                <li>
                  <a href="/">
                    <i className="mdi mdi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="mdi mdi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-bottom-menu">
            <button
              className="navbar-toggler"
              type="button"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="navbar-collapse justify-content-center collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                <li>
                  <button className="navbar-close">
                    <i className="mdi mdi-close"></i>
                  </button>
                </li>
                <li className="nav-item active">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/World">
                    Our Projects
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/Achievements">
                    Achievements
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    About us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/Contact">
                    Contact
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="mdi mdi-magnify"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
