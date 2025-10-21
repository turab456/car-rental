"use client";
import Image from 'next/image';
import React from 'react'
import AboutusImage from "..//assets/about/about.png"
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "../styles/animate.min.css";
import taxibookingicon from "../assets/icon/taxi-booking.svg"

if (typeof window !== "undefined") {
    window.$ = window.jQuery = $;
}
const Aboutus = () => {
    return (
        <div>
            <div className="about-area py-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-left animated fadeInUp" >
                                <div className="about-img">
                                    <Image src={AboutusImage} alt="About Us" />
                                </div>
                                <div className="about-experience">
                                    <div className="about-experience-icon">
                                        <Image src={taxibookingicon} alt="" />
                                    </div>
                                    <b>
                                        30 Years Of <br /> Quality Service
                                    </b>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right wow fadeInRight" data-wow-delay=".25s">
                                <div className="site-heading mb-3">
                                    <span className="site-title-tagline justify-content-start">
                                        <i className="flaticon-drive"></i> About Us
                                    </span>
                                    <h2 className="site-title">
                                        We Provide Trusted <span>Cab Service</span> In The World
                                    </h2>
                                </div>
                                <p className="about-text">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                                </p>
                                <div className="about-list-wrapper">
                                    <ul className="about-list list-unstyled">
                                        <li>At vero eos et accusamus et iusto odio.</li>
                                        <li>Established fact that a reader will be distracted.</li>
                                        <li>Sed ut perspiciatis unde omnis iste natus sit.</li>
                                    </ul>
                                </div>
                                <a href="about.html" className="theme-btn mt-4">
                                    Discover More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aboutus