"use client";

import React from "react";
import img from "../assets/faq/faq.jpg"
import OwlCarousel from "react-owl-carousel";
import Image from "next/image";

const options = {
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1200: { items: 4 },
    },
};
const testimonials = [
    {
        name: "Sylvia Green",
        img: img,
        quote:
            "There are many variations of words suffered available to the have majority but the majority suffer to alteration injected hidden the middle text.",
        stars: 5,
    },
    {
        name: "Gordo Novak",
        img: img,
        quote:
            "There are many variations of words suffered available to the have majority but the majority suffer to alteration injected hidden the middle text.",
        stars: 5,
    },
    {
        name: "Reid Butt",
        img: img,
        quote:
            "There are many variations of words suffered available to the have majority but the majority suffer to alteration injected hidden the middle text.",
        stars: 5,
    },
    {
        name: "Parker Jime",
        img: img,
        quote:
            "There are many variations of words suffered available to the have majority but the majority suffer to alteration injected hidden the middle text.",
        stars: 5,
    },
    {
        name: "Heruli Nez",
        img: img,
        quote:
            "There are many variations of words suffered available to the have majority but the majority suffer to alteration injected hidden the middle text.",
        stars: 5,
    },
];

const Testimonial = () => (
    <div className="testimonial-area py-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="site-heading text-center">
                        <span className="site-title-tagline">
                            <i className="flaticon-drive"></i> Testimonials
                        </span>
                        <h2 className="site-title text-white">
                            What Our Client <span>Say's</span>
                        </h2>
                        <div className="heading-divider"></div>
                    </div>
                </div>
            </div>
            <OwlCarousel className="owl-theme" {...options}>
                {testimonials.map((t, idx) => (
                    <div className="testimonial-single" key={t.name}>
                        <div className="testimonial-content">
                            <div className="testimonial-author-img">
                                <Image src={t.img} alt="" />
                            </div>
                            <div className="testimonial-author-info">
                                <h4>{t.name}</h4>
                                <p>Customer</p>
                            </div>
                        </div>
                        <div className="testimonial-quote">
                            <span className="testimonial-quote-icon">
                                <i className="fas fa-quote-right"></i>
                            </span>
                            <p>{t.quote}</p>
                        </div>
                        <div className="testimonial-rate">
                            {Array.from({ length: t.stars }).map((_, i) => (
                                <i className="fas fa-star" key={i}></i>
                            ))}
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    </div>
);

export default Testimonial;
