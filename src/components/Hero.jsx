"use client";
import "../styles/style.css";
import "../styles/animate.min.css";
import bg from "../assets/slider/slider-2.jpg";
import BookingArea from "./Booking";

export default function HeroSection() {
    return (
        <div className="hero-section">
            <div 
                className="hero-single"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${bg.src}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    minHeight: '600px'
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <BookingArea />
                        </div>
                        {/* <div className="col-12 col-lg-6">
                            <div style={{ minHeight: 400 }} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
