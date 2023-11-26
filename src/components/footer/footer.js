 import React from "react";
import "./footer.css";
import {
  PiCaretDownLight,
  PiGlobe,
  PiLinkedinLogoFill,
  PiInstagramLogoFill,
  PiTwitterLogoFill,
  PiYoutubeLogoFill,
  PiFacebookLogoFill,
} from "react-icons/pi";

// Footer
const Footer = () => {
  return (
    <div className="app-container">
      <div>
        <img
          src="./imgpage/Footer/zomatologo.png"
          alt="zomato logo"
          className="zomato-img"
        />
        <span className="footer-box">
          {" "}
          <img
            src="./imgpage/Footer/indianflag.png"
            alt="indianflag"
            className="flag"
          />{" "}
          India <PiCaretDownLight />
        </span>
        <span className="lang-box">
          {" "}
          <PiGlobe className="globe" /> English <PiCaretDownLight />{" "}
        </span>
      </div>
      <div className="footer">
        <div className="container ">
          {/* Footer About Section */}
          <div className="row ">
            <div className="col footer-col">
              <h6>ABOUT ZOMATO</h6>
              <ul className="list-unstyled">
                <li>Who We Are</li>
                <li>Blog</li>
                <li>Work With Us</li>
                <li>Invester Relations</li>
                <li>Report Fraud</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Zomaverse Section */}
            <div className="col">
              <h6>ZOMAVERSE</h6>
              <ul className="list-unstyled">
                <li>Zomato</li>
                <li>Blinkit</li>
                <li>Feeding India</li>
                <li>Hyperpure</li>
                <li>Zomaland</li>
              </ul>
            </div>

            {/* Footer For Restaurants Sections */}
            <div className="col">
              <h6>FOR RESTAURANTS</h6>
              <ul className="list-unstyled ">
                <li>Partner With Us</li>
                <li>Apps For You</li>
                <h6>FOR ENTERPRICES</h6>
                <li>Zomato For Enterprices</li>
              </ul>
            </div>

            {/* Learn More */}
            <div className="col">
              <h6>LEARN MORE</h6>
              <ul className="list-unstyled">
                <li>Privacy</li>
                <li>Security</li>
                <li>Terms</li>
                <li>Sitemap</li>
              </ul>
            </div>

            {/* Zomato Social Links */}
            <div className="col">
              <h6>SOCIAL LINKS</h6>
              <ul className="list-unstyled">
                <li>
                  <PiLinkedinLogoFill className="social-icon" />
                  <PiInstagramLogoFill className="social-icon" />
                  <PiTwitterLogoFill className="social-icon" />
                  <PiYoutubeLogoFill className="social-icon" />
                  <PiFacebookLogoFill className="social-icon" />
                </li>
                <li>
                  <img
                    src="./imgpage/Footer/appstore.png"
                    alt="appstore"
                    className="app-store cur-po"
                  />
                </li>
                <li>
                  <img
                    src="./imgpage/Footer/googleplay.png"
                    alt="googlrpaly"
                    className="play-store cur-po"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-divider"></div>
          <div>
            <p>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2008-2023 © Zomato™
              Ltd. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
