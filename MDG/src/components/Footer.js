import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="border-top"></div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <ul className="footer-vertical-nav">
                <li className="menu-title">
                  <Link to="pages/news-post.html">News</Link>
                </li>
                <li>
                  <Link to="index.html">Home</Link>
                </li>
                <li>
                  <Link to="pages/world.html">World</Link>
                </li>
                <li>
                  <Link to="pages/author.html">Magazine</Link>
                </li>
                <li>
                  <Link to="pages/business.html">Business</Link>
                </li>
                <li>
                  <Link to="pages/politics.html">Politics</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-lg-3">
              <ul className="footer-vertical-nav">
                <li className="menu-title">
                  <Link to="pages/world.html">World</Link>
                </li>
                <li>
                  <Link to="pages/sports.html">Sports</Link>
                </li>
                <li>
                  <Link to="pages/art.html">Art</Link>
                </li>
                <li>
                  <Link to="/">Magazine</Link>
                </li>
                <li>
                  <Link to="pages/real-estate.html">Real estate</Link>
                </li>
                <li>
                  <Link to="pages/travel.html">Travel</Link>
                </li>
                <li>
                  <Link to="pages/author.html">Author</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-lg-3">
              <ul className="footer-vertical-nav">
                <li className="menu-title">
                  <Link to="/">Features</Link>
                </li>
                <li>
                  <Link to="/">Photography</Link>
                </li>
                <li>
                  <Link to="/">Video</Link>
                </li>
                <li>
                  <Link to="pages/news-post.html">Newsletters</Link>
                </li>
                <li>
                  <Link to="/">Live Events</Link>
                </li>
                <li>
                  <Link to="/">Stores</Link>
                </li>
                <li>
                  <Link to="/">Jobs</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-lg-3">
              <ul className="footer-vertical-nav">
                <li className="menu-title">
                  <Link to="/">More</Link>
                </li>
                <li>
                  <Link to="/">RSS</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">User Agreement</Link>
                </li>
                <li>
                  <Link to="/">Privacy</Link>
                </li>
                <li>
                  <Link to="pages/aboutus.html">About us</Link>
                </li>
                <li>
                  <Link to="pages/contactus.html">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="d-flex justify-content-between">
                <img
                  src="assets/images/logo.svg"
                  className="footer-logo"
                  alt=""
                />

                <div className="d-flex justify-content-end footer-social">
                  <h5 className="m-0 font-weight-600 mr-3 d-none d-lg-flex">
                    Follow on
                  </h5>
                  <ul className="social-media">
                    <li>
                      <Link to="/">
                        <i className="mdi mdi-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="mdi mdi-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="mdi mdi-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="mdi mdi-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="mdi mdi-twitter"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="d-lg-flex justify-content-between align-items-center border-top mt-5 footer-bottom">
                <ul className="footer-horizontal-menu">
                  <li>
                    <Link to="/">Terms of Use.</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy.</Link>
                  </li>
                  <li>
                    <Link to="/">Accessibility & CC.</Link>
                  </li>
                  <li>
                    <Link to="/">AdChoices.</Link>
                  </li>
                  <li>
                    <Link to="/">Advertise with us Transcripts.</Link>
                  </li>
                  <li>
                    <Link to="/">License.</Link>
                  </li>
                  <li>
                    <Link to="/">Sitemap</Link>
                  </li>
                </ul>
                <p className="font-weight-medium">
                  © 2020
                  <Link
                    to="https://www.bootstrapdash.com/"
                    target="_blank"
                    className="text-dark"
                  >
                    @ BootstrapDash
                  </Link>
                  , Inc.All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
