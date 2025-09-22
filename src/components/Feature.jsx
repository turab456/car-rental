import React from "react";
import taxibookingicon from "../assets/icon/taxi-booking.svg"
import Image from "next/image";
const Feature = () => (
  <div className="feature-area feature-bg py-120">
    <div className="container mt-150">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="site-heading text-center">
            <span className="site-title-tagline">Feature</span>
            <h2 className="site-title text-white">Our Awesome Feature</h2>
            <div className="heading-divider"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="feature-item wow fadeInUp" data-wow-delay=".25s">
            <div className="feature-icon">
              <Image src={taxibookingicon} alt="" />
            </div>
            <div className="feature-content">
              <h4>Safety Guarantee</h4>
              <p>There are many variations of majority have suffered alteration in some form injected humour randomised words.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="feature-item mt-lg-5 wow fadeInDown" data-wow-delay=".25s">
            <div className="feature-icon">
              <Image src={taxibookingicon} alt="" />
            </div>
            <div className="feature-content">
              <h4>Fast Pickup</h4>
              <p>There are many variations of majority have suffered alteration in some form injected humour randomised words.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="feature-item wow fadeInUp" data-wow-delay=".25s">
            <div className="feature-icon">
              <Image src={taxibookingicon} alt="" />
            </div>
            <div className="feature-content">
              <h4>Affordable Rate</h4>
              <p>There are many variations of majority have suffered alteration in some form injected humour randomised words.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="feature-item mt-lg-5 wow fadeInDown" data-wow-delay=".25s">
            <div className="feature-icon">
              <Image src={taxibookingicon} alt="" />
            </div>
            <div className="feature-content">
              <h4>24/7 Support</h4>
              <p>There are many variations of majority have suffered alteration in some form injected humour randomised words.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Feature;
