import React from "react";
import Image from "next/image";
import logo from "../assets/logo/logo-light.png";

const Footer = () => (
  <footer className="footer-area">
    <div className="footer-widget">
      <div className="container">
        <div className="row footer-widget-wrapper pt-120 pb-70">
          <div className="col-md-6 col-lg-4">
            <div className="footer-widget-box about-us">
              <a href="#" className="footer-logo">
                <Image src={logo} alt="" />
              </a>
              <p className="mb-3">
                We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
              </p>
              <ul className="footer-contact">
                <li>
                  <a href="tel:+21236547898">
                    <i className="fas fa-phone"></i>+2 123 654 7898
                  </a>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>25/B Milford Road, New York
                </li>
                <li>
                  <a href="/cdn-cgi/l/email-protection#88e1e6eee7c8edf0e9e5f8e4eda6ebe7e5">
                    <i className="fas fa-envelope"></i>
                    <span className="__cf_email__" data-cfemail="d6bfb8b0b996b3aeb7bba6bab3f8b5b9bb">[email&#160;protected]</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Quick Links</h4>
              <ul className="footer-list">
                <li><a href="#"><i className="fas fa-caret-right"></i> About Us</a></li>
                <li><a href="#"><i className="fas fa-caret-right"></i> Update News</a></li>
                <li><a href="#"><i className="fas fa-caret-right"></i> Testimonials</a></li>
                <li><a href="#"><i className="fas fa-caret-right"></i> Terms Of Service</a></li>
                <li><a href="#"><i className="fas fa-caret-right"></i> Privacy policy</a></li>
                <li><a href="#"><i className="fas fa-caret-right"></i> Our Drivers</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Support Center</h4>
              <ul className="footer-list">
                <li><a href="#"><i className="fas fa-caret-right"></i> FAQ's</a></li>
                <li><a href="#"><i className="fas fa-caret-right"></i> Affiliates</a></li>
                <li><a href="#"><i className="fas fa-caret-right"></i> Booking Tips</a></li>
                <li><a href="#"><i className="fas fa-caret-right"></i> Book A Ride</a></li>
                <li><a href="#"><i className="fas fa-caret-right"></i> Contact Us</a></li>
                <li><a href="#"><i className="fas fa-caret-right"></i> Sitemap</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Newsletter</h4>
              <div className="footer-newsletter">
                <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="email" className="form-control" placeholder="Your Email" />
                    <button className="theme-btn" type="submit">
                      Subscribe Now <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <p className="copyright-text">
              &copy; Copyright <span id="date">{new Date().getFullYear()}</span> <a href="#"> Taxica </a> All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 align-self-center">
            <ul className="footer-social">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
