import React from "react";
import Image from "next/image";
import downloadImg from "../assets/download/01.png";

const Download = () => (
  <div className="download-area mb-120">
    <div className="container">
      <div className="download-wrapper">
        <div className="row">
          <div className="col-lg-6">
            <div className="download-content">
              <div className="site-heading mb-4">
                <span className="site-title-tagline justify-content-start">
                  <i className="flaticon-drive"></i> Get Our App
                </span>
                <h2 className="site-title mb-10">
                  Download <span>Our Taxica</span> App For Free
                </h2>
                <p>
                  There are many variations of passages available but the majority have suffered in some form going to use a passage by injected humour.
                </p>
              </div>
              <div className="download-btn">
                <a href="#">
                  <i className="fab fa-google-play"></i>
                  <div className="download-btn-content">
                    <span>Get It On</span>
                    <strong>Google Play</strong>
                  </div>
                </a>
                <a href="#">
                  <i className="fab fa-app-store"></i>
                  <div className="download-btn-content">
                    <span>Get It On</span>
                    <strong>App Store</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="download-img">
          <Image src={downloadImg} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Download;
