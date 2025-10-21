"use client";
import slider1 from "../assets/slider/slider-1.jpg";
import taxibookingicon from "../assets/icon/taxi-booking.svg"
import Image from "next/image";

export default function CounterArea() {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="counter-wrapper mb-0" style={{ backgroundImage: `url(${slider1.src})` }}>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                 <Image src={taxibookingicon}/>
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="500" data-speed="3000">500</span>
                  <h6 className="title">+ Available Taxi </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                 <Image src={taxibookingicon}/>
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="900" data-speed="3000">900</span>
                  <h6 className="title">+ Happy Clients</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                 <Image src={taxibookingicon}/>
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="700" data-speed="3000">700</span>
                  <h6 className="title">+ Our Drivers</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <div className="icon">
                 <Image src={taxibookingicon}/>
                </div>
                <div>
                  <span className="counter" data-count="+" data-to="1800" data-speed="3000">1800</span>
                  <h6 className="title">+ Road Trip Done</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
