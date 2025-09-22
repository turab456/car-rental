"use client";
import ServiceCard from "../components/ui/ServiceCard"
import img from "../assets/service/services.jpg";
import onlineBooking from "../assets/icon/taxi-booking-1.svg"
import cityTransport from "../assets/icon/city-taxi.svg"
import airportTransport from "../assets/icon/airport.svg"
import businessTransport from "../assets/icon/business.svg"
import regularTransport from "../assets/icon/taxi-2.svg"
import tourTransport from "../assets/icon/taxi.svg"

const services = [
    {
        img: img,
        icon: onlineBooking,
        title: "Online Booking",
        text: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
        delay: ".25s",
    },
    {
        img: img,
        icon: cityTransport,
        title: "City Transport",
        text: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
        delay: ".50s",
    },
    {
        img: img,
        icon: airportTransport,
        title: "Airport Transport",
        text: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
        delay: ".75s",
    },
    {
        img: img,
        icon: businessTransport,
        title: "Business Transport",
        text: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
        delay: ".25s",
    },
    {
        img: img,
        icon: regularTransport,
        title: "Regular Transport",
        text: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
        delay: ".50s",
    },
    {
        img: img,
        icon: tourTransport,
        title: "Tour Transport",
        text: "There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.",
        delay: ".75s",
    },
];

export default function Services() {
    return (
        <div className="service-area bg py-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="site-heading text-center">
                            <span className="site-title-tagline">Services</span>
                            <h2 className="site-title">Our Best Services For You</h2>
                            <div className="heading-divider"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
}
