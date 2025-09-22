import React from "react";
import img from "../assets/service/services.jpg"
import Image from "next/image";
import Link from "next/link";
const drivers = [
    {
        name: "Alma Mcelroy",
        img: img,
        animation: "fadeInUp",
        delay: ".25s",
    },
    {
        name: "Marie Hooks",
        img: img,
        animation: "fadeInDown",
        delay: ".25s",
    },
    {
        name: "Daniel Nesmith",
        img: img,
        animation: "fadeInUp",
        delay: ".25s",
    },
    {
        name: "Gertrude Barrow",
        img: img,
        animation: "fadeInDown",
        delay: ".25s",
    },
];

const Team = () => (
    <div className="team-area pb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="site-heading text-center">
                        <span className="site-title-tagline">Drivers</span>
                        <h2 className="site-title">Our Expert Drivers</h2>
                        <div className="heading-divider"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                {drivers.map((driver, idx) => (
                    <div className="col-md-6 col-lg-3" key={driver.name}>
                        <div className={`team-item wow ${driver.animation}`} data-wow-delay={driver.delay}>
                            <div className="team-img">
                                <Image src={driver.img} alt="thumb" />
                            </div>
                            <div className="team-content">
                                <div className="team-bio">
                                    <h5><Link href={"#"} className="link">{driver.name}</Link></h5>
                                    <span>Expert Driver</span>
                                </div>
                            </div>
                            <div className="team-social">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Team;
