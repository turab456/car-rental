import React from "react";
import img from "../assets/service/services.jpg"
import Image from "next/image";
import "../styles/animate.min.css";
import "../styles/style.css";
import taxibookingicon from "../assets/icon/taxi-booking.svg"

const ratePlans = [
    {
        title: "Basic Pakage",
        animation: "fadeInUp",
        img: img,
        icon: taxibookingicon,
        delay: ".25s",
    },
    {
        title: "Standard Pakage",
        animation: "fadeInDown",
        img: img,

        icon: taxibookingicon,
        delay: ".25s",
    },
    {
        title: "Premium Pakage",
        animation: "fadeInUp",
        img: img,

        icon: taxibookingicon,
        delay: ".25s",
    },
];

const features = [
    { label: "Base Charge", value: "$2.30" },
    { label: "Distance Allowance", value: "5000m" },
    { label: "Up To 50 kms", value: "$1.38/km" },
    { label: "Booking Fee", value: "$0.99" },
    { label: "Extra Passangers", value: "$0.45" },
];

const TaxiRate = () => (
    <div className="taxi-rate py-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="site-heading text-center">
                        <span className="site-title-tagline">Taxi Rate</span>
                        <h2 className="site-title">Our Taxi Rate For You</h2>
                        <div className="heading-divider"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                {ratePlans.map((plan, idx) => (
                    <div className="col-md-6 col-lg-4" key={plan.title}>
                        <div className={`rate-item wow ${plan.animation}`} data-wow-delay={plan.delay}>
                            <div className="rate-header">
                                <div className="rate-img">
                                    <Image src={plan.img} alt="" />
                                </div>
                            </div>
                            <div className="rate-header-content">
                                <h4>{plan.title}</h4>
                                <p className="rate-duration">One Time Payment</p>
                            </div>
                            <div className="rate-content">
                                <div className="rate-icon">
                                    <Image src={plan.icon} alt="" />
                                </div>
                                <div className="rate-feature">
                                    <ul>
                                        {features.map((feature) => (
                                            <li key={feature.label}>
                                                 {feature.label}: <span>{feature.value}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#" className="theme-btn">Choose Plan<i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default TaxiRate;
