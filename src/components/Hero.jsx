"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "../styles/style.css";
import "../styles/animate.min.css";
import slider1 from "../assets/slider/slider-1.jpg";
import slider2 from "../assets/slider/slider-2.jpg";
import slider3 from "../assets/slider/slider-3.jpg";
// ✅ Attach jQuery to window
if (typeof window !== "undefined") {
    window.$ = window.jQuery = $;
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const slides = [
    {
        id: 1,
        bg:slider1,
        subtitle: "Welcome To Taxica!",
        title: "Book Taxi For Your Ride",
        desc: "There are many variations of passages available...",
    },
    {
        id: 2,
        bg: slider2,
        subtitle: "Welcome To Taxica!",
        title: "Book Taxi For Your Ride",
        desc: "There are many variations of passages available...",
    },
    {
        id: 3,
        bg: slider3,
        subtitle: "Welcome To Taxica!",
        title: "Book Taxi For Your Ride",
        desc: "There are many variations of passages available...",
    },
];

export default function HeroSection() {
    const carouselRef = useRef(null);

    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
    };

    useEffect(() => {
        if (typeof window !== "undefined" && window.$) {
            require("owl.carousel");

            const $carousel = $(carouselRef.current);

            // On slide change → re-trigger animations
            $carousel.on("changed.owl.carousel", function () {
                const current = $carousel.find(".owl-item.active .hero-content");

                current.find(".hero-sub-title")
                    .removeClass("animated fadeInUp")
                    .addClass("animated fadeInUp");

                current.find(".hero-title")
                    .removeClass("animated fadeInRight")
                    .addClass("animated fadeInRight");

                current.find("p")
                    .removeClass("animated fadeInLeft")
                    .addClass("animated fadeInLeft");

                current.find(".hero-btn")
                    .removeClass("animated fadeInUp")
                    .addClass("animated fadeInUp");
            });
        }
    }, []);

    return (
        <div className="hero-section">
            <OwlCarousel ref={carouselRef} className="hero-slider owl-theme" {...options}>
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="hero-single"
                        style={{ backgroundImage: `url(${slide.bg.src})` }}
                    >
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-lg-9 mx-auto">
                                    <div className="hero-content text-center">
                                        <h6
                                            className="hero-sub-title animated fadeInUp"
                                            style={{ animationDelay: ".25s" }}
                                        >
                                            {slide.subtitle}
                                        </h6>
                                        <h1
                                            className="hero-title animated fadeInRight"
                                            style={{ animationDelay: ".50s" }}
                                        >
                                            {slide.title.replace("Taxi", "")}
                                            <span> Taxi </span>For Your Ride
                                        </h1>
                                        <p
                                            className="animated fadeInLeft"
                                            style={{ animationDelay: ".75s" }}
                                        >
                                            {slide.desc}
                                        </p>
                                        <div
                                            className="hero-btn justify-content-center animated fadeInUp"
                                            style={{ animationDelay: "1s" }}
                                        >
                                            <Link href="#" className="theme-btn">
                                                About More <i className="fas fa-arrow-right"></i>
                                            </Link>
                                            <Link href="#" className="theme-btn theme-btn2">
                                                Learn More <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
}
